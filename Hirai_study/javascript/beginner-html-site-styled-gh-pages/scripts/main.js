var myHeading = document.querySelector("h1");
myHeading.textContent = 'Hello, World!';
//document.querySelector("html").onclick = function(){alert("Hello");}

var myImage = document.querySelector('img');
console.log("Hello");
/*document.querySelector("html").onclick = function(){
    var mySrc = myImage.getAttribute('src');
    console.log(mySrc)
    if(mySrc === "images/firefox-icon.png"){
        myImage.setAttribute('src', 'images/hirai.png');
    } else {
        myImage.setAttribute("src", "images/hirai.png");
    }
}
*/

var button = document.querySelector("test");

if(!localStorage.getItem("name")){
    setUserName();
    conosle.log("Hey")
} else {
    myHeading.testContent = "Your name is already set";
}

button.onclick = function setUserName(){
    var myName = prompt("Input Your Name");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Your name is " + localStorage.getItem("name");
}