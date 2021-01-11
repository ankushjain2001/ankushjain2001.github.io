// Using data variable from data.js

$(document).ready(function(){
  // 1. About
  $("#about-p1").html(data.about.intro);
  // Default skill
  $("#about-skill").html(data.about.ml);
  // Listener for skills
  $('input[name=skills]').change(function () {
    let curr = $('input[name=skills]:checked').val();
    if (curr === '0'){
      // console.log(curr)
      $("#about-skill").html(data.about.ml);
    }
    else if (curr === '1'){
      // console.log(curr)
      $("#about-skill").html(data.about.fs);
    }
  });
  

  // 2. Experience
  // Default experience
  let e = data.experience[0];
  $("#exp-role").html(e.role);
  $("#exp-name").html(e.name);
  $("#exp-type").html(e.type);
  $("#exp-duration").html(e.duration);
  $("#exp-description").html(e.description);
  // Listener for experience 
  $('input[name=experience]').change(function () {
    let curr = parseInt($('input[name=experience]:checked').val());
    let e = data.experience[curr];
    $("#exp-role").html(e.role);
    $("#exp-name").html(e.name);
    $("#exp-type").html(e.type);
    $("#exp-duration").html(e.duration);
    $("#exp-description").html(e.description);

  });
  


});