// 1

function nonsense(string) {
    var blab = function(){
        alert(string);
    };
    blab();
}

// ------------------------

function nonsense(string) {
    var blab = function(){
        alert(string);
    };
    setTimeout(blab, 2000);
}

// ----------------------------

function nonsense(string) {
    var blab = function(){
        alert(string);
    };
    return blab;
}

let blabLater = nonsense("First string");
let blabAgainLater = nonsense("Second string");

// -------------------------------

blabLater() // alert "First string"
blabAgainLater() // alert "Second string"


// --------------------------

var lastNameTrier = function(firstName){
     var innerFunction = function(lastName) {
         console.log(`${firstName} ${lastName}`);
     };
     return innerFunction;
 };
 var firstNameFarmer = lastNameTrier('Farmer'); //logs nothing
 firstNameFarmer('Brown'); //logs 'Farmer Brown'

 // ------------------------------------

 function storyWriter() {
    let myStory = "";
    return {
        addWords: function(string) {
            myStory = `${myStory} ${string}`.trim();
            return myStory;
        },
        erase: function() {
            myStory = "";
            return myStory;
        }
    };
 }

 var farmLoveStory = storyWriter();
 farmLoveStory.addWords('There was once a lonely cow.'); // 'There was once a lonely cow.'
 farmLoveStory.addWords('It saw a friendly face.'); //'There was once a lonely cow. It saw a friendly face.'

 var storyOfMyLife = storyWriter();
 storyOfMyLife.addWords('My code broke.'); // 'My code broke.'
 storyOfMyLife.addWords('I ate some ice cream.'); //'My code broke. I ate some ice cream.'
 storyOfMyLife.erase(); // ''