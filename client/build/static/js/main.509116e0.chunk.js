(this["webpackJsonpvikingsasquatch-factory-tree"]=this["webpackJsonpvikingsasquatch-factory-tree"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=n(17),s=(n(66),n(27)),u=n.n(s),l=n(120),d=n(122),j=n(51),b=n.n(j),f=n(52),m=n.n(f),p=n(123),h=n(2),x=n(86),O=Object(l.a)({root:{height:"auto",flexGrow:1,maxWidth:300}}),y=function(e){for(var t=x(e.gentime),n=[],a=0;a<e.qty;a++)n.push(Math.floor(t()*(e.max-e.min))+e.min);return n},v=function(e){var t=e.data,n=e.selectedId,a=e.selected,c=O();return"undefined"===typeof t?Object(h.jsx)("div",{}):Object(h.jsx)(d.a,{className:c.root,defaultCollapseIcon:Object(h.jsx)(b.a,{}),defaultExpandIcon:Object(h.jsx)(m.a,{}),selected:a,children:t.map((function(e,t){return Object(h.jsx)(p.a,{nodeId:""+e.id,label:e.name,onClick:function(){return n(e.id)},children:y(e).map((function(e,t){return Object(h.jsx)(p.a,{nodeId:e.id+"-1",label:""+e},t)}))},t)}))})},g=(n(100),n(49),n(124)),N=n(54),S=n.n(N),C=n(53),k=n.n(C),I=Object(l.a)((function(e){return{button:{margin:e.spacing(1)}}})),F=function(e){var t=e.addFactory,n=e.deleteFactory,a=I();return Object(h.jsxs)("div",{className:"interface-card",children:[Object(h.jsx)(g.a,{variant:"contained",color:"primary",className:a.button,startIcon:Object(h.jsx)(k.a,{}),onClick:t,size:"small",children:"Add"}),Object(h.jsx)(g.a,{variant:"contained",color:"secondary",className:a.button,startIcon:Object(h.jsx)(S.a,{}),onClick:n,size:"small",children:"Delete"})]})},q=n(56),M=n.n(q),w=n(55),z=n.n(w),Q=Object(l.a)((function(e){return{button:{margin:e.spacing(1)}}})),E=function(e){var t=e.onChangeSetName,n=e.onChangeSetQty,a=e.onChangeSetMin,c=e.onChangeSetMax,r=e.updateFactory,o=e.name,i=e.qty,s=e.min,u=e.max,l=e.onRegenFactorySeed,d=e.selectedId,j=Q();if(""==d)return Object(h.jsx)("div",{id:"popupedit",className:"popup",children:Object(h.jsx)("p",{children:"To edit a factory, select it from the tree."})});var b=i>0&&i<=15;return Object(h.jsxs)("div",{id:"popupedit",className:"popup",children:[Object(h.jsx)("h2",{children:"Factory Settings"}),Object(h.jsx)("p",{children:"To edit a factory, select it from the tree and update its settings below."}),Object(h.jsxs)("div",{className:"form-input",children:[Object(h.jsx)("label",{children:"Name:"}),Object(h.jsx)("input",{type:"text",value:o,onChange:function(e){return t(e.target.value)}}),Object(h.jsx)("label",{children:b?"Qty:":"QtyX:"}),Object(h.jsx)("input",{type:"number",min:"1",max:"15",value:i,className:b?"":"err",onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("label",{children:"Min:"}),Object(h.jsx)("input",{type:"number",min:"-100000000",max:"100000000",value:s,onChange:function(e){return a(e.target.value)}}),Object(h.jsx)("label",{children:"Max:"}),Object(h.jsx)("input",{type:"number",min:"-100000000",max:"100000000",value:u,onChange:function(e){return c(e.target.value)}})]}),Object(h.jsxs)("div",{className:"factory-setting-buttons",children:[Object(h.jsx)(g.a,{variant:"contained",color:"primary",size:"small",className:j.button,startIcon:Object(h.jsx)(z.a,{}),onClick:r,children:"Save"}),Object(h.jsx)(g.a,{variant:"contained",color:"primary",size:"small",className:j.button,startIcon:Object(h.jsx)(M.a,{}),onClick:l,children:"Regenerate"})]})]})};n(101);var R=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),o=Object(i.a)(r,2),s=o[0],l=o[1],d=Object(a.useState)(0),j=Object(i.a)(d,2),b=j[0],f=j[1],m=Object(a.useState)(0),p=Object(i.a)(m,2),x=p[0],O=p[1],y=Object(a.useState)(""),g=Object(i.a)(y,2),N=g[0],S=g[1],C=Object(a.useState)([]),k=Object(i.a)(C,2),I=k[0],q=k[1];Object(a.useEffect)((function(){M()}),[]);var M=function(){u.a.get("https://pure-forest-64023.herokuapp.com/factories").then((function(e){q(e.data)}))},w=function(e){S(e);var t=function(e){for(var t=0;t<I.length;t++)if(I[t].id===e)return I[t];return null}(e);c(t.name),l(t.qty),f(t.min),O(t.max)};return Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)("div",{className:"factory-interface",children:[Object(h.jsx)("div",{className:"factory-list",children:Object(h.jsx)(v,{data:I,selectedId:function(e){w(e)},selected:""+N})}),Object(h.jsx)(F,{addFactory:function(){console.log(N);var e="New Factory";c(e),l(6),f(0),O(100),u.a.post("https://pure-forest-64023.herokuapp.com/create",{name:e,qty:6,min:0,max:100}).then((function(e){var t=e.data;S(t),M()}))},deleteFactory:function(){u.a.delete("https://pure-forest-64023.herokuapp.com/factories/".concat(N)),S(""),M()}})]}),Object(h.jsx)(E,{onChangeSetName:function(e){return c(e)},onChangeSetQty:function(e){return l(e)},onChangeSetMin:function(e){return f(e)},onChangeSetMax:function(e){return O(e)},updateFactory:function(){var e=n;""==e&&(e="Nameless Factory"),u.a.put("https://pure-forest-64023.herokuapp.com/factories/".concat(N),{name:e,qty:s,min:b,max:x}).then((function(){M()}))},onRegenFactorySeed:function(){u.a.put("https://pure-forest-64023.herokuapp.com/factories/regen/".concat(N),{}).then((function(){M()}))},currentId:N,factoryList:I,name:n,qty:s,min:b,max:x,selectedId:N})]})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(R,{})}),document.getElementById("root"))},49:function(e,t,n){},66:function(e,t,n){},94:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.509116e0.chunk.js.map