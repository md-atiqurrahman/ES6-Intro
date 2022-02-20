function add(num1,num2 = 100){
    //system no.1
    // if(num2 == undefined){
    //     num2 = 0;
    // }

    // system no.2
    // num2 = num2 || 0;
    const totall = num1 + num2;
    return totall;
}

const result = add(20);
// console.log(result);

function getSum(a, b=9){
    return a+b;
}
 console.log(getSum(2, 7));