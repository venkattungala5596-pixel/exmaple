// let n = 20;
// for (let i = 0; i <= n; i++) {
//     if (i%2== 0) {
//         console.log(n);
//     }
// }

function add(a,b){
    console.log(a+b)
}
setImmediate(() =>{
    add(2,3)
    console.log('this is setImmediate')
})

setTimeout(() => {
    add(4,5) 
    console.log('this is setTimeout')
},1000)

process.nextTick(() =>{
    add(3,4)
    console.log('this is Nexttick')
})
  add(1, 1);
console.log('this is promise');