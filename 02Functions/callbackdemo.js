function show(value){

    console.log("Result is", value);
}

function sum(a,b,c, callBaclFunction)

{
    let result = a+b+c
    console.log(result);

    callBaclFunction(result)
}

sum(100, 200, 300, show)