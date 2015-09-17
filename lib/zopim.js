Meteor.Zopim = {
  accountOptions : function(){
    var zopimObject = ReactionCore.Collections.Packages.findOne({
      name: "reaction-zopim"
    });
    if (zopimObject && zopimObject.settings){
      return zopimObject.settings;
    } else {
      return {settings: { public: { chatWidget: ''} }};
    }
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
