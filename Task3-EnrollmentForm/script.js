function testVariable() {
  var strText = document.getElementById("fullName").value;          
  var strText1 = document.getElementById("Email").value;
  var strText2 = document.getElementById("phoneNo").value;

  var result = strText + ' ' + strText1 + ' ' + strText2;
  document.getElementById('spanResult').textContent = result;
   
}




//  // Code to display Image

// function loadFile() {
// 	var image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// }

// code for multiple functions

// function testVariable() {
//   var strText = document.getElementById("fullName").value;          
//   var strText1 = document.getElementById("Email").value;
//   var strText2 = document.getElementById("phoneNo").value;

//   var result = strText + ' ' + strText1 + ' ' + strText2;
//   document.getElementById('spanResult').textContent = result;
// }

// function loadFile(event) {
//   var image = document.getElementById('output');
// 	image.src = URL.createObjectURL(event.target.files[0]);
// }

// // Selecting button element
// var btn = document.getElementById("myBtn");

// // Assigning event listeners to the button
// btn.addEventListener("click", testVariable);
// btn.addEventListener("click", loadFile);

// ------Upto here-----

// function someFunc() {
//   testVariable();
//   loadFile();
//   // getCheckboxValue();
// }


// Code to display Radio Buttons

// function myFunction() {
//     // document.getElementById("result").value = sex;
//     var ele = document.getElementsByName('sex');
//     for(i = 0; i < ele.length; i++) {
//       if(ele[i].checked)
//       document.getElementById("result").innerHTML= "Gender: "+ele[i].value;
//     }
// }

// Code to display Checkbox

// Cooment out
// function checkAll() {  
//   var inputs = document.querySelectorAll('.pl');   
//   for (var i = 0; i < inputs.length; i++) {   
//       inputs[i].checked = true;   
//   }   
// }  
// function getCheckboxValue() {  

// var l1 = document.getElementById("check1");  
// var l2 = document.getElementById("check2");  
// var l3 = document.getElementById("check3");   

// var res=" ";   
// if (l1.checked == true){  
// var pl1 = document.getElementById("check1").value;  
// res = pl1 + ",";   
// }   
// else if (l2.checked == true){  
// var pl2 = document.getElementById("check2").value;  
// resres = res + pl2 + ",";   
// }  
// else if (l3.checked == true){  
// document.write(res);  
// var pl3 = document.getElementById("check3").value;  
// resres = res + pl3 + ",";    
// } else {  
// return document.getElementById("result").innerHTML = "You have not selected anything";  
// }  
// return document.getElementById("result").innerHTML = "You have selected " + res + " languages";  
// }  

 // Don't Cooment out this code
// document.getElementById('btn').onclick = function getCheckboxValue() {  
//   var markedCheckbox = document.getElementsByName('pl');  
//   for (var checkbox of markedCheckbox) {  
//     if (checkbox.checked)  
//       document.body.append(checkbox.value + ' ');  
//   }  
// } 

//Comment Out

// function someFunc() {
//   testVariable();
//   getCheckboxValue();
// }



























// var button = document.getElementById("button");
// button,addEventListener("click", displayDetails)

// var row = 1;

// function displayDetails() {
//   var fullName = document.getElementById("fullName").value;
//   var Email = document.getElementById("Email").value;
//   var phoneNo = document.getElementById("phoneNo").value;

//   var demo = document.getElementById("demo");

//   var newRow = demo.insertRow(row);

//     var cel1 = NewRow.insertCel1(0);
//     var cel2 = NewRow.insertCel2(1);
//     var cel3 = NewRow.insertCell3(2);
   
//     cel1.innerHTML = fullName;
//     cel3.innerHTML = Email;
//     cel1.innerHTML = phoneNo;



// }


// // var list1 = [];
// // var list2 = [];
// // var list3 = [];
// // var list4 = [];
// // var list5= [];

// // var n = 1;
// // var x = 0;

// // function Addrow(){
// //     var Addrow = document.getElementById('show');
// //     var NewRow = Addrow.insertCell(n);

// //     list1[x] = document.getElementById("fullName").value;
// //     list2[x] = document.getElementById("Email").value;
// //     list3[x] = document.getElementById("phoneNo").value;
// //     list4[x] = document.getElementById("gender").value;

// //     var cel1 = NewRow.insertRow(0);
// //     var cel2 = NewRow.insertRow(1);
// //     var cel3 = NewRow.insertRow(2);
// //     var cel4 = NewRow.insertRow(3);

// //     cel1.innerHTML = list1[x];
// //     cel2.innerHTML = list2[x];
// //     cel3.innerHTML = list3[x];
// //     cel4.innerHTML = list4[x];

// //     n++;
// //     x++;
// // }

// // All Inputs in the form are displayed here

// // function display() {
// //     var x = document.getElementByName('inputValues');
// //     var text = "";
// //     var i;
// //     for (i = 0; i < x.length ;i++) {
// //       text += x.elements[i].value + "<br>";
// //     }
// //     document.getElementById("demo").innerHTML = text;

// //     // function myFunction(sex) {
// //     //   document.getElementById("result").value = text;
// //     // }
    
// // }

// // var k = "";
// // function display() {
// //   var input = document.getElementsByName('inputValues');
// //   var i;
// //   for (var i = 0; i < input.length; i++) {
// //     var a = input[i];
// //     k = k + a.value + " ";
// //   }

// //   document.getElementById("demo").innerHTML = k;
// // }

// // Code to display Radio Buttons

// function myFunction() {
//     // document.getElementById("result").value = sex;
//     var ele = document.getElementsByName('sex');
//     for(i = 0; i < ele.length; i++) {
//       if(ele[i].checked)
//       document.getElementById("result").innerHTML= "Gender: "+ele[i].value;
//     }
// }
//   // function myFunction(browser) {
//   //   document.getElementById("result").value = browser;
//   // }
  
// function display() {
//   var x = document.getElementById("from1").elements.namedItem("inputValues").value;
//   document.getElementById("demo").innerHTML = x;
// }

// // function display() {
// //   document.getElementById('demo').innerHTML = document.getElementById("fullName").value;
// // }

// Code to display value of checkbox

// function getChecked() {
//   const checkBox = document.getElementById('check1').checked;
//   if (checkBox === true) {
//     console.log(true);
//     } else {
//       console.log(false);
//   }
// }