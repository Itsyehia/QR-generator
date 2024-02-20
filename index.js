import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    /* Pass my questions in here */
   {
     "message":"Enter your URL " ,
      "name" :"URL"
  }])
  .then((answers) => {
    // assign user's input to a const called url
    const url = answers.URL; 
    
    // assign the url to a var 
    // that will hold our generated QR Code Image as a Buffer
    var qr_svg = qr.image(url);

    // outputs  the url in a form of a png 
    qr_svg.pipe(fs.createWriteStream( url + '.png'));

    fs.writeFile("URL.txt" , url , (err) =>{
      if (err) throw err;
      console.log("file has been saved");
    })

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });