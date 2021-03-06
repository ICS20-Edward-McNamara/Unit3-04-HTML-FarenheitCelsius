// Copyright (c) 2022 Edward Mcnamara All rights reserved
//
// Created by: Edward Mcnamara
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict';
/**
 * This function converts temperature from fahrenheit to celsius 
 */
function convert() {
  // Entering temperature in fahrenheit
  let temperature = parseFloat(document.getElementById('temperature').value)


  // converting with the correct formula 
  let celsius = 5.0/9.0 * (temperature - 32)
  let result;


  // Displaying sentence once converted 
  if (celsius < 10) {
    result = "<br>It's Cold Out! Better Bundle Up!";
  } else if (celsius >= 10 && celsius < 20) {
    result = "<br>It's Perfect Out! Go Have Some Fun!";
  } else if (celsius < 30) {
    result = "<br> It's Hot Out! I Hope Your Wearing Sunscreen!";
  } else {
    result = "<br> I Don't Believe It!"
  }

  // Displaying results 
  document.getElementById('celsius').innerHTML = 'The temperature converted to celsius is ' + celsius.toFixed(2) + '°C' + result
  
}