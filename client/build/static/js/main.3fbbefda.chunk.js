(this["webpackJsonpvikingsasquatch-factory-tree"]=this["webpackJsonpvikingsasquatch-factory-tree"]||[]).push([[0],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(15),r=a.n(s),i=a(17),o=(a(70),a(27)),l=a.n(o),d=(a(89),a(125)),u=a(127),j=a(51),b=a.n(j),m=a(52),h=a.n(m),f=a(128),x=a(54),O=a.n(x),p=a(53),v=a.n(p),g=a(2),y=a(91),N=Object(d.a)({root:{height:"auto",flexGrow:1,margin:"1em",color:"white"}}),S=Object(d.a)({root:{marginRight:"5px"}}),C=function(e,t,a){return Math.floor(e()*(a-t+1))+t},I=function(e){for(var t=y(e.gentime),a=[],n=0;n<e.qty;n++)a.push(C(t,e.min,e.max));return a},k=function(e){var t=e.data,a=e.selectedId,n=e.selected,c=N(),s=S();return"undefined"===typeof t?Object(g.jsx)("div",{}):Object(g.jsx)(u.a,{classes:{root:c.root},defaultCollapseIcon:Object(g.jsx)(b.a,{}),defaultExpandIcon:Object(g.jsx)(h.a,{}),selected:n,children:Object(g.jsx)(f.a,{label:Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)(v.a,{className:s.root}),"Main"]}),nodeId:"main",children:t.map((function(e,t){return Object(g.jsx)(f.a,{nodeId:""+e.id,label:Object(g.jsxs)("div",{className:"d-flex",children:[Object(g.jsx)(O.a,{className:s.root}),e.name]}),onClick:function(){return a(e.id)},children:I(e).map((function(e,t){return Object(g.jsx)(f.a,{nodeId:e.id+"-1",label:""+e},t)}))},t)}))})})},M=(a(105),a(49),a(129)),F=a(56),q=a.n(F),w=a(55),z=a.n(w),R=a(57),E=a.n(R),Q=Object(d.a)((function(e){return{button:{margin:e.spacing(1)}}})),T=function(e){var t=e.addFactory,a=e.deleteFactory,n=e.onRegenFactorySeed,c=e.selectedId,s=Q();return Object(g.jsxs)("div",{className:"interface-card",children:[Object(g.jsx)(M.a,{variant:"contained",color:"primary",className:s.button,startIcon:Object(g.jsx)(z.a,{}),onClick:t,size:"small",children:"Add"}),Object(g.jsx)(M.a,{variant:"contained",color:"secondary",className:s.button,disabled:""==c,startIcon:Object(g.jsx)(q.a,{}),onClick:a,size:"small",children:"Delete"}),Object(g.jsx)(M.a,{variant:"contained",color:"primary",size:"small",className:s.button,disabled:""==c,startIcon:Object(g.jsx)(E.a,{}),onClick:n,children:"Regenerate"})]})},A=a(58),J=a(60),L=a.n(J),B=a(61),D=a.n(B),G=a(59),H=a.n(G),K=Object(d.a)((function(e){return{button:{margin:e.spacing(1)},check:{color:"#0da8a4"}}})),P=function(e){var t=e.onChangeSetName,a=e.onChangeSetQty,c=e.onChangeSetMin,s=e.onChangeSetMax,r=(e.updateFactory,e.name),o=e.qty,l=e.min,d=e.max,u=e.selectedId,j=K(),b=Object(n.useState)(!1),m=Object(i.a)(b,2),h=m[0],f=m[1];if(""==u)return Object(g.jsx)("div",{id:"popupedit",className:"popup",children:Object(g.jsxs)("div",{className:"d-flex-justify-align",children:[Object(g.jsx)("p",{className:"initalText",children:"Add a factory or select one from the tree to edit."}),Object(g.jsx)(H.a,{})]})});var x=o>0&&o<=15,O=r.length>=1&&r.length<=30,p=l>-1e8&&l<1e8&&""!==l,v=l>-1e8&&d<1e8&&l<d&&""!==d,y=x&&O&&p&&v;return Object(g.jsxs)("div",{id:"popupedit",className:"popup",children:[Object(g.jsx)("h2",{children:"Factory Settings"}),Object(g.jsx)("p",{children:"To edit a factory, select it from the tree and update its settings below."}),Object(g.jsx)("hr",{}),Object(g.jsxs)("div",{className:"form-input",children:[Object(g.jsxs)("div",{className:"label-cage",children:[Object(g.jsx)("label",{children:"Name"}),O?"":Object(g.jsx)("div",{className:"errMsg",children:"invalid name"})]}),Object(g.jsx)("input",{type:"text",maxLength:"30",value:r,className:O?"":"err",onChange:function(e){return t(e.target.value)}}),Object(g.jsxs)("div",{className:"label-cage",children:[Object(g.jsx)("label",{children:"Qty"}),x?"":Object(g.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(g.jsx)("input",{type:"number",min:"1",max:"15",value:o,className:x?"":"err",onChange:function(e){return a(e.target.value)}}),Object(g.jsxs)("div",{className:"label-cage",children:[Object(g.jsx)("label",{children:"Min"}),p?"":Object(g.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(g.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:p?"":"err",value:l,onChange:function(e){return c(e.target.value)}}),Object(g.jsxs)("div",{className:"label-cage",children:[Object(g.jsx)("label",{children:"Max"}),v?"":Object(g.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(g.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:v?"":"err",value:d,onChange:function(e){return s(e.target.value)}})]}),Object(g.jsxs)("div",{className:"factory-setting-buttons",children:[Object(g.jsx)(M.a,{variant:"contained",color:"primary",size:"small",disabled:!y,className:j.button,startIcon:Object(g.jsx)(L.a,{}),onClick:f(!0),children:"Save"}),Object(g.jsx)(D.a,Object(A.a)({className:h?setTimeout((function(){return"visible"}),500):"hidden"},"className",j.check))]})]})};a(106);var U=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(0),r=Object(i.a)(s,2),o=r[0],d=r[1],u=Object(n.useState)(0),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(0),f=Object(i.a)(h,2),x=f[0],O=f[1],p=Object(n.useState)(""),v=Object(i.a)(p,2),y=v[0],N=v[1],S=Object(n.useState)([]),C=Object(i.a)(S,2),I=C[0],M=C[1];Object(n.useEffect)((function(){F()}),[]);var F=function(){l.a.get("https://pure-forest-64023.herokuapp.com/factories").then((function(e){M(e.data)}))},q=function(e){N(e);var t=function(e){for(var t=0;t<I.length;t++)if(I[t].id===e)return I[t];return null}(e);c(t.name),d(t.qty),m(t.min),O(t.max)};return Object(g.jsx)("div",{className:"container",children:Object(g.jsxs)("div",{className:"groupContainer",children:[Object(g.jsxs)("div",{className:"factory-interface",children:[Object(g.jsx)("div",{className:"factory-list",children:Object(g.jsx)(k,{data:I,selectedId:function(e){q(e)},selected:""+y})}),Object(g.jsx)(T,{addFactory:function(){console.log(y);var e="New Factory";c(e),d(6),m(0),O(100),l.a.post("https://pure-forest-64023.herokuapp.com/create",{name:e,qty:6,min:0,max:100}).then((function(e){var t=e.data;N(t),F()}))},deleteFactory:function(){l.a.delete("https://pure-forest-64023.herokuapp.com/factories/".concat(y)),N(""),F()},onRegenFactorySeed:function(){l.a.put("https://pure-forest-64023.herokuapp.com/factories/regen/".concat(y),{}).then((function(){F()}))},selectedId:y})]}),Object(g.jsx)(P,{onChangeSetName:function(e){return c(e)},onChangeSetQty:function(e){return d(e)},onChangeSetMin:function(e){return m(e)},onChangeSetMax:function(e){return O(e)},updateFactory:function(){var e=a;""==e&&(e="Nameless Factory"),l.a.put("https://pure-forest-64023.herokuapp.com/factories/".concat(y),{name:e,qty:o,min:b,max:x}).then((function(){F()}))},currentId:y,factoryList:I,name:a,qty:o,min:b,max:x,selectedId:y})]})})};r.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)(U,{})}),document.getElementById("root"))},49:function(e,t,a){},70:function(e,t,a){},89:function(e,t,a){},99:function(e,t){}},[[107,1,2]]]);
//# sourceMappingURL=main.3fbbefda.chunk.js.map