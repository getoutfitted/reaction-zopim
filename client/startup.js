Tracker.autorun( function(){
  var zopim = ReactionCore.Collections.Packages.find({
    name: "reaction-zopim"
  });
  if (  zopim.fetch()[0].enabled){
    $(document.head).append(zopim.fetch()[0].settings.chatWidget);
  } else {
    $('script:contains(window.$zopim)').remove();
    $('.zopim').remove();
  }
})

