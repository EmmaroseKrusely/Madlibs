var button1 = document.getElementById('button1');
var storyDiv = document.getElementById('story');
    var noun = document.getElementById('noun');
    var color = document.getElementById('color');
    var adjective = document.getElementById('adjective')
    var yourName = document.getElementById('name')
    var pNoun = document.getElementById('pNoun')


function random(){
    let randomStory= Math.floor(Math.random() * 3);
    console.log(randomStory)


switch(randomStory){
    case 0:
        document.getElementById('story').innerHTML = "Welcome " + yourName.value
    + " to your new job at " + pNoun.value +" inc. We are a pen company that specializes in "  + color.value + " ink. We pride ourselves in our " + adjective.value + " work environment. We are located in " + noun.value + "town, which is in high demand for good quality pens.";
    break;
    case 1:
        document.getElementById('story').innerHTML = "Hello " + yourName.value + "! You are filing a complaint with " +  pNoun.value +" INC. We understand that your "+ color.value +" pens aren't exactly to your liking, and we want you to have a "+ adjective.value +" experience you can have with our company! Please submit your complaint by mail in " + noun.value + " city, and we will respond within 7-10 business days." ;
        break;
    case 2:
        document.getElementById('story').innerHTML = "Thank you, "+ yourName.value +" for your purchase at "+ pNoun.vlaue +" INC. We saw that you picked our "+ color.value +" pens, good choice. We hope that you had a "+ adjective.value +" experience with us. If you want to send feedback or file a complaint, please send them by mail in "+ noun.value +" city, and we will get back to you.";
        break;
}
}
// var generate = function generate() {
//     var storyDiv = document.getElementById('story');
//     var noun = document.getElementById('noun');
//     var color = document.getElementById('color');
//     var adjective = document.getElementById('adjective')
//     var name = document.getElementById('name')
//     var pNoun = document.getElementById('pNoun')
//     storyDiv.innerHTML = "welcome " + name.value
   //   + " to your new job at " + pNoun.value +" inc. We are a pen company that specializes in "  + color.value + " ink. We pride ourselves in our " + adjective.value + " work environment. We are located in " + noun.value + "town, which is in high demand for good quality pens.";

