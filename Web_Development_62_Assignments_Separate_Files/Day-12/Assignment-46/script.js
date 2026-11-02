const theme=document.querySelector("#theme"),name=document.querySelector("#displayName"),message=document.querySelector("#message");
function load(){const settings=JSON.parse(localStorage.getItem("settings")||"{}");theme.value=settings.theme||"light";name.value=settings.name||"";document.body.classList.toggle("dark",theme.value==="dark");}
document.querySelector("#save").addEventListener("click",()=>{const settings={theme:theme.value,name:name.value.trim()};localStorage.setItem("settings",JSON.stringify(settings));document.body.classList.toggle("dark",settings.theme==="dark");message.textContent="Settings saved.";});
load();
