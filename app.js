var val1 = prompt("Enter your  first value")
var sign = prompt("Enter your operator")
var val2 = prompt("Enter your second value")
console.log(val1+sign+val2)
if(sign === "+"){
    alert((+val1)+(+val2))
}else if (sign === "-"){
    alert(val1-val2) 
}else if (sign === "*"){
    alert(val1*val2) 
}else if (sign === "/"){
    alert(val1/val2) 
}else if(sign === "%"){
    alert(val1/val2*100 + "%")
}