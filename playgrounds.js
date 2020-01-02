const fs = require('fs');

const dataBuffer = fs.readFileSync('playgrounds.json');
const dataJSON = dataBuffer.toString();

const data = JSON.parse(dataJSON);
data.name = 'Shubham';
data.planet = 'Mars';
data.age = 20;

const dataString = JSON.stringify(data);
fs.writeFileSync('playgrounds.json', dataString);
