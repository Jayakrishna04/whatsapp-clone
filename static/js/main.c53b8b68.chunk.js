(this.webpackJsonpwhatsapp=this.webpackJsonpwhatsapp||[]).push([[0],{102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},119:function(e,t,a){},120:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),s=(a(85),a(4)),i=(a(86),a(133)),o=a(135),m=a(56),d=a.n(m),u=a(57),p=a.n(u),h=a(32),g=a.n(h),E=(a(87),a(47)),v=a.n(E),b=(a(88),a(89),v.a.initializeApp({apiKey:"AIzaSyCkV3t8D9id4AH9p-GLfLHys-cPUDtzhnA",authDomain:"jayas-1db92.firebaseapp.com",databaseURL:"https://jayas-1db92-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"jayas-1db92",storageBucket:"jayas-1db92.appspot.com",messagingSenderId:"695257723268",appId:"1:695257723268:web:3cf02d01db5dca110bedd1",measurementId:"G-KZNBP5PPCQ"}).firestore()),_=v.a.auth(),S=new v.a.auth.GoogleAuthProvider,f=b,w=a(37),I=Object(n.createContext)(),j=function(e){var t=e.reducer,a=e.initialState,r=e.children;return l.a.createElement(I.Provider,{value:Object(n.useReducer)(t,a)},r)},N=function(){return Object(n.useContext)(I)},O=a(33),D="SET_USER",C="SET_SESSION",y="SET_TOGGLER",U=function(e,t){switch(t.type){case D:return Object(O.a)(Object(O.a)({},e),{},{user:t.user});case C:return localStorage.setItem("uid",t.uid),localStorage.setItem("displayName",t.displayName),localStorage.setItem("photoURL",t.photoURL),console.log("session added to storage"),Object(O.a)(Object(O.a)({},e),{},{uid:t.uid,displayName:t.displayName,photoURL:t.photoURL});case y:return Object(O.a)(Object(O.a)({},e),{},{togglerState:t.togglerState});default:return e}},T=a(73),k=a.n(T),A=a(72),R=a.n(A),L=a(44),x=a.n(L);var M=function(e){var t,a,r,c=Object(n.useState)(""),i=Object(s.a)(c,2),m=(i[0],i[1]),d=e.addNewChatVal,u=e.name,p=e.id,h=Object(n.useState)([]),g=Object(s.a)(h,2),E=g[0],v=g[1],b=N(),_=Object(s.a)(b,2),S=_[0].togglerState,I=_[1];return Object(n.useEffect)((function(){p&&f.collection("rooms").doc(p).collection("messages").orderBy("timestamp","desc").onSnapshot((function(e){return v(e.docs.map((function(e){return e.data()})))}))}),[]),Object(n.useEffect)((function(){m(Math.floor(5e3*Math.random()))}),[]),"true"!==d?l.a.createElement("div",{className:"sidebarChat"},l.a.createElement(w.b,{to:"/rooms/".concat(p),onClick:function(){I({type:y,togglerState:S+1})}},l.a.createElement("div",{className:"sidebarChat__wrapper"},l.a.createElement(o.a,{src:null===(t=E[0])||void 0===t?void 0:t.photoURL}),l.a.createElement("div",{className:"sidebarChat__info"},l.a.createElement("h2",{className:"room__name"},u),l.a.createElement("p",{className:"sidebar__lastmessages__color"},l.a.createElement("span",{className:"sidebar__lastMessageName"},""!=p&&E.length>0?(null===(a=E[0])||void 0===a?void 0:a.name)+": ":"Loading: "),""!=p&&E.length>0?null===(r=E[0])||void 0===r?void 0:r.message:"Start a new chat")))),l.a.createElement("div",{className:"sidebarChat__delete",onClick:function(){"your_password_to_delete_room"==prompt("Enter Admin Password to delete Room")?f.collection("rooms").doc(p).delete().then((function(){window.location="/"})).catch((function(e){console.error("Error removing document: ",e)})):alert("You are not authorised to delete rooms")}},l.a.createElement(R.a,null))):l.a.createElement("div",{onClick:function(){var e=prompt("Please enter name for chat");if(e&&e.length>=20)return alert("enter a shorter name for the room");e&&f.collection("rooms").add({name:e,timestamp:x.a.firestore.FieldValue.serverTimestamp()})},className:"sidebarChat addnew__chat"},l.a.createElement("h2",null,"Add New Room"),l.a.createElement(k.a,null))},P=(a(102),a(74)),W=a.n(P);function V(){var e=window;return{width:e.innerWidth,height:e.innerHeight}}function F(){var e=Object(n.useState)(V()),t=Object(s.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){function e(){l(V())}return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a}var B=a(58),z=a.n(B);a(103);var G=function(){return l.a.createElement("div",{class:"lds-hourglass"})};var H=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),m=Object(s.a)(c,2),u=m[0],h=m[1],E=Object(n.useState)(!0),v=Object(s.a)(E,2),b=v[0],_=v[1],S=N(),w=Object(s.a)(S,2),I=w[0].togglerState,j=w[1],O=Object(n.useState)([]),D=Object(s.a)(O,2),C=D[0],U=D[1],T=Object(n.useState)(""),k=Object(s.a)(T,2),A=k[0],R=k[1],L=Object(n.useState)(!1),x=Object(s.a)(L,2),P=(x[0],x[1]),V=F().width,B=function(e){_(!1),R(e.target.value)},H=function(){localStorage.removeItem("uid"),window.location.reload(),P(!0)};Object(n.useEffect)((function(){a.length>0&&U(function(e,t){var a=RegExp(".*".concat(e.toLowerCase().split("").join(".*"),".*"));return t.filter((function(e){return e.data.name.toLowerCase().match(a)}))}(A,a)),""===A&&_(!0)}),[A]),Object(n.useEffect)((function(){var e=f.collection("rooms").orderBy("timestamp","desc").onSnapshot((function(e){r(e.docs.map((function(e){return{id:e.id,data:e.data()}})))}));return function(){e()}}),[]),Object(n.useEffect)((function(){h(!u)}),[I]);var Y=""!==localStorage.getItem("photoURL")?localStorage.getItem("photoURL"):null;return localStorage.getItem("displayName"),l.a.createElement(l.a.Fragment,null,V<629?l.a.createElement("div",{className:I%2!==0?"sidebar":"sidebar hide__sidebar"},l.a.createElement("div",{className:"siderbar__wrapper"},l.a.createElement(i.a,{color:"inherit","aria-label":"open drawer",edge:"start",className:"sidebar__burger",onClick:function(){h(u),j({type:y,togglerState:I+1})}},l.a.createElement(W.a,null)),l.a.createElement("div",{className:"sidebar__header"},l.a.createElement(o.a,{src:Y})," ",l.a.createElement("p",{className:"sidebar__greeting mobile__tag"}," ",l.a.createElement("a",{href:"https://jayakrishna.pro",style:{color:"white"}},"Made with \u2665 by ",l.a.createElement("span",{style:{color:"white"}},"Ali"))),l.a.createElement("div",{className:"sidebar__headerRight"},l.a.createElement(i.a,null,l.a.createElement(d.a,null)),l.a.createElement(i.a,null,l.a.createElement(p.a,null)),l.a.createElement(i.a,null,l.a.createElement("div",{onClick:H},l.a.createElement(z.a,null)))))),l.a.createElement("div",{className:"sidebar__search"},l.a.createElement("div",{className:"sidebar__searchContainer"},l.a.createElement(g.a,null),l.a.createElement("input",{placeholder:"Search or Start a new chat",value:A,type:"text",onChange:B}))),b?l.a.createElement("div",{className:"sidebar__chats"},l.a.createElement(M,{addNewChatVal:"true"}),a.map((function(e){return l.a.createElement(M,{key:e.id,id:e.id,name:e.data.name})}))):l.a.createElement("div",{className:"sidebar__chats"},l.a.createElement(M,{addNewChatVal:"true"}),C.map((function(e){return l.a.createElement(M,{key:e.id,id:e.id,name:e.data.name})})))):l.a.createElement("div",{className:"sidebar"},l.a.createElement("div",{className:"sidebar__header"},l.a.createElement(o.a,{src:Y})," ",l.a.createElement("p",{className:"sidebar__greeting"}," ",l.a.createElement("a",{href:"https://jayakrishna.pro"},"Made with \u2665 by ",l.a.createElement("span",{style:{color:"blue"}},"jayakrishna"))),l.a.createElement("div",{className:"sidebar__headerRight"},l.a.createElement(i.a,null,l.a.createElement(d.a,null)),l.a.createElement(i.a,null,l.a.createElement(p.a,null)),l.a.createElement(i.a,null,l.a.createElement("div",{onClick:H},l.a.createElement(z.a,null))))),l.a.createElement("div",{className:"sidebar__search"},l.a.createElement("div",{className:"sidebar__searchContainer"},l.a.createElement(g.a,null),l.a.createElement("input",{placeholder:"Search or Start a new chat",value:A,type:"text",onChange:B}))),b?l.a.createElement("div",{className:"sidebar__chats scrollbar-juicy-peach"},l.a.createElement(M,{addNewChatVal:"true"}),0==a.length?l.a.createElement(G,null):a.map((function(e){return l.a.createElement(M,{key:e.id,id:e.id,name:e.data.name})}))):l.a.createElement("div",{className:"sidebar__chats "},l.a.createElement(M,{addNewChatVal:"true"}),C.map((function(e){return l.a.createElement(M,{key:e.id,id:e.id,name:e.data.name})})))))},Y=a(48),q=a.n(Y),J=a(49),K=a.n(J),Q=a(50),Z=a.n(Q),$=a(51),X=a.n($),ee=a(60),te=a.n(ee),ae=(a(104),a(9)),ne=a(59),le=(a(105),a(61)),re=a(41),ce=a.n(re);var se=function(){var e,t,a,r=Object(n.useState)(""),c=Object(s.a)(r,2),m=(c[0],c[1]),d=Object(n.useState)(""),u=Object(s.a)(d,2),p=u[0],h=u[1],E=Object(ae.f)().roomId,v=Object(n.useState)("false"),b=Object(s.a)(v,2),_=b[0],S=b[1],w=Object(n.useState)([]),I=Object(s.a)(w,2),j=I[0],O=I[1],D=Object(n.useState)(!0),C=Object(s.a)(D,2),U=C[0],T=C[1],k=localStorage.getItem("displayName"),A=N(),R=Object(s.a)(A,2),L=R[0].togglerState,M=R[1],P=N(),W=(Object(s.a)(P,1)[0].photoURL,Object(n.useState)(!1)),V=Object(s.a)(W,2),B=V[0],z=V[1],G=Object(n.useState)(!1),H=Object(s.a)(G,2),Y=H[0],J=H[1],Q=Object(n.useState)([]),$=Object(s.a)(Q,2),ee=$[0],re=$[1],se=Object(n.useState)(""),ie=Object(s.a)(se,2),oe=ie[0],me=ie[1],de=Object(n.useState)(""),ue=Object(s.a)(de,2),pe=ue[0],he=ue[1],ge=F().width,Ee=0,ve=0,be=0,_e=0,Se=String(oe).slice(4,6),fe=Object(ne.a)("".concat("/whatsapp-clone","/send.mp3"),{volume:.5}),we=Object(s.a)(fe,1)[0],Ie=Object(ne.a)("".concat("/whatsapp-clone","/send.mp3"),{volume:.5}),je=Object(s.a)(Ie,1)[0],Ne=function(e){var t=e.native;h(p+t)},Oe=function(){B&&z(!1)};Object(n.useEffect)((function(){me(function(){var e=(new Date).getTimezoneOffset(),t=Math.abs(e);return(e<0?"+":"-")+("00"+Math.floor(t/60)).slice(-2)+":"+("00"+t%60).slice(-2)}())})),Object(n.useEffect)((function(){m(Math.floor(5e3*Math.random())),E&&(f.collection("rooms").doc(E).onSnapshot((function(e){S(e.data().name)})),f.collection("rooms").doc(E).collection("messages").orderBy("timestamp","asc").onSnapshot((function(e){O(e.docs.map((function(e){return e.data()})))})))}),[E]),Object(n.useEffect)((function(){var e;he(null===(e=j[j.length-1])||void 0===e?void 0:e.photoURL)}),[j]);var De=function(e){e.preventDefault(),p.length>0&&(f.collection("rooms").doc(E).collection("messages").add({message:p,name:k,timestamp:x.a.firestore.FieldValue.serverTimestamp(),photoURL:localStorage.getItem("photoURL")}),J(!Y),Y?je():we(),h(""))},Ce={},ye=[];if(j.length>0){var Ue=[],Te=[];j.forEach((function(e,t){var a,n=String(new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()).slice(5,12);-1===Te.indexOf(n)&&Te.push(n)}));var ke=0;j.forEach((function(e,t){var a,n=String(new Date(null===(a=e.timestamp)||void 0===a?void 0:a.toDate()).toUTCString()).slice(5,12);n===Te[ke]&&t==j.length-1?(Ue.push({messageData:e.message,name:e.name,timestamp:e.timestamp}),Ce[Te[ke]]=Ue,ye.push(Ce),Ce={},(Ue=[]).push({messageData:e.message,name:e.name,timestamp:e.timestamp}),ke+=1):n==Te[ke]?Ue.push({messageData:e.message,name:e.name,timestamp:e.timestamp}):(Ce[Te[ke]]=Ue,ye.push(Ce),Ce={},(Ue=[]).push({messageData:e.message,name:e.name,timestamp:e.timestamp}),n!=Te[ke]&&t==j.length-1&&(Ce[n]=Ue,ye.push(Ce)),ke+=1)}))}Object(n.useEffect)((function(){re(ye)}),[j]);var Ae=Object(n.useRef)(null),Re=function(){Ae.current&&Ae.current.scrollIntoView({behavior:"smooth"})};Object(n.useEffect)((function(){Re()})),Object(n.useEffect)((function(){T(!U)}),[L]),Object(n.useEffect)((function(){Re()}),[j]);var Le=function(){T(!U),M({type:y,togglerState:L+1})};return l.a.createElement(l.a.Fragment,null,ge<629?l.a.createElement("div",{className:L%2===0?"chat":"chat hide__chat"},l.a.createElement("div",{className:"chat__header"},l.a.createElement(i.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:Le},l.a.createElement(te.a,null)),l.a.createElement(o.a,{src:pe}),l.a.createElement("div",{className:"chat__headerInfo"},l.a.createElement("h3",null,_),l.a.createElement("p",{className:"header__lastSeen"},"last seen"," ",0!==j.length?null===(e=j[j.length-1].timestamp)||void 0===e?void 0:e.toDate().toUTCString():"Loading")),l.a.createElement("div",{className:"chat__headerRight"},l.a.createElement(i.a,null,l.a.createElement(g.a,null)),l.a.createElement(i.a,null,l.a.createElement(q.a,null)),l.a.createElement(i.a,null,l.a.createElement(K.a,null)))),l.a.createElement("div",{className:"chat__header__absolute"},l.a.createElement(i.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:Le},l.a.createElement(te.a,null)),l.a.createElement(o.a,{src:pe}),l.a.createElement("div",{className:"chat__headerInfo"},l.a.createElement("h3",null,_),l.a.createElement("p",{className:"header__lastSeen"},"last seen"," ",0!==j.length?String(null===(t=j[j.length-1].timestamp)||void 0===t?void 0:t.toDate().toUTCString()).slice(0,22):"Loading")),l.a.createElement("div",{className:"chat__headerRight"},l.a.createElement(i.a,null,l.a.createElement(g.a,null)),l.a.createElement(i.a,null,l.a.createElement(q.a,null)),l.a.createElement(i.a,null,l.a.createElement(K.a,null)))),l.a.createElement("div",{className:"chat__body"},ee.length>0?ee.map((function(e,t){return e[Object.keys(e)].map((function(t,a){var n,r,c,s,i,o,m,d,u,p,h,g,E,v,b,_;return 0==a?l.a.createElement(l.a.Fragment,null,"id"!==String(Object.keys(e)).slice(0,2)&&parseInt(String(Object.keys(e)).slice(0,2))?l.a.createElement("div",{className:"chat__body__daystamp"},l.a.createElement("p",{className:"chat__body__daystamp__title"},parseInt(String(Object.keys(e)).slice(0,2))==parseInt(String((new Date).getDate()))?"TODAY":Object.keys(e))):null,l.a.createElement("p",{className:"chat__messages ".concat(t.name===k&&"chat__reciever")},l.a.createElement("span",{className:"chat__name"},t.name.substr(0,t.name.indexOf(" "))),l.a.createElement(ce.a,null,t.messageData),l.a.createElement("span",{className:"chat__timestamp"},l.a.createElement("div",{className:"hidden"},ve=parseInt(String(new Date(null===(n=t.timestamp)||void 0===n?void 0:n.toDate()).toUTCString()).slice(20,22))+parseInt(Se)>60?(parseInt(String(new Date(null===(r=t.timestamp)||void 0===r?void 0:r.toDate()).toUTCString()).slice(20,22))+parseInt(Se))%60:0,be=parseInt(String(new Date(null===(c=t.timestamp)||void 0===c?void 0:c.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0>60?(parseInt(String(new Date(null===(s=t.timestamp)||void 0===s?void 0:s.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0)%60:parseInt(String(new Date(null===(i=t.timestamp)||void 0===i?void 0:i.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0,Ee=ve>0?1:0,_e=parseInt(String(new Date(null===(o=t.timestamp)||void 0===o?void 0:o.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)>24?(parseInt(String(new Date(null===(m=t.timestamp)||void 0===m?void 0:m.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe))%24:parseInt(String(new Date(null===(d=t.timestamp)||void 0===d?void 0:d.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)),_e?_e%12:"00"," : ",0!==be?be<10?"0"+be:be:"00",_e>12?" PM":" AM"))):l.a.createElement("p",{className:"chat__messages ".concat(t.name===k&&"chat__reciever")},l.a.createElement("span",{className:"chat__name"},t.name.substr(0,t.name.indexOf(" "))),l.a.createElement(ce.a,null,t.messageData),l.a.createElement("span",{className:"chat__timestamp"},l.a.createElement("div",{className:"hidden"},ve=parseInt(String(new Date(null===(u=t.timestamp)||void 0===u?void 0:u.toDate()).toUTCString()).slice(20,22))+parseInt(Se)>60?(parseInt(String(new Date(null===(p=t.timestamp)||void 0===p?void 0:p.toDate()).toUTCString()).slice(20,22))+parseInt(Se))%60:0,be=parseInt(String(new Date(null===(h=t.timestamp)||void 0===h?void 0:h.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0>60?(parseInt(String(new Date(null===(g=t.timestamp)||void 0===g?void 0:g.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0)%60:parseInt(String(new Date(null===(E=t.timestamp)||void 0===E?void 0:E.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0,Ee=ve>0?1:0,_e=parseInt(String(new Date(null===(v=t.timestamp)||void 0===v?void 0:v.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)>24?(parseInt(String(new Date(null===(b=t.timestamp)||void 0===b?void 0:b.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe))%24:parseInt(String(new Date(null===(_=t.timestamp)||void 0===_?void 0:_.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)),_e?_e%12:"00"," : ",0!==be?be<10?"0"+be:be:"00",_e>12?" PM":" AM"))}))})):null,l.a.createElement("div",{ref:Ae})),l.a.createElement("div",{className:"chat__footer"},l.a.createElement(i.a,null,l.a.createElement(Z.a,{className:"yellow",onClick:function(){return z(!B)}}),B?l.a.createElement(le.a,{onSelect:Ne}):null),l.a.createElement("form",null,l.a.createElement("input",{value:p,type:"text",placeholder:"Type a message",onChange:function(e){return h(e.target.value)},onClick:Oe,disabled:"Admin: Ali"===_&&"Shekh Aliul WqnNsFNEPr"!=k}),l.a.createElement("button",{type:"submit",onClick:De},"Send A message")),l.a.createElement(i.a,null,l.a.createElement(X.a,null))),l.a.createElement("div",{className:"chat__footer__absolute"},l.a.createElement(i.a,null,l.a.createElement(Z.a,null)),l.a.createElement("form",null,l.a.createElement("input",{value:p,type:"text",placeholder:"Type a message",onChange:function(e){return h(e.target.value)},disabled:"Admin: Ali"==_}),l.a.createElement("button",{type:"submit",onClick:De},"Send A message")),l.a.createElement(i.a,null,l.a.createElement(X.a,null)))):l.a.createElement("div",{className:"chat"},l.a.createElement("div",{className:"chat__header"},l.a.createElement(o.a,{src:pe}),l.a.createElement("div",{className:"chat__headerInfo"},l.a.createElement("h3",null,_),l.a.createElement("p",{className:"header__lastSeen"},"last seen"," ",0!==j.length?String(null===(a=j[j.length-1].timestamp)||void 0===a?void 0:a.toDate().toUTCString()).slice(0,22):"Loading")),l.a.createElement("div",{className:"chat__headerRight"},l.a.createElement(i.a,null,l.a.createElement(g.a,null)),l.a.createElement(i.a,null,l.a.createElement(q.a,null)),l.a.createElement(i.a,null,l.a.createElement(K.a,null)))),l.a.createElement("div",{className:"chat__body scrollbar-juicy-peach",onClick:Oe},ee.length>0?ee.map((function(e,t){return e[Object.keys(e)].map((function(t,a){var n,r,c,s,i,o,m,d,u,p,h,g,E,v,b,_,S;return 0==a?l.a.createElement(l.a.Fragment,null,"id"!==(null===(n=String(Object.keys(e)))||void 0===n?void 0:n.slice(0,2))&&void 0!=Object.keys(e)?l.a.createElement("div",{className:"chat__body__daystamp"},l.a.createElement("p",{className:"chat__body__daystamp__title"},parseInt(String(Object.keys(e)).slice(0,2))==parseInt(String((new Date).getDate()))?"TODAY":Object.keys(e))):"",l.a.createElement("p",{className:"chat__messages ".concat(t.name===k&&"chat__reciever")},l.a.createElement("span",{className:"chat__name"},t.name.substr(0,t.name.indexOf(" "))),l.a.createElement(ce.a,{properties:{target:"_blank",style:{color:"red",fontWeight:"bold"}}},t.messageData),l.a.createElement("span",{className:"chat__timestamp"},l.a.createElement("div",{className:"hidden"},ve=parseInt(String(new Date(null===(r=t.timestamp)||void 0===r?void 0:r.toDate()).toUTCString()).slice(20,22))+parseInt(Se)>60?(parseInt(String(new Date(null===(c=t.timestamp)||void 0===c?void 0:c.toDate()).toUTCString()).slice(20,22))+parseInt(Se))%60:0,be=parseInt(String(new Date(null===(s=t.timestamp)||void 0===s?void 0:s.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0>60?(parseInt(String(new Date(null===(i=t.timestamp)||void 0===i?void 0:i.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0)%60:parseInt(String(new Date(null===(o=t.timestamp)||void 0===o?void 0:o.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0,Ee=ve>0?1:0,_e=parseInt(String(new Date(null===(m=t.timestamp)||void 0===m?void 0:m.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)>24?(parseInt(String(new Date(null===(d=t.timestamp)||void 0===d?void 0:d.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe))%24:parseInt(String(new Date(null===(u=t.timestamp)||void 0===u?void 0:u.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)),_e?_e%12:"00"," : ",0!==be?be<10?"0"+be:be:"00",_e>12?" PM":" AM"))):l.a.createElement("p",{className:"chat__messages ".concat(t.name===k&&"chat__reciever")},l.a.createElement("span",{className:"chat__name"},t.name.substr(0,t.name.indexOf(" "))),l.a.createElement(ce.a,null,t.messageData),l.a.createElement("span",{className:"chat__timestamp"},l.a.createElement("div",{className:"hidden"},ve=parseInt(String(new Date(null===(p=t.timestamp)||void 0===p?void 0:p.toDate()).toUTCString()).slice(20,22))+parseInt(Se)>60?(parseInt(String(new Date(null===(h=t.timestamp)||void 0===h?void 0:h.toDate()).toUTCString()).slice(20,22))+parseInt(Se))%60:0,be=parseInt(String(new Date(null===(g=t.timestamp)||void 0===g?void 0:g.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0>60?(parseInt(String(new Date(null===(E=t.timestamp)||void 0===E?void 0:E.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0)%60:parseInt(String(new Date(null===(v=t.timestamp)||void 0===v?void 0:v.toDate()).toUTCString()).slice(20,22))+parseInt(Se)+ve-0,Ee=ve>0?1:0,_e=parseInt(String(new Date(null===(b=t.timestamp)||void 0===b?void 0:b.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)>24?(parseInt(String(new Date(null===(_=t.timestamp)||void 0===_?void 0:_.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe))%24:parseInt(String(new Date(null===(S=t.timestamp)||void 0===S?void 0:S.toDate()).toUTCString()).slice(17,19))+Ee+parseInt(oe)),_e?_e%12:"00"," : ",0!==be?be<10?"0"+be:be:"00",_e>12?" PM":" AM"))}))})):null,l.a.createElement("div",{ref:Ae,id:"chat__box"})),l.a.createElement("div",{className:"chat__footer"},l.a.createElement(i.a,null,l.a.createElement(Z.a,{className:"yellow",onClick:function(){return z(!B)}}),B?l.a.createElement(le.a,{onSelect:Ne}):null),l.a.createElement("form",null,l.a.createElement("input",{value:p,type:"text",placeholder:"Type a message",onChange:function(e){return h(e.target.value)},onClick:Oe,disabled:"Admin: Ali"===_&&"Shekh Aliul WqnNsFNEPr"!=k}),l.a.createElement("button",{type:"submit",onClick:De},"Send A message")),l.a.createElement(i.a,null,l.a.createElement(X.a,null)))))},ie=a(75),oe=a(134);a(119);var me=function(){var e=N(),t=Object(s.a)(e,2);Object(ie.a)(t[0]);var a=t[1];return l.a.createElement("div",{className:"login"},l.a.createElement("div",{className:"login__container"},l.a.createElement("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/225px-WhatsApp.svg.png",alt:"whatsapp"}),l.a.createElement("div",{className:"login__text"},l.a.createElement("h1",null,"Sign in to Whatsapp")),l.a.createElement(oe.a,{onClick:function(){_.signInWithPopup(S).then((function(e){console.log(e.user),a({type:D,user:e.user}),a({type:C,uid:e.user.uid,displayName:e.user.displayName,photoURL:e.user.photoURL})})).catch((function(e){return alert(e.message)}))}},"Sign In with Google")))};var de=function(){var e=N(),t=Object(s.a)(e,2),a=t[0].user,n=(t[1],F().width,void 0!==localStorage.getItem("uid")?localStorage.getItem("uid"):null);return l.a.createElement("div",{className:"app"},a||n?l.a.createElement("div",{className:"app__body"},l.a.createElement(w.a,null,l.a.createElement(H,null),l.a.createElement(ae.c,null,l.a.createElement(ae.a,{path:"/rooms/:roomId"},l.a.createElement(se,null)),l.a.createElement(ae.a,{path:"/"},l.a.createElement(se,null))))):l.a.createElement(me,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(j,{initialState:{user:null,uid:null,togglerState:1,photoURL:""},reducer:U},l.a.createElement(de,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a(120)},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){}},[[80,1,2]]]);
//# sourceMappingURL=main.c53b8b68.chunk.js.map