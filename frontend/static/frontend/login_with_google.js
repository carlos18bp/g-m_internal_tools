import{p as a}from"./index.js";import{s}from"./notification_message.js";const l=async(o,n,i)=>{try{const r=await a.post("/api/google_login/",new URLSearchParams({token:o.credential}));i.login(r.data),s("Sign In successful!","success"),n.push({name:"process_list"})}catch(r){e(r)}},e=o=>{console.error("Error during login:",o),s("Error during login","error")};export{l};
