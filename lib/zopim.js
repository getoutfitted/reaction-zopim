Meteor.Zopim = {
  accountOptions: function () {
    let zopimObject = ReactionCore.Collections.Packages.findOne({
      name: 'reaction-zopim'
    });
    return zopimObject.settings;
  },
  isEnabled: function () {
    let zopimObject = ReactionCore.Collections.Packages.findOne({
      name: 'reaction-zopim'
    });
    if (zopimObject) {
      return zopimObject.enabled;
    }
    return false;
  }
};
