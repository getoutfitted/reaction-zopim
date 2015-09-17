Meteor.Zopim = {
  accountOptions : function(){
    var zopimObject = ReactionCore.Collections.Packages.findOne({
      name: "reaction-zopim"
    });
    return zopimObject.settings;
  }, 
  isEnabled : function(){
    var zopimObject = ReactionCore.Collections.Packages.findOne({
      name: "reaction-zopim"
    });
    if (zopimObject){
      return zopimObject.enabled;
    } else {
      return false;
    }
  }
};
