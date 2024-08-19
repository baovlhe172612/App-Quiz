import React from 'react'

export function generateToken() {
    
const characters = "ABCDEFGHIJKLMNOPQRSTUWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const length = 20;
let token = "";
for (let index = 0; index < length; index++) {
    token += characters.charAt(Math.floor(Math.random()*characters.length));
    
}
  return token;

}

