<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Repositories\StageRepository;
use App\Http\Repositories\TeamRepository;
use App\Http\Requests\AcceptTeamRequest;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;

class StageController extends Controller
{
    protected $stageRepository;
    protected $teamRepository;

    public function __construct()
    {
        $this->stageRepository = app(StageRepository::class);
        $this->teamRepository = app(TeamRepository::class);
    }

    public function actual()
    {
        $user = Auth::user();
        return $this->stageRepository->getActual($user->id);
    }

    public function actualDashboard()
    {
        $user = Auth::user();
        return $this->stageRepository->getActualDashboard($user->id);
    }

    public function registeredStage()
    {
        $user = Auth::user();

        return $this->stageRepository->getUserStages($user->id);
    }

    public function ended()
    {
        $user = Auth::user();

        return $this->stageRepository->getEnded($user->id);
    }

    public function accept(AcceptTeamRequest $request)
    {
        $user = Auth::user();

        $stage = $this->stageRepository->getById($request->stage_id);
        $team = $this->teamRepository->getById($request->team_id);

        if($team->user_id === $user['id']) {
            return response()->json([
                'result' => false,
                'msg' => 'Ошибка'
            ], 400);
        }

        if(count($team->users) !== 4) {
            return response()->json([
                'result' => false,
                'msg' => 'В команде не 4 человека',
            ], 400);
        }

        $users = $team->users;

        if($stage->status === 'active')
        {
            foreach ($users as $user) {
                $user->stages()->attach($request->stage_id, ['team_id' => $request->team_id]);
            }

            return ['result' => true];
        } else {
            return abort('400', 'Ошибка, на регату не зарегестрироваться');
        }
    }

    public function cancel($id)
    {
        $stage = $this->stageRepository->getById($id);
        $now = Carbon::now()->format('Y-m-d\TH:i');
        $user = Auth::user();

        if($user->stages->where('id', $id)->count() === 0) {
            return abort('400', 'Ошибка, обновите страницу');
        }

        if( $stage->status === 'active' &&
            $stage->register_end > $now
            && $stage->register_start <= $now)
        {
            $user->stages()->detach($id);

        } else {
            return abort('400', 'Ошибка, гонка уже началась');
        }
    }


    public function showForUsers($id)
    {
        $user = Auth::user();

        if($user->stages->where('id', $id)->count() === 1) {
            return $this->stageRepository->getByIdWithUsersAdmin($id);
        }

        return $this->stageRepository->getByIdWithUsers($id);
    }

}
