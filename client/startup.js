Tracker.autorun(function(){
  var widgetExists = $('.zopim').length > 0 ? true : false;
  
  if (Meteor.Zopim.isEnabled() && !widgetExists){
    $(document.head).append(Meteor.Zopim.accountOptions().public.chatWidget);
  } else if (Meteor.Zopim.isEnabled() && widgetExists) {
    $zopim.livechat.button.show();
  } else if (!Meteor.Zopim.isEnabled() && widgetExists) {
    $zopim.livechat.hideAll();
  }
});
