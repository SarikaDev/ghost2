(self.webpackChunkcnam=self.webpackChunkcnam||[]).push([[823],{8823:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return I}});var r=t(9439),i=t(2791),o=t(4554),a=t(890),c=t(3433),s=t(4942),u=t(3366),l=t(7462),d=t(8182),f=t(1184),p=t(8519),v=t(4419),m=t(6934),x=t(1402),h=t(3967);var Z=i.createContext(),g=t(5878),b=t(1217);function j(n){return(0,b.Z)("MuiGrid",n)}var w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],y=(0,g.Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,c.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(n){return"spacing-xs-".concat(n)}))),(0,c.Z)(["column-reverse","column","row-reverse","row"].map((function(n){return"direction-xs-".concat(n)}))),(0,c.Z)(["nowrap","wrap-reverse","wrap"].map((function(n){return"wrap-xs-".concat(n)}))),(0,c.Z)(w.map((function(n){return"grid-xs-".concat(n)}))),(0,c.Z)(w.map((function(n){return"grid-sm-".concat(n)}))),(0,c.Z)(w.map((function(n){return"grid-md-".concat(n)}))),(0,c.Z)(w.map((function(n){return"grid-lg-".concat(n)}))),(0,c.Z)(w.map((function(n){return"grid-xl-".concat(n)}))))),S=t(184),k=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function C(n){var e=parseFloat(n);return"".concat(e).concat(String(n).replace(String(e),"")||"px")}function M(n){var e=n.breakpoints,t=n.values,r="";Object.keys(t).forEach((function(n){""===r&&0!==t[n]&&(r=n)}));var i=Object.keys(e).sort((function(n,t){return e[n]-e[t]}));return i.slice(0,i.indexOf(r))}var z=(0,m.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState,r=t.container,i=t.direction,o=t.item,a=t.spacing,s=t.wrap,u=t.zeroMinWidth,l=t.breakpoints,d=[];r&&(d=function(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return[t["spacing-xs-".concat(String(n))]];var r=[];return e.forEach((function(e){var i=n[e];Number(i)>0&&r.push(t["spacing-".concat(e,"-").concat(String(i))])})),r}(a,l,e));var f=[];return l.forEach((function(n){var r=t[n];r&&f.push(e["grid-".concat(n,"-").concat(String(r))])})),[e.root,r&&e.container,o&&e.item,u&&e.zeroMinWidth].concat((0,c.Z)(d),["row"!==i&&e["direction-xs-".concat(String(i))],"wrap"!==s&&e["wrap-xs-".concat(String(s))]],f)}})((function(n){var e=n.ownerState;return(0,l.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})}),(function(n){var e=n.theme,t=n.ownerState,r=(0,f.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,f.k9)({theme:e},r,(function(n){var e={flexDirection:n};return 0===n.indexOf("column")&&(e["& > .".concat(y.item)]={maxWidth:"none"}),e}))}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,i=t.rowSpacing,o={};if(r&&0!==i){var a,c=(0,f.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof c&&(a=M({breakpoints:e.breakpoints.values,values:c})),o=(0,f.k9)({theme:e},c,(function(n,t){var r,i=e.spacing(n);return"0px"!==i?(0,s.Z)({marginTop:"-".concat(C(i))},"& > .".concat(y.item),{paddingTop:C(i)}):null!=(r=a)&&r.includes(t)?{}:(0,s.Z)({marginTop:0},"& > .".concat(y.item),{paddingTop:0})}))}return o}),(function(n){var e=n.theme,t=n.ownerState,r=t.container,i=t.columnSpacing,o={};if(r&&0!==i){var a,c=(0,f.P$)({values:i,breakpoints:e.breakpoints.values});"object"===typeof c&&(a=M({breakpoints:e.breakpoints.values,values:c})),o=(0,f.k9)({theme:e},c,(function(n,t){var r,i=e.spacing(n);return"0px"!==i?(0,s.Z)({width:"calc(100% + ".concat(C(i),")"),marginLeft:"-".concat(C(i))},"& > .".concat(y.item),{paddingLeft:C(i)}):null!=(r=a)&&r.includes(t)?{}:(0,s.Z)({width:"100%",marginLeft:0},"& > .".concat(y.item),{paddingLeft:0})}))}return o}),(function(n){var e,t=n.theme,r=n.ownerState;return t.breakpoints.keys.reduce((function(n,i){var o={};if(r[i]&&(e=r[i]),!e)return n;if(!0===e)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===e)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var a=(0,f.P$)({values:r.columns,breakpoints:t.breakpoints.values}),c="object"===typeof a?a[i]:a;if(void 0===c||null===c)return n;var s="".concat(Math.round(e/c*1e8)/1e6,"%"),u={};if(r.container&&r.item&&0!==r.columnSpacing){var d=t.spacing(r.columnSpacing);if("0px"!==d){var p="calc(".concat(s," + ").concat(C(d),")");u={flexBasis:p,maxWidth:p}}}o=(0,l.Z)({flexBasis:s,flexGrow:0,maxWidth:s},u)}return 0===t.breakpoints.values[i]?Object.assign(n,o):n[t.breakpoints.up(i)]=o,n}),{})}));var F=function(n){var e=n.classes,t=n.container,r=n.direction,i=n.item,o=n.spacing,a=n.wrap,s=n.zeroMinWidth,u=n.breakpoints,l=[];t&&(l=function(n,e){if(!n||n<=0)return[];if("string"===typeof n&&!Number.isNaN(Number(n))||"number"===typeof n)return["spacing-xs-".concat(String(n))];var t=[];return e.forEach((function(e){var r=n[e];if(Number(r)>0){var i="spacing-".concat(e,"-").concat(String(r));t.push(i)}})),t}(o,u));var d=[];u.forEach((function(e){var t=n[e];t&&d.push("grid-".concat(e,"-").concat(String(t)))}));var f={root:["root",t&&"container",i&&"item",s&&"zeroMinWidth"].concat((0,c.Z)(l),["row"!==r&&"direction-xs-".concat(String(r)),"wrap"!==a&&"wrap-xs-".concat(String(a))],d)};return(0,v.Z)(f,j,e)},N=i.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiGrid"}),r=(0,h.Z)().breakpoints,o=(0,p.Z)(t),a=o.className,c=o.columns,s=o.columnSpacing,f=o.component,v=void 0===f?"div":f,m=o.container,g=void 0!==m&&m,b=o.direction,j=void 0===b?"row":b,w=o.item,y=void 0!==w&&w,C=o.rowSpacing,M=o.spacing,N=void 0===M?0:M,E=o.wrap,A=void 0===E?"wrap":E,W=o.zeroMinWidth,R=void 0!==W&&W,P=(0,u.Z)(o,k),H=C||N,B=s||N,T=i.useContext(Z),O=g?c||12:T,L={},V=(0,l.Z)({},P);r.keys.forEach((function(n){null!=P[n]&&(L[n]=P[n],delete V[n])}));var _=(0,l.Z)({},o,{columns:O,container:g,direction:j,item:y,rowSpacing:H,columnSpacing:B,wrap:A,zeroMinWidth:R,spacing:N},L,{breakpoints:r.keys}),G=F(_);return(0,S.jsx)(Z.Provider,{value:O,children:(0,S.jsx)(z,(0,l.Z)({ownerState:_,className:(0,d.Z)(G.root,a),as:v,ref:e},V))})})),E=N,A=t(7621),W=t(9504);function R(n){return(0,b.Z)("MuiCardActions",n)}(0,g.Z)("MuiCardActions",["root","spacing"]);var P=["disableSpacing","className"],H=(0,m.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,!t.disableSpacing&&e.spacing]}})((function(n){var e=n.ownerState;return(0,l.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})})),B=i.forwardRef((function(n,e){var t=(0,x.Z)({props:n,name:"MuiCardActions"}),r=t.disableSpacing,i=void 0!==r&&r,o=t.className,a=(0,u.Z)(t,P),c=(0,l.Z)({},t,{disableSpacing:i}),s=function(n){var e=n.classes,t={root:["root",!n.disableSpacing&&"spacing"]};return(0,v.Z)(t,R,e)}(c);return(0,S.jsx)(H,(0,l.Z)({className:(0,d.Z)(s.root,o),ownerState:c,ref:e},a))})),T=t(6151),O=t(9568),L=t(5461),V=t(9027),_=t(4524),G=t(1164),D=t(7689),I=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],c=e[1],s=function(){return c(!0)},u=(0,D.s0)(),l=JSON.parse(sessionStorage.getItem("auth"));return(0,i.useEffect)((function(){null!=l?(null===l.verificationResult&&u("/"),!1!==l.verificationResult&&l.verificationResult||u("/")):null===l&&u("/")}),[]),(0,S.jsxs)("div",{style:{position:"relative"},children:[(0,S.jsx)(L.Z,{open:t,onClose:function(){return c(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:(0,S.jsxs)(o.Z,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},children:[(0,S.jsx)(a.Z,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Demo Service"}),(0,S.jsx)(a.Z,{id:"modal-modal-description",sx:{mt:2},children:"For Testing."})]})}),(0,S.jsx)(a.Z,{variant:"h6",sx:{mb:3},textAlign:"left",fontFamily:"sans-serif",color:"#F1AB15",children:"Services"}),(0,S.jsx)(E,{container:!0,children:(0,S.jsxs)(E,{container:!0,display:"flex",justifyContent:"space-between",flexWrap:"wrap",children:[(0,S.jsx)(E,{item:!0,children:(0,S.jsx)(A.Z,{sx:{width:"12rem"},children:(0,S.jsxs)(W.Z,{sx:{border:"1px solid burlywood",backgroundColor:"#EFEFF1"},children:[(0,S.jsx)(o.Z,{style:{textAlign:"center"},children:(0,S.jsx)(O.Z,{style:{height:"2rem",width:"2rem"}})}),(0,S.jsx)(a.Z,{gutterBottom:!0,variant:"h7",component:"div",marginTop:"1rem",style:{textAlign:"center"},children:"Documents"}),(0,S.jsx)(a.Z,{variant:"body2",color:"text.secondary"}),(0,S.jsx)(B,{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(T.Z,{size:"small",variant:"outlined",onClick:s,children:"Start Service"})})]})})}),(0,S.jsx)(E,{item:!0,children:(0,S.jsx)(A.Z,{sx:{width:"12rem"},children:(0,S.jsxs)(W.Z,{sx:{border:"1px solid burlywood",backgroundColor:"#EFEFF1"},children:[(0,S.jsx)(o.Z,{style:{textAlign:"center"},children:(0,S.jsx)(G.Z,{style:{height:"2rem",width:"2rem"}})}),(0,S.jsx)(a.Z,{gutterBottom:!0,variant:"h7",component:"div",marginTop:"1rem",style:{textAlign:"center"},children:"UseFull Links"}),(0,S.jsx)(a.Z,{variant:"body2",color:"text.secondary"}),(0,S.jsx)(B,{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(T.Z,{size:"small",variant:"outlined",onClick:s,children:"Start Service"})})]})})}),(0,S.jsx)(E,{item:!0,children:(0,S.jsx)(A.Z,{sx:{width:"12rem"},children:(0,S.jsxs)(W.Z,{sx:{border:"1px solid burlywood",backgroundColor:"#EFEFF1"},children:[(0,S.jsx)(o.Z,{style:{textAlign:"center"},children:(0,S.jsx)(V.Z,{style:{height:"2rem",width:"2rem"}})}),(0,S.jsx)(a.Z,{gutterBottom:!0,variant:"h7",component:"div",marginTop:"1rem",style:{textAlign:"center"},children:"News"}),(0,S.jsx)(a.Z,{variant:"body2",color:"text.secondary"}),(0,S.jsx)(B,{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(T.Z,{size:"small",variant:"outlined",onClick:s,children:"Start Service"})})]})})}),(0,S.jsx)(E,{item:!0,children:(0,S.jsx)(A.Z,{sx:{width:"12rem"},children:(0,S.jsxs)(W.Z,{sx:{border:"1px solid burlywood",backgroundColor:"#EFEFF1"},children:[(0,S.jsx)(o.Z,{style:{textAlign:"center"},children:(0,S.jsx)(_.Z,{style:{height:"2rem",width:"2rem"}})}),(0,S.jsx)(a.Z,{gutterBottom:!0,variant:"h7",component:"div",marginTop:"1rem",style:{textAlign:"center"},children:"Other Services"}),(0,S.jsx)(a.Z,{variant:"body2",color:"text.secondary"}),(0,S.jsx)(B,{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(T.Z,{size:"small",variant:"outlined",onClick:s,children:"more"})})]})})})]})}),(0,S.jsx)(a.Z,{textAlign:"left",variant:"h6",sx:{mt:3,mb:3},fontFamily:"sans-serif",color:"#F1AB15",children:"Recently Used"}),(0,S.jsx)(E,{container:!0,children:(0,S.jsx)(E,{container:!0,display:"flex",justifyContent:"flex-start",gap:2,sx:{pl:1},children:(0,S.jsx)(E,{item:!0,children:(0,S.jsx)(A.Z,{sx:{width:"12rem"},children:(0,S.jsxs)(W.Z,{sx:{border:"1px solid burlywood",backgroundColor:"#EFEFF1"},children:[(0,S.jsx)(o.Z,{style:{textAlign:"center"},children:(0,S.jsx)(O.Z,{style:{height:"2rem",width:"2rem"}})}),(0,S.jsx)(a.Z,{gutterBottom:!0,variant:"h7",component:"div",marginTop:"1rem",style:{textAlign:"center"},children:"Documents"}),(0,S.jsx)(a.Z,{variant:"body2",color:"text.secondary"}),(0,S.jsx)(B,{style:{display:"flex",justifyContent:"center"},children:(0,S.jsx)(T.Z,{size:"small",variant:"outlined",onClick:s,children:"Start Service"})})]})})})})})]})}},9027:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)([(0,o.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"},"0"),(0,o.jsx)("path",{d:"M14 17H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"},"1")],"ArticleOutlined");e.Z=a},4524:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"}),"ControlPoint");e.Z=a},9568:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"}),"Description");e.Z=a},1164:function(n,e,t){"use strict";var r=t(4836);e.Z=void 0;var i=r(t(5649)),o=t(184),a=(0,i.default)((0,o.jsx)("path",{d:"M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"}),"Link");e.Z=a},5649:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return r.createSvgIcon}});var r=t(4454)},9504:function(n,e,t){"use strict";t.d(e,{Z:function(){return x}});var r=t(7462),i=t(3366),o=t(2791),a=t(8182),c=t(4419),s=t(6934),u=t(1402),l=t(5878),d=t(1217);function f(n){return(0,d.Z)("MuiCardContent",n)}(0,l.Z)("MuiCardContent",["root"]);var p=t(184),v=["className","component"],m=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),x=o.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiCardContent"}),o=t.className,s=t.component,l=void 0===s?"div":s,d=(0,i.Z)(t,v),x=(0,r.Z)({},t,{component:l}),h=function(n){var e=n.classes;return(0,c.Z)({root:["root"]},f,e)}(x);return(0,p.jsx)(m,(0,r.Z)({as:l,className:(0,a.Z)(h.root,o),ownerState:x,ref:e},d))}))},7621:function(n,e,t){"use strict";t.d(e,{Z:function(){return h}});var r=t(7462),i=t(3366),o=t(2791),a=t(8182),c=t(4419),s=t(6934),u=t(1402),l=t(5527),d=t(5878),f=t(1217);function p(n){return(0,f.Z)("MuiCard",n)}(0,d.Z)("MuiCard",["root"]);var v=t(184),m=["className","raised"],x=(0,s.ZP)(l.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(n,e){return e.root}})((function(){return{overflow:"hidden"}})),h=o.forwardRef((function(n,e){var t=(0,u.Z)({props:n,name:"MuiCard"}),o=t.className,s=t.raised,l=void 0!==s&&s,d=(0,i.Z)(t,m),f=(0,r.Z)({},t,{raised:l}),h=function(n){var e=n.classes;return(0,c.Z)({root:["root"]},p,e)}(f);return(0,v.jsx)(x,(0,r.Z)({className:(0,a.Z)(h.root,o),elevation:l?8:void 0,ref:e,ownerState:f},d))}))},4454:function(n,e,t){"use strict";t.r(e),t.d(e,{capitalize:function(){return i.Z},createChainedFunction:function(){return o},createSvgIcon:function(){return a.Z},debounce:function(){return c.Z},deprecatedPropType:function(){return s},isMuiElement:function(){return u.Z},ownerDocument:function(){return l.Z},ownerWindow:function(){return d.Z},requirePropFactory:function(){return f},setRef:function(){return p},unstable_ClassNameGenerator:function(){return j},unstable_useEnhancedEffect:function(){return v.Z},unstable_useId:function(){return m},unsupportedProp:function(){return x},useControlled:function(){return h.Z},useEventCallback:function(){return Z.Z},useForkRef:function(){return g.Z},useIsFocusVisible:function(){return b.Z}});var r=t(5902),i=t(4036),o=t(8949).Z,a=t(9201),c=t(3199);var s=function(n,e){return function(){return null}},u=t(9103),l=t(8301),d=t(7602);t(7462);var f=function(n,e){return function(){return null}},p=t(2971).Z,v=t(162),m=t(6248).Z;var x=function(n,e,t,r,i){return null},h=t(8744),Z=t(9683),g=t(2071),b=t(3031),j={configure:function(n){r.Z.configure(n)}}},4836:function(n){n.exports=function(n){return n&&n.__esModule?n:{default:n}},n.exports.__esModule=!0,n.exports.default=n.exports}}]);
//# sourceMappingURL=823.977f5801.chunk.js.map