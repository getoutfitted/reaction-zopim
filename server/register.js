ReactionCore.registerPackage({
  label: 'Zopim',
  name: 'reaction-zopim',
  icon: 'fa fa-comment',
  autoEnable: true,
  registry: [
    {
      provides: 'dashboard',
      route: '/dashboard/zopim',
      name: 'Zopim',
      label: 'Zopim',
      description: 'Provide Customer Chat Interface',
      icon: 'fa fa-comment',
      priority: 2,
      container: 'getoutfitted',
      template: 'dashboardZopim',
      workflow: 'coreWorkflow'
    },
    {
      label: 'Zopim Settings',
      route: '/dashboard/zopim/settings',
      provides: 'settings',
      name: 'zopimSettings',
      template: 'zopimSettings'
    }
  ]
});
