const fs = require('fs');

const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const getNotes = require('./notes');

// const msg = getNotes();
// console.log(msg);
// console.log(chalk.bold.keyword('orange')('THIS IS AN ERROR!'));
// console.log(chalk.hex('#f43ff1')('Another way of using chalk!'));
// console.log(chalk.rgb(0,255,200).bold("I'm the inverted text"));

// command to remove a note..
yargs.command({  // configuration object
    command:'remove',
    decribe:'Removes a Note!',
    handler:function () {
        console.log('The selected note is removed successfully');
    }
});

// command to add a new note..
yargs.command({
    command: 'add',
    describe: 'Adds new Note',
    handler: function (argv) {
        console.log(chalk`{green Title} : {keyword('orange') ${argv.title}}`);
        console.log(chalk`{green Description} : ${argv.body}`);
    },
    builder: {
        title:{
            describe: 'Add the title',
            demandOption: true,            // to make this title property necessary
            type: 'string'
        },
        body:{
            describe: 'Add the description',
            demandOption: true,
            type: 'string'
        }
    }
});

// command to read a note
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log("THis is a placeholder to read a node");
    }
});

// command to list all notes
yargs.command({
    command: 'list',
    describe: 'List all the notes',
    handler: function () {
        console.log("THis is a placeholder listing all the notes");
    }
});

yargs.parse();