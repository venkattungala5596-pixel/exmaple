function printpattern(n) {  
  for (let i = 0; i <= n; i++) {
    let a = "";
    for (let s = 0; s <= n - i; s++) {
      a += " ";
    }
    for (let st = 0; st <= i; st++) {     
      a += "  *";
    }
    let j = "";
    for (let s = 0; s <= i; s++) {
     j += " ";
    }
    for (let st = 0; st <= n - i; st++) {
      j += "  *  ";
    }
    setTimeout(() => {      
      if (i===0) { 
        console.log("---------------" +" pattern----------------------");
      }
      console.log(a + "          " + j);
    },n*1000); 
  }  
}     
for (let k = 0; k <= 4; k++) {
  printpattern(k);
}
