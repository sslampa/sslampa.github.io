$(document).ready(function() {
  addPanel(skills, "#skill-section");
  addPanel(projects, "#project-section");
  addPanel(experience, "#experience-section");
  addPanel(volunteer, "#volunteer-section");
});

function showTab(tab) {
  $(".content-section").hide();
  $("#"+tab).fadeIn("slow");
}

function addPanel(panel, id) {
  for (key in panel) {
    var list = "";
    for (var i=0, len=panel[key].length; i < len; i++) {
      list += '<li>' + panel[key][i] + '</li>';
    }

    $(id).append(
      '<div class="col-md-3"><div class="panel panel-default">' +
      '<div class="panel-heading">' + key + '</div>' +
      '<div class="panel-body"><ul>' + list + '</ul></div>' +
      '</div></div>'
    )
  }
}
