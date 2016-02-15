ReactionCore.registerPackage({
  label: "Zopim",
  name: "reaction-zopim",
  icon: "fa fa-comment",
  autoEnable: true,
  settings: {},
  registry: [
    {
      provides: "dashboard",
      route: "/dashboard/zopim",
      label: "Zopim",
      description: "Provide Customer Chat Interface",
      icon: "fa fa-comment",
      priority: 2,
      container: "community",
      template: "dashboardZopim"
    },
    {
      label: "Zopim Settings",
      route: "/dashboard/zopim/settings",
      provides: "settings",
      template: "zopimSettings"
    }
  ]
});
