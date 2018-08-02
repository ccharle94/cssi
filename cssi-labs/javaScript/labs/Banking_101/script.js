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

let customer_name;
let balance;

function openAccount(name,gwalla = 0){
  customer_name = name;
  balance = gwalla;
  // Set the value for customer_name equal to name below
  return customer_name +" has opened a new account with a balance of $" + balance;//write the statment you need to return here
}

function deposit(value){
  // update the value of balance
  balance += value;
  //return the correct statement
  return customer_name + " has deposited $"+ value +" "+ customer_name + " has a $" + balance +" remaining";
}

function withdraw(money/*argument here*/){
  //update the value of balance
  if(money > balance){
    return "Sorry " + customer_name + " you do not have enough money in your account you need " + (money - balance) + " more dollars.";}
  //return the correct statement
  else{
  return customer_name + " you have a balance of " +(balance - money) + " remaining";}
}
  
// Write your script below
console.log("script is running...");
