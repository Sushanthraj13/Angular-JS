const fs = require('fs');

fs.writeFile('example.txt', 'This is a sample text file.',(err) =>{
    if (err){
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created sucessfully.');
});

fs.readFile('example.txt', 'utf8', (err, data) =>{
    if(err){
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

fs.appendFile('exmple.txt', '\n This ia an additional line.',(err)=>{
    if(err){
        console.error('Error updating file:', err);
        return;
    }
    console.log('File updated sucessfully.');
});

fs.rename('exmple.txt', 'newname.txt', (err)=>{
    if(err){
        console.error('Error renaming file:', err);
        return;
    }
    console.log('File renamed sucessfully.');
});