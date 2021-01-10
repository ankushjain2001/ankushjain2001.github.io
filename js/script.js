// Using data variable from data.js

$(document).ready(function(){
  // 1. About
  $("#about-p1").append(data.about.intro)
  $("#about-p2").append(data.about.end)
  $("#about-ml").append(data.about.techs)
  $("#about-fs").append(data.about.skills)

  // 2. Experience

});