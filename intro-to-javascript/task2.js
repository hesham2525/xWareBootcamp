let btn_array = document.getElementById("array");
let btn_string = document.getElementById("string");
let btn_number = document.getElementById("number");
let input_field = document.getElementById("input_field").value;

function convertToArray(){
let input_field = document.getElementById("input_field").value;
let converted_string = input_field.toString();
console.log(converted_string);
return converted_string;

}
btn_string.addEventListener("click", function(){
    convertToArray()
});


function convertToString(){
    let input_field = document.getElementById("input_field").value;
    let converted_array =input_field.split(" ");
    console.log(converted_array);
    return converted_array;
}
btn_array.addEventListener("click", function(){
    convertToString()
});


function convertToNumber(){
    let input_field = document.getElementById("input_field").value;
    let converted_number =input_field.split("");
    console.log(converted_number);
    return converted_number;
}
btn_number.addEventListener("click", function(){
    convertToNumber()
});

