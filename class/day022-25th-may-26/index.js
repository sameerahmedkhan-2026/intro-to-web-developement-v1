
// - string concatenation, (fname, lname, )
//   template literals,

const fname = "Shaik";
const lname = "Riyaz";

// const fullName = fname + " " + lname + ".";

const description = 'I am a web developer, having 2 years experience. ' +
    "I'm not a designer, but I can design a website.I have good knowledge of HTML, CSS and JavaScript.I am a quick learner and a team player.I am always eager to learn new technologies and improve my skills.";
// console.log("I am", fullName, description);

const userDetails = `I am ${fname} ${lname}. ${description}`;
console.log(userDetails)

// Multiline template literal
const bio = `Skills:   
 - HTML 
 - CSS 
 - JavaScript`;
console.log(bio);


