function foo(a,b){
if(typeof a === 'number' && typeof b === 'number'){
return a+b;
}else{
return String(a) + String(b);
}
}
console.log(foo(1,2));//Expected output:3
console.log(foo(1,"2"));//Expected output:12
console.log(foo("1",2));//Expected output:12
console.log(foo("1","2"));//Expected output:12