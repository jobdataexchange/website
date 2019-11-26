$(document).ready(function() {

  // use ekkoLightbox
  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });


  // menus
  $("#main-nav").mmenu({
     // options
     autoHeight: true,
     dropdown: true,
     navbar: {
       title: ""
     }
  }, {
    // configuration
    classNames: {
      fixedElements: {
        sticky: "contains-menu"
      }
    }
  });

  $("#context-nav").mmenu({
     // options
     offCanvas: false,
     navbar: {
       title: ""
     },
     extensions: ["multiline"]
  }, {
     // configuration
     classNames: {
        selected: "active"
     }
  });

  //external links
  $(function() {
    $('a[rel*=external]').click( function() {
      window.open(this.href);
      return false;
    });
  });

});
