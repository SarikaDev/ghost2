"use strict";(self.webpackChunkcnam=self.webpackChunkcnam||[]).push([[687],{687:function(e,t,n){n.r(t);var r=n(3967),o=n(5527),a=n(1582),i=n(890),c=n(184);t.default=function(){var e=(0,r.Z)();return(0,c.jsx)(o.Z,{elevation:5,marginY:2,sx:{borderBottom:"3px solid ".concat(e.palette.primary.main),borderTop:"3px solid ".concat(e.palette.primary.main)},children:(0,c.jsx)(a.Z,{justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 10px)",children:(0,c.jsxs)(i.Z,{variant:"h5",component:"h2",color:function(e){return e.palette.primary.main},textTransform:"uppercase",fontWeight:600,letterSpacing:3,children:[(0,c.jsx)("span",{style:{color:"red"},children:" 404 Error "})," - Page Not Found"]})})})}},5527:function(e,t,n){n.d(t,{Z:function(){return Z}});var r=n(3366),o=n(7462),a=n(2791),i=n(8182),c=n(4419),l=n(2065),u=n(6934),s=function(e){return((e<1?5.11916*Math.pow(e,2):4.5*Math.log(e+1)+2)/100).toFixed(2)},v=n(1402),p=n(5878),d=n(1217);function m(e){return(0,d.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var f=n(184),h=["className","component","elevation","square","variant"],g=(0,u.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,t[n.variant],!n.square&&t.rounded,"elevation"===n.variant&&t["elevation".concat(n.elevation)]]}})((function(e){var t,n=e.theme,r=e.ownerState;return(0,o.Z)({backgroundColor:(n.vars||n).palette.background.paper,color:(n.vars||n).palette.text.primary,transition:n.transitions.create("box-shadow")},!r.square&&{borderRadius:n.shape.borderRadius},"outlined"===r.variant&&{border:"1px solid ".concat((n.vars||n).palette.divider)},"elevation"===r.variant&&(0,o.Z)({boxShadow:(n.vars||n).shadows[r.elevation]},!n.vars&&"dark"===n.palette.mode&&{backgroundImage:"linear-gradient(".concat((0,l.Fq)("#fff",s(r.elevation)),", ").concat((0,l.Fq)("#fff",s(r.elevation)),")")},n.vars&&{backgroundImage:null==(t=n.vars.overlays)?void 0:t[r.elevation]}))})),Z=a.forwardRef((function(e,t){var n=(0,v.Z)({props:e,name:"MuiPaper"}),a=n.className,l=n.component,u=void 0===l?"div":l,s=n.elevation,p=void 0===s?1:s,d=n.square,Z=void 0!==d&&d,y=n.variant,b=void 0===y?"elevation":y,x=(0,r.Z)(n,h),k=(0,o.Z)({},n,{component:u,elevation:p,square:Z,variant:b}),w=function(e){var t=e.square,n=e.elevation,r=e.variant,o=e.classes,a={root:["root",r,!t&&"rounded","elevation"===r&&"elevation".concat(n)]};return(0,c.Z)(a,m,o)}(k);return(0,f.jsx)(g,(0,o.Z)({as:u,ownerState:k,className:(0,i.Z)(w.root,a),ref:t},x))}))},1582:function(e,t,n){n.d(t,{Z:function(){return B}});var r=n(4942),o=n(3366),a=n(7462),i=n(2791),c=n(8182),l=n(2466),u=n(4419),s=n(1217),v=(0,n(4046).ZP)(),p=n(7078),d=n(8519),m=n(5080),f=n(1184),h=n(5682),g=n(184),Z=["component","direction","spacing","divider","children","className"],y=(0,m.Z)(),b=v("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}});function x(e){return(0,p.Z)({props:e,name:"MuiStack",defaultTheme:y})}function k(e,t){var n=i.Children.toArray(e).filter(Boolean);return n.reduce((function(e,r,o){return e.push(r),o<n.length-1&&e.push(i.cloneElement(t,{key:"separator-".concat(o)})),e}),[])}var w=function(e){var t=e.ownerState,n=e.theme,o=(0,a.Z)({display:"flex",flexDirection:"column"},(0,f.k9)({theme:n},(0,f.P$)({values:t.direction,breakpoints:n.breakpoints.values}),(function(e){return{flexDirection:e}})));if(t.spacing){var i=(0,h.hB)(n),c=Object.keys(n.breakpoints.values).reduce((function(e,n){return("object"===typeof t.spacing&&null!=t.spacing[n]||"object"===typeof t.direction&&null!=t.direction[n])&&(e[n]=!0),e}),{}),u=(0,f.P$)({values:t.direction,base:c}),s=(0,f.P$)({values:t.spacing,base:c});"object"===typeof u&&Object.keys(u).forEach((function(e,t,n){if(!u[e]){var r=t>0?u[n[t-1]]:"column";u[e]=r}}));o=(0,l.Z)(o,(0,f.k9)({theme:n},s,(function(e,n){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((o=n?u[n]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[o])),(0,h.NA)(i,e))};var o})))}return o=(0,f.dt)(n.breakpoints,o)};var P=n(6934),S=n(1402),M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.createStyledComponent,n=void 0===t?b:t,r=e.useThemeProps,l=void 0===r?x:r,v=e.componentName,p=void 0===v?"MuiStack":v,m=n(w),f=i.forwardRef((function(e,t){var n=l(e),r=(0,d.Z)(n),i=r.component,v=void 0===i?"div":i,f=r.direction,h=void 0===f?"column":f,y=r.spacing,b=void 0===y?0:y,x=r.divider,w=r.children,P=r.className,S=(0,o.Z)(r,Z),M={direction:h,spacing:b},B=(0,u.Z)({root:["root"]},(function(e){return(0,s.Z)(p,e)}),{});return(0,g.jsx)(m,(0,a.Z)({as:v,ownerState:M,ref:t,className:(0,c.Z)(B.root,P)},S,{children:x?k(w,x):w}))}));return f}({createStyledComponent:(0,P.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,t){return t.root}}),useThemeProps:function(e){return(0,S.Z)({props:e,name:"MuiStack"})}}),B=M},890:function(e,t,n){n.d(t,{Z:function(){return b}});var r=n(3366),o=n(7462),a=n(2791),i=n(8182),c=n(8519),l=n(4419),u=n(6934),s=n(1402),v=n(4036),p=n(5878),d=n(1217);function m(e){return(0,d.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var f=n(184),h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],g=(0,u.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:function(e,t){var n=e.ownerState;return[t.root,n.variant&&t[n.variant],"inherit"!==n.align&&t["align".concat((0,v.Z)(n.align))],n.noWrap&&t.noWrap,n.gutterBottom&&t.gutterBottom,n.paragraph&&t.paragraph]}})((function(e){var t=e.theme,n=e.ownerState;return(0,o.Z)({margin:0},n.variant&&t.typography[n.variant],"inherit"!==n.align&&{textAlign:n.align},n.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},n.gutterBottom&&{marginBottom:"0.35em"},n.paragraph&&{marginBottom:16})})),Z={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},y={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},b=a.forwardRef((function(e,t){var n=(0,s.Z)({props:e,name:"MuiTypography"}),a=function(e){return y[e]||e}(n.color),u=(0,c.Z)((0,o.Z)({},n,{color:a})),p=u.align,d=void 0===p?"inherit":p,b=u.className,x=u.component,k=u.gutterBottom,w=void 0!==k&&k,P=u.noWrap,S=void 0!==P&&P,M=u.paragraph,B=void 0!==M&&M,R=u.variant,j=void 0===R?"body1":R,N=u.variantMapping,T=void 0===N?Z:N,W=(0,r.Z)(u,h),C=(0,o.Z)({},u,{align:d,color:a,className:b,component:x,gutterBottom:w,noWrap:S,paragraph:B,variant:j,variantMapping:T}),q=x||(B?"p":T[j]||Z[j])||"span",A=function(e){var t=e.align,n=e.gutterBottom,r=e.noWrap,o=e.paragraph,a=e.variant,i=e.classes,c={root:["root",a,"inherit"!==e.align&&"align".concat((0,v.Z)(t)),n&&"gutterBottom",r&&"noWrap",o&&"paragraph"]};return(0,l.Z)(c,m,i)}(C);return(0,f.jsx)(g,(0,o.Z)({as:q,ref:t,ownerState:C,className:(0,i.Z)(A.root,b)},W))}))},3967:function(e,t,n){n.d(t,{Z:function(){return a}});n(2791);var r=n(3459),o=n(6482);function a(){return(0,r.Z)(o.Z)}},8519:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(3433),o=n(7462),a=n(3366),i=n(2466),c=n(7416),l=["sx"],u=function(e){var t,n,r={systemProps:{},otherProps:{}},o=null!=(t=null==e||null==(n=e.theme)?void 0:n.unstable_sxConfig)?t:c.Z;return Object.keys(e).forEach((function(t){o[t]?r.systemProps[t]=e[t]:r.otherProps[t]=e[t]})),r};function s(e){var t,n=e.sx,c=(0,a.Z)(e,l),s=u(c),v=s.systemProps,p=s.otherProps;return t=Array.isArray(n)?[v].concat((0,r.Z)(n)):"function"===typeof n?function(){var e=n.apply(void 0,arguments);return(0,i.P)(e)?(0,o.Z)({},v,e):v}:(0,o.Z)({},v,n),(0,o.Z)({},p,{sx:t})}}}]);
//# sourceMappingURL=687.cffacf46.chunk.js.map