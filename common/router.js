Router.map(function () {
  this.route('dashboard/zopim', {
    controller: ShopAdminController,
    path: '/dashboard/zopim',
    template: 'dashboardZopim',
    waitOn: function () {
      return ReactionCore.Subscriptions.Packages;
    }
  });
});
