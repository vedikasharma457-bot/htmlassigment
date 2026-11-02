const readline = require("node:readline");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const list = [];
function menu() {
  console.log("\n1 Add  2 View  3 Remove  4 Exit");
  rl.question("Choose: ", answer => {
    if (answer === "1") rl.question("Item name: ", name => { if (name.trim()) list.push(name.trim()); menu(); });
    else if (answer === "2") { console.log(list.length ? list.map((x,i)=>`${i+1}. ${x}`).join("\n") : "List is empty."); menu(); }
    else if (answer === "3") rl.question("Item number: ", n => { const index=Number(n)-1; if(Number.isInteger(index)&&index>=0&&index<list.length) list.splice(index,1); menu(); });
    else if (answer === "4") rl.close();
    else menu();
  });
}
menu();
