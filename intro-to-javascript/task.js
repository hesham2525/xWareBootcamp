// let string = "hesham mohamed mahmoud"; // #input string type
// let arr =string.split(" ");
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "hesham") {

//     console.log(arr[i]);
//     console.log(arr[i].length);
//   }
// }
// ////////////////////////////////////////////////

// let text = "Hello world";
// let revarcearray = text.split(" ").reverse(); //#convert array to string

// console.log(revarcearray);
// let text1 = revarcearray;
// console.log(text1.reverse());
// let text2 = text1.toString();
// console.log(text2);

// ////////////////////////////////////////////

// let words = "heshammmmmmmmm"; // #input string type ex: "heshammmmmmm
// function check(x) {
//   let newWord = " ";
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] !== i) {
//       newWord = x[i];
//     }
//   }
//   return newWord;
// }

// console.log(words);

// console.log(check(words));
///////////////////////////////////////////
// let textt = "hesham hesham hesham ahmed ahmed hesham ahmed";
// let duplecate = textt.split(" ");

// function removeDuplicates(duplecate) {
//   return duplecate.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(duplecate));

// //////////////////////////////////////
// let numbers = [10, 20, 30, 40, 50, 60, 70, 80];
// function sumition(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num;
//   }
//   return sum;
// }
// console.log(sumition(10, 20, 20, 20, 20, 20, 20,130));

/////////////////////////////////////////////////////////////////////////
// let largNumbers = [10, 20, 30, 40, 50, 60, 80];
// function larg(largNumbers) {
//   let max = 0;
//   for (let i = 0; i < largNumbers.length; i++) {
//     if (largNumbers[i] >= max) {
//       max = largNumbers[i];
//     }
//   }
//   return max;
// }
// console.log(larg(largNumbers));

// ///////////////////
// function largest(a){
//   let max = 0;
//   for (let i = 0; i < a.length; i++){
//     if (a[i] >= max){
//       max = a[i];
//     }
//   }
//   return max;
// }

// let arr = [1, 141, 23, 10, 9, 92];
// console.log(largest(arr));
///////////////////////////////////////////////*////////////////
//#create math.rendom in expample 1 =>10

////////////////////////////////////////////////////////////////
// let arr=[10,20,30,40,50,60]
// function reverseNumber(x){
//   let revarr = arr.reverse()
//   return revarr;
// }
// console.log(reverseNumber(arr));
// ///////////////////
// let array=[10,20,30,40,50,60]
// let revarray = array.reverse();
// console.log(revarray);
///////////////////////////////////////////////////
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// function mixarray(x, y) {
//   let arr3 = x.concat(y);
//   return arr3;
// }
// console.log(mixarray(arr1, arr2));
///////////////////////////////////
// let array = [10, 20, 30, 40, 50, 60, 70];
// let sum = 0;
// function avarage(x) {
//   for (let i = 0; i < x.length; i++) {
//     sum += x[i];
//     // let avarageNum=sum/x.length
//   }
//   return sum / x.length;
// }
// console.log(avarage(array));
////////////////////
// let numbers = [10, 20, 30, 40, 50, 60, 70];
// function sumition(...numbers) {
//   let sum = 0;
//   for (let num of numbers) {
//     sum += num/numbers.length;

//   }
//   return sum;
// }
// console.log(sumition(10, 20, 30, 40, 50, 60, 70));
///////////////////////////////////////////////////////////////
// let arr1 = [45, 99, 55, 223, 17, 93, 23];
// let arr2 = [45, 18, 93, 7, 23, 1, 223, 5];
// function getCommon(arr1, arr2) {
//   let common = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] == arr2[j]) {
//         common.push(arr1[i]);
//       }
//     }
//   }

//   return common; 
// }
// console.log(getCommon(arr1, arr2))
////////////////////////////////////////////////

//////////////////////////////////////////
fetch("https://fakestoreapi.com/products")
  .then((result) => {
    let products = result.json();
    return products;
  })
  .then((products) => {
    let total=0
    for (let i = 0; i < products.length; i++) {
      
      console.log(products[i].title);
      console.log(products[i].price);
        let price1 = products[i].price;
        total+=price1;
    }
       console.log(total);
  })
// /////////////////////////////////////////////////////

//   fetch("https://fakestoreapi.com/carts")
//   .then((result) => {
//     let carts = result.json();
//     return carts;
//   })
//   .then((carts) => {
//     for (let i = 0; i < carts.length; i++) {
        
//       console.log(carts[i].products);

//     }
//   })
/////////////////////////////////////////////////////
class shape{
  area() {}
}
class circle extends shape{
   constructor(r) {
    super();
    this.redius = r;

   }
   area(){
    return Math.PI *this.redius **2;
   }

}
class rectangle extends shape{
 constructor (w,h){
  super()
  this.width=w;
  this.height=h;
 }
 area(){
  return this.width * this.height
 }
}
// const shapes













// <style>
//       .contaner{
//         background-color: ;
//       }
//  input{
//   width: 200px;
//         height: 40px;
// }
//       button{
//         width: 200px;
//         height: 50px;
//       }
//     </style>