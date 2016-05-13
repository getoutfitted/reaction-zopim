Meteor.Zopim = {
  accountOptions: function () {
    let zopimObject = ReactionCore.Collections.Packages.findOne({
      name: 'reaction-zopim',
      shopId: ReactionCore.getShopId()
    });
    return zopimObject.settings;
  },
  isEnabled: function () {
    let zopimObject = ReactionCore.Collections.Packages.findOne({
      name: 'reaction-zopim',
      shopId: ReactionCore.getShopId()
    });
    if (zopimObject) {
      return zopimObject.enabled;
    }
    return false;
  }
};
