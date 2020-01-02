const fs = require('fs');
const chalk = require('chalk');

const getNotes = () =>{
    return 'YOur notes...';
};

const addNotes = ( title, body ) =>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter( (note) =>{
        return note.title === title;
    });
    if(duplicateNotes.length === 0){
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
    removeNote
};

