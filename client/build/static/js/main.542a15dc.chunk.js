(this["webpackJsonpvikingsasquatch-factory-tree"]=this["webpackJsonpvikingsasquatch-factory-tree"]||[]).push([[0],{104:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),s=a.n(r),i=a(17),o=(a(69),a(27)),l=a.n(o),d=(a(88),a(124)),u=a(126),j=a(51),b=a.n(j),m=a(52),h=a.n(m),f=a(127),x=a(54),O=a.n(x),p=a(53),g=a.n(p),v=a(2),y=a(90),N=Object(d.a)({root:{height:"auto",flexGrow:1,margin:"1em",color:"white"}}),S=Object(d.a)({root:{marginRight:"5px"}}),C=function(e,t,a){return Math.floor(e()*(a-t+1))+t},I=function(e){for(var t=y(e.gentime),a=[],n=0;n<e.qty;n++)a.push(C(t,e.min,e.max));return a},k=function(e){var t=e.data,a=e.selectedId,n=e.selected,c=N(),r=S();return"undefined"===typeof t?Object(v.jsx)("div",{}):Object(v.jsx)(u.a,{classes:{root:c.root},defaultCollapseIcon:Object(v.jsx)(b.a,{}),defaultExpandIcon:Object(v.jsx)(h.a,{}),selected:n,children:Object(v.jsx)(f.a,{label:Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsx)(g.a,{className:r.root}),"Main"]}),nodeId:"main",children:t.map((function(e,t){return Object(v.jsx)(f.a,{nodeId:""+e.id,label:Object(v.jsxs)("div",{className:"d-flex",children:[Object(v.jsx)(O.a,{className:r.root}),e.name]}),onClick:function(){return a(e.id)},children:I(e).map((function(e,t){return Object(v.jsx)(f.a,{nodeId:e.id+"-1",label:""+e},t)}))},t)}))})})},M=(a(104),a(49),a(128)),F=a(56),q=a.n(F),w=a(55),z=a.n(w),R=a(57),E=a.n(R),Q=Object(d.a)((function(e){return{button:{margin:e.spacing(1)}}})),T=function(e){var t=e.addFactory,a=e.deleteFactory,n=e.onRegenFactorySeed,c=e.selectedId,r=Q();return Object(v.jsxs)("div",{className:"interface-card",children:[Object(v.jsx)(M.a,{variant:"contained",color:"primary",className:r.button,startIcon:Object(v.jsx)(z.a,{}),onClick:t,size:"small",children:"Add"}),Object(v.jsx)(M.a,{variant:"contained",color:"secondary",className:r.button,disabled:""==c,startIcon:Object(v.jsx)(q.a,{}),onClick:a,size:"small",children:"Delete"}),Object(v.jsx)(M.a,{variant:"contained",color:"primary",size:"small",className:r.button,disabled:""==c,startIcon:Object(v.jsx)(E.a,{}),onClick:n,children:"Regenerate"})]})},A=a(59),J=a.n(A),L=a(60),B=a.n(L),D=a(58),G=a.n(D),H=Object(d.a)((function(e){return{button:{margin:e.spacing(1)},check:{color:"#0da8a4"},arrow:{color:"#990146",fontSize:"2.5em"}}})),K=function(e){var t=e.onChangeSetName,a=e.onChangeSetQty,c=e.onChangeSetMin,r=e.onChangeSetMax,s=(e.updateFactory,e.name),o=e.qty,l=e.min,d=e.max,u=e.selectedId,j=H(),b=Object(n.useState)(!1),m=Object(i.a)(b,2),h=m[0],f=m[1];if(""==u)return Object(v.jsx)("div",{id:"popupedit",className:"popup",children:Object(v.jsxs)("div",{className:"d-flex-justify-align",children:[Object(v.jsx)("p",{className:"initalText",children:"Add a factory or select one from the tree to edit."}),Object(v.jsx)(G.a,{})]})});var x=o>0&&o<=15,O=s.length>=1&&s.length<=30,p=l>-1e8&&l<1e8&&""!==l,g=l>-1e8&&d<1e8&&l<d&&""!==d,y=x&&O&&p&&g;return Object(v.jsxs)("div",{id:"popupedit",className:"popup",children:[Object(v.jsx)("h2",{children:"Factory Settings"}),Object(v.jsx)("p",{children:"To edit a factory, select it from the tree and update its settings below."}),Object(v.jsx)("hr",{}),Object(v.jsxs)("div",{className:"form-input",children:[Object(v.jsxs)("div",{className:"label-cage",children:[Object(v.jsx)("label",{children:"Name"}),O?"":Object(v.jsx)("div",{className:"errMsg",children:"invalid name"})]}),Object(v.jsx)("input",{type:"text",maxLength:"30",value:s,className:O?"":"err",onChange:function(e){return t(e.target.value)}}),Object(v.jsxs)("div",{className:"label-cage",children:[Object(v.jsx)("label",{children:"Qty"}),x?"":Object(v.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(v.jsx)("input",{type:"number",min:"1",max:"15",value:o,className:x?"":"err",onChange:function(e){return a(e.target.value)}}),Object(v.jsxs)("div",{className:"label-cage",children:[Object(v.jsx)("label",{children:"Min"}),p?"":Object(v.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(v.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:p?"":"err",value:l,onChange:function(e){return c(e.target.value)}}),Object(v.jsxs)("div",{className:"label-cage",children:[Object(v.jsx)("label",{children:"Max"}),g?"":Object(v.jsx)("div",{className:"errMsg",children:"value out of range"})]}),Object(v.jsx)("input",{type:"number",min:"-100000000",max:"100000000",className:g?"":"err",value:d,onChange:function(e){return r(e.target.value)}})]}),Object(v.jsxs)("div",{className:"factory-setting-buttons",children:[Object(v.jsx)(M.a,{variant:"contained",color:"primary",size:"small",disabled:!y,className:j.button,startIcon:Object(v.jsx)(J.a,{}),onClick:f(!0),children:"Save"}),Object(v.jsx)(B.a,{className:h?setTimeout((function(){return j.check}),500):"hidden"})]})]})};a(105);var P=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),s=Object(i.a)(r,2),o=s[0],d=s[1],u=Object(n.useState)(0),j=Object(i.a)(u,2),b=j[0],m=j[1],h=Object(n.useState)(0),f=Object(i.a)(h,2),x=f[0],O=f[1],p=Object(n.useState)(""),g=Object(i.a)(p,2),y=g[0],N=g[1],S=Object(n.useState)([]),C=Object(i.a)(S,2),I=C[0],M=C[1];Object(n.useEffect)((function(){F()}),[]);var F=function(){l.a.get("https://pure-forest-64023.herokuapp.com/factories").then((function(e){M(e.data)}))},q=function(e){N(e);var t=function(e){for(var t=0;t<I.length;t++)if(I[t].id===e)return I[t];return null}(e);c(t.name),d(t.qty),m(t.min),O(t.max)};return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"groupContainer",children:[Object(v.jsxs)("div",{className:"factory-interface",children:[Object(v.jsx)("div",{className:"factory-list",children:Object(v.jsx)(k,{data:I,selectedId:function(e){q(e)},selected:""+y})}),Object(v.jsx)(T,{addFactory:function(){console.log(y);var e="New Factory";c(e),d(6),m(0),O(100),l.a.post("https://pure-forest-64023.herokuapp.com/create",{name:e,qty:6,min:0,max:100}).then((function(e){var t=e.data;N(t),F()}))},deleteFactory:function(){l.a.delete("https://pure-forest-64023.herokuapp.com/factories/".concat(y)),N(""),F()},onRegenFactorySeed:function(){l.a.put("https://pure-forest-64023.herokuapp.com/factories/regen/".concat(y),{}).then((function(){F()}))},selectedId:y})]}),Object(v.jsx)(K,{onChangeSetName:function(e){return c(e)},onChangeSetQty:function(e){return d(e)},onChangeSetMin:function(e){return m(e)},onChangeSetMax:function(e){return O(e)},updateFactory:function(){var e=a;""==e&&(e="Nameless Factory"),l.a.put("https://pure-forest-64023.herokuapp.com/factories/".concat(y),{name:e,qty:o,min:b,max:x}).then((function(){F()}))},currentId:y,factoryList:I,name:a,qty:o,min:b,max:x,selectedId:y})]})})};s.a.render(Object(v.jsx)(c.a.StrictMode,{children:Object(v.jsx)(P,{})}),document.getElementById("root"))},49:function(e,t,a){},69:function(e,t,a){},88:function(e,t,a){},98:function(e,t){}},[[106,1,2]]]);
//# sourceMappingURL=main.542a15dc.chunk.js.map