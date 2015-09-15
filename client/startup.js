// Meteor.startup(function(){
//   var zopim = ReactionCore.Collections.Packages.findOne({
//       name: "reaction-zopim"
//     });

//   if (zopim != null){
//     if ( zopim.enabled){
//     $(document.head).append(zopim.settings.chatWidget)
//     }
//   }
// });

// Template.coreHead.onRendered(function(){
//   var zopim = ReactionCore.Collections.Packages.findOne({
//       name: "reaction-zopim"
//     });

//   if (zopim != null){
//     if ( zopim.enabled){
//     $(document.head).append(zopim.settings.chatWidget)
//     }
//   }
// });
  // ReactionCore.Collections.Packages.find({
  //     name: "reaction-zopim"
  // }).limit( 1 ).enabled;
  Tracker.autorun( function(){
    var zopim = ReactionCore.Collections.Packages.find({
      name: "reaction-zopim"
    });
    // if ( zopim.fetch() !== null) {
      // console.log("I made it to nuLL!")
      if (  zopim.fetch()[0].enabled){
      console.log("I made it to enabled")
        $(document.head).append(zopim.fetch()[0].settings.chatWidget);
      } else {
        $('script:contains(window.$zopim)').remove();
        $('.zopim').remove();
      }
    }
  // }

  )

