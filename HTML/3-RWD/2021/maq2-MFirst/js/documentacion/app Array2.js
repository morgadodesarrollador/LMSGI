

var numbers = [1, 5, 10, 15];
console.log('------ for (i=0 ...) ------------');
for (i=0; i<numbers.length; i++) {
    console.log(numbers[i]);
}
console.log('------- for of -----------');
for (let x of numbers) {
    console.log(x);
}
console.log('------- for in -----------');
for (let x in numbers) {
    console.log(x);
}
console.log('------ callback foreach ------------');

numbers.forEach((valor, key)=>{
    console.log(key + ' - ' + valor);
});
console.log('---- callback map --------------');
numbers.map( (num) => {
    console.log (Math.sqrt(num));
})