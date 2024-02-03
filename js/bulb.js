const bulbButton = document.getElementById("button");


bulbButton.addEventListener('click', function myFunction() {
  const element = document.getElementById("bulb__box");
  const element2 = document.getElementById("bulb__text");
  const element3 = document.getElementById("lines");
  const element4 = document.getElementById("lines2");
  const element5 = document.getElementById("lines3");
  const element6 = document.getElementById("switch");
  if (element.className == "box") {
    element.className = "box2";
    element2.className = "bulb__section--text2";
    element3.style.background = "linear-gradient(45deg, rgb(15, 15, 15), rgb(128, 78, 14), rgb(233, 107, 4), rgb(255, 81, 0))";
    element4.style.background = "linear-gradient(45deg, rgb(15, 15, 15), rgb(128, 78, 14), rgb(233, 107, 4), rgb(255, 81, 0))";
    element5.style.background = "linear-gradient(45deg, rgb(15, 15, 15), rgb(128, 78, 14), rgb(233, 107, 4), rgb(255, 81, 0))";
    element6.style.opacity = "0.8";

  } else if (element.className == "box2") {
    element.className = "box";
    element2.className = "bulb__section--text";
    element3.style.background = "rgb(126 126 126)";
    element4.style.background = "rgb(126 126 126)";
    element5.style.background = "rgb(126 126 126)";
    element6.style.opacity = "0.2";

  }

});
