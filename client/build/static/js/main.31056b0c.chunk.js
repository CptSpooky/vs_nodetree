(this["webpackJsonpvikingsasquatch-factory-tree"]=this["webpackJsonpvikingsasquatch-factory-tree"]||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(12),o=n.n(r),i=n(17),s=(n(66),n(27)),u=n.n(s),l=n(120),j=n(122),d=n(51),b=n.n(d),f=n(52),m=n.n(f),h=n(123),p=n(2),x=n(86),O=Object(l.a)({root:{height:"auto",flexGrow:1,maxWidth:300}}),v=function(e){for(var t=x(e.gentime),n=[],a=0;a<e.qty;a++)n.push(Math.floor(t()*(e.max-e.min))+e.min);return n},y=function(e){var t=e.data,n=e.selectedId,a=e.selected,c=O();return"undefined"===typeof t?Object(p.jsx)("div",{}):Object(p.jsx)(j.a,{className:c.root,defaultCollapseIcon:Object(p.jsx)(b.a,{}),defaultExpandIcon:Object(p.jsx)(m.a,{}),selected:a,children:t.map((function(e,t){return Object(p.jsx)(h.a,{nodeId:""+e.id,label:e.name,onClick:function(){return n(e.id)},children:v(e).map((function(e,t){return Object(p.jsx)(h.a,{nodeId:e.id+"-1",label:"value "+e},t)}))},t)}))})},g=(n(100),n(49),n(124)),S=n(54),C=n.n(S),N=n(53),k=n.n(N),I=Object(l.a)((function(e){return{button:{margin:e.spacing(1)}}})),F=function(e){var t=e.addFactory,n=e.deleteFactory,a=I();return Object(p.jsxs)("div",{className:"interface-card",children:[Object(p.jsx)(g.a,{variant:"contained",color:"primary",className:a.button,startIcon:Object(p.jsx)(k.a,{}),onClick:t,size:"small",children:"Add"}),Object(p.jsx)(g.a,{variant:"contained",color:"secondary",className:a.button,startIcon:Object(p.jsx)(C.a,{}),onClick:n,size:"small",children:"Delete"})]})},q=n(56),M=n.n(q),w=n(55),z=n.n(w),E=Object(l.a)((function(e){return{button:{margin:e.spacing(1)}}})),Q=function(e){var t=e.onChangeSetName,n=e.onChangeSetQty,a=e.onChangeSetMin,c=e.onChangeSetMax,r=e.updateFactory,o=e.name,i=e.qty,s=e.min,u=e.max,l=e.onRegenFactorySeed,j=(e.selectedId,E());return Object(p.jsxs)("div",{id:"popupedit",className:"popup",children:[Object(p.jsx)("h2",{children:"Factory Settings"}),Object(p.jsx)("p",{children:"To edit a factory, select it from the tree and update its settings below."}),Object(p.jsxs)("div",{className:"form-input",children:[Object(p.jsx)("label",{children:"Name:"}),Object(p.jsx)("input",{type:"text",value:o,onChange:function(e){return t(e.target.value)}}),Object(p.jsx)("label",{children:"Qty:"}),Object(p.jsx)("input",{type:"number",min:"1",max:"15",value:i,onChange:function(e){return n(e.target.value)}}),Object(p.jsx)("label",{children:"Min:"}),Object(p.jsx)("input",{type:"number",min:"-100000000",max:"100000000",value:s,onChange:function(e){return a(e.target.value)}}),Object(p.jsx)("label",{children:"Max:"}),Object(p.jsx)("input",{type:"number",min:"-100000000",max:"100000000",value:u,onChange:function(e){return c(e.target.value)}})]}),Object(p.jsxs)("div",{className:"factory-setting-buttons",children:[Object(p.jsx)(g.a,{variant:"contained",color:"primary",size:"small",className:j.button,startIcon:Object(p.jsx)(z.a,{}),onClick:r,children:"Save"}),Object(p.jsx)(g.a,{variant:"contained",color:"primary",size:"small",className:j.button,startIcon:Object(p.jsx)(M.a,{}),onClick:l,children:"Regenerate"})]})]})};n(101);var R=function(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(0),o=Object(i.a)(r,2),s=o[0],l=o[1],j=Object(a.useState)(0),d=Object(i.a)(j,2),b=d[0],f=d[1],m=Object(a.useState)(0),h=Object(i.a)(m,2),x=h[0],O=h[1],v=Object(a.useState)(""),g=Object(i.a)(v,2),S=g[0],C=g[1],N=Object(a.useState)([]),k=Object(i.a)(N,2),I=k[0],q=k[1];Object(a.useEffect)((function(){M()}),[]);var M=function(){u.a.get("https://pure-forest-64023.herokuapp.com/factories").then((function(e){q(e.data)}))},w=function(e){C(e);var t=function(e){for(var t=0;t<I.length;t++)if(I[t].id===e)return I[t];return null}(e);c(t.name),l(t.qty),f(t.min),O(t.max)};return Object(p.jsxs)("div",{className:"container",children:[Object(p.jsxs)("div",{className:"factory-interface",children:[Object(p.jsx)("div",{className:"factory-list",children:Object(p.jsx)(y,{data:I,selectedId:function(e){w(e)},selected:""+S})}),Object(p.jsx)(F,{addFactory:function(){console.log(S);var e="New Factory";c(e),l(6),f(0),O(100),u.a.post("https://pure-forest-64023.herokuapp.com/create",{name:e,qty:6,min:0,max:100}).then((function(e){var t=e.data;C(t),M()}))},deleteFactory:function(){u.a.delete("https://pure-forest-64023.herokuapp.com/factories/".concat(S)),M()}})]}),Object(p.jsx)(Q,{onChangeSetName:function(e){return c(e)},onChangeSetQty:function(e){return l(e)},onChangeSetMin:function(e){return f(e)},onChangeSetMax:function(e){return O(e)},updateFactory:function(){var e=n;""==e&&(e="Nameless Factory"),u.a.put("https://pure-forest-64023.herokuapp.com/factories/".concat(S),{name:e,qty:s,min:b,max:x}).then((function(){M()}))},onRegenFactorySeed:function(){u.a.put("https://pure-forest-64023.herokuapp.com/factories/regen/".concat(S),{}).then((function(){M()}))},currentId:S,factoryList:I,name:n,qty:s,min:b,max:x,selectedId:S})]})};o.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root"))},49:function(e,t,n){},66:function(e,t,n){},94:function(e,t){}},[[102,1,2]]]);
//# sourceMappingURL=main.31056b0c.chunk.js.map