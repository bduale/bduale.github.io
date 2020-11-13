var image_type = {'march_madness': '.png', 'model_success': '.png', 'movie_recom': '.jpg', 'ocr_scan': '.png', 'shotput_analytics': '.jpg',
                  'shotput_analytics': '.jpg', 'shotput_analytics': '.jpg', 'shotput_analytics': '.jpg', 'shotput_analytics': '.jpg'};


function openModal(e) {
  var project = findProject(e);
  var project_location = '../bduale.github.io/projects/' + project.toString() + '/';
  var project_js = project_location + project.toString() + '.js';
  var project_image = project_location + project.toString() + image_type[project.toString()];

  jQuery.getScript(project_js, function() {
    var data = getData();

    jQuery('modal_title').html(data['title']);
  });

  jQuery('#modal_image').attr('src', project_image);

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
