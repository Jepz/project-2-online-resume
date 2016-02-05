

 var myThoughts = "I'm Jesper and I'm Awesome!";
 var myName = "Jesper";
 var myRole = "Ninja";
 var formattedName = HTMLheaderName.replace('%data%', myName);
 var formattedRole = HTMLheaderName.replace('%data%', myRole);

 //myThoughts = myThoughts.replace("Awesome", "fun");

 //$("#main").append(myThoughts);

 $('#main').append(bio.name).prepend(bio.role);

 /*var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var res = s.split("");
    var lettersU = res.splice(0,1)

    
    return res[0].toUpperCase() + res.splice(1,6).join("");
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));*/

// <script src="http://hackyourwebsite.com/eviljavascript.js"></script> remove < and >
var charEscape = function(_html) {
    var newHTML = _html;

    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");

    return newHTML;
};