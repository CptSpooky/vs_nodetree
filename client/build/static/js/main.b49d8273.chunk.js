(this["webpackJsonpvikingsasquatch-factory-tree"]=this["webpackJsonpvikingsasquatch-factory-tree"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),s=a.n(r),i=a(20),o=(a(67),a(27)),l=a.n(o),u=a(121),d=a(123),j=a(51),b=a.n(j),m=a(52),f=a.n(m),h=a(124),p=a(53),x=a.n(p),O=a(2),v=a(87),g=Object(u.a)({root:{height:"auto",flexGrow:1,maxWidth:300}}),y=function(e,t,a){return Math.floor(e()*(a-t+1))+t},N=function(e){for(var t=v(e.gentime),a=[],n=0;n<e.qty;n++)a.push(y(t,e.min,e.max));return a},S=function(e){var t=e.data,a=e.selectedId,n=e.selected,c=g();return"undefined"===typeof t?Object(O.jsx)("div",{}):Object(O.jsx)(d.a,{className:c.root,defaultCollapseIcon:Object(O.jsx)(b.a,{}),defaultExpandIcon:Object(O.jsx)(f.a,{}),selected:n,children:Object(O.jsx)(h.a,{label:"Main",nodeId:"main",children:t.map((function(e,t){return Object(O.jsx)(h.a,{nodeId:""+e.id,label:Object(O.jsx)(x.a,{})+" "+e.name,onClick:function(){return a(e.id)},children:N(e).map((function(e,t){return Object(O.jsx)(h.a,{nodeId:e.id+"-1",label:""+e},t)}))},t)}))})})},C=(a(101),a(49),a(125)),I=a(55),k=a.n(I),M=a(54),F=a.n(M),q=a(56),w=a.n(q),z=Object(u.a)((function(e){return{button:{margin:e.spacing(1)}}})),E=function(e){var t=e.addFactory,a=e.deleteFactory,n=e.onRegenFactorySeed,c=e.selectedId,r=z();return Object(O.jsxs)("div",{className:"interface-card",children:[Object(O.jsx)(C.a,{variant:"contained",color:"primary",className:r.button,startIcon:Object(O.jsx)(F.a,{}),onClick:t,size:"small",children:"Add"}),Object(O.jsx)(C.a,{variant:"contained",color:"secondary",className:r.button,disabled:""==c,startIcon:Object(O.jsx)(k.a,{}),onClick:a,size:"small",children:"Delete"}),Object(O.jsx)(C.a,{variant:"contained",color:"primary",size:"small",className:r.button,disabled:""==c,startIcon:Object(O.jsx)(w.a,{}),onClick:n,children:"Regenerate"})]})},Q=a(57),R=a.n(Q),J=Object(u.a)((function(e){return{button:{margin:e.spacing(1)}}})),L=function(e){var t=e.onChangeSetName,a=e.onChangeSetQty,n=e.onChangeSetMin,c=e.onChangeSetMax,r=e.updateFactory,s=e.name,i=e.qty,o=e.min,l=e.max,u=e.selectedId,d=J();if(""==u)return Object(O.jsx)("div",{id:"popupedit",className:"popup",children:Object(O.jsx)("p",{children:"To edit a factory, select it from the tree."})});var j=i>0&&i<=15,b=s.length>=1&&s.length<=30,m=o>-1e8&&o<1e8&&""!==o,f=o>-1e8&&l<1e8&&o<l&&""!==l,h=j&&b&&m&&f;return Object(O.jsxs)("div",{id:"popupedit",className:"popup",children:[Object(O.jsx)("h2",{children:"Factory Settings"}),Object(O.jsx)("p",{children:"To edit a factory, select it from the tree and update its settings below."}),Object(O.jsxs)("div",{className:"form-input",children:[Object(O.jsxs)("div",{className:"label-cage",children:[Object(O.jsx)("label",{children:"Name"}),b?"":Object(O.jsx)("div",{className:"errMsg",children:"invalid name"})]}),Object(O.jsx)("input",{type:"text",maxLength:"30",value:s,className:b?"":"err",onChange:function(e){return t(e.target.value)}}),Object(O.jsxs)("div",{className:"label-cage",children:[Object(O.jsx)("label",{children:"Qty"}),j?"":Object(O.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(O.jsx)("input",{type:"number",min:"1",max:"15",value:i,className:j?"":"err",onChange:function(e){return a(e.target.value)}}),Object(O.jsxs)("div",{className:"label-cage",children:[Object(O.jsx)("label",{children:"Min"}),m?"":Object(O.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(O.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:m?"":"err",value:o,onChange:function(e){return n(e.target.value)}}),Object(O.jsxs)("div",{className:"label-cage",children:[Object(O.jsx)("label",{children:"Max"}),f?"":Object(O.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(O.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:f?"":"err",value:l,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsx)("div",{className:"factory-setting-buttons",children:Object(O.jsx)(C.a,{variant:"contained",color:"primary",size:"small",disabled:!h,className:d.button,startIcon:Object(O.jsx)(R.a,{}),onClick:r,children:"Save"})})]})};a(102);var T=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(0),j=Object(i.a)(d,2),b=j[0],m=j[1],f=Object(n.useState)(0),h=Object(i.a)(f,2),p=h[0],x=h[1],v=Object(n.useState)(""),g=Object(i.a)(v,2),y=g[0],N=g[1],C=Object(n.useState)([]),I=Object(i.a)(C,2),k=I[0],M=I[1];Object(n.useEffect)((function(){F()}),[]);var F=function(){l.a.get("https://pure-forest-64023.herokuapp.com/factories").then((function(e){M(e.data)}))},q=function(e){N(e);var t=function(e){for(var t=0;t<k.length;t++)if(k[t].id===e)return k[t];return null}(e);c(t.name),u(t.qty),m(t.min),x(t.max)};return Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"factory-interface",children:[Object(O.jsx)("div",{className:"factory-list",children:Object(O.jsx)(S,{data:k,selectedId:function(e){q(e)},selected:""+y})}),Object(O.jsx)(E,{addFactory:function(){console.log(y);var e="New Factory";c(e),u(6),m(0),x(100),l.a.post("https://pure-forest-64023.herokuapp.com/create",{name:e,qty:6,min:0,max:100}).then((function(e){var t=e.data;N(t),F()}))},deleteFactory:function(){l.a.delete("https://pure-forest-64023.herokuapp.com/factories/".concat(y)),N(""),F()},onRegenFactorySeed:function(){l.a.put("https://pure-forest-64023.herokuapp.com/factories/regen/".concat(y),{}).then((function(){F()}))},selectedId:y})]}),Object(O.jsx)(L,{onChangeSetName:function(e){return c(e)},onChangeSetQty:function(e){return u(e)},onChangeSetMin:function(e){return m(e)},onChangeSetMax:function(e){return x(e)},updateFactory:function(){var e=a;""==e&&(e="Nameless Factory"),l.a.put("https://pure-forest-64023.herokuapp.com/factories/".concat(y),{name:e,qty:o,min:b,max:p}).then((function(){F()}))},currentId:y,factoryList:k,name:a,qty:o,min:b,max:p,selectedId:y})]})};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))},49:function(e,t,a){},67:function(e,t,a){},95:function(e,t){}},[[103,1,2]]]);
//# sourceMappingURL=main.b49d8273.chunk.js.map