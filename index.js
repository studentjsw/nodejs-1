const fs = require('fs');
const path = require('path');

// current timestamp in milliseconds
const timestamp = Date.now();

const dateObject = new Date(timestamp);
const date = dateObject.getDate();
const month = dateObject.getMonth() + 1;
const year = dateObject.getFullYear();
const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
const seconds = dateObject.getSeconds();
const currentDateTime = `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`

fs.writeFile('./express/current-date-time.txt', currentDateTime, (err) => {
    if (err) {
        console.log(error)
    }
    else {
        console.log("completed writing the file")
    }
})

fs.readdir('./express', (err, files) => {
    if (err)
        console.log(err);
    else {
        console.log("\Filenames with the .txt extension:");
        files.forEach(file => {
            if (path.extname(file) == ".txt")
                console.log(file);
        })
    }
})