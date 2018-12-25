//Begin with a total of zero.
var total = 0;
//For every value of i between 0 and 1000 that is divisible by 3 or 5, add i to the total.
function euler1(){
    for(var i = 0; i < 1000; i++){
        if((i % 3 == 0)||(i % 5 == 0)){
            total += i;
        }
    }
    return total;
}

console.log(euler1());