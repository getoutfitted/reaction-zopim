Package.describe({
  summary: "Reaction Zopim - Zendesk Zopim Chat for Reaction Commerce",
  name: "getoutfitted:reaction-zopim",
  version: "0.1.0",
  // git: "https://github.com/reactioncommerce/reaction-paypal.git"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@1.1.0.2');
  api.use("meteor-platform");
  api.use("less");
  api.use("http");
  api.use("reactioncommerce:core@0.6.0");

  api.addFiles([
    "server/register.js", // register as a reaction package
    "server/browserPolicy.js" // set browser policy to allow PayPal scripts and images
  ], "server");
  api.addFiles([
    "common/router.js"
  ], ["client", "server"]);
  api.addFiles([
    "client/templates/settings/settings.html",
    "client/templates/settings/settings.js",
    "client/templates/dashboard/dashboard.html",
    "client/templates/dashboard/dashboard.js",
  ], "client")

});