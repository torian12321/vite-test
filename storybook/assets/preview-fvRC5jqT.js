import{_ as a}from"./iframe-MOeBexaM.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-56ZJCE2Q-6GgdrU9H.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-56ZJCE2Q-6GgdrU9H.js","./iframe-MOeBexaM.js","./index-C7RwwEST.js","./react-16-Jgx_73Yc.js","./index-ogXoivrg.js","./_getPrototype-Kxi6VC4l.js","./index-PPLHz8o0.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}