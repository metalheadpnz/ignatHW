(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={high:"Affairs_high__3WvSV",low:"Affairs_low__2chDs",middle:"Affairs_middle__125Xv",button:"Affairs_button__19u18",item:"Affairs_item__24VY1",flex:"Affairs_flex__1vEPs",activeFilter:"Affairs_activeFilter__U6cZ_"}},,function(e,a,t){e.exports={message:"Message_message__3gEvb",avatar:"Message_avatar__1GJK-",content:"Message_content__33lGR",angle:"Message_angle__3tKka",text:"Message_text__1oWlD",name:"Message_name__2uGGN",time:"Message_time__3Ne7N"}},,,function(e,a,t){e.exports={someClass:"Greeting_someClass__3NjOw",error:"Greeting_error__2VOm6",redText:"Greeting_redText__2ogWK",normal:"Greeting_normal__X_NIE",addButton:"Greeting_addButton__34D7z"}},,function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3pJZo",errorInput:"SuperInputText_errorInput__2Nq1_",error:"SuperInputText_error__vAzsU"}},function(e,a,t){e.exports={default:"SuperButton_default__2NLRy",red:"SuperButton_red__1ycTt"}},function(e,a,t){e.exports={blue:"HW4_blue__PxnPv",column:"HW4_column__2CuVa",testSpanError:"HW4_testSpanError__27ja1"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2Q28A",spanClassName:"SuperCheckbox_spanClassName__UMM3F"}},,,function(e,a,t){e.exports={App:"App_App__1AErT"}},,function(e,a,t){e.exports=t(22)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(13),c=t.n(l),o=(t(21),t(14)),s=t.n(o),i=t(3),u=t.n(i);var m=function(e){return r.a.createElement("div",{className:u.a.message},r.a.createElement("img",{src:e.avatar,alt:"avatar",className:u.a.avatar}),r.a.createElement("div",{className:u.a.angle}),r.a.createElement("div",{className:u.a.content},r.a.createElement("div",{className:u.a.name},e.name),r.a.createElement("div",{className:u.a.text},e.message),r.a.createElement("div",{className:u.a.time},e.time)))},d="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",_="Some Name",f="some text",E="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(m,{avatar:d,name:_,message:f,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},p=t(2),v=t(1),g=t.n(v),b=t(4),N=t(9),k=t.n(N),C=function(e){var a=e.red,t=e.className,n=Object(b.a)(e,["red","className"]),l="".concat(a?k.a.red:k.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))};var x=function(e){var a=e.affair,t=a.name,n=a._id,l=a.priority;return r.a.createElement("div",{className:g.a.flex},r.a.createElement("span",{className:g.a.item},t),r.a.createElement("span",{className:"".concat(g.a[e.affair.priority]," ").concat(g.a.item)},"[",l,"]"),r.a.createElement(C,{className:"".concat(g.a.item," ").concat(g.a.button),onClick:function(){return a=n,void e.deleteAffairCallback(a);var a}},"X"))};var w=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})})),t={all:"all"===e.filter?g.a.activeFilter:g.a.button,high:"high"===e.filter?g.a.activeFilter:g.a.button,middle:"middle"===e.filter?g.a.activeFilter:g.a.button,low:"low"===e.filter?g.a.activeFilter:g.a.button};return r.a.createElement("div",null,a,r.a.createElement(C,{className:t.all,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement(C,{className:t.high,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement(C,{className:t.middle,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement(C,{className:t.low,onClick:function(){e.setFilter("low")}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),a=Object(p.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(p.a)(c,2),s=o[0],i=o[1],u=function(e,a){return"all"===a?e:e.filter((function(e){return e.priority===a}))}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(w,{data:u,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))},filter:s}),r.a.createElement("hr",null),r.a.createElement("hr",null))},y=t(15),S=t(6),A=t.n(S),F=t(8),T=t.n(F),I=function(e){var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=e.className,s=e.spanClassName,i=Object(b.a)(e,["onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),u="".concat(T.a.error," ").concat(s||""),m="".concat(c?T.a.errorInput:T.a.superInput," ").concat(o);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:m},i)),c&&r.a.createElement("span",{className:u},c))},H=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=e.onBlurInputHandler,s=e.onKeyPressHandler,i=e.onFocusHandler,u=l?A.a.error:A.a.normal;return r.a.createElement("div",null,r.a.createElement(I,{value:a,onChange:t,className:u,onKeyPress:s,onBlur:o,onFocus:i}),r.a.createElement(C,{onClick:n,disabled:l,className:A.a.addButton,children:"add"}),r.a.createElement("span",null,c),r.a.createElement("div",{className:A.a.redText},l&&"\u043e\u0448\u0438\u0431\u043a\u0430: \u043e\u0431\u044f\u0437\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043f\u043e\u043b\u0435"))},B=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(p.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(!1),u=Object(p.a)(i,2),m=u[0],d=u[1],_=o.trim(),f=function(){_?(t(_),alert("Hello  ".concat(_)),s("")):d(!0)},E=a.length;return r.a.createElement(H,{name:o,setNameCallback:function(e){s(e.currentTarget.value),d(!1)},addUser:f,error:m,totalUsers:E,onBlurInputHandler:function(e){_||d(!0)},onKeyPressHandler:function(e){"Enter"===e.key&&o?f():d(!0)},onFocusHandler:function(e){d(!1)}})},M=t(24);var G=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(B,{users:t,addUserCallback:function(e){l([].concat(Object(y.a)(t),[{_id:Object(M.a)(),name:e}]))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},P=t(10),W=t.n(P),K=t(11),U=t.n(K),J=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(b.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(U.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:U.a.spanClassName},l))};var V=function(){var e=Object(n.useState)(""),a=Object(p.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},s=Object(n.useState)(!1),i=Object(p.a)(s,2),u=i[0],m=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(I,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(I,{className:W.a.blue}),r.a.createElement(C,null,"default"),r.a.createElement(C,{red:!0,onClick:o},"delete "),r.a.createElement(C,{disabled:!0},"disabled"),r.a.createElement(J,{checked:u,onChangeChecked:m},"some text "),r.a.createElement(J,{checked:u,onChange:function(e){return m(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var X=function(){return r.a.createElement("div",null,"// add NavLinks")};var D=function(){return r.a.createElement("div",null,"// add routes")};var L=function(){return r.a.createElement("div",null,r.a.createElement(X,null),r.a.createElement(D,null))};var R=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(h,null),r.a.createElement(j,null),r.a.createElement(G,null),r.a.createElement(V,null),r.a.createElement(L,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[16,1,2]]]);
//# sourceMappingURL=main.6cfa4dd8.chunk.js.map