// --------GIT----------

const git = [
    "git add -A",
    "git commit -m 'a message to the commit'",
    "git push"
 ]
 
 function updateGit() {
     const factIndex = Math.floor(Math.random() * fetch.length);
     document.getElementById('gitExercises').innerHTML = git[factIndex];
 }

 setInterval(updateGit, 5000)
 updateGit()
 
 // --------Nodemon----------

const nodemon = [
    "node app.js",
    "nodemon app.js"
 ]
 
 function updateNodemon() {
     const factIndex = Math.floor(Math.random() * fetch.length);
     document.getElementById('nodemonExercises').innerHTML = nodemon[factIndex];
 }

 setInterval(updateNodemon, 5000)
 updateNodemon()
 