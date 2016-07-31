$('#gridcontainer').on({
    'mousewheel': function(e) {
      if($(this).children('.mv-container').length) {
        if (e.target.id == 'el') return;
        e.preventDefault();
        e.stopPropagation();
      }
    }
})
