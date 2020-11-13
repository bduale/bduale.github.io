function include(file) {

  var script  = document.createElement('script');
  script.src  = file;
  script.type = 'text/javascript';
  script.defer = true;

  document.getElementsByTagName('head').item(0).appendChild(script);

}

function openModal(e) {
  var project = findProject(e);
  var project_location = '../bduale.github.io/projects/' + project.toString() + '/';
  var project_js = project_location + project.toString() + '.js'

  jQuery.getScript(project_js, function() {
    var data = getData();
    console.log(data);
  });

  jQuery('#openModal').click();
  jQuery('.close-modal').hide();
}

function findProject(e) {
  var project;
  if(e.path[2].id != '')
      project = e.path[2].id;
  else if(e.path[4].id != '')
      project = e.path[4].id;
  else if(e.path[6].id != '')
      project = e.path[6].id;

  return project;
}
