import{G as V,r as c,o as a,c as o,b as e,Q as v,f as m,a5 as L,V as M,h as w,_ as B,t as D,F as N,P as T,e as z,p as A,g as G,I as F,d as b,w as U,U as R,u as $,H as W}from"./app.b53530fc.js";import{c as I,u as H,F as J,E as j,A as O}from"./AppLoader.c5ce63b0.js";import{C as Q}from"./vue-select.4e2043e5.js";import{A as q}from"./AppHeader.dacad0d9.js";import{s as P}from"./statusText.92586763.js";const K={class:"file-upload"},X={key:0,class:"img-container"},Y={class:"current-img"},Z=["href"],ee={key:0,class:"ri-file-pdf-2-line"},te=["src"],se=e("i",{class:"ri-delete-bin-line"},null,-1),ae=[se],ie={key:1,class:"single-img"},le=e("div",{class:"form-control-title"},null,-1),oe=["for"],ne=e("div",{class:"file-upload-label"},[e("div",{class:"file-upload-label__select"},[e("i",{class:"ri-folder-upload-line"}),w(" \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B ")])],-1),ce=[ne],re=e("i",{class:"ri-restart-fill"},null,-1),ue=[re],de=["id"],_e={key:2,class:"error-msg"},pe={class:"file-status"},ve={__name:"UserSpecificFile",props:["document","file"],setup(n){const i=n,t=V(),l=c(i.file?"/storage"+i.file.path:null),_=c(P(i.file?i.file.status:null)),r=c(i.file?i.file:null),f=c(),y=c(!1),k=p=>{const d=p.target;if(d.files){const x=new FileReader;x.onload=g=>{s.value=g.target.result},x.readAsDataURL(d.files[0])}},s=c(null),u=async p=>{f.value=null;try{const d=["image/jpeg","image/png","image/webp","application/pdf"],g=p.target.files[0];if(!d.includes(g.type))throw alert("\u041D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 JPEG, PNG, WEBP, \u0438\u043B\u0438 PDF"),new ValidationError("\u041D\u0435 \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0444\u0430\u0439\u043B\u0430. \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 JPEG, PNG, WEBP, \u0438\u043B\u0438 PDF");if(g.size>4194304)throw alert("\u0424\u0430\u0439\u043B \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 4\u041C\u0411"),new ValidationError("\u0424\u0430\u0439\u043B \u0434\u043E\u043B\u0436\u0435\u043D \u0431\u044B\u0442\u044C \u043C\u0435\u043D\u044C\u0448\u0435 4\u041C\u0411");k(p);const S=new FormData;S.append("file",g),S.append("type",i.document.type);const E=await axios.post("/api/user/file",S,{headers:{"Content-Type":"multipart/form-data"}});s.value=null,l.value="/storage"+E.data.file.path,_.value=P("edit"),r.value=E.data.file}catch(d){console.log(d.message),f.value="\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0435 \u0444\u0430\u0439\u043B\u043E\u0432",s.value=null}},h=async()=>{try{(await axios.delete(`/api/user/file/${i.document.type}`)).data.result===!0?(_.value=P(null),l.value=null):t.dispatch("notification/displayMessage",{value:"\u0424\u0430\u0439\u043B \u043D\u0435 \u0443\u0434\u0430\u043B\u0435\u043D",type:"error"})}catch(p){console.log(p.message)}};return(p,d)=>(a(),o("div",K,[e("h4",{onClick:d[0]||(d[0]=x=>y.value=!y.value)},v(i.document.title),1),e("div",{class:M(["upload-container",{"upload-container__show":y.value}])},[l.value?(a(),o("div",X,[e("div",Y,[e("a",{href:l.value,target:"_blank"},[l.value.toLowerCase().includes("pdf")?(a(),o("i",ee)):(a(),o("img",{key:1,src:l.value,alt:"image"},null,8,te))],8,Z),r.value&&(r.value.status==="edit"||r.value.status==="cancel")?(a(),o("div",{key:0,class:"remove-img",onClick:h},ae)):m("",!0)])])):(a(),o("div",ie,[le,s.value?(a(),o("div",{key:1,class:"imagePreviewWrapper",style:L({"background-image":`url(${s.value})`})},ue,4)):(a(),o("label",{key:0,for:`file-${i.document.type}`,class:"label-file"},ce,8,oe)),e("input",{type:"file",onChange:u,class:"file-input-hide",id:`file-${i.document.type}`},null,40,de),f.value?(a(),o("div",_e,v(f.value),1)):m("",!0)]))],2),e("div",pe," \u0421\u0442\u0430\u0442\u0443\u0441: "+v(_.value),1)]))}};const fe=n=>(A("data-v-b3fb0c5f"),n=n(),G(),n),me={class:"col-12"},ye={class:"dashboard-item"},he=fe(()=>e("h3",null,"\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B",-1)),ge={key:0,class:"file-container"},be={__name:"UserFiles",setup(n){const i=c([{type:"studak",title:"\u0421\u0442\u0443\u0434\u0435\u043D\u0447\u0435\u0441\u043A\u0438\u0439/\u0414\u0438\u043F\u043B\u043E\u043C"},{type:"passport",title:"\u041F\u0430\u0441\u043F\u043E\u0440\u0442"},{type:"insurance",title:"\u0421\u0442\u0440\u0430\u0445\u043E\u0432\u043A\u0430"},{type:"license",title:"\u041F\u0440\u0430\u0432\u0430 \u043D\u0430 \u044F\u0445\u0442\u0443"},{type:"antidoping",title:"\u0421\u0435\u0440\u0442\u0435\u0444\u0438\u043A\u0430\u0442 \u0430\u043D\u0442\u0438\u0434\u043E\u043F\u0438\u043D\u0433\u0430"},{type:"1444",title:"\u0421\u043F\u0440\u0430\u0432\u0430\u043A\u0430 1444\u043D"},{type:"oms",title:"\u041E\u041C\u0421"},{type:"category",title:"\u0420\u0430\u0437\u0440\u044F\u0434"},{type:"vfps",title:"\u0427\u0435\u043B\u0435\u043D\u0441\u0442\u0432\u043E \u0412\u0424\u041F\u0421"},{type:"permit",title:"\u0421\u043E\u0433\u043B\u0430\u0441\u0438\u0435 \u043D\u0430 \u043E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0443 \u0434\u0430\u043D\u043D\u044B\u0445"}]),t=c(null);return D(async()=>{const l=await axios.get("/api/user/docs");t.value=l.data.files}),(l,_)=>(a(),o("div",me,[e("div",ye,[he,t.value?(a(),o("div",ge,[(a(!0),o(N,null,T(i.value,r=>(a(),z(ve,{document:r,file:t.value.find(f=>f.type===r.type),key:r.type},null,8,["document","file"]))),128))])):m("",!0)])]))}},$e=B(be,[["__scopeId","data-v-b3fb0c5f"]]);const C=n=>(A("data-v-b608e800"),n=n(),G(),n),we={class:"container-fluid g-0"},ke={class:"row"},xe={class:"col-12"},Se={class:"dashboard-item"},Fe=C(()=>e("h3",null,"\u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F",-1)),Pe={class:"user-account__data"},Ce={class:"b500"},Ee={class:"b500"},Ue={key:0},Ie={class:"b500"},Ve={class:"form-control"},Be=C(()=>e("label",{for:"university_id"},"\u0412\u0430\u0448 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442",-1)),De=C(()=>e("button",{class:"btn btn-default btn-full-width"},"\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",-1)),Ne={__name:"Settings",setup(n){const i=V(),t=c(i.getters["auth/user"]),l=c(!1),_=c(),r=I({university_id:I().nullable()}),{values:f,handleSubmit:y}=H({validationSchema:r});D(async()=>{l.value=!0;try{const s=await F.get("/api/user-settings");t.value.email=s.data.email,t.value.university=s.data.university;const u=await F.get("/api/universities");_.value=u.data}catch(s){console.log(s.message)}l.value=!1});const k=y(async s=>{l.value=!0,s.university_id=s.university_id?s.university_id.code:null;try{await F.patch("/api/user/update",s),t.value.university=_.value.find(u=>u.code===s.university_id).label,i.commit("auth/setUser",t.value)}catch(u){console.log(u.message)}l.value=!1});return(s,u)=>(a(),o(N,null,[b(q,null,{default:U(()=>[w("\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430")]),_:1}),e("main",null,[e("div",we,[e("div",ke,[e("div",xe,[e("div",Se,[l.value?(a(),z(O,{key:0})):m("",!0),Fe,e("div",Pe,[e("p",null,[w("\u0424\u0418\u041E: "),e("span",Ce,v(t.value.surname)+" "+v(t.value.name)+" "+v(t.value.patronymic),1)]),e("p",null,[w("E-mail: "),e("span",Ee,v(t.value.email),1)]),t.value.university?(a(),o("p",Ue,[w("\u0423\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442: "),e("span",Ie,v(t.value.university),1)])):m("",!0)]),t.value.university?m("",!0):(a(),o("form",{key:1,onSubmit:u[0]||(u[0]=R((...h)=>$(k)&&$(k)(...h),["prevent"]))},[e("div",Ve,[Be,b($(J),{name:"university_id"},{default:U(({field:h})=>[b($(Q),W({options:_.value,placeholder:"\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442"},h),null,16,["options"]),b($(j),{class:"alert",name:"university_id"})]),_:1})]),De],32))]),b($e)])])])])],64))}},Te=B(Ne,[["__scopeId","data-v-b608e800"]]);export{Te as default};
