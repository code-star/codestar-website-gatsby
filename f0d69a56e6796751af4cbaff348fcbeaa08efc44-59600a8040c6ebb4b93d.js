"use strict";(self.webpackChunkcodestar=self.webpackChunkcodestar||[]).push([[888],{4348:function(e,t,n){n.r(t),n.d(t,{default:function(){return Me}});var r=n(4942),i=n(7294),o=n(5444),a=n(5987),c=n(7462),s=n(5505),l=n(638),u=[0,1,2,3,4,5,6,7,8,9,10],d=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function p(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var m=i.forwardRef((function(e,t){var n=e.alignContent,r=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,u=e.classes,d=e.className,p=e.component,m=void 0===p?"div":p,f=e.container,v=void 0!==f&&f,h=e.direction,g=void 0===h?"row":h,b=e.item,x=void 0!==b&&b,y=e.justify,w=e.justifyContent,E=void 0===w?"flex-start":w,Z=e.lg,k=void 0!==Z&&Z,M=e.md,D=void 0!==M&&M,C=e.sm,N=void 0!==C&&C,S=e.spacing,R=void 0===S?0:S,O=e.wrap,U=void 0===O?"wrap":O,j=e.xl,T=void 0!==j&&j,P=e.xs,V=void 0!==P&&P,I=e.zeroMinWidth,W=void 0!==I&&I,B=(0,a.Z)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","justifyContent","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=(0,s.Z)(u.root,d,v&&[u.container,0!==R&&u["spacing-xs-".concat(String(R))]],x&&u.item,W&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==U&&u["wrap-xs-".concat(String(U))],"stretch"!==l&&u["align-items-xs-".concat(String(l))],"stretch"!==r&&u["align-content-xs-".concat(String(r))],"flex-start"!==(y||E)&&u["justify-content-xs-".concat(String(y||E))],!1!==V&&u["grid-xs-".concat(String(V))],!1!==N&&u["grid-sm-".concat(String(N))],!1!==D&&u["grid-md-".concat(String(D))],!1!==k&&u["grid-lg-".concat(String(k))],!1!==T&&u["grid-xl-".concat(String(T))]);return i.createElement(m,(0,c.Z)({className:F,ref:t},B))})),f=(0,l.Z)((function(e){return(0,c.Z)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-content-xs-center":{justifyContent:"center"},"justify-content-xs-flex-end":{justifyContent:"flex-end"},"justify-content-xs-space-between":{justifyContent:"space-between"},"justify-content-xs-space-around":{justifyContent:"space-around"},"justify-content-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return u.forEach((function(r){var i=e.spacing(r);0!==i&&(n["spacing-".concat(t,"-").concat(r)]={margin:"-".concat(p(i,2)),width:"calc(100% + ".concat(p(i),")"),"& > $item":{padding:p(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var r={};d.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");r[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else r[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else r[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?(0,c.Z)(e,r):e[t.breakpoints.up(n)]=r}(t,e,n),t}),{}))}),{name:"MuiGrid"})(m),v=n(7595),h=i.forwardRef((function(e,t){var n=e.absolute,r=void 0!==n&&n,o=e.classes,l=e.className,u=e.component,d=void 0===u?"hr":u,p=e.flexItem,m=void 0!==p&&p,f=e.light,v=void 0!==f&&f,h=e.orientation,g=void 0===h?"horizontal":h,b=e.role,x=void 0===b?"hr"!==d?"separator":void 0:b,y=e.variant,w=void 0===y?"fullWidth":y,E=(0,a.Z)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return i.createElement(d,(0,c.Z)({className:(0,s.Z)(o.root,l,"fullWidth"!==w&&o[w],r&&o.absolute,m&&o.flexItem,v&&o.light,"vertical"===g&&o.vertical),role:x,ref:t},E))})),g=(0,l.Z)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:(0,v.Fq)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(h),b=n(920),x=n(453),y=n(4850),w=n(8063),E=(0,b.Z)((function(e){var t;return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],color:e.palette.common.white,marginBottom:e.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:(t={position:"relative",padding:e.spacing(3)},t[e.breakpoints.up("md")]={padding:e.spacing(6),paddingRight:0},t)}})),Z=function(e){var t=e.post,n=E();return i.createElement(w.Z,{className:n.mainFeaturedPost,style:{backgroundImage:"url("+t.image+")"}},i.createElement("img",{style:{display:"none"},src:t.image,alt:t.imageText}),i.createElement("div",{className:n.overlay}),i.createElement(f,{container:!0},i.createElement(f,{item:!0,md:6},i.createElement("div",{className:n.mainFeaturedPostContent},i.createElement(x.Z,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0},t.title),i.createElement(x.Z,{variant:"h5",color:"inherit",paragraph:!0},t.excerpt),i.createElement(y.Z,{variant:"subtitle1",component:o.rU,to:"/blog/"+t.slug},t.linkText)))))},k=n(3935),M=n(3110),D="undefined"!=typeof window?i.useLayoutEffect:i.useEffect;function C(e){var t=i.useRef(e);return D((function(){t.current=e})),i.useCallback((function(){return t.current.apply(void 0,arguments)}),[])}var N=n(4095),S=n(4486),R=n(5245),O=n(7326),U=n(8772),j=i.createContext(null);function T(e,t){var n=Object.create(null);return e&&i.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,i.isValidElement)(e)?t(e):e}(e)})),n}function P(e,t,n){return null!=n[t]?n[t]:e.props[t]}function V(e,t,n){var r=T(e.children),o=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,i=Object.create(null),o=[];for(var a in e)a in t?o.length&&(i[a]=o,o=[]):o.push(a);var c={};for(var s in t){if(i[s])for(r=0;r<i[s].length;r++){var l=i[s][r];c[i[s][r]]=n(l)}c[s]=n(s)}for(r=0;r<o.length;r++)c[o[r]]=n(o[r]);return c}(t,r);return Object.keys(o).forEach((function(a){var c=o[a];if((0,i.isValidElement)(c)){var s=a in t,l=a in r,u=t[a],d=(0,i.isValidElement)(u)&&!u.props.in;!l||s&&!d?l||!s||d?l&&s&&(0,i.isValidElement)(u)&&(o[a]=(0,i.cloneElement)(c,{onExited:n.bind(null,c),in:u.props.in,exit:P(c,"exit",e),enter:P(c,"enter",e)})):o[a]=(0,i.cloneElement)(c,{in:!1}):o[a]=(0,i.cloneElement)(c,{onExited:n.bind(null,c),in:!0,exit:P(c,"exit",e),enter:P(c,"enter",e)})}})),o}var I=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},W=function(e){function t(t,n){var r,i=(r=e.call(this,t,n)||this).handleExited.bind((0,O.Z)(r));return r.state={contextValue:{isMounting:!0},handleExited:i,firstRender:!0},r}(0,U.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,r,o=t.children,a=t.handleExited;return{children:t.firstRender?(n=e,r=a,T(n.children,(function(e){return(0,i.cloneElement)(e,{onExited:r.bind(null,e),in:!0,appear:P(e,"appear",n),enter:P(e,"enter",n),exit:P(e,"exit",n)})}))):V(e,o,a),firstRender:!1}},n.handleExited=function(e,t){var n=T(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,c.Z)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,r=(0,R.Z)(e,["component","childFactory"]),o=this.state.contextValue,a=I(this.state.children).map(n);return delete r.appear,delete r.enter,delete r.exit,null===t?i.createElement(j.Provider,{value:o},a):i.createElement(j.Provider,{value:o},i.createElement(t,r,a))},t}(i.Component);W.defaultProps={component:"div",childFactory:function(e){return e}};var B=W,F="undefined"==typeof window?i.useEffect:i.useLayoutEffect;var z=function(e){var t=e.classes,n=e.pulsate,r=void 0!==n&&n,o=e.rippleX,a=e.rippleY,c=e.rippleSize,l=e.in,u=e.onExited,d=void 0===u?function(){}:u,p=e.timeout,m=i.useState(!1),f=m[0],v=m[1],h=(0,s.Z)(t.ripple,t.rippleVisible,r&&t.ripplePulsate),g={width:c,height:c,top:-c/2+a,left:-c/2+o},b=(0,s.Z)(t.child,f&&t.childLeaving,r&&t.childPulsate),x=C(d);return F((function(){if(!l){v(!0);var e=setTimeout(x,p);return function(){clearTimeout(e)}}}),[x,l,p]),i.createElement("span",{className:h,style:g},i.createElement("span",{className:b}))},X=i.forwardRef((function(e,t){var n=e.center,r=void 0!==n&&n,o=e.classes,l=e.className,u=(0,a.Z)(e,["center","classes","className"]),d=i.useState([]),p=d[0],m=d[1],f=i.useRef(0),v=i.useRef(null);i.useEffect((function(){v.current&&(v.current(),v.current=null)}),[p]);var h=i.useRef(!1),g=i.useRef(null),b=i.useRef(null),x=i.useRef(null);i.useEffect((function(){return function(){clearTimeout(g.current)}}),[]);var y=i.useCallback((function(e){var t=e.pulsate,n=e.rippleX,r=e.rippleY,a=e.rippleSize,c=e.cb;m((function(e){return[].concat((0,S.Z)(e),[i.createElement(z,{key:f.current,classes:o,timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:a})])})),f.current+=1,v.current=c}),[o]),w=i.useCallback((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,i=t.pulsate,o=void 0!==i&&i,a=t.center,c=void 0===a?r||t.pulsate:a,s=t.fakeElement,l=void 0!==s&&s;if("mousedown"===e.type&&h.current)h.current=!1;else{"touchstart"===e.type&&(h.current=!0);var u,d,p,m=l?null:x.current,f=m?m.getBoundingClientRect():{width:0,height:0,left:0,top:0};if(c||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(f.width/2),d=Math.round(f.height/2);else{var v=e.touches?e.touches[0]:e,w=v.clientX,E=v.clientY;u=Math.round(w-f.left),d=Math.round(E-f.top)}if(c)(p=Math.sqrt((2*Math.pow(f.width,2)+Math.pow(f.height,2))/3))%2==0&&(p+=1);else{var Z=2*Math.max(Math.abs((m?m.clientWidth:0)-u),u)+2,k=2*Math.max(Math.abs((m?m.clientHeight:0)-d),d)+2;p=Math.sqrt(Math.pow(Z,2)+Math.pow(k,2))}e.touches?null===b.current&&(b.current=function(){y({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})},g.current=setTimeout((function(){b.current&&(b.current(),b.current=null)}),80)):y({pulsate:o,rippleX:u,rippleY:d,rippleSize:p,cb:n})}}),[r,y]),E=i.useCallback((function(){w({},{pulsate:!0})}),[w]),Z=i.useCallback((function(e,t){if(clearTimeout(g.current),"touchend"===e.type&&b.current)return e.persist(),b.current(),b.current=null,void(g.current=setTimeout((function(){Z(e,t)})));b.current=null,m((function(e){return e.length>0?e.slice(1):e})),v.current=t}),[]);return i.useImperativeHandle(t,(function(){return{pulsate:E,start:w,stop:Z}}),[E,w,Z]),i.createElement("span",(0,c.Z)({className:(0,s.Z)(o.root,l),ref:x},u),i.createElement(B,{component:null,exit:!0},p))})),L=(0,l.Z)((function(e){return{root:{overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"},ripple:{opacity:0,position:"absolute"},rippleVisible:{opacity:.3,transform:"scale(1)",animation:"$enter ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},ripplePulsate:{animationDuration:"".concat(e.transitions.duration.shorter,"ms")},child:{opacity:1,display:"block",width:"100%",height:"100%",borderRadius:"50%",backgroundColor:"currentColor"},childLeaving:{opacity:0,animation:"$exit ".concat(550,"ms ").concat(e.transitions.easing.easeInOut)},childPulsate:{position:"absolute",left:0,top:0,animation:"$pulsate 2500ms ".concat(e.transitions.easing.easeInOut," 200ms infinite")},"@keyframes enter":{"0%":{transform:"scale(0)",opacity:.1},"100%":{transform:"scale(1)",opacity:.3}},"@keyframes exit":{"0%":{opacity:1},"100%":{opacity:0}},"@keyframes pulsate":{"0%":{transform:"scale(1)"},"50%":{transform:"scale(0.92)"},"100%":{transform:"scale(1)"}}}}),{flip:!1,name:"MuiTouchRipple"})(i.memo(X)),A=i.forwardRef((function(e,t){var n=e.action,r=e.buttonRef,o=e.centerRipple,l=void 0!==o&&o,u=e.children,d=e.classes,p=e.className,m=e.component,f=void 0===m?"button":m,v=e.disabled,h=void 0!==v&&v,g=e.disableRipple,b=void 0!==g&&g,x=e.disableTouchRipple,y=void 0!==x&&x,w=e.focusRipple,E=void 0!==w&&w,Z=e.focusVisibleClassName,D=e.onBlur,S=e.onClick,R=e.onFocus,O=e.onFocusVisible,U=e.onKeyDown,j=e.onKeyUp,T=e.onMouseDown,P=e.onMouseLeave,V=e.onMouseUp,I=e.onTouchEnd,W=e.onTouchMove,B=e.onTouchStart,F=e.onDragLeave,z=e.tabIndex,X=void 0===z?0:z,A=e.TouchRippleProps,H=e.type,$=void 0===H?"button":H,K=(0,a.Z)(e,["action","buttonRef","centerRipple","children","classes","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","onBlur","onClick","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","onDragLeave","tabIndex","TouchRippleProps","type"]),Y=i.useRef(null);var G=i.useRef(null),q=i.useState(!1),Q=q[0],J=q[1];h&&Q&&J(!1);var _=(0,N.Z)(),ee=_.isFocusVisible,te=_.onBlurVisible,ne=_.ref;function re(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return C((function(r){return t&&t(r),!n&&G.current&&G.current[e](r),!0}))}i.useImperativeHandle(n,(function(){return{focusVisible:function(){J(!0),Y.current.focus()}}}),[]),i.useEffect((function(){Q&&E&&!b&&G.current.pulsate()}),[b,E,Q]);var ie=re("start",T),oe=re("stop",F),ae=re("stop",V),ce=re("stop",(function(e){Q&&e.preventDefault(),P&&P(e)})),se=re("start",B),le=re("stop",I),ue=re("stop",W),de=re("stop",(function(e){Q&&(te(e),J(!1)),D&&D(e)}),!1),pe=C((function(e){Y.current||(Y.current=e.currentTarget),ee(e)&&(J(!0),O&&O(e)),R&&R(e)})),me=function(){var e=k.findDOMNode(Y.current);return f&&"button"!==f&&!("A"===e.tagName&&e.href)},fe=i.useRef(!1),ve=C((function(e){E&&!fe.current&&Q&&G.current&&" "===e.key&&(fe.current=!0,e.persist(),G.current.stop(e,(function(){G.current.start(e)}))),e.target===e.currentTarget&&me()&&" "===e.key&&e.preventDefault(),U&&U(e),e.target===e.currentTarget&&me()&&"Enter"===e.key&&!h&&(e.preventDefault(),S&&S(e))})),he=C((function(e){E&&" "===e.key&&G.current&&Q&&!e.defaultPrevented&&(fe.current=!1,e.persist(),G.current.stop(e,(function(){G.current.pulsate(e)}))),j&&j(e),S&&e.target===e.currentTarget&&me()&&" "===e.key&&!e.defaultPrevented&&S(e)})),ge=f;"button"===ge&&K.href&&(ge="a");var be={};"button"===ge?(be.type=$,be.disabled=h):("a"===ge&&K.href||(be.role="button"),be["aria-disabled"]=h);var xe=(0,M.Z)(r,t),ye=(0,M.Z)(ne,Y),we=(0,M.Z)(xe,ye),Ee=i.useState(!1),Ze=Ee[0],ke=Ee[1];i.useEffect((function(){ke(!0)}),[]);var Me=Ze&&!b&&!h;return i.createElement(ge,(0,c.Z)({className:(0,s.Z)(d.root,p,Q&&[d.focusVisible,Z],h&&d.disabled),onBlur:de,onClick:S,onFocus:pe,onKeyDown:ve,onKeyUp:he,onMouseDown:ie,onMouseLeave:ce,onMouseUp:ae,onDragLeave:oe,onTouchEnd:le,onTouchMove:ue,onTouchStart:se,ref:we,tabIndex:h?-1:X},be,K),u,Me?i.createElement(L,(0,c.Z)({ref:G,center:l},A)):null)})),H=(0,l.Z)({root:{display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle","-moz-appearance":"none","-webkit-appearance":"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},"&$disabled":{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}},disabled:{},focusVisible:{}},{name:"MuiButtonBase"})(A),$=i.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,l=e.focusVisibleClassName,u=(0,a.Z)(e,["children","classes","className","focusVisibleClassName"]);return i.createElement(H,(0,c.Z)({className:(0,s.Z)(r.root,o),focusVisibleClassName:(0,s.Z)(l,r.focusVisible),ref:t},u),n,i.createElement("span",{className:r.focusHighlight}))})),K=(0,l.Z)((function(e){return{root:{display:"block",textAlign:"inherit",width:"100%","&:hover $focusHighlight":{opacity:e.palette.action.hoverOpacity},"&$focusVisible $focusHighlight":{opacity:.12}},focusVisible:{},focusHighlight:{overflow:"hidden",pointerEvents:"none",position:"absolute",top:0,right:0,bottom:0,left:0,borderRadius:"inherit",opacity:0,backgroundColor:"currentcolor",transition:e.transitions.create("opacity",{duration:e.transitions.duration.short})}}}),{name:"MuiCardActionArea"})($),Y=i.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.raised,l=void 0!==o&&o,u=(0,a.Z)(e,["classes","className","raised"]);return i.createElement(w.Z,(0,c.Z)({className:(0,s.Z)(n.root,r),elevation:l?8:1,ref:t},u))})),G=(0,l.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(Y),q=i.forwardRef((function(e,t){var n=e.classes,r=e.className,o=e.component,l=void 0===o?"div":o,u=(0,a.Z)(e,["classes","className","component"]);return i.createElement(l,(0,c.Z)({className:(0,s.Z)(n.root,r),ref:t},u))})),Q=(0,l.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(q),J=n(5697),_=n.n(J),ee=n(1652),te=n(5706),ne=n.n(te),re=n(4427),ie=n(4982);function oe(){return(0,re.Z)()||ie.Z}var ae=n(2507);function ce(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=(0,re.Z)(),r=(0,ee.Z)({theme:n,name:"MuiUseMediaQuery",props:{}});var o="function"==typeof e?e(n):e;o=o.replace(/^@media( ?)/m,"");var a="undefined"!=typeof window&&void 0!==window.matchMedia,s=(0,c.Z)({},r,t),l=s.defaultMatches,u=void 0!==l&&l,d=s.matchMedia,p=void 0===d?a?window.matchMedia:null:d,m=s.noSsr,f=void 0!==m&&m,v=s.ssrMatchMedia,h=void 0===v?null:v,g=i.useState((function(){return f&&a?p(o).matches:h?h(o).matches:u})),b=g[0],x=g[1];return i.useEffect((function(){var e=!0;if(a){var t=p(o),n=function(){e&&x(t.matches)};return n(),t.addListener(n),function(){e=!1,t.removeListener(n)}}}),[o,p,a]),b}var se=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?ae.X.indexOf(e)<=ae.X.indexOf(t):ae.X.indexOf(e)<ae.X.indexOf(t)},le=function(e,t){var n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];return n?ae.X.indexOf(t)<=ae.X.indexOf(e):ae.X.indexOf(t)<ae.X.indexOf(e)},ue="undefined"==typeof window?i.useEffect:i.useLayoutEffect,de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){var n=e.withTheme,r=void 0!==n&&n,o=e.noSSR,s=void 0!==o&&o,l=e.initialWidth;function u(e){var n=oe(),o=e.theme||n,u=(0,ee.Z)({theme:o,name:"MuiWithWidth",props:(0,c.Z)({},e)}),d=u.initialWidth,p=u.width,m=(0,a.Z)(u,["initialWidth","width"]),f=i.useState(!1),v=f[0],h=f[1];ue((function(){h(!0)}),[]);var g=o.breakpoints.keys.slice().reverse().reduce((function(e,t){var n=ce(o.breakpoints.up(t));return!e&&n?t:e}),null),b=(0,c.Z)({width:p||(v||s?g:void 0)||d||l},r?{theme:o}:{},m);return void 0===b.width?null:i.createElement(t,b)}return ne()(u,t),u}};function pe(e){var t=e.children,n=e.only,r=e.width,i=oe(),o=!0;if(n)if(Array.isArray(n))for(var a=0;a<n.length;a+=1){if(r===n[a]){o=!1;break}}else n&&r===n&&(o=!1);if(o)for(var c=0;c<i.breakpoints.keys.length;c+=1){var s=i.breakpoints.keys[c],l=e["".concat(s,"Up")],u=e["".concat(s,"Down")];if(l&&se(s,r)||u&&le(s,r)){o=!1;break}}return o?t:null}pe.propTypes={children:_().node,className:_().string,implementation:_().oneOf(["js","css"]),initialWidth:_().oneOf(["xs","sm","md","lg","xl"]),lgDown:_().bool,lgUp:_().bool,mdDown:_().bool,mdUp:_().bool,only:_().oneOfType([_().oneOf(["xs","sm","md","lg","xl"]),_().arrayOf(_().oneOf(["xs","sm","md","lg","xl"]))]),smDown:_().bool,smUp:_().bool,width:_().string.isRequired,xlDown:_().bool,xlUp:_().bool,xsDown:_().bool,xsUp:_().bool};var me=de()(pe),fe=n(1664);var ve=(0,l.Z)((function(e){var t={display:"none"};return e.breakpoints.keys.reduce((function(n,i){return n["only".concat((0,fe.Z)(i))]=(0,r.Z)({},e.breakpoints.only(i),t),n["".concat(i,"Up")]=(0,r.Z)({},e.breakpoints.up(i),t),n["".concat(i,"Down")]=(0,r.Z)({},e.breakpoints.down(i),t),n}),{})}),{name:"PrivateHiddenCss"})((function(e){var t=e.children,n=e.classes,r=e.className,o=e.only,c=((0,a.Z)(e,["children","classes","className","only"]),oe()),s=[];r&&s.push(r);for(var l=0;l<c.breakpoints.keys.length;l+=1){var u=c.breakpoints.keys[l],d=e["".concat(u,"Up")],p=e["".concat(u,"Down")];d&&s.push(n["".concat(u,"Up")]),p&&s.push(n["".concat(u,"Down")])}return o&&(Array.isArray(o)?o:[o]).forEach((function(e){s.push(n["only".concat((0,fe.Z)(e))])})),i.createElement("div",{className:s.join(" ")},t)}));var he=function(e){var t=e.implementation,n=void 0===t?"js":t,r=e.lgDown,o=void 0!==r&&r,s=e.lgUp,l=void 0!==s&&s,u=e.mdDown,d=void 0!==u&&u,p=e.mdUp,m=void 0!==p&&p,f=e.smDown,v=void 0!==f&&f,h=e.smUp,g=void 0!==h&&h,b=e.xlDown,x=void 0!==b&&b,y=e.xlUp,w=void 0!==y&&y,E=e.xsDown,Z=void 0!==E&&E,k=e.xsUp,M=void 0!==k&&k,D=(0,a.Z)(e,["implementation","lgDown","lgUp","mdDown","mdUp","smDown","smUp","xlDown","xlUp","xsDown","xsUp"]);return"js"===n?i.createElement(me,(0,c.Z)({lgDown:o,lgUp:l,mdDown:d,mdUp:m,smDown:v,smUp:g,xlDown:x,xlUp:w,xsDown:Z,xsUp:M},D)):i.createElement(ve,(0,c.Z)({lgDown:o,lgUp:l,mdDown:d,mdUp:m,smDown:v,smUp:g,xlDown:x,xlUp:w,xsDown:Z,xsUp:M},D))},ge=["video","audio","picture","iframe","img"],be=i.forwardRef((function(e,t){var n=e.children,r=e.classes,o=e.className,l=e.component,u=void 0===l?"div":l,d=e.image,p=e.src,m=e.style,f=(0,a.Z)(e,["children","classes","className","component","image","src","style"]),v=-1!==ge.indexOf(u),h=!v&&d?(0,c.Z)({backgroundImage:'url("'.concat(d,'")')},m):m;return i.createElement(u,(0,c.Z)({className:(0,s.Z)(r.root,o,v&&r.media,-1!=="picture img".indexOf(u)&&r.img),ref:t,style:h,src:v?d||p:void 0},f),n)})),xe=(0,l.Z)({root:{display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},media:{width:"100%"},img:{objectFit:"cover"}},{name:"MuiCardMedia"})(be),ye=(0,b.Z)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}}),we=function(e){var t=e.post,n=ye();return i.createElement(f,{item:!0,xs:12,md:6},i.createElement(K,{component:o.rU,to:"/blog/"+t.slug},i.createElement(G,{className:n.card},i.createElement("div",{className:n.cardDetails},i.createElement(Q,null,i.createElement(x.Z,{component:"h2",variant:"h5"},t.title),i.createElement(x.Z,{variant:"subtitle1",color:"textSecondary"},t.date),i.createElement(x.Z,{variant:"subtitle1",paragraph:!0},t.excerpt),i.createElement(x.Z,{variant:"subtitle1",color:"primary"},t.linkText))),i.createElement(he,{xsDown:!0},i.createElement(xe,{className:n.cardMedia,image:t.image,title:t.imageText})))))};function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Ze(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=(0,b.Z)((function(e){return{mainGrid:{marginTop:e.spacing(3)},sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[600]},sidebarSection:{marginTop:e.spacing(3)}}})),Me=function(){var e=ke(),t=(0,o.K2)("3779021222").allMdx.nodes.map((function(e){var t,n,r,i;return Ze(Ze({},e),{},{date:null!==(t=null==e||null===(n=e.frontmatter)||void 0===n?void 0:n.date)&&void 0!==t?t:"",title:null!==(r=null==e||null===(i=e.frontmatter)||void 0===i?void 0:i.title.substr(0,30))&&void 0!==r?r:"",description:"Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",image:"https://images.unsplash.com/photo-1626422748187-18b829d019e2",imageText:"main image description",linkText:"Continue reading…"})})),n=t[0],r=t.slice(1,3),a=t.slice(3);return i.createElement(i.Fragment,null,i.createElement(Z,{post:n}),i.createElement(f,{container:!0,spacing:4},r.map((function(e){return i.createElement(we,{key:e.title,post:e})}))),i.createElement(f,{container:!0,spacing:5,className:e.mainGrid},i.createElement(f,{item:!0,xs:12,md:8},i.createElement(x.Z,{variant:"h6",gutterBottom:!0},"More articles"),i.createElement(g,null),a.map((function(e){return i.createElement("div",{key:e.id,style:{marginTop:"2rem"}},i.createElement(x.Z,{variant:"h4"},e.title),i.createElement(x.Z,null,e.date," by ..."),i.createElement("div",null,e.excerpt),i.createElement(y.Z,{variant:"subtitle1",component:o.rU,to:"/blog/"+e.slug},e.linkText))}))),i.createElement(f,{item:!0,xs:12,md:4},i.createElement(w.Z,{elevation:0,className:e.sidebarAboutBox},i.createElement(x.Z,{variant:"h6",gutterBottom:!0},"About"),i.createElement(x.Z,null,"description")),i.createElement(x.Z,{variant:"h6",gutterBottom:!0,className:e.sidebarSection},"Archives"),i.createElement(x.Z,{variant:"h6",gutterBottom:!0,className:e.sidebarSection},"Social"))))}}}]);
//# sourceMappingURL=f0d69a56e6796751af4cbaff348fcbeaa08efc44-59600a8040c6ebb4b93d.js.map