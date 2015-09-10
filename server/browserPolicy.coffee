Meteor.startup ->
  # set browser policy
  # BrowserPolicy.content.allowEval() #eval required by in-context express checkout script
  BrowserPolicy.content.allowOriginForAll("http://v2.zopim.com/")
  BrowserPolicy.content.allowOriginForAll("https://v2.zopim.com/")