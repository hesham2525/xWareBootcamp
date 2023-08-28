"use strict";

// let naame = "hesham";
// let age = 23;
// console.log(naame);
// console.log(age);
// /////////////////////////
// let javascriptIsFun = true;
// let name = "hesham";
// let year = 2001;
// console.log(typeof javascriptIsFun);
// console.log(typeof true);
// //////////////////////////

// let age = 23;
// var year = 2001;
// const day = 15;
// ////////////////////////////////////////////
// let ageHesham = 15;
// let ageAhmed = 20;
// console.log(ageHesham <= ageAhmed);

// /////////////////////////////////////////////
// const now = 2023;
// const heshamAhe = now - 2001;
// console.log(heshamAhe);
// /////////////////////////////////////


// let name1 ="mark";
// let markWeight = 78;
// let markTall = 1.69;
// let BMI = markWeight /(markTall*markTall)
// console.log(BMI)

// let name2 ="joy";
// let joyWeight = 92;
// let joyTall = 1.95;
// let BMI2 = joyWeight /(joyTall*joyTall)
// console.log(BMI2)

// if(BMI>BMI2){
//     // console.log("mark is higher than joy" )
//     console.log (`mark is higher than joy , mark BMI IS ${BMI}`)

// }
// else{
//     console.log (`JOY is higher than joy , JOY BMI IS ${BMI2}`)

//     // console.log("joy is higher than mark")

// }

// /////////////////////
// const frstName ="hesham";
// const jop ="doctor";
// const birthday =2001;
// const year =2023;

// // const hesham ="i am " + frstName + " my jop is " + jop + "my age " + (year-birthday)
// const hesham =`i am ${frstName} my jop is ${jop} my age ${year-birthday}`

// console.log(hesham)
// /////////////////////////////////////
// const age =16
// if (age>=18){
//     console.log("ok you can git lecance")
// }
// else{
//   let agee=18-age
//     console.log("you can not have you must wait "+ agee)
// }
///////////////////////////////////////////////
// const age   = 5000
// console.log (String(age))
// const age22  = "555555555555"
// console.log (Number(age))
/////////////////////////////////////
// const age = 18
// if (age===18) console.log("ok")
// if (age==18) console.log("ok baby")

// ////////////////////////////
// const age2 = "18"
// if (age2===18) console.log("ok")
// if (age2==18) console.log("ok baby")
// ////////////////////////////////////////////

// // logical operator//
// // &&  ||  ! //

// // const hasGoodLicance = true
// // const hasGoodVision = true
// // console.log(hasGoodLicance && hasGoodVision)
// // console.log(hasGoodLicance || hasGoodVision)
// // console.log(!hasGoodLicance)
// // //////////////////////////////

// let team1 = "dolphins"
// let d_score1 = 96
// let d_score2 = 108
// let d_score3 = 89

// let team2 = "koalas"
// let k_score1 = 88
// let k_score2 = 91
// let k_score3 = 110

// let avrageTeam1 = d_score1 + d_score2 + d_score3
// let avrageTeam2 = k_score1 + k_score2 + k_score3

// if(avrageTeam1 > avrageTeam2){
//     console.log("Dolphine is winner ")
// }
// else if(avrageTeam1 < avrageTeam2){
//     console.log("koalas is winner ")
// }
// else{
//     console.log(" all teams are equal ")

// }
///////////////////
// const day = 'friday';
// switch (day) {
//   case 'monday': // day === 'monday'
//     console.log('Plan course structure');
//     console.log('Go to coding meetup');
//     break;
//   case 'tuesday':
//     console.log('Prepare theory videos');
//     break;
//   case 'wednesday':
//   case 'thursday':
//     console.log('Write code examples');
//     break;
//   case 'friday':
//     console.log('Record videos');
//     break;
//   case 'saturday':
//   case 'sunday':
//     console.log('Enjoy the weekend :D');
//     break;
//   default:
//     console.log('Not a valid day!');
// }
//////////////////////////////////////////////////////////////////////
// const frinds= ["hesham","ahmed ", " marwan"];// array 
// frinds.unshift("joy") // اضافه من قدام 
// frinds.push("mark") // اضافه من ورا 
// console.log(frinds.length);
// // frinds.shift(frinds[2])    //بتمسح اول واحد
// frinds.shift()    //بتمسح اول واحد
// console.log(frinds.indexOf("hesham")) // location 
// console.log(frinds.includes("hesham"))// موجود ولا لا 
// console.log(frinds);
/////////////////////////////////////////////////////////////////////
const obj ={
    firstName :"hesham",
    year: 2023,
    age: year - 2001,
}
const mykey ="age"
obj.mykey =100
console.log(obj)
////////////////////////////////////////////////////////////////
