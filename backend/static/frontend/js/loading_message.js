import{e as t,f as n,g as r,L as o}from"./index.js";function i(e,a){return t(),n("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true","data-slot":"icon"},[r("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"})])}function c(e="Procesando...",a="Por favor espere, estamos procesando la solicitud."){o.fire({title:e,text:a,iconColor:"#FFF",allowOutsideClick:!1,showConfirmButton:!1,didOpen:()=>{o.showLoading()}})}function l(){o.close()}export{l as h,i as r,c as s};
