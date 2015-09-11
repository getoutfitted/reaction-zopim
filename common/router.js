Router.map(function() {
  this.route('dashboard/zopim'), {
    controller: ShopAdminController,
    path: '/dashboard/zopim',
    template: 'zopimSettings',
    waitOn: function(){
      return ReactionCore.Subscriptions.Packages;
    }
  }
});