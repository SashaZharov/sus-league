import{A as g}from"./AppHeader.32aaba5f.js";import{_ as b,u as y,r as x,i as k,a as I,o as c,c as n,d as _,w as r,b as s,F as f,P as w,a4 as C,g as v,Q as l,I as S,J as D}from"./app.9fdc73f6.js";import"./logo.43433f72.js";const N=d=>(S("data-v-f4e60106"),d=d(),D(),d),V={class:"container-fluid g-0"},$={class:"row"},B={class:"col-12 mb30 df"},M={class:"col-12"},A=N(()=>s("h2",null,"\u0424\u0430\u0439\u043B\u044B \u043D\u0430 \u043C\u043E\u0434\u0435\u0440\u0430\u0446\u0438\u0438",-1)),F={class:"file-table"},E=C('<div class="file-table__head file-item" data-v-f4e60106><div class="file-item__1" data-v-f4e60106>ID</div><div class="file-item__2" data-v-f4e60106>\u0424\u0430\u0439\u043B</div><div class="file-item__3" data-v-f4e60106>\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C</div><div class="file-item__4" data-v-f4e60106>\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435</div><div class="file-item__4" data-v-f4e60106>\u041E\u0442\u043A\u0430\u0437</div></div>',1),H={class:"file-item__1"},J={class:"file-id"},L={class:"file-item__2"},P=["href"],Q={key:0,class:"ri-file-pdf-2-line"},T=["src"],j={class:"file-item__3"},q={class:"file-user"},z={class:"file-user__top"},G={class:"file-user__bottom"},K={class:"file-item__4"},O=["onClick"],R={class:"file-item__4"},U=["onClick"],W={__name:"Docs",setup(d){const u=y(),a=x([]);k(async()=>{const t=await axios.get("/api/admin/docs/edit");a.value=t.data.files});const p=async t=>{try{if((await axios.post(`/api/admin/docs/${t}/approve`)).data.result===!0){const o=a.value.findIndex(e=>e.id===t);a.value.splice(o,1)}}catch(i){console.log(i.message),u.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0438 \u0444\u0430\u0439\u043B\u0430",type:"error"})}},m=async t=>{try{if((await axios.post(`/api/admin/docs/${t}/cancel`)).data.result===!0){const o=a.value.findIndex(e=>e.id===t);a.value.splice(o,1)}}catch(i){console.log(i.message),u.dispatch("notification/displayMessage",{value:"\u041E\u0448\u0438\u0431\u043A\u0430 \u043F\u0440\u0438 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0438 \u0444\u0430\u0439\u043B\u0430",type:"error"})}};return(t,i)=>{const o=I("router-link");return c(),n(f,null,[_(g,null,{default:r(()=>[v("\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B")]),_:1}),s("main",null,[s("div",V,[s("div",$,[s("div",B,[_(o,{class:"btn btn-default btn-settings",to:{name:"admin.docs-confirm"}},{default:r(()=>[v("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043F\u0440\u043E\u0432\u0435\u0440\u0435\u043D\u043D\u044B\u0435")]),_:1},8,["to"]),_(o,{class:"btn btn-default btn-settings",to:{name:"admin.docs-cancel"}},{default:r(()=>[v("\u0421\u043C\u043E\u0442\u0440\u0435\u0442\u044C \u043E\u0442\u043C\u0435\u043D\u0435\u043D\u043D\u044B\u0435")]),_:1},8,["to"])]),s("div",M,[A,s("div",F,[E,(c(!0),n(f,null,w(a.value,e=>(c(),n("div",{class:"file-item",key:e.id},[s("div",H,[s("div",J,l(e.id),1)]),s("div",L,[s("a",{href:"/storage/"+e.path,target:"_blank"},[e.path.includes("pdf")?(c(),n("i",Q)):(c(),n("img",{key:1,src:"/storage/"+e.path,alt:"img"},null,8,T))],8,P)]),s("div",j,[s("div",q,[s("div",z,l(e.user.surname)+" "+l(e.user.name),1),s("div",G,l(e.user.email),1)])]),s("div",K,[s("div",{class:"btn btn-default btn-settings",onClick:h=>p(e.id)},"\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",8,O)]),s("div",R,[s("div",{class:"btn btn-default btn-settings",onClick:h=>m(e.id)},"\u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C",8,U)])]))),128))])])])])])],64)}}},ss=b(W,[["__scopeId","data-v-f4e60106"]]);export{ss as default};
