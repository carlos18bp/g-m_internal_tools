import{a as P,b as U,r as m,o as E,q as g,d as x,e as f,f as p,g as e,w as l,v as n,h as _,i as w,m as v,j as y,k as S,F as T,_ as j,p as h}from"./index.js";import{_ as G,s as t}from"./notification_message.js";import{l as I}from"./login_with_google.js";import"./sweetalert2.esm.all.js";const q=e("div",{class:"absolute"},[e("div",{class:"flex justify-center p-4"},[e("img",{src:j})])],-1),A={class:"pt-16 flex h-screen items-center md:pt-0"},B={class:"space-y-5 px-8 w-full md:px-32 2xl:px-72 xl:w-1/2 2xl:w-2/3 order-2"},F=e("h1",{class:"font-bold text-center text-2xl xl:text-3xl 2xl:text-4xl"}," Te damos la bienvenida ",-1),M=e("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900"}," Correo electronico ",-1),O=e("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900"}," Contraseña ",-1),R=e("label",{for:"confirm_password",class:"block mb-2 text-sm font-medium text-gray-900"}," Confirmar contraseña ",-1),W={class:"grid md:grid-cols-2 md:gap-6"},D=e("label",{for:"first_name",class:"block mb-2 text-sm font-medium text-gray-900"}," Nombre ",-1),H=e("label",{for:"last_name",class:"block mb-2 text-sm font-medium text-gray-900"}," Apellido ",-1),z={key:1,class:"grid md:grid-cols-2 md:gap-6"},J={class:"flex flex-col"},K={class:"font-regular"},Q={class:"font-regular text-blue-800"},X=e("div",{class:"flex items-center w-full mt-4"},[e("div",{class:"flex-grow border-t border-gray-300"}),e("span",{class:"mx-4 text-gray-500"},"O continuar con"),e("div",{class:"flex-grow border-t border-gray-300"})],-1),Y={class:"flex justify-center"},Z=e("div",{class:"h-screen hidden overflow-hidden order-1 xl:w-1/2 2xl:w-1/3 xl:block"},[e("img",{src:G,alt:"illustration",class:"w-full h-full object-cover"})],-1),te={__name:"SignOn",setup($){const c=P(),s=U({email:"",firstName:"",lastName:"",password:"",confirmPassword:""}),i=m(""),d=m(""),u=m("");E(()=>{c.isAuthenticated&&g.push({name:"process_list",params:{user_id:userId,display:""}})});const k=async()=>{b(),t("Se ha enviado un código de acceso a tu correo electrónico","info");try{u.value=s.email;const a=await h.post("/api/sign_on/send_verification_code/",{email:s.email});d.value=a.data.passcode}catch(a){console.error("Error during verification code process:",a),a.response&&a.response.status===409?t("El correo electrónico ya está registrado","error"):t("¡Error al enviar el código!","error")}},N=async()=>{if(b(),u.value!==s.email){t("Has cambiado el correo electrónico de verificación, tendrás que generar un nuevo código nuevamente","warning");return}if(d.value==i.value){const a=await h.post("/api/sign_on/",{email:u.value,password:s.password,first_name:s.firstName,last_name:s.lastName,passcode:i.value});c.login(a.data),t("¡Inicio de sesión exitoso!","success"),g.push({name:"process_list",params:{user_id:"",display:""}})}else t("El código no es válido","warning")},b=()=>{if(!s.email){t("El correo electrónico es obligatorio","warning");return}if(!s.password){t("La contraseña es obligatoria","warning");return}if(!s.confirmPassword){t("La confirmación de la contraseña es obligatoria","warning");return}if(s.password!==s.confirmPassword){t("¡Las contraseñas no coinciden!","warning");return}if(s.password!==s.confirmPassword){t("¡Las contraseñas no coinciden!","warning");return}},V=a=>{I(a,g,c)};return(a,o)=>{const C=x("RouterLink"),L=x("GoogleLogin");return f(),p(T,null,[q,e("section",A,[e("form",B,[F,e("div",null,[M,l(e("input",{"onUpdate:modelValue":o[0]||(o[0]=r=>s.email=r),type:"email",id:"email",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",required:""},null,512),[[n,s.email]])]),e("div",null,[O,l(e("input",{"onUpdate:modelValue":o[1]||(o[1]=r=>s.password=r),type:"password",id:"password",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[n,s.password]])]),e("div",null,[R,l(e("input",{"onUpdate:modelValue":o[2]||(o[2]=r=>s.confirmPassword=r),type:"password",id:"confirm_password",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[n,s.confirmPassword]])]),e("div",W,[e("div",null,[D,l(e("input",{"onUpdate:modelValue":o[3]||(o[3]=r=>s.firstName=r),type:"text",id:"first_name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[n,s.firstName]])]),e("div",null,[H,l(e("input",{"onUpdate:modelValue":o[4]||(o[4]=r=>s.lastName=r),type:"text",id:"last_name",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[n,s.lastName]])])]),d.value?w("",!0):(f(),p("button",{key:0,onClick:_(k,["prevent"]),type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"}," Registrarse ")),d.value?(f(),p("div",z,[l(e("input",{"onUpdate:modelValue":o[5]||(o[5]=r=>i.value=r),type:"text",id:"passcode",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5",placeholder:"Código de verificación"},null,512),[[n,i.value]]),e("button",{onClick:_(N,["prevent"]),type:"submit",class:"text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"}," Verificar ")])):w("",!0),e("div",J,[e("p",K,[v(" ¿Tienes una cuenta? "),e("a",Q,[y(C,{to:{name:"sign_in"}},{default:S(()=>[v(" Iniciar sesión ")]),_:1})])]),X,e("div",Y,[y(L,{class:"mt-6",callback:V,prompt:""})])])]),Z])],64)}}};export{te as default};
