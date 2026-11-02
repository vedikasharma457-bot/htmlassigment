document.querySelector("#form").addEventListener("submit",event=>{
 event.preventDefault();
 const marks=Number(document.querySelector("#marks").value);
 let grade;
 if(marks<0||marks>100){grade="Enter marks between 0 and 100.";}
 else if(marks>=90){grade="A+";}
 else if(marks>=80){grade="A";}
 else if(marks>=70){grade="B";}
 else if(marks>=60){grade="C";}
 else if(marks>=40){grade="D";}
 else{grade="Fail";}
 document.querySelector("#result").textContent="Result: "+grade;
});
