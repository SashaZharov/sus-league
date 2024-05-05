import{u as I,r as d,o as a,c as o,b as e,Q as v,f as y,a5 as L,V as G,g as w,_ as V,i as B,F as D,P as T,e as M,I as N,J as z,h as $,a as h,d as b,w as C,U as H,m as J}from"./app.9fdc73f6.js";import{A as R,F as W,E as j,c as A,u as O}from"./logo.43433f72.js";import{C as Q}from"./vue-select.774bcd2a.js";import{A as q}from"./AppHeader.32aaba5f.js";const E=i=>{switch(i){case"edit":return"\u041D\u0430 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u0438";case"approve":return"\u0414\u043E\u043A\u0443\u043C\u043D\u0442 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D";case"cancel":return"\u041D\u0435 \u043F\u0440\u043E\u0448\u0435\u043B \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u044E";default:return"\u0424\u0430\u0439\u043B \u043D\u0435 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D"}};const K={class:"file-upload"},X={key:0,class:"img-container"},Y={class:"current-img"},Z=["href"],ee={key:0,class:"ri-file-pdf-2-line"},se=["src"],te=e("i",{class:"ri-delete-bin-line"},null,-1),ae=[te],ie={key:1,class:"single-img"},oe={class:"form-control-title"},le={key:0,for:"file",class:"label-file"},ne=e("div",{class:"file-upload-label"},[e("div",{class:"file-upload-label__select"},[e("i",{class:"ri-folder-upload-line"}),w(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B ")])],-1),ce=[ne],re=e("i",{class:"ri-restart-fill"},null,-1),de=[re],ue={key:2,class:"error-msg"},_e={class:"file-status"},pe={__name:"UserSpecificFile",props:["document","file"],setup(i){const t=i,c=I(),s=d(t.file?"/storage"+t.file.path:null),m=d(E(t.file?t.file.status:null)),_=d(t.file?t.file:null),u=d(),f=d(!1),l=r=>{const p=r.target;if(p.files){const k=new FileReader;k.onload=g=>{n.value=g.target.result},k.readAsDataURL(p.files[0])}},n=d(null),F=async r=>{u.value=null;try{const p=["image/jpeg","image/png","image/webp","application/pdf"],g=r.target.files[0];if(!p.includes(g.type))throw alert("\u041D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 JPEG, PNG, WEBP, \u0438\u043B\u0438 PDF"),new ValidationError("\u041D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 JPEG, PNG, WEBP, \u0438\u043B\u0438 PDF");if(g.size>4194304)throw alert("\u0424\u0430\u0439\u043B \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 4\u041C\u0411"),new ValidationError("\u0424\u0430\u0439\u043B \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 4\u041C\u0411");l(r);const x=new FormData;x.append("file",g),x.append("type",t.document.type);const U=await axios.post("/api/user/file",x,{headers:{"Content-Type":"multipart/form-data"}});n.value=null,s.value="/storage"+U.data.file.path,m.value=E("edit"),_.value=U.data.file}catch(p){console.log(p.message),u.value="\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0444\u0430\u0439\u043B\u043E\u0432",n.value=null}},S=async()=>{try{(await axios.delete(`/api/user/file/${t.document.type}`)).data.result===!0?(m.value=E(null),s.value=null):c.dispatch("notification/displayMessage",{value:"\u0424\u0430\u0439\u043B \u043D\u0435 \u0443\u0434\u0430\u043B\u0435\u043D",type:"error"})}catch(r){console.log(r.message)}};return(r,p)=>(a(),o("div",K,[e("h4",{onClick:p[0]||(p[0]=k=>f.value=!f.value)},v(t.document.title),1),e("div",{class:G(["upload-container",{"upload-container__show":f.value}])},[s.value?(a(),o("div",X,[e("div",Y,[e("a",{href:s.value,target:"_blank"},[s.value.includes("pdf")?(a(),o("i",ee)):(a(),o("img",{key:1,src:s.value,alt:"image"},null,8,se))],8,Z),_.value&&(_.value.status==="edit"||_.value.status==="cancel")?(a(),o("div",{key:0,class:"remove-img",onClick:S},ae)):y("",!0)])])):(a(),o("div",ie,[e("div",oe,v(t.title),1),n.value?(a(),o("div",{key:1,class:"imagePreviewWrapper",style:L({"background-image":`url(${n.value})`})},de,4)):(a(),o("label",le,ce)),e("input",{type:"file",onChange:F,id:"file"},null,32),u.value?(a(),o("div",ue,v(u.value),1)):y("",!0)]))],2),e("div",_e," \u0421\u0442\u0430\u0442\u0443\u0441: "+v(m.value),1)]))}};const ve=i=>(N("data-v-68949ece"),i=i(),z(),i),me={class:"col-12"},fe={class:"dashboard-item"},he=ve(()=>e("h3",null,"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",-1)),ye={key:0,class:"file-container"},ge={__name:"UserFiles",setup(i){const t=d([{type:"studak",title:"\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439/\u0414\u0438\u043F\u043B\u043E\u043C"},{type:"passport",title:"\u041F\u0430\u0441\u043F\u043E\u0440\u0442"},{type:"insurance",title:"\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430"},{type:"license",title:"\u041F\u0440\u0430\u0432\u0430 \u043D\u0430 \u044F\u0445\u0442\u0443"},{type:"antidoping",title:"\u0421\u0435\u0440\u0442\u0435\u0444\u0438\u043A\u0430\u0442 \u0430\u043D\u0442\u0438\u0434\u043E\u043F\u0438\u043D\u0433\u0430"},{type:"1444",title:"\u0421\u043F\u0440\u0430\u0432\u0430\u043A\u0430 1444\u043D"},{type:"oms",title:"\u041E\u041C\u0421"},{type:"category",title:"\u0420\u0430\u0437\u0440\u044F\u0434"},{type:"vfps",title:"\u0427\u0435\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0412\u0424\u041F\u0421"},{type:"permit",title:"\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445"}]),c=d(null);return B(async()=>{const s=await axios.get("/api/user/docs");c.value=s.data.files}),(s,m)=>(a(),o("div",me,[e("div",fe,[he,c.value?(a(),o("div",ye,[(a(!0),o(D,null,T(t.value,_=>(a(),M(pe,{document:_,file:c.value.find(u=>u.type===_.type)},null,8,["document","file"]))),256))])):y("",!0)])]))}},be=V(ge,[["__scopeId","data-v-68949ece"]]);const we={name:"Settings",components:{UserFiles:be,AppHeader:q,AppLoader:R,vSelect:Q,Field:W,ErrorMessage:j},setup(){const i=I(),t=d(i.getters["auth/user"]),c=d(!1),s=d(),m=A({university_id:A().nullable()}),{values:_,handleSubmit:u}=O({validationSchema:m});B(async()=>{c.value=!0;try{const l=await $.get("/api/user-settings");t.value.email=l.data.email,t.value.university=l.data.university;const n=await $.get("/api/universities");s.value=n.data}catch(l){console.log(l.message)}c.value=!1});const f=u(async l=>{c.value=!0,l.university_id=l.university_id?l.university_id.code:null;try{await $.patch("/api/user/update",l),t.value.university=s.value.find(n=>n.code===l.university_id).label,i.commit("auth/setUser",t.value)}catch(n){console.log(n.message)}c.value=!1});return{loading:c,user:t,universities:s,submit:f}}},P=i=>(N("data-v-ae6639de"),i=i(),z(),i),ke={class:"container-fluid g-0"},Fe={class:"row"},Se={class:"col-12"},xe={class:"dashboard-item"},$e=P(()=>e("h3",null,"\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1)),Ee={class:"user-account__data"},Pe={class:"b500"},Ue={class:"b500"},Ce={key:0},Ae={class:"b500"},Ie={class:"form-control"},Ve=P(()=>e("label",{for:"university_id"},"\u0412\u0430\u0448 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",-1)),Be=P(()=>e("button",{class:"btn btn-default btn-full-width"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",-1));function De(i,t,c,s,m,_){const u=h("AppHeader"),f=h("AppLoader"),l=h("v-select"),n=h("ErrorMessage"),F=h("Field"),S=h("UserFiles");return a(),o(D,null,[b(u,null,{default:C(()=>[w("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430")]),_:1}),e("main",null,[e("div",ke,[e("div",Fe,[e("div",Se,[e("div",xe,[s.loading?(a(),M(f,{key:0})):y("",!0),$e,e("div",Ee,[e("p",null,[w("\u0424\u0418\u041E: "),e("span",Pe,v(s.user.surname)+" "+v(s.user.name)+" "+v(s.user.patronymic),1)]),e("p",null,[w("E-mail: "),e("span",Ue,v(s.user.email),1)]),s.user.university?(a(),o("p",Ce,[w("\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442: "),e("span",Ae,v(s.user.university),1)])):y("",!0)]),s.user.university?y("",!0):(a(),o("form",{key:1,onSubmit:t[0]||(t[0]=H((...r)=>s.submit&&s.submit(...r),["prevent"]))},[e("div",Ie,[Ve,b(F,{name:"university_id"},{default:C(({field:r})=>[b(l,J({options:s.universities,placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"},r),null,16,["options"]),b(n,{class:"alert",name:"university_id"})]),_:1})]),Be],32))]),b(S)])])])])],64)}const Ge=V(we,[["render",De],["__scopeId","data-v-ae6639de"]]);export{Ge as default};
