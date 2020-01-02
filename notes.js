const fs = require('fs');

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
    addNotes
};

