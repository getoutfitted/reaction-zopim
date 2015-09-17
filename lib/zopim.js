Meteor.Zopim = {
  accountOptions : function(){
    var zopimObject = ReactionCore.Collections.Packages.findOne({
      name: "reaction-zopim"
    });
    return zopimObject.settings;
  }, 
  isEnabled : function(){
    var enabled = ReactionCore.Collections.Packages.findOne({
      name: "reaction-zopim"
    }).enabled;
    return enabled;
  }
};
