Tracker.autorun(function () {
  let widgetExists = $('.zopim').length > 0 ? true : false;
  if (Meteor.Zopim.isEnabled() && !widgetExists) {
    $(document.head).append(Meteor.Zopim.accountOptions().public.chatWidget);
    if ($zopim && $zopim.livechat && $zopim.livechat.button) {
      $zopim.livechat.button.show();
    }
  } else if (Meteor.Zopim.isEnabled() && widgetExists) {
    $zopim.livechat.button.show();
  } else if (!Meteor.Zopim.isEnabled() && widgetExists) {
    $zopim.livechat.hideAll();
  }
});
