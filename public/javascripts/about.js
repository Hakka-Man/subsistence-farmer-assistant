var ourCount = 0;
var storyCount = 0;
var our = 'Our';
var story = 'Story';
var speed = 50;

function ourTypeWriter() {
  if (ourCount < our.length) {
    document.getElementById("our").innerHTML += our.charAt(ourCount);
    ourCount++;
    setTimeout(ourTypeWriter, speed);
    }else{
        storytypeWriter()
    }
}

function storytypeWriter() {
  if (storyCount < story.length) {
    document.getElementById("story").innerHTML += story.charAt(storyCount);
    storyCount++;
    setTimeout(storytypeWriter, speed);
  }
}
