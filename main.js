/*
Features of this file organiser
    1. Get tree structure of Folder
    2. Organise Files in folders
    3. Help 
*/

let inputArr = process.argv.slice(2)
let fs = require("fs");
let path = require("path");
// console.log(inputArr);

let command = inputArr[0]

switch(command){
    case 'tree':
        treeFn(inputArr[1]);
        break;
    case 'organise':
        organiseFn(inputArr[1])
        break;
    case 'help':
        helpFn();
        break;
}

function treeFn(dirPath){
    console.log("Tree command implemented for ", dirPath);
}

function organiseFn(dirPath){
    console.log("Organise command implemented for ", dirPath);
    let destPath;
    if(dirPath == undefined){
        console.log("Kindly enter the path");
    }else{
        let doesExist = fs.existsSync(dirPath)
        if (doesExist){
            destPath = path.join(dirPath, "organised_files");
            if (fs.existsSync(destPath) == false){
                fs.mkdirSync(destPath)  
            }
        }else{
            console.log("Please enter the correct path!");
        }
    }
    organiseHelper(dirPath, destPath);

}

function organiseHelper(src, dest){
    let childNames = fs.readdirSync(src)
    // console.log(childNames);
    
}



function helpFn(){
    console.log(`
    List of all commands:
        1. Tree Structure
        2. Organise Structure
    `);
}