//this function returns the sum //of two numbers
function sum(a,b){
    return a+b
}

if(sum(1,3)!=4){
    throw new Error("sum of 1 and 3 should be 4")
}

if(sum(4,2)!=6){
    throw new Error("sum of 4 and 2 should be 6")
}