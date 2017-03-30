$(document).ready(function() {
  addPanel(skills, "#skill-section");
  addPanel(projects, "#project-section");
  addPanel(experience, "#experience-section");
  addPanel(volunteer, "#volunteer-section");

  $(".btn-group a.btn").on("click", function() {
    $(".btn-group a.btn").removeClass("active-btn");
    $(this).addClass("active-btn");
  });
});

function showTab(tab) {
  $(".content-section").hide();
  $("#"+tab).fadeIn("slow");
}

function addPanel(panel, id) {
  for (key in panel) {
    var list = "";
    var url = "";
    var github = "";

    for (var content in panel[key]) {
      if (content === 'link') {
        url = '<a target="_blank" href="' + panel[key][content] + '">' + key + '</a>';
      } else if (content === 'github') {
        github = '<a target="_blank" href="' + panel[key][content] + '"><i class="devicon-github-plain colored"></i></a>'
      } else {
        for (var i=0, len=panel[key][content].length;i < len; i++) {
          list += '<li>' + panel[key][content][i] + '</li>';
        }
      }
    }

    $(id).append(
      '<div class="col-md-4"><div class="panel panel-default">' +
      '<div class="panel-heading">' + (url || key) + ' ' + github + '</div>' +
      '<div class="panel-body"><ul>' + list + '</ul></div>' +
      '</div></div>'
    )
  }
}
