import{_ as A,u as G,r as n,i as C,h as E,o as t,c as o,F as y,P as V,S as I,Y as k,b as e,j as K,Q as w,f as x,q as R,d as M,I as O,J as L,U as Q,X as W,w as Z,e as U,g as ee}from"./app.1a083e9f.js";import{A as te}from"./AppResultTable.f41b0480.js";import{A as ae}from"./logo.9ef7f1af.js";import{A as P}from"./AppEditor.4a496bae.js";import{A as se}from"./AppHeader.dd4fc0a2.js";const le=["onUpdate:modelValue"],oe=["onUpdate:modelValue"],ne={__name:"AppRaceColumn",props:["raceId"],emits:["update"],setup(v,{emit:a}){const c=v,u=G(),l=n([]),r=n([]),g=n(0);C(async()=>{const _=await E.get(`/api/admin/race/${c.raceId}`);l.value=_.data.places,r.value=_.data.notes,g.value=Object.keys(l.value).length+1});const i=async()=>{try{await E.post(`/api/admin/race/${c.raceId}/results`,{result:l.value,notes:r.value}),u.dispatch("notification/displayMessage",{value:"\u0414\u0430\u043D\u043D\u044B\u0435 \u0433\u043E\u043D\u043A\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B",type:"primary"}),a("update")}catch{u.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u0434\u0430\u043D\u043D\u044B\u0445 \u0433\u043E\u043D\u043A\u0438",type:"error"})}};return(_,d)=>(t(),o(y,null,[(t(!0),o(y,null,V(l.value,($,s)=>(t(),o("div",{class:"race-table__item race-table__result",key:s},[I(e("input",{type:"number","onUpdate:modelValue":b=>l.value[s]=b,placeholder:"\u041F\u0440\u0438\u0445\u043E\u0434"},null,8,le),[[k,l.value[s]]]),I(e("input",{type:"text","onUpdate:modelValue":b=>r.value[s]=b,placeholder:"\u041C\u0435\u0442\u043A\u0430",class:"race-table__tag"},null,8,oe),[[k,r.value[s]]])]))),128)),e("div",{class:"race-table__item race-table__result"},[e("button",{onClick:i},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C")])],64))}},ie=A(ne,[["__scopeId","data-v-22f5ddba"]]);const ce=["onUpdate:modelValue"],ue={__name:"StageResultPoints",props:["id","groupId"],setup(v){const a=v,c=n([]),u=n({});C(async()=>{const r=await axios.get(`/api/admin/stage/${a.id}/results`);c.value=r.data.filter(g=>g.group_id===a.groupId),c.value.forEach(g=>{u.value[g.team_id]=g.result})});const l=async()=>{const r=await axios.post("/api/admin/stage/team/result",{stage_id:a.id,results:u.value});console.log(r.data)};return(r,g)=>(t(),o(y,null,[(t(!0),o(y,null,V(c.value,(i,_)=>(t(),o("div",{class:"race-table__item race-table__total race-table__final",key:_},[I(e("input",{type:"number","onUpdate:modelValue":d=>u.value[i.team_id]=d,placeholder:"\u0411\u0430\u043B\u043B\u043E\u0432 \u0432 \u0437\u0430\u0447\u0435\u0442"},null,8,ce),[[k,u.value[i.team_id]]])]))),128)),e("div",{class:"race-table__item"},[e("button",{onClick:l},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u0411\u0414")])],64))}},de=A(ue,[["__scopeId","data-v-0936dbbe"]]);const re=["onUpdate:modelValue"],_e={__name:"StageUsersResults",props:["id","groupId"],setup(v){const a=v,c=n([]),u=n({});C(async()=>{const r=await axios.get(`/api/admin/stage/${a.id}/results`);c.value=r.data.filter(g=>g.group_id===a.groupId)});const l=async()=>{const r=await axios.post("/api/admin/stage/user/result",{stage_id:a.id,results:u.value});console.log(r.data)};return(r,g)=>(t(),o(y,null,[(t(!0),o(y,null,V(c.value,(i,_)=>(t(),o("div",{class:"race-table__item race-table__total race-table__final",key:_},[I(e("input",{type:"number","onUpdate:modelValue":d=>u.value[i.team_id]=d,placeholder:"\u041E\u0447\u043A\u043E\u0432 \u0432 \u043B\u0438\u0447\u043D\u044B\u0439"},null,8,re),[[k,u.value[i.team_id]]])]))),128)),e("div",{class:"race-table__item"},[e("button",{onClick:l},"\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u0432 \u0411\u0414")])],64))}},pe=A(_e,[["__scopeId","data-v-c5896767"]]);const j=v=>(O("data-v-e80305aa"),v=v(),L(),v),ve={class:"race-table"},me={key:0},ge={class:"race-table__header"},fe={class:"race-table__row"},he=j(()=>e("div",{class:"race-table__item race-table__name"},"\u041A\u043E\u043C\u0430\u043D\u0434\u0430",-1)),be=j(()=>e("div",{class:"race-table__item race-table__total"},"\u0418\u0442\u043E\u0433",-1)),ye=j(()=>e("div",{class:"race-table__item race-table__total race-table__final"},"\u041A\u043E\u043C\u0430\u043D\u0434\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",-1)),$e=j(()=>e("div",{class:"race-table__item race-table__total race-table__final"},"\u041B\u0438\u0447\u043D\u044B\u0439 \u0437\u0430\u0447\u0435\u0442",-1)),xe={class:"race-table__body"},Ie={class:"race-table__column"},ke={key:0,class:"race-table__item race-table__result"},we=["onClick"],Ve={class:"race-table__column"},Se={class:"race-table__column"},Ue={class:"race-table__column"},Ce={__name:"AppRaceTable",props:["stageId","status","groupId"],setup(v){const a=v,c=n({}),u=n({}),l=n(),r=n();n([]);const g=n({default:"\u0413\u043E\u043D\u043A\u0430",group:"\u0413\u0440\u0443\u043F\u043F\u0430",fleet:"\u0424\u043B\u043E\u0442"}),i=K(()=>{var s;return(s=Object.keys(c.value).length)!=null?s:0}),_=async()=>{try{const s=await axios.get(`/api/admin/stage/${a.stageId}/${a.groupId}/${a.status}/total`);r.value=s.data}catch(s){console.log(s.message)}};C(async()=>{try{const s=await axios.get(`/api/admin/stage/${a.stageId}/races/${a.status}/group/${a.groupId}`);c.value=s.data,l.value=c.value[0].race_id;const b=await axios.get(`/api/admin/race/${l.value}/teams`);u.value=b.data,await _()}catch(s){console.log(s.message)}});const d=async()=>{try{const b=(await axios.post("/api/admin/race/create",{stage_id:a.stageId,group_id:a.groupId,status:a.status,lastRaceId:l.value})).data;c.value.push({race_id:b.id,group_id:b.group_id,status:b.status}),await _()}catch(s){console.log(s.message)}},$=async s=>{try{await axios.post(`/api/admin/race/${s}/remove`),c.value.splice(c.value.findIndex(b=>b.race_id===s),1),await _()}catch(b){console.log(b.message)}};return(s,b)=>(t(),o("div",ve,[s.$props.status?(t(),o("h2",me,w(g.value[s.$props.status])+" #"+w(s.$props.groupId),1)):x("",!0),e("button",{class:"btn btn-default btn-settings mb15",onClick:d},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0433\u043E\u043D\u043A\u0443"),e("div",ge,[e("div",fe,[he,(t(!0),o(y,null,V(R(i),p=>(t(),o("div",{class:"race-table__item race-table__result",key:p},"#"+w(p),1))),128)),be,ye,$e])]),e("div",xe,[e("div",Ie,[(t(!0),o(y,null,V(u.value,p=>(t(),o("div",{class:"race-table__item race-table__name",key:p.team_id},w(p.team_name),1))),128))]),(t(!0),o(y,null,V(c.value,(p,S)=>(t(),o("div",{class:"race-table__column",key:p.race_id},[M(ie,{raceId:p.race_id,onUpdate:_},null,8,["raceId"]),c.value.length>1&&S+1!==1?(t(),o("div",ke,[e("button",{onClick:T=>$(p.race_id)},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",8,we)])):x("",!0)]))),128)),e("div",Ve,[(t(!0),o(y,null,V(r.value,(p,S)=>(t(),o("div",{class:"race-table__item race-table__total",key:S},w(p),1))),128))]),e("div",Se,[M(de,{id:a.stageId,groupId:a.groupId},null,8,["id","groupId"])]),e("div",Ue,[M(pe,{id:a.stageId,groupId:a.groupId},null,8,["id","groupId"])])])]))}},Re=A(Ce,[["__scopeId","data-v-e80305aa"]]),Ae={__name:"TheStageStatus",props:["status","id"],emits:["update"],setup(v,{emit:a}){const c=v,u=n(c.status),l=c.id,r=G(),g=async()=>{try{const i=await E.post(`/api/admin/stage/${l}/finish-group`);u.value=i.data.status,a("update",u.value)}catch(i){console.log(i.message),r.dispatch("notification/displayMessage",{value:i.response.data.message,type:"error"})}};return(i,_)=>u.value==="group"?(t(),o("button",{key:0,class:"btn btn-default btn-settings mt15",onClick:g},"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439 \u044D\u0442\u0430\u043F")):x("",!0)}};const D=v=>(O("data-v-86f09e6f"),v=v(),L(),v),Te={class:"dashboard-item"},Me=D(()=>e("h3",null,"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043D\u043D\u044B\u0435 \u0444\u0430\u0439\u043B\u044B",-1)),De={class:"docs-container"},Fe=["onClick"],Ge=["href"],je={key:0,class:"ri-file-pdf-2-line"},Be=["src"],Ne={class:"docs-title"},Pe={class:"dashboard-item"},Ee=D(()=>e("h3",null,"\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C \u0444\u0430\u0439\u043B\u044B",-1)),Oe=["onSubmit"],Le={class:"form-control"},qe=D(()=>e("label",{for:"file"},"\u0424\u0430\u0439\u043B",-1)),He={class:"form-control"},Je=D(()=>e("label",{for:"title"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",-1)),Qe=D(()=>e("button",{class:"btn btn-default btn-settings"},"\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",-1)),Xe={__name:"StageFiles",props:["id"],setup(v){const a=v,c=n([]),u=n(),l=n();C(async()=>{const i=await axios.get(`/api/admin/stage/${a.id}/files`);i.data.result&&(c.value=[...i.data.files])});const r=async()=>{const i=new FormData;if(i.append("file",u.value.files[0]),i.append("title",l.value),i.append("id",a.id),!u.value.files[0]||!l.value){alert("\u041E\u0448\u0438\u0431\u043A\u0430, \u043E\u0431\u0430 \u043F\u043E\u043B\u044F \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B!");return}const _=await axios.post("/api/admin/stage/file",i,{headers:{"Content-Type":"multipart/form-data"}});_.data.result===!0&&(c.value.push(_.data.file),u.value=null,l.value=null)},g=async i=>{if((await axios.delete(`/api/admin/stage/file/${i}/delete`)).data.result){const d=c.value.findIndex($=>$.id===i);c.value.splice(d,1)}};return(i,_)=>(t(),o(y,null,[e("div",Te,[Me,e("div",De,[(t(!0),o(y,null,V(c.value,d=>(t(),o("div",{class:"docs-item",key:d.id},[e("div",{class:"doc-delete",onClick:$=>g(d.id)},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",8,Fe),e("a",{href:"/storage/"+d.path,class:"docs-img",target:"_blank"},[d.path.includes("pdf")?(t(),o("i",je)):(t(),o("img",{key:1,src:"/storage/"+d.path,alt:"doc-img"},null,8,Be))],8,Ge),e("div",Ne,w(d.title),1)]))),128))])]),e("div",Pe,[Ee,e("form",{onSubmit:Q(r,["prevent"])},[e("div",Le,[qe,e("input",{type:"file",id:"file",name:"file",ref_key:"fileInput",ref:u},null,512)]),e("div",He,[Je,I(e("input",{class:"form-input",type:"text",name:"title","onUpdate:modelValue":_[0]||(_[0]=d=>l.value=d)},null,512),[[k,l.value]])]),Qe],40,Oe)])],64))}},Ye=A(Xe,[["__scopeId","data-v-86f09e6f"]]);const ze=v=>(O("data-v-17c71cb4"),v=v(),L(),v),Ke={key:0,class:"result-table"},We=ze(()=>e("thead",null,[e("tr",null,[e("th",null,"#"),e("th",null,"\u041A\u043E\u043C\u0430\u043D\u0434\u044B"),e("th",null,"\u0413\u0440\u0443\u043F\u043F\u0430"),e("th",null,"\u0423\u0434\u0430\u043B\u0435\u043D\u0438\u0435")])],-1)),Ze={class:"result-table__name"},et={class:"result-table__first"},tt={class:"result-table__second"},at=["onUpdate:modelValue"],st=["onClick"],lt={__name:"TeamsSplit",props:["id"],emits:["upd"],setup(v,{emit:a}){const c=v,u=n([]),l=n({}),r=G(),g=async()=>{if(Object.keys(l.value).length!==u.value.length){r.dispatch("notification/displayMessage",{type:"error",value:"\u0420\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u0442\u0435 \u0432\u0441\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u0438\u043B\u0438 \u0443\u0434\u0430\u043B\u0438\u0442\u0435 \u043B\u0438\u0448\u043D\u0438\u0435"});return}(await axios.post(`/api/admin/stage/${c.id}/group`,{groups:l.value})).data.result?a("upd"):r.dispatch("notification/displayMessage",{type:"error",value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u043F\u043E\u0437\u0436\u0435"})},i=async d=>{const $=await axios.post(`/api/admin/remove-team/${d}/stage/${c.id}`);$.data.result?(r.dispatch("notification/displayMessage",{type:"primary",value:"\u041A\u043E\u043C\u0430\u043D\u0434\u0430 \u0443\u0434\u0430\u043B\u0435\u043D\u0430"}),await _()):r.dispatch("notification/displayMessage",{type:"error",value:$.data.msg})},_=async()=>{const d=await axios.get(`/api/team/users/${c.id}`);d.data.result&&(u.value=d.data.teams)};return C(async()=>{await _()}),(d,$)=>(t(),o(y,null,[u.value.length>0?(t(),o("table",Ke,[We,e("tbody",null,[(t(!0),o(y,null,V(u.value,(s,b)=>(t(),o("tr",{key:b},[e("td",null,w(b+1),1),e("td",null,[e("div",Ze,[e("div",et,w(s.team_name),1),e("div",tt,[(t(!0),o(y,null,V(s.users,p=>(t(),o("span",{key:p.id},w(p.surname)+" "+w(p.name)+" "+w(p.patronymic),1))),128))])])]),e("td",null,[I(e("input",{class:"split-number-input",type:"number","onUpdate:modelValue":p=>l.value[s.team_id]=p},null,8,at),[[k,l.value[s.team_id]]])]),e("td",null,[e("button",{class:"btn btn-default btn-settings",onClick:p=>i(s.team_id)},"\u0423\u0434\u0430\u043B\u0438\u0442\u044C",8,st)])]))),128))])])):x("",!0),e("button",{class:"btn btn-default btn-settings mt15",onClick:g},"\u0421\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u044B")],64))}},ot=A(lt,[["__scopeId","data-v-17c71cb4"]]),nt={class:"container-fluid g-0"},it={class:"row"},ct={class:"col-12"},ut={class:"dashboard-item"},dt=["onSubmit"],rt={class:"form-control"},_t=e("label",{for:"register_start"},"\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",-1),pt={class:"form-control"},vt=e("label",{for:"register_end"},"\u041A\u043E\u043D\u0435\u0446 \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438",-1),mt={class:"form-control"},gt=e("label",{for:"title"},"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u042D\u0442\u0430\u043F\u0430",-1),ft={class:"form-control"},ht=e("label",{for:"race_amount_drop"},"\u041A\u043E\u043B-\u0432\u043E \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 (\u0434\u043E 18 \u0447\u0435\u043B\u043E\u0432)",-1),bt={class:"form-control"},yt=e("label",{for:"race_amount_drop"},"\u041A\u043E\u043B-\u0432\u043E \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 \u0432 \u0433\u0440\u0443\u043F\u043F\u0430\u0445 (\u043E\u0442 19 \u0447\u0435\u043B\u043E\u0432)",-1),$t={class:"form-control"},xt=e("label",{for:"race_amount_drop"},"\u041A\u043E\u043B-\u0432\u043E \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 \u0432\u043E \u0444\u043B\u043E\u0442\u0430\u0445 (\u043E\u0442 19 \u0447\u0435\u043B\u043E\u0432)",-1),It={class:"form-control"},kt=e("label",{for:"excerpt"},"\u041A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",-1),wt={class:"form-control"},Vt=e("label",{for:"description"},"\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435",-1),St={class:"form-control"},Ut=e("label",{for:"participant_text"},"\u0414\u043B\u044F \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u043E\u0432",-1),Ct=e("button",{class:"btn btn-default btn-settings"},"\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C",-1),Rt={class:"col-12"},At={class:"col-12"},Tt={class:"dashboard-item"},Bt={__name:"edit",setup(v){const a=n(!1),c=W(),u=G(),l=c.params.id,r=n(),g=n(""),i=n(""),_=n(""),d=n(""),$=n(""),s=n(""),b=n(),p=n(),S=n(),T=n(),F=n(),B=n(null),q=n(),N=n(1),H=async f=>{try{const m=await axios.get(`/api/admin/stage/${l}/meta`);q.value=m.data,p.value=f,N.value&&N.value++}catch(m){console.log(m.message)}};C(async()=>{a.value=!0;try{const f=await axios.get(`/api/admin/stage/${l}/edit`);_.value=r.value=f.data.title,g.value=f.data.register_start,i.value=f.data.register_end,d.value=f.data.excerpt?f.data.excerpt:" ",$.value=f.data.description?f.data.description:" ",s.value=f.data.participant_text?f.data.participant_text:" ",b.value=f.data.users,S.value=f.data.race_amount_drop,T.value=f.data.race_amount_group_drop,F.value=f.data.race_amount_fleet_drop,await H(f.data.status),a.value=!1}catch(f){console.log(f.message),a.value=!1}});const X=async()=>{a.value=!0;try{if(await axios.patch(`/api/admin/stage/${l}/update`,{title:_.value,description:$.value,excerpt:d.value,participant_text:s.value,register_start:g.value,register_end:i.value,race_amount_drop:S.value,race_amount_group_drop:T.value,race_amount_fleet_drop:F.value}),B.value)for(let f of B.value)f.getTotal();u.dispatch("notification/displayMessage",{value:"\u042D\u0442\u0430\u043F \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D",type:"primary"}),a.value=!1}catch(f){console.log(f.message),u.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0438 \u044D\u0442\u0430\u043F\u0430",type:"error"}),a.value=!1}};return(f,m)=>(t(),o(y,null,[M(se,null,{default:Z(()=>[ee(w(r.value),1)]),_:1}),e("main",null,[e("div",nt,[e("div",it,[e("div",ct,[e("div",ut,[a.value?(t(),U(ae,{key:0})):x("",!0),e("form",{onSubmit:Q(X,["prevent"])},[e("div",rt,[_t,I(e("input",{class:"form-input",type:"datetime-local",id:"register_start","onUpdate:modelValue":m[0]||(m[0]=h=>g.value=h)},null,512),[[k,g.value]])]),e("div",pt,[vt,I(e("input",{class:"form-input",type:"datetime-local",id:"register_end","onUpdate:modelValue":m[1]||(m[1]=h=>i.value=h)},null,512),[[k,i.value]])]),e("div",mt,[gt,I(e("input",{class:"form-input",type:"text",id:"title","onUpdate:modelValue":m[2]||(m[2]=h=>_.value=h),placeholder:"\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u044D\u0442\u0430\u043F\u0430"},null,512),[[k,_.value]])]),e("div",ft,[ht,I(e("input",{class:"form-input",type:"text",id:"race_amount_drop","onUpdate:modelValue":m[3]||(m[3]=h=>S.value=h),placeholder:"\u041A\u043E\u043B-\u0432\u043E \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 (\u0434\u043E 18 \u0447\u0435\u043B\u043E\u0432)"},null,512),[[k,S.value]])]),e("div",bt,[yt,I(e("input",{class:"form-input",type:"text",id:"race_amount_group_drop","onUpdate:modelValue":m[4]||(m[4]=h=>T.value=h),placeholder:"\u041A\u043E\u043B-\u0432\u043E \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 \u0432 \u0433\u0440\u0443\u043F\u043F\u0430\u0445 (\u043E\u0442 19 \u0447\u0435\u043B\u043E\u0432)"},null,512),[[k,T.value]])]),e("div",$t,[xt,I(e("input",{class:"form-input",type:"text",id:"race_amount_fleet_drop","onUpdate:modelValue":m[5]||(m[5]=h=>F.value=h),placeholder:"\u041A\u043E\u043B-\u0432\u043E \u0432\u044B\u0431\u0440\u043E\u0441\u043E\u0432 \u0432\u043E \u0444\u043B\u043E\u0442\u0430\u0445 (\u043E\u0442 19 \u0447\u0435\u043B\u043E\u0432)"},null,512),[[k,F.value]])]),e("div",It,[kt,d.value?(t(),U(P,{key:0,modelValue:d.value,"onUpdate:modelValue":m[6]||(m[6]=h=>d.value=h),id:"excerpt"},null,8,["modelValue"])):x("",!0)]),e("div",wt,[Vt,$.value?(t(),U(P,{key:0,modelValue:$.value,"onUpdate:modelValue":m[7]||(m[7]=h=>$.value=h),id:"description"},null,8,["modelValue"])):x("",!0)]),e("div",St,[Ut,s.value?(t(),U(P,{key:0,modelValue:s.value,"onUpdate:modelValue":m[8]||(m[8]=h=>s.value=h),id:"participant_text"},null,8,["modelValue"])):x("",!0)]),Ct],40,dt)])]),e("div",Rt,[M(Ye,{id:R(l)},null,8,["id"])]),e("div",At,[e("div",Tt,[p.value==="active"?(t(),U(ot,{key:0,id:R(l),onUpd:m[9]||(m[9]=h=>p.value="group")},null,8,["id"])):x("",!0),p.value!=="finished"&&p.value!=="active"?(t(!0),o(y,{key:1},V(q.value,(h,Y,z)=>(t(),o("div",{class:"stage-table",key:z},[(t(!0),o(y,null,V(h,J=>(t(),U(Re,{stageId:R(l),groupId:J,status:Y,key:J,ref_for:!0,ref_key:"child",ref:B},null,8,["stageId","groupId","status"]))),128))]))),128)):x("",!0),p.value?(t(),U(Ae,{key:2,status:p.value,id:R(l),onUpdate:H},null,8,["status","id"])):x("",!0),p.value!=="active"?(t(),U(te,{id:R(l),key:N.value},null,8,["id"])):x("",!0)])])])])])],64))}};export{Bt as default};
