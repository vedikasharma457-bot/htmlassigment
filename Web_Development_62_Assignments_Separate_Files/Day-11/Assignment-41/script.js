const form=document.querySelector("#form"),input=document.querySelector("#book"),list=document.querySelector("#list");
form.addEventListener("submit",e=>{e.preventDefault();const li=document.createElement("li");li.textContent=input.value.trim();if(!li.textContent)return;list.append(li);input.value="";});
