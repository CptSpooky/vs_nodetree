(this["webpackJsonpvikingsasquatch-factory-tree"]=this["webpackJsonpvikingsasquatch-factory-tree"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(12),s=a.n(r),i=a(17),o=(a(66),a(27)),l=a.n(o),u=a(120),d=a(122),j=a(51),b=a.n(j),m=a(52),f=a.n(m),h=a(123),p=a(2),x=a(86),O=Object(u.a)({root:{height:"auto",flexGrow:1,maxWidth:300}}),v=function(e){for(var t=x(e.gentime),a=[],n=0;n<e.qty;n++)a.push(Math.floor(t()*(e.max-e.min))+e.min);return a},g=function(e){var t=e.data,a=e.selectedId,n=e.selected,c=O();return"undefined"===typeof t?Object(p.jsx)("div",{}):Object(p.jsx)(d.a,{className:c.root,defaultCollapseIcon:Object(p.jsx)(b.a,{}),defaultExpandIcon:Object(p.jsx)(f.a,{}),selected:n,children:t.map((function(e,t){return Object(p.jsx)(h.a,{nodeId:""+e.id,label:e.name,onClick:function(){return a(e.id)},children:v(e).map((function(e,t){return Object(p.jsx)(h.a,{nodeId:e.id+"-1",label:""+e},t)}))},t)}))})},y=(a(100),a(49),a(124)),N=a(54),S=a.n(N),C=a(53),k=a.n(C),I=a(55),M=a.n(I),F=Object(u.a)((function(e){return{button:{margin:e.spacing(1)}}})),q=function(e){var t=e.addFactory,a=e.deleteFactory,n=e.onRegenFactorySeed,c=F();return Object(p.jsxs)("div",{className:"interface-card",children:[Object(p.jsx)(y.a,{variant:"contained",color:"primary",className:c.button,startIcon:Object(p.jsx)(k.a,{}),onClick:t,size:"small",children:"Add"}),Object(p.jsx)(y.a,{variant:"contained",color:"secondary",className:c.button,startIcon:Object(p.jsx)(S.a,{}),onClick:a,size:"small",children:"Delete"}),Object(p.jsx)(y.a,{variant:"contained",color:"primary",size:"small",className:c.button,startIcon:Object(p.jsx)(M.a,{}),onClick:n,children:"Regenerate"})]})},w=a(56),z=a.n(w),E=Object(u.a)((function(e){return{button:{margin:e.spacing(1)}}})),Q=function(e){var t=e.onChangeSetName,a=e.onChangeSetQty,n=e.onChangeSetMin,c=e.onChangeSetMax,r=e.updateFactory,s=e.name,i=e.qty,o=e.min,l=e.max,u=e.selectedId,d=E();if(""==u)return Object(p.jsx)("div",{id:"popupedit",className:"popup",children:Object(p.jsx)("p",{children:"To edit a factory, select it from the tree."})});var j=i>0&&i<=15,b=s.length>=1&&s.length<=30,m=o>-1e8&&o<1e8&&""!=o,f=o>-1e8&&l<1e8&&o<l&&""!=l,h=j&&b&&m&&f;return Object(p.jsxs)("div",{id:"popupedit",className:"popup",children:[Object(p.jsx)("h2",{children:"Factory Settings"}),Object(p.jsx)("p",{children:"To edit a factory, select it from the tree and update its settings below."}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsxs)("div",{className:"label-cage",children:[Object(p.jsx)("label",{children:"Name:"}),b?"":Object(p.jsx)("div",{className:"errMsg",children:"invalid name"})]}),Object(p.jsx)("input",{type:"text",maxLength:"30",value:s,className:b?"":"err",onChange:function(e){return t(e.target.value)}}),Object(p.jsxs)("div",{className:"label-cage",children:[Object(p.jsx)("label",{children:"Qty:"}),j?"":Object(p.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(p.jsx)("input",{type:"number",min:"1",max:"15",value:i,className:j?"":"err",onChange:function(e){return a(e.target.value)}}),Object(p.jsxs)("div",{className:"label-cage",children:[Object(p.jsx)("label",{children:"Min:"}),m?"":Object(p.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(p.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:m?"":"err",value:o,onChange:function(e){return n(e.target.value)}}),Object(p.jsxs)("div",{className:"label-cage",children:[Object(p.jsx)("label",{children:"Max:"}),f?"":Object(p.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(p.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:f?"":"err",value:l,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsx)("div",{className:"factory-setting-buttons",children:Object(p.jsx)(y.a,{variant:"contained",color:"primary",size:"small",disabled:!h,className:d.button,startIcon:Object(p.jsx)(z.a,{}),onClick:r,children:"Save"})})]})};a(101);var R=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),o=s[0],u=s[1],d=Object(n.useState)(0),j=Object(i.a)(d,2),b=j[0],m=j[1],f=Object(n.useState)(0),h=Object(i.a)(f,2),x=h[0],O=h[1],v=Object(n.useState)(""),y=Object(i.a)(v,2),N=y[0],S=y[1],C=Object(n.useState)([]),k=Object(i.a)(C,2),I=k[0],M=k[1];Object(n.useEffect)((function(){F()}),[]);var F=function(){l.a.get("https://pure-forest-64023.herokuapp.com/factories").then((function(e){M(e.data)}))},w=function(e){S(e);var t=function(e){for(var t=0;t<I.length;t++)if(I[t].id===e)return I[t];return null}(e);c(t.name),u(t.qty),m(t.min),O(t.max)};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"factory-interface",children:[Object(p.jsx)("div",{className:"factory-list",children:Object(p.jsx)(g,{data:I,selectedId:function(e){w(e)},selected:""+N})}),Object(p.jsx)(q,{addFactory:function(){console.log(N);var e="New Factory";c(e),u(6),m(0),O(100),l.a.post("https://pure-forest-64023.herokuapp.com/create",{name:e,qty:6,min:0,max:100}).then((function(e){var t=e.data;S(t),F()}))},deleteFactory:function(){l.a.delete("https://pure-forest-64023.herokuapp.com/factories/".concat(N)),S(""),F()},onRegenFactorySeed:function(){l.a.put("https://pure-forest-64023.herokuapp.com/factories/regen/".concat(N),{}).then((function(){F()}))}})]}),Object(p.jsx)(Q,{onChangeSetName:function(e){return c(e)},onChangeSetQty:function(e){return u(e)},onChangeSetMin:function(e){return m(e)},onChangeSetMax:function(e){return O(e)},updateFactory:function(){var e=a;""==e&&(e="Nameless Factory"),l.a.put("https://pure-forest-64023.herokuapp.com/factories/".concat(N),{name:e,qty:o,min:b,max:x}).then((function(){F()}))},currentId:N,factoryList:I,name:a,qty:o,min:b,max:x,selectedId:N})]})};s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))},49:function(e,t,a){},66:function(e,t,a){},94:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.16b5db1f.chunk.js.map