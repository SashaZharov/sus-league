import{G as E,r as b,_ as A,a as p,o as v,c as y,b as e,e as R,f as $,d as i,w as d,H as u,h as w,I as F,t as j,l as T,J as U,p as V,g as B}from"./app.68cc84c0.js";import{F as q,a as x,E as M,A as I,c as k,b as f,u as N,d as z,e as P}from"./AppLoader.207f0bf3.js";import{C as W}from"./vue-select.33ea496d.js";const K={name:"AppLoginForm",components:{Field:q,Form:x,ErrorMessage:M,AppLoader:I},emits:["close","switchReg","forget"],setup(){const a=E(),s=b(!1),r=k({email:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail").email("\u041D\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail"),password:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C").min(8,"\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0442 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432")});return{login:_=>{s.value=!0,a.dispatch("auth/login",_),s.value=!1},validationSchema:r,loading:s}}},O={class:"modal"},D={class:"modal-container"},G=e("h2",null,"\u0412\u0445\u043E\u0434",-1),H={class:"form-control"},J={class:"form-control"},Q=e("button",{class:"btn btn-default btn-home"},"\u0412\u043E\u0439\u0442\u0438",-1),X={class:"form-info jcc"},Y={class:"form-info jcc"};function Z(a,s,r,t,_,h){const c=p("AppLoader"),l=p("Field"),m=p("ErrorMessage"),o=p("Form");return v(),y("div",O,[e("div",{class:"modal-background",onClick:s[0]||(s[0]=n=>{a.$emit("close")})}),e("div",D,[t.loading?(v(),R(c,{key:0})):$("",!0),e("div",{class:"close",onClick:s[1]||(s[1]=n=>{a.$emit("close")})}),G,i(o,{onSubmit:t.login,class:"home-form","validation-schema":t.validationSchema},{default:d(()=>[e("div",H,[i(l,{name:"email"},{default:d(({field:n,errors:g})=>[e("input",u(n,{type:"email",class:["form-input",{invalid:!!g.length}],placeholder:"E-mail"}),null,16)]),_:1}),i(m,{class:"alert",name:"email"})]),e("div",J,[i(l,{name:"password"},{default:d(({field:n,errors:g})=>[e("input",u(n,{type:"password",class:["form-input",{invalid:!!g.length}],placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C"}),null,16)]),_:1}),i(m,{class:"alert",name:"password"})]),Q,e("div",X,[w("\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?\xA0"),e("span",{class:"underline link",onClick:s[2]||(s[2]=n=>{a.$emit("switchReg")})},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F")]),e("div",Y,[w("\u0417\u0430\u0431\u044B\u043B \u043F\u0430\u0440\u043E\u043B\u044C?\xA0"),e("span",{class:"underline link",onClick:s[3]||(s[3]=n=>{a.$emit("forget")})},"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C")])]),_:1},8,["onSubmit","validation-schema"])])])}const je=A(K,[["render",Z]]);function ee(){const a=b();return{universities:a,getUniversities:async()=>{try{const r=await F.get("/api/universities");a.value=r.data}catch(r){console.log(r.message)}}}}const se={name:"TheRegisterFormWizard",props:["validationSchema"],emits:["submitForm","switchReg"],components:{vSelect:W,Field:q,ErrorMessage:M},setup(a,{emit:s}){const r=E(),t=b(0),{universities:_,getUniversities:h}=ee(),c=b(!1);j(async()=>{h()});const l=T(()=>a.validationSchema[t.value]),{values:m,handleSubmit:o}=N({validationSchema:l,keepValuesOnUnmount:!0}),n=async S=>{try{return(await axios.post("/api/email",{email:S.email})).data}catch(L){console.log(L.message)}};return{submit:o(async S=>{if(t.value===0)if(await n(S)===0){t.value++;return}else{r.dispatch("notification/displayMessage",{value:"Email \u0443\u0436\u0435 \u0437\u0430\u043D\u044F\u0442!",type:"error"});return}s("submitForm",S)}),step:t,universities:_,dateInit:c}}},C=a=>(V("data-v-c14d58a9"),a=a(),B(),a),te={class:"form-control"},oe={class:"form-control"},ne={class:"form-control"},ae=C(()=>e("div",{class:"form-info mb15"},[w("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0444\u043E\u0440\u043C\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 "),e("a",{class:"underline link",target:"_blank",href:"/page/privacy"},"\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")],-1)),ie={class:"form-info jcc"},le={key:1,class:"reg-step"},re={class:"form-control"},ce={class:"form-control"},me={class:"form-control"},de={class:"form-control"},ue=["type"],pe={class:"form-control"},_e=C(()=>e("div",{class:"form-info mb15"},"\u0415\u0441\u043B\u0438 \u0432\u0430\u0448\u0435\u0433\u043E \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442\u0430 \u043D\u0435\u0442, \u0442\u043E \u043F\u0440\u043E\u043F\u0443\u0441\u0442\u0435 \u044D\u0442\u043E \u043F\u043E\u043B\u0435",-1)),ve=C(()=>e("div",{class:"form-info mb15"},[w("\u041E\u0442\u043F\u0440\u0430\u0432\u043B\u044F\u044F \u0444\u043E\u0440\u043C\u0443, \u0432\u044B \u0441\u043E\u0433\u043B\u0430\u0448\u0430\u0435\u0442\u0435\u0441\u044C \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \xA0 "),e("a",{class:"underline link",target:"_blank",href:"/page/privacy"},"\u043F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445")],-1)),fe=C(()=>e("button",{class:"btn btn-default btn-home"},"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F",-1)),he={class:"form-info jcc"};function ge(a,s,r,t,_,h){const c=p("Field"),l=p("ErrorMessage"),m=p("v-select");return v(),y("form",{onSubmit:s[5]||(s[5]=(...o)=>t.submit&&t.submit(...o)),class:"home-form",autocomplete:"off"},[t.step===0?(v(),y("div",{key:0,class:"reg-step",onKeyup:s[2]||(s[2]=U((...o)=>t.submit&&t.submit(...o),["enter"]))},[e("div",te,[i(c,{name:"email"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:"email",class:["form-input",{invalid:!!n.length}],placeholder:"E-mail"}),null,16)]),_:1}),i(l,{class:"alert",name:"email"})]),e("div",oe,[i(c,{name:"password"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:"password",class:["form-input",{invalid:!!n.length}],placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C"}),null,16)]),_:1}),i(l,{class:"alert",name:"password"})]),e("div",ne,[i(c,{name:"password_confirmation"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:"password",class:["form-input",{invalid:!!n.length}],placeholder:"\u041F\u0430\u0440\u043E\u043B\u044C \u0435\u0449\u0435 \u0440\u0430\u0437"}),null,16)]),_:1}),i(l,{class:"alert",name:"password_confirmation"})]),ae,e("div",{class:"btn btn-default btn-home",onClick:s[0]||(s[0]=(...o)=>t.submit&&t.submit(...o))},"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C (1 \u0438\u0437 2)"),e("div",ie,[w("\u0415\u0441\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442?\xA0"),e("span",{class:"underline link",onClick:s[1]||(s[1]=o=>a.$emit("switchReg"))},"\u0412\u043E\u0439\u0442\u0438")])],32)):$("",!0),t.step===1?(v(),y("div",le,[e("div",re,[i(c,{name:"surname"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:"text",class:["form-input",{invalid:!!n.length}],placeholder:"\u0424\u0430\u043C\u0438\u043B\u0438\u044F"}),null,16)]),_:1}),i(l,{class:"alert",name:"surname"})]),e("div",ce,[i(c,{name:"name"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:"text",class:["form-input",{invalid:!!n.length}],placeholder:"\u0418\u043C\u044F"}),null,16)]),_:1}),i(l,{class:"alert",name:"name"})]),e("div",me,[i(c,{name:"patronymic"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:"text",class:["form-input",{invalid:!!n.length}],placeholder:"\u041E\u0442\u0447\u0435\u0441\u0442\u0432\u043E"}),null,16)]),_:1}),i(l,{class:"alert",name:"patronymic"})]),e("div",de,[i(c,{name:"birth"},{default:d(({field:o,errors:n})=>[e("input",u(o,{type:t.dateInit?"date":"text",onFocus:s[3]||(s[3]=g=>t.dateInit=!0),class:["form-input",{invalid:!!n.length},"form-date"],placeholder:"\u0414\u0430\u0442\u0430 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F"}),null,16,ue)]),_:1}),i(l,{class:"alert",name:"birth"})]),e("div",pe,[i(c,{name:"university_id"},{default:d(({field:o})=>[i(m,u({options:t.universities,placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"},o),null,16,["options"]),i(l,{class:"alert",name:"university_id"})]),_:1})]),_e,ve,fe,e("div",he,[e("span",{class:"underline link",onClick:s[4]||(s[4]=o=>t.step=0)},"\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434 (2 \u0438\u0437 2)")])])):$("",!0)],32)}const ye=A(se,[["render",ge],["__scopeId","data-v-c14d58a9"]]),be={class:"modal"},$e={class:"modal-container"},we=e("h2",null,"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F",-1),Te={__name:"AppRegisterForm",emits:["close","switchReg"],setup(a,{emit:s}){const r=E(),t=b(!1),_=[k({email:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail").email("\u041D\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail"),password:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C").min(8,"\u041F\u0430\u0440\u043E\u043B\u044C \u043E\u0442 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"),password_confirmation:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C").oneOf([z("password")],"\u041F\u0430\u0440\u043E\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0432\u043F\u043E\u0434\u0430\u0442\u044C")}),k({surname:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0444\u0430\u043C\u0438\u043B\u0438\u044E").min(2,"\u041E\u0442 2-\u0445 \u0441\u0438\u043C\u0432\u043E\u0432\u043E\u043B\u043E\u0432").matches(/^[а-яёА-ЯЁ\s]*$/,"\u0421\u0442\u0440\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B"),name:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043C\u044F").min(2,"\u041E\u0442 2-\u0445 \u0441\u0438\u043C\u0432\u043E\u0432\u043E\u043B\u043E\u0432").matches(/^[а-яёА-ЯЁ\s]*$/,"\u0421\u0442\u0440\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B"),patronymic:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u0442\u0447\u0435\u0441\u0442\u0432\u043E").min(2,"\u041E\u0442 2-\u0445 \u0441\u0438\u043C\u0432\u043E\u0432\u043E\u043B\u043E\u0432").matches(/^[а-яёА-ЯЁ\s]*$/,"\u0421\u0442\u0440\u043E\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0440\u0443\u0441\u0441\u043A\u0438\u0435 \u0431\u0443\u043A\u0432\u044B"),birth:P().required("\u0417\u0430\u043F\u043E\u043B\u043D\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u0440\u043E\u0436\u0434\u0435\u043D\u0438\u044F").max(new Date("2007-12-31"),"\u0413\u043E\u0434 \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043F\u043E\u0437\u0436\u0435 2008"),university_id:k().nullable()})],h=async l=>{try{t.value=!0,await F.get("/sanctum/csrf-cookie"),l.university_id=l.university_id?l.university_id.code:null,await F.post("/register",l),r.dispatch("auth/login",{email:l.email,password:l.password})}catch(m){console.log(m.message),r.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430! \u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0432\u0432\u0435\u0441\u0442\u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0438\u043B\u0438 \u043E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443",type:"error"}),t.value=!1}},c=()=>{s("switchReg")};return(l,m)=>(v(),y("div",be,[e("div",{class:"modal-background",onClick:m[0]||(m[0]=o=>{l.$emit("close")})}),e("div",$e,[e("div",{class:"close",onClick:m[1]||(m[1]=o=>{l.$emit("close")})}),t.value?(v(),R(I,{key:0})):$("",!0),we,i(ye,{"validation-schema":_,onSubmitForm:h,onSwitchReg:c})])]))}},ke={name:"AppForgetPassword",components:{Field:q,Form:x,ErrorMessage:M,AppLoader:I},emits:["close","change"],setup(){E();const a=b(!1),s=k({email:f().required("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 E-mail").email("\u041D\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 E-mail")}),r=b(!1);return{validationSchema:s,loading:a,reset:async _=>{a.value=!0;try{await F.get("/sanctum/csrf-cookie"),await F.post("/forgot-password",{email:_.email}),r.value="\u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u043E\u0447\u0442\u0443!"}catch(h){console.log(h.message)}a.value=!1,r.value=!0},msg:r}}},Fe={class:"modal"},Se={class:"modal-container"},Ee={key:1,class:"loading-overlay"},Ce=e("h2",null,"\u0412\u043E\u0441\u0441\u0442\u0430\u043D\u043E\u0432\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C",-1),Ae={class:"form-control"},Re=e("button",{class:"btn btn-default btn-home"},"\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C",-1),qe={class:"form-info jcc"};function Me(a,s,r,t,_,h){const c=p("AppLoader"),l=p("Field"),m=p("ErrorMessage"),o=p("Form");return v(),y("div",Fe,[e("div",{class:"modal-background",onClick:s[0]||(s[0]=n=>{a.$emit("close")})}),e("div",Se,[e("div",{class:"close",onClick:s[1]||(s[1]=n=>{a.$emit("close")})}),t.loading?(v(),R(c,{key:0})):$("",!0),t.msg?(v(),y("div",Ee," \u041F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0441\u0432\u043E\u044E \u043F\u043E\u0447\u0442\u0443 ")):$("",!0),Ce,i(o,{onSubmit:t.reset,class:"home-form","validation-schema":t.validationSchema},{default:d(()=>[e("div",Ae,[i(l,{name:"email"},{default:d(({field:n,errors:g})=>[e("input",u(n,{type:"email",class:["form-input",{invalid:!!g.length}],placeholder:"E-mail"}),null,16)]),_:1}),i(m,{class:"alert",name:"email"})]),Re,e("div",qe,[w("\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043E\u0431\u0440\u0430\u0442\u043D\u043E\xA0"),e("span",{class:"underline link",onClick:s[2]||(s[2]=n=>{a.$emit("change")})},"\u0412\u043E\u0439\u0442\u0438")])]),_:1},8,["onSubmit","validation-schema"])])])}const Ue=A(ke,[["render",Me]]);export{je as A,Te as _,Ue as a};
