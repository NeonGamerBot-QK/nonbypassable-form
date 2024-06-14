// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-06-14
// @description  try to take over the world!
// @author       You
// @match        file:///home/neon/GitHub/nonbypassable-form/index.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=undefined.
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

// let me just inject it instead
setInterval(() => {
        // oh no alerts are disabled
alert(document.querySelector('label').innerText)
/*
const content = document.querySelector('label').innerText
// document.writeln(content + " <- the ans")
//document.write(`${content}\n ANS`)
const div = document.createElement('div')
div.innerHTML = content
document.documentElement.appendChild(div)
*/
}, 1000)
    // Your code here...
})();