var image_type = {'march_madness': '.png', 'model_success': '.png', 'movie_recom': '.jpg', 'ocr_scan': '.png', 'shotput_analytics': '.jpg',
                  'shotput_analytics': '.jpg', 'shotput_analytics': '.jpg', 'shotput_analytics': '.jpg', 'shotput_analytics': '.jpg'};


function openModal(e) {
  var project = findProject(e);
  var project_location = 'bduale.github.io/projects/' + project.toString() + '/';
  var project_js = project_location + project.toString() + '.js';
  var project_image = project_location + project.toString() + image_type[project.toString()];
  console.log(project.js);

  jQuery.getScript(project_js, function() {
    var data = getData();

    jQuery('#modal_title').html(data['title']);
    jQuery('#modal_overview').html(data['overview']);
    jQuery('#modal_language').html(data['languages']);
    jQuery('#modal_library').html(data['libraries']);
    jQuery('#modal_framework').html(data['frameworks']);
    if(data['link'] == '')
      jQuery('#github_link').hide();
    else
      jQuery('#github_link').attr('href', data['link']);
  });

  jQuery('#modal_image').attr('src', '');
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

(function() {
  $(document).ready(function() {
    var walkthrough;
    walkthrough = {
      index: 0,
      nextScreen: function() {
        if (this.index < this.indexMax()) {
          this.index++;
          return this.updateScreen();
        }
      },
      prevScreen: function() {
        if (this.index > 0) {
          this.index--;
          return this.updateScreen();
        }
      },
      updateScreen: function() {
        this.reset();
        this.goTo(this.index);
        return this.setBtns();
      },
      setBtns: function() {
        var $lastBtn, $nextBtn, $prevBtn;
        $nextBtn = $('.next-screen');
        $prevBtn = $('.prev-screen');
        $lastBtn = $('.finish');
        if (walkthrough.index === walkthrough.indexMax()) {
          $nextBtn.prop('disabled', true);
          $prevBtn.prop('disabled', false);
          return $lastBtn.addClass('active').prop('disabled', false);
        } else if (walkthrough.index === 0) {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', true);
          return $lastBtn.removeClass('active').prop('disabled', true);
        } else {
          $nextBtn.prop('disabled', false);
          $prevBtn.prop('disabled', false);
          return $lastBtn.removeClass('active').prop('disabled', true);
        }
      },
      goTo: function(index) {
        $('.screen').eq(index).addClass('active');
        return $('.dot').eq(index).addClass('active');
      },
      reset: function() {
        return $('.screen, .dot').removeClass('active');
      },
      indexMax: function() {
        return $('.screen').length - 1;
      },
      closeModal: function() {
        $('.walkthrough, .shade').removeClass('reveal');
        return setTimeout(((function(_this) {
          return function() {
            $('.walkthrough, .shade').removeClass('show');
            _this.index = 0;
            return _this.updateScreen();
          };
        })(this)), 200);
      },
      openModal: function() {
        $('.walkthrough, .shade').addClass('show');
        setTimeout(((function(_this) {
          return function() {
            return $('.walkthrough, .shade').addClass('reveal');
          };
        })(this)), 200);
        return this.updateScreen();
      }
    };
    $('.next-screen').click(function() {
      return walkthrough.nextScreen();
    });
    $('.prev-screen').click(function() {
      return walkthrough.prevScreen();
    });
    $('.close').click(function() {
      return walkthrough.closeModal();
    });
    $('.open-walkthrough').click(function() {
      return walkthrough.openModal();
    });
    walkthrough.openModal();
    return $(document).keydown(function(e) {
      switch (e.which) {
        case 37:
          walkthrough.prevScreen();
          break;
        case 38:
          walkthrough.openModal();
          break;
        case 39:
          walkthrough.nextScreen();
          break;
        case 40:
          walkthrough.closeModal();
          break;
        default:
          return;
      }
      e.preventDefault();
    });
  });

}).call(this);
