Package.describe({
  summary: 'Reaction Zopim - Zendesk Zopim Chat for Reaction Commerce',
  name: 'getoutfitted:reaction-zopim',
  version: '0.3.0',
  git: 'https://github.com/getoutfitted/reaction-zopim'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2');
  api.use('meteor-platform');
  api.use('less');
  api.use('http');
  api.use('reactioncommerce:core@0.9.0');


  api.addFiles([
    'server/register.js', // register as a reaction package
    'server/browserPolicy.js' // set browser policy to allow PayPal scripts and images
  ], 'server');
  api.addFiles([
    'common/router.js',
    'common/collections.js',
    'lib/zopim.js'
  ], ['client', 'server']);
  api.addFiles([
    'client/templates/settings/settings.html',
    'client/templates/settings/settings.js',
    'client/templates/dashboard/dashboard.html',
    'client/templates/dashboard/dashboard.js',
    'client/startup.js'
  ], 'client');
  api.addAssets(
    'images/zopim_settings.png', 'client');
});
