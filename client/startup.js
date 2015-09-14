Meteor.startup(function(){
  var zopim = ReactionCore.Collections.Packages.findOne({
      name: "reaction-zopim"
    });

  if (zopim != null){
    if ( zopim.enabled){
    $(document.head).append(zopim.settings.chatWidget)
    }
  }
});

