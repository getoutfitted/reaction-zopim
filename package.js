Package.describe({
  summary: "Reaction Zopim - Zendesk Zopim Chat for Reaction Commerce",
  name: "getoutfitted:reaction-zopim",
  version: "0.1.0",
  // git: "https://github.com/reactioncommerce/reaction-paypal.git"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use("meteor-platform");
  api.use("coffeescript");
  api.use("less");
  api.use("http");
  api.use("reactioncommerce:core@0.6.0");

  api.addFiles([
    "server/register.coffee", // register as a reaction package
    "server/browserPolicy.coffee" // set browser policy to allow PayPal scripts and images
  ], "server");
  api.addFiles([
    "common/routing.coffee"
  ], ["client", "server"]);
  api.addFiles([
    "client/templates/settings/settings.html",
    "client/templates/settings/settings.coffee"
  ], "client")

});