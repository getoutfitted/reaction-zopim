ReactionCore.registerPackage({
  label: "Zopim",
  name: "reaction-zopim",
  icon: "fa fa-comment",
  autoEnable: false,
  registry: [
    {
      provides: "dashboard",
      label: "Zopim",
      route: "dashboard/zopim",
      description: "Zopim chat for Reaction Commerce",
      route: "dashboard/zopim",
      icon: "fa fa-comment",
      cycle: "3",
      container: "reaction-zopim",
    }, {
      label: "Zopim Settings",
      route: "dashboard/zopim",
      provides: "settings",
      container: "reaction-zopim",
      template: "zopimSettings"
    }
  ],
  permissions: [
    {
      label: "Zopim",
      permission: "dashboard/zopim",
      group: "Shop Settings"
    }
  ]
});
