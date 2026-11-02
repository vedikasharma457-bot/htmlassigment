document.querySelector("#update").addEventListener("click",()=>{
 document.querySelector("#profileName").textContent=document.querySelector("#nameInput").value.trim();
 document.querySelector("#profileBio").textContent=document.querySelector("#bioInput").value.trim();
});
