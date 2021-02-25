function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}



function myKeyDown(event) {
  if (event.keyCode == 37) {
    setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
    setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) {
    setInterval(moveDown, 10);
  }
  if (event.keyCode == 39) {
    setInterval(moveRight, 10);
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}

function changeContent() {
  var element = document.getElementById("circle");
  element.firstChild.nodeValue = "hahaha";
}

function myClickCircleEvent() {
  var element = document.getElementById("circle");
  element.addEventListener("click", changeContent);
}


document.addEventListener('DOMContentLoaded', myClickCircleEvent); 


function myInterval() {
    var element = document.getElementById('circle');
    var circleOpacity = element.style.opacity;
    element.style.opacity = circleOpacity - 0.01;
    }

    function myClickEvent() {
    setInterval(myInterval, 10);
    }
    
    function myLoadEvent() {
    var element = document.getElementById('circle');
    element.addEventListener('click', myClickEvent);
    element.style.opacity = 1;
    }
    document.addEventListener('DOMContentLoaded', myLoadEvent);