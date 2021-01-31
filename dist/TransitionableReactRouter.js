var TransitionableReactRouter=function(t,e){"use strict";var n="default"in e?e.default:e;const o=e.createContext();const r="undefined"==typeof window,u=["entering","entered","exiting","exited"],c=[1,1,3,3];function a(t,e){if(!e)return null;for(let[n]of t.current){n.lastIndex=0;const t=n.exec(e);if(t)return t}}function i(t=""){return t.replace("//","/")}function s(){}return t.Router=function({children:t}){const[r,u]=e.useState({currentRoute:window.location.pathname,previousRoute:""});return e.useEffect(()=>{function t(){u(t=>({currentRoute:"/".concat(window.location.pathname).replace("//","/"),previousRoute:t.currentRoute}))}return window.addEventListener("popstate",t),function(){window.removeEventListener("popstate",t)}},[]),n.createElement(o.Provider,{value:{setRoute:t=>{window.history.pushState({},null,t),u(t=>({currentRoute:window.location.pathname,previousRoute:t.currentRoute}))},...r}},t)},t.RouterContext=o,t.TransitionableReactRoute=function t({animateOnMount:l,children:p,onRouteChange:f=s,path:m,timeout:h=1e3,...R}){const d=Date.now(),w=e.useRef([]),g=e.useRef(h),y=e.useContext(o),E=y.currentRoute,x="".concat(E,"_").concat(d),[v,C]=e.useState(r?[{state:l?0:1,key:x,timestamp:d,currentRoute:E}]:[]);return w.current.length||n.Children.forEach(p,e=>{const{path:o,defaultpath:r}=e.props,u=e.type===t,c={...e.props,fullPath:r?"defaultpath":i("".concat(m||"","/").concat(o)),timeout:h};u&&(c.animateOnMount=l);const a=n.cloneElement(e,c);r?w.current.push([/.*/gi,[!1],a]):w.current.push(function([t,e,n],o=!1){const r=i(n?"".concat(n,"/").concat(e):e),[u,c]=function(t){const e=t.split("/");return"/"===t?["^",[!1]]:e.filter(t=>!!t).reduce((t,e,n)=>{const o=t[1];return 0===e.indexOf(":")?(o.push(e.substring(1)),["".concat(t[0],"\\/?([^\\/]+)?"),o]):(o.push(!1),n>0?["".concat(t[0],"\\/(").concat(e,")"),o]:["".concat(t[0],"(").concat(e,")"),o])},["^\\/",[]])}(r);let a=u;return o?a="".concat(u,"\\/.*"):"/"===e&&(a="".concat(u,"\\/")),[new RegExp("".concat(a,"$"),"ig"),c,t]}([a,o,m],u))}),e.useEffect(()=>{f(E),R.transitionstate!==u[2]&&C(t=>{const e=[...t],n=Date.now(),o=function(t,e,n){const o=a(n,t),r=a(n,e);return r&&o?o[o.length-1]===r[r.length-1]:null}((function(t=[]){return t[t.length-1]}(e)||{}).currentRoute,y.currentRoute,w),r=e.length-1;return e.length>0&&e[r].state<2&&!o&&(e[r]={...e[r],timestamp:n,state:2}),o||e.push({state:l?0:1,key:x,timestamp:n,currentRoute:E}),e})},[E]),e.useEffect(()=>{let t,e=!1;const n=()=>{t=requestAnimationFrame(()=>{!e&&function(t,e){t(t=>{let n=!1;const o=Date.now(),r=[...t];for(let t=0;t<r.length;t++){const u=c[r[t].state];o-r[t].timestamp>=e&&u!==r[t].state&&(n=!0,r[t]={...r[t],state:u})}return n?r.filter(({state:t})=>t<3):t})}(C,g.current),n()})};return t=n(),()=>{e=!0,cancelAnimationFrame(t)}},[]),e.useEffect(()=>{h!==g.current&&(w.current=w.current.map(([t,e,o])=>[t,e,h!==o.props.timeout?n.cloneElement(o,{timeout:h}):o]),g.current=h)},[h]),e.useMemo(()=>v.map(({currentRoute:t,key:e,state:o})=>{const r=function(t,e){t:for(let[n,o,r]of t){n.lastIndex=0;const t=n.exec(e);if(!t)continue;let u={};for(let e=0;e<o.length;e++)if("string"==typeof o[e]&&(u[o[e]]=t[e+1],!t[e+1]))continue t;return{component:r,query:u}}return{component:null,attributes:null}}(w.current,t);return r.component?n.createElement(r.component.type,{key:e,...r.component.props,query:r.query,transitionstate:u[o]}):null}),[v])},t}({},React);