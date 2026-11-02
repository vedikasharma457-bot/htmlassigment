const toggle=document.querySelector("#toggle"),links=document.querySelector("#links");
toggle.addEventListener("click",()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",String(open));});
