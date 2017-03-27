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
    var url = "";

    for (var content in panel[key]) {
      if (content === 'link') {
        url = '<a target="_blank" href="' + panel[key][content] + '">' + key + '</a>';
      } else {
        for (var i=0, len=panel[key][content].length;i < len; i++) {
          list += '<li>' + panel[key][content][i] + '</li>';
        }
      }
    }

    console.log(url)

    $(id).append(
      '<div class="col-md-4"><div class="panel panel-default">' +
      '<div class="panel-heading">' + (url || key) + '</div>' +
      '<div class="panel-body"><ul>' + list + '</ul></div>' +
      '</div></div>'
    )
  }
}
