const copyrightYear = document.getElementById("copyright-year")

var currentYear = new Date().getFullYear;
var copyright = "Copyright © " + currentYear;   
// document.getElementById("copyright-year").innerHTML = copyright; 
copyrightYear.textContent = "©" + currentYear;