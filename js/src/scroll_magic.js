(function() {
    
  var controller = new ScrollMagic.Controller();
  var scene1 = new ScrollMagic.Scene({
    triggerElement: ".project_list",
    triggerHook: 0.8
  })

  var revealElements = document.getElementsByClassName("project_list_item");
  for (var i = 0; i < revealElements.length; i++) {
  
    var scene2 = new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: 50,
      triggerHook: 0.9
    })
    .setClassToggle(revealElements[i], "visible")
    .addTo(controller)
  }

}())
