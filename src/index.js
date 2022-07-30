var remote = require('remote'); // Load remote compnent that contains the dialog dependency
var dialog = remote.require('dialog'); // Load the dialogs component of the OS
var fs = require('fs'); // Load the File System to execute our common tasks (CRUD)

dialog.showOpenDialog((fileNames) => {
    // fileNames is an array that contains all the selected
    if (fileNames === undefined) {
        console.log("No file selected");
        return;
    }

    fs.readFile(filepath, 'utf-8', (err, data) => {
        if (err) {
            alert("An error ocurred reading the file :" + err.message);
            return;
        }

        // Change how to handle the file content
        console.log("The file content is : " + data);
    });
});

var filepath = "C:/Previous-filepath/existinfile.txt";// you need to save the filepath when you open the file to update without use the filechooser dialog againg
var content = "This is the new content of the file";

fs.writeFile(filepath, content, (err) => {
    if (err) {
        alert("An error ocurred updating the file" + err.message);
        console.log(err);
        return;
    }

    alert("The file has been succesfully saved");
});