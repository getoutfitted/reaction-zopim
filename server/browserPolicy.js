Meteor.startup(function(){
  BrowserPolicy.content.allowOriginForAll("http://v2.zopim.com/"),
  BrowserPolicy.content.allowOriginForAll("https://v2.zopim.com/")
});