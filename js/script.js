// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function calculates your bmi based on your height in cm and weight in kg
 */
function convert() {
  // Entering height and weight
  let temperature = parseFloat(document.getElementById('temperature').value)


  // Calculating with bmi formula 
  let celsius = 5.0/9.0 * (temperature - 32)
  let result;


  //  //Dividing as per the bmi conditions
  // if (celsius < 18.6)
  //   result = "<br>You're Underweight!";
  
  // else if (celsius >= 18.6 && bmi < 24.9)
  //    result = "<br> You're Normal Weight!!";
  
  // else if (24.9 < celsius)
  //   result = "<br> You're Overweight!!!";
  // else
  //   result = "<br> Invalid Answers"



  // Displaying results 
  document.getElementById('celsius').innerHTML = 'The temperature converted to celsius is ' + celsius.toFixed(2)
  
}