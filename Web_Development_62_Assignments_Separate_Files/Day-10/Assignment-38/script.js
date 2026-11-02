const status=document.querySelector("#status"),button=document.querySelector("#toggle");
button.addEventListener("click",()=>{const online=status.classList.toggle("online");status.classList.toggle("offline",!online);status.textContent=online?"Currently online":"Currently offline";button.textContent=online?"Go Offline":"Go Online";button.setAttribute("aria-pressed",String(online));});
