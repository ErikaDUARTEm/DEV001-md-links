#!/usr/bin/env node
const { mdLinks } = require('./index.js');
const  colors = require('colors');
const emoji = require('node-emoji');
const { Welcome, Error, Help } = require('./message.js');
const { totalLinks, uniqueLinks, brokenLinks } = require('./cliFunct.js');

const options = process.argv.slice(2);
const userPath = process.argv[2];
const validate = options.includes('--validate') || options.includes('--v');
const stats = options.includes('--stats') || options.includes('--s');
const help = options.includes('--help') || options.includes('--h');

if(options.length === 1) {
    mdLinks(userPath, { validate:false } )
    .then((promise)=>{
        Welcome();
        console.log(promise.flat());
    })
    .catch((error) => {
        Error(error);
    });
}else {
    if(validate && stats){
    mdLinks(userPath, { validate: true})
    .then((promise)=>{
            Welcome();
            console.log(`💜💜💜`, totalLinks(promise) .cyan.bold, `💜💜💜`);
            console.log(`🔗🔗🔗`, uniqueLinks(promise) .magenta.bold, `🔗🔗🔗`);
            console.log(`❌❌❌`, brokenLinks(promise) .red.bold , `❌❌❌`);
    })
    .catch((error) => {
        Error(error);
    });
    }else if (validate) {
        mdLinks(userPath, {validate:true})
        .then((resp) => {
            Welcome();
            console.log(resp.flat());  
        }).catch((error)=>{
            Error(error);
        })
    }else if (stats) {
        mdLinks(userPath, {validate:true})
        .then((resp) => {
            Welcome();
            console.log(`💜💜💜`, totalLinks(resp) .cyan.bold,`💜💜💜`);
            console.log(`🔗🔗🔗`, uniqueLinks(resp) .magenta.bold ,`🔗🔗🔗`);
        }).catch((error)=> { 
            Error(error);
        })
    }else if(help){
        mdLinks(userPath, { validate:true })
        .then(Help())
        .catch((error)=> Error(error));
    }else {
        mdLinks(userPath, { validate:true })
        .then(Error('✨✨✨✨  Please enter a file or directory path to continue ✨ ✨✨✨✨'))
        .catch((error)=>console.log(Error(error)));
    }
}

