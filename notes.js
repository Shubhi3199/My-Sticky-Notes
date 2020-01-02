const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>{
    return 'YOur notes...';
};

const addNotes = ( title, body ) =>{
    const notes = loadNotes();

    // find() is used here over filter as find() stops looking when it finds any one element satisfying the given condition
    // const duplicateNotes = notes.filter( (note) =>{
    //     return note.title === title;
    // });
    const duplicateNote = notes.find( (note) => note.title === title);
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log('Note Added successfully!');
    }
    else{
        console.log('Note title already taken!');
    }
};

const removeNote = (title) =>{
    const notes = loadNotes();

    const newNotes = notes.filter( (note) =>{
        return note.title !== title;
    });
    saveNotes(newNotes);
    if(notes.length !== newNotes.length){
        console.log(chalk`{keyword('green') ${title} removed successfully}`)
    }else{
        console.log(chalk`{keyword('red') No note found!}`)
    }

};

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk`{inverse.green Your Notes :-}`);
    notes.forEach( ( note, index ) =>{
        console.log(chalk`{keyword('orange') ${index} :} ${note.title}`);
    })
};

const readNote = (title) =>{
    const notes = loadNotes();
    const matchNote = notes.find( (note) => note.title === title );
        if(matchNote){
            console.log(chalk`{green ${matchNote.title} :} `);
            console.log(`${matchNote.body}`);
            }
        else{
            console.log(chalk`{inverse.red Note not found }:( `);
        }
};

// loadNotes() and saveNotes() are my utility functions that are frequently used up by my main functions.

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) =>{   // receives the notes array and writes it into file system (notes.json file)
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};
module.exports = {
    getNotes,
    addNotes,
    removeNote,
    listNotes,
    readNote
};

