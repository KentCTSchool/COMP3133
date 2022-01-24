const fs = require('fs');

async function readFile(filePath) {
    try {
        const data = await fs.promises.readFile(filePath);
        const lines = data.toString().split('\n');
        const header = lines[0];
        const canada = lines.filter(country => country.includes('Canada'));
        const us = lines.filter(country => country.includes('United States'));

        writeMe('canada', `${header}${canada.toString().toLowerCase()}`);
        writeMe('usa', `${header}${us.toString().toLowerCase()}`);
    } catch (error) {
      console.error(`Got an error trying to read the file: ${error.message}`);
    }
}

//Checking and deleting
async function checkFile(filePath) {
    try {
      if (fs.existsSync(filePath)) {
        console.log('File Exist')
        deleteFile(filePath);
      }
    } catch(err) {
      console.error(err)
    }
  }

async function deleteFile(filePath) {
    try {
      await fs.promises.unlink(filePath);
      console.log(`Deleted ${filePath}`);
    } catch (error) {
      console.error(`Got an error trying to delete the file: ${error.message}`);
    }
}

async function writeMe(country, text){
    await fs.writeFile(`${country}.txt`, text, (err) => {
        console.log("Write Success")
    })
}


checkFile('./canada.txt');
checkFile('./usa.txt');
readFile('input_countries.csv');
