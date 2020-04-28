// npm install -g package_name
// This installs the package globally, meaning to your computer, so that any other project can use it. Downside: It is only on your computer and not "required" by your package.

// npm install -S package_name
// This instaleld the package just for the Node project you are in. This will also modify the package.json to say that it is required for the project to work. It is installed to the node project folder.

const fs = require("fs");
const lodash = require("lodash");
/* 
 * sometimes coder use the following shortcut
 *
 *     const _ = require("lodash");
 *     console.log(_.random(1, 10));
 */

console.log(lodash.random(1, 10));
console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

let array1 = [70, 30, 30];
let array2 = [100, 30, 10];
let arrayCombined = lodash.concat(array1, array2);

console.log(arrayCombined);

console.log(lodash.difference(array1, array2));

console.log(lodash.now());

// Current assignment

/*

    1. Create "secondNodeProject" folder at same level as "firstNodeProject".
    2. Convert folder into node project using "npm init".
    3. Install package "Express" locally to "secondNodeProject" folder.
    4. BONUS: Find method or property you can use, and use it inside index.js
       file.

 */