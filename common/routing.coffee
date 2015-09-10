Router.map ->
  @route 'zopim',
    controller: ShopAdminController
    path: '/dashboard/settings/zopim'
    template: 'zopimSettings'
    waitOn: ->
      return ReactionCore.Subscriptions.Packages