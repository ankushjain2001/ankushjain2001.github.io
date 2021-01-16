// Using data variable from data.js

$(document).ready(function(){

  // 0. Navbar scroll
  var previousScroll = 20;
  // scroll functions
  $(window).scroll(function(e) {
  
      // add/remove class to navbar when scrolling to hide/show
      var scroll = $(window).scrollTop();
      if (scroll >= previousScroll) {
          $('.navbar').addClass("navbar-hide");
          $('.navbar').addClass("shadow");
          $('.navbar').removeClass("py-4");
          $('.navbar').removeClass("py-2");
      
      }else if (scroll < previousScroll) {
          $('.navbar').removeClass("navbar-hide");
      }
      previousScroll = scroll;
      
      if(scroll == 0) {
        $('.navbar').removeClass("shadow");
        $('.navbar').addClass("py-4");
      }
  
  });

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
  
  // 3(a). Project

  for (let i=0; i<data.featured_projects.length; i++){

    // URL for image to redirect to the github repo (if available), else the youtube video.
    let img_to_src_url = ""

    // Add data for youtube or github links
    let link_data = ``
    if (data.featured_projects[i].demo_url != "") {
      link_data += `<a class="git-project-icon" href="`+data.featured_projects[i].demo_url+`" target="_blank"><i class="lni lni-youtube"></i></a>`
      img_to_src_url = data.featured_projects[i].demo_url
    }
    if (data.featured_projects[i].github_url != "") {
      if (link_data != ``){
        link_data += `<span class="px-1"></span>`
      }
      link_data += `<a class="git-project-icon" href="`+data.featured_projects[i].github_url+`" target="_blank"><i class="lni lni-github"></i></a>`
      img_to_src_url = data.featured_projects[i].github_url
    }
    
    
    if (i%2 == 0) {
      // Add data for tech badges
      let tech_data = ``
      for (let j=0; j<data.featured_projects[i].tech.length; j++){
        tech_data += `<span class="badge badge-primary text-light mono-font badge-tech ml-2 mb-2">`+data.featured_projects[i].tech[j]+`</span>`
      }
      // Add overall html
      let html_data = `
      
      <div class="row px-3 my-4">
          <div class="col-md-7 order-md-2 my-auto">
              <p class="text-right small mb-1"><i class="lni lni-star-filled text-warning mr-1"></i> Featured Project</p>
              <h3 class="text-right sub-heading-size mb-1"><b>`+data.featured_projects[i].name+`</b></h3>
              <p class="text-right dark-sub-text">`+data.featured_projects[i].description+`</p>
              <div class="text-right small pb-1 mb-2">`+tech_data+`</div>
              <div class="text-right">`+link_data+`</div>

          </div>
          <div class="col-md-5 order-md-1">
              <a href="`+img_to_src_url+`" target="_blank">
                  <img src="`+data.featured_projects[i].image_url+`" class="d-block img-round img-project-big hvr-float" alt="">
              </a>
          </div>
      </div>
      
      ` 
      $("#projects_featured").append(html_data);
    }
    else {
      // Add data for tech badges
      let tech_data = ``
      for (let j=0; j<data.featured_projects[i].tech.length; j++){
        tech_data += `<span class="badge badge-primary text-light mono-font badge-tech mr-2 mb-2">`+data.featured_projects[i].tech[j]+`</span>`
      }
      // Add overall html
      let html_data = `
      
      <div class="row px-3 my-4">
          <div class="col-md-7 order-md-1 my-auto">
              <p class="text-left small mb-1"><i class="lni lni-star-filled text-warning mr-1"></i> Featured Project</p>
              <h3 class="text-left sub-heading-size mb-1"><b>`+data.featured_projects[i].name+`</b></h3>
              <p class="text-left dark-sub-text">`+data.featured_projects[i].description+`</p>
              <div class="text-left small pb-1 mb-2">`+tech_data+`</div>
              <div class="text-left">`+link_data+`</div>

          </div>
          <div class="col-md-5 order-md-2">
              <a href="`+img_to_src_url+`" target="_blank">
                  <img src="`+data.featured_projects[i].image_url+`" class="d-block img-round img-project-big hvr-float" alt="">
              </a>
          </div>
      </div>
      
      ` 
      $("#projects_featured").append(html_data);
    }
  };

  load_projects();

});

// 3(b). Other Project
// Queue class implemented
class Queue 
{ 
  constructor(data) { 
    this.items = data; 
  }
  // Enqueue function
  enqueue(element) {     
    this.items.push(element); 
  }
  // Dequeue function
  dequeue() {
    if(this.items.length == 0) 
      return "Underflow"; 
    return this.items.shift(); 
  }

  getCount(){
    return this.items.length;
  }
};

function load_projects() {

  // Number of projects
  var num_oth_projects = data.other_projects.length
  // Queue initialization
  var oth_projects  = new Queue(data.other_projects)

  for (let i=0; i<6; i++){
    let item = oth_projects.dequeue()

    // Add data for youtube or github links
    let link_data = ``
    if (item.demo_url != "") {
      link_data += `<a class="git-project-icon" href="`+item.demo_url+`" target="_blank"><i class="lni lni-link"></i></a>`
      title_to_src_url = item.demo_url
    }
    if (item.github_url != "") {
      if (link_data != ``){
        link_data += `<span class="px-2"></span>`
      }
      link_data += `<a class="git-project-icon" href="`+item.github_url+`" target="_blank"><i class="lni lni-github"></i></a>`
      title_to_src_url = item.github_url
    }

    // Add data for tech badges
    let tech_data = ``
    for (let j=0; j<item.tech.length; j++){
      tech_data += `<span class="badge badge-primary text-light mono-font badge-tech mr-1">`+item.tech[j]+`</span>`
    }
    // Overall html data
    let html_data = `
    
    <div class="col mb-5">
      <div class="card project-card shadow-sm hvr-float">
        <div class="card-body pb-2"  style="min-height: 190px;">
        <a class="git-project-text-link" href = "`+ title_to_src_url +`" target="_blank">
            <p class="text-left mb-1"><i class="lni lni-code text-primary pr-2"></i><strong>`+ item.name +`</strong></p>
        </a>
            <p class="text-left dark-sub-text small mb-1">`+ item.description +`</p>
        </div>
        <div class="card-footer pb-4" style="min-height: 130px;">
            <div class="text-left pb-1 mb-3">`+ tech_data +`</div>
            <div class="text-left pb-2"style="position:absolute; bottom:0;">`+ link_data +`</div>
        </div>
      </div>
    </div>
    
    `
    $("#projects_others").append(html_data);

    // Hide button if no elements are remaining
    if (oth_projects.getCount() == 0){
      $("#show-button-row").css({"display":"none"})
    }

  };
};

