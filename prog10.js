const fs = require('fs');

// Appending content to a file (or creating a new file)
fs.appendFile('newFile_append.txt', 'This is the content that will be appended.', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created (or content appended) successfully!');
});


// Creating a new file using fs.open()
fs.open('newFile_open.txt', 'w', (err, file) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created successfully!');
});



// Writing content to a file (or creating a new file)
fs.writeFile('newFile_write.txt', 'This is the content that will be written.', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('File created (or content written) successfully!');
});



