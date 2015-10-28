
function getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 15)];

  }
  return color;
}

var clickedTime; var createdTime; var reactionTime;

function makeBox() {

  var time=Math.random();

  time=time*4000;

  setTimeout(function() {

    if(Math.random()>0.5) {

      document.getElementById("target").style.borderRadius="100px";

    }else{

      document.getElementById("target").style.borderRadius="0";
    }

    var top=Math.random();

    top=(screen.height - 500) * top;

    var left=Math.random();

    left=(screen.width - 800) * left;


    document.getElementById("target").style.top=top+"px";

    document.getElementById("target").style.left=left+"px";

    document.getElementById("target").style.backgroundColor=getRandomColor();

    document.getElementById("target").style.display="block";


    createdTime=Date.now();

  }, time);

}

document.getElementById("target").onclick=function() {

  clickedTime=Date.now();

  reactionTime=(clickedTime-createdTime)/1000;

  document.getElementById("time").innerHTML=reactionTime;

  this.style.display="none";
  


makeBox();
  
}


makeBox();