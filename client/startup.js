Tracker.autorun(function(){
  if (Meteor.Zopim.isEnabled()){
    $(document.head).append(Meteor.Zopim.accountOptions().public.chatWidget);
    } else {
      $('script:contains(window.$zopim)').remove();
      $('.zopim').remove();
  }
});
