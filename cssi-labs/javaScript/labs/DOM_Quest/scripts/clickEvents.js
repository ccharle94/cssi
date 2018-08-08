// Copyright 2018 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

console.log("Running Click Events Script");

let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');

box1.addEventListener('click', boxColor1);
box2.addEventListener('click', boxColor2);
box3.addEventListener('click', boxColor3);

function boxColor1()
{
document.getElementById("box1").style.backgroundColor = "red";
document.getElementById("box2").style.backgroundColor = "red";
document.getElementById("box3").style.backgroundColor = "red";
}

function boxColor2()
{
document.getElementById("box1").style.backgroundColor = "pink";
document.getElementById("box2").style.backgroundColor = "pink";
document.getElementById("box3").style.backgroundColor = "pink";
}

function boxColor3()
{
document.getElementById("box1").style.backgroundColor = "orange";
document.getElementById("box2").style.backgroundColor = "orange";
document.getElementById("box3").style.backgroundColor = "orange";
}

let box4 = document.getElementById('box4');
let box5 = document.getElementById('box5');

box4.addEventListener('click',toggleBox);
box5.addEventListener('click',toggleBox);

function toggleBox () {
 box4.classList.toggle('active');
 box5.classList.toggle('active');
}
// This is if you want to use a function
// let box4 = document.querySelector('#box4');
// let box5 = document.querySelector('#box5');

// let id = ["box4","box5"];

// function toggleBox(){
  // box4.classList.toggle('active');
  // box5.classList.toggle('active');
// }

// box4.addEventListener('click',toggleBox);
// box5.addEventListener('click',toggleBox);
