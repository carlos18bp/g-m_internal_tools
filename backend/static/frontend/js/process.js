import{af as u,ag as f,ak as h,al as y}from"./index.js";const w=u("process",{state:()=>({processes:[],dataLoaded:!1}),getters:{processById:e=>t=>e.processes.find(s=>s.id==t),processesWithClosedStatus:e=>e.processes.filter(t=>{const s=t.stages[t.stages.length-1];return s&&s.status==="Fallo"}),processesWithoutClosedStatus:e=>e.processes.filter(t=>{const s=t.stages[t.stages.length-1];return s&&s.status!=="Fallo"})},actions:{async init(){this.dataLoaded||await this.fetchProcessesData()},async fetchProcessesData(){if(!this.dataLoaded)try{let t=(await f("processes/")).data;if(t&&typeof t=="string")try{t=JSON.parse(t)}catch(s){console.error("JSON parse error:",s.message),t=[]}this.processes=t??[],this.dataLoaded=!0}catch(e){console.error("Error fetching processes data:",e.message),this.processes=[],this.dataLoaded=!1}},filteredProcesses(e,t,s,a){let r=this.processes;if(a=="history"?r=this.processesWithClosedStatus:r=this.processesWithoutClosedStatus,s&&(t?r=r.filter(i=>i.client.id==s):r=r.filter(i=>i.lawyer.id==s)),!e)return r;const c=e.toLowerCase();return r.filter(i=>{const d=["plaintiff","defendant","authority","ref","subcase"].some(o=>{var n;return(n=i[o])==null?void 0:n.toLowerCase().includes(c)}),l=i.case.type.toLowerCase().includes(c),p=i.stages.some(o=>o.status.toLowerCase().includes(c));return d||l||p})},async createProcess(e){const t={plaintiff:e.plaintiff,defendant:e.defendant,caseTypeId:e.caseTypeId,subcase:e.subcase,ref:e.ref,authority:e.authority,clientId:e.clientId,lawyerId:e.lawyerId,stages:e.stages},s=new FormData;s.append("mainData",JSON.stringify(t)),e.caseFiles.forEach((a,r)=>{a.file&&s.append(`caseFiles[${r}]`,a.file)});try{let a=await h("create_process/",s);return this.dataLoaded=!1,await this.fetchProcessesData(),a.status}catch(a){return console.error("Error creating process:",a.message),null}},async updateProcess(e){const t={plaintiff:e.plaintiff,defendant:e.defendant,caseTypeId:e.caseTypeId,subcase:e.subcase,ref:e.ref,authority:e.authority,clientId:e.clientId,lawyerId:e.lawyerId,stages:e.stages,caseFileIds:e.caseFiles.filter(a=>a.id).map(a=>a.id)},s=new FormData;s.append("mainData",JSON.stringify(t)),e.caseFiles.forEach((a,r)=>{a.file&&!a.id&&s.append(`caseFiles[${r}]`,a.file)});try{let a=await y(`update_process/${e.processIdParam}/`,s);return this.dataLoaded=!1,await this.fetchProcessesData(),a.status}catch(a){return console.error("Error creating process:",a.message),null}}}});export{w as u};
