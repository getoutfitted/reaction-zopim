ReactionCore.Schemas.ZopimPackageConfig = new SimpleSchema([
  ReactionCore.Schemas.PackageConfig, {
    "settings.chatWidget": {
      type: String,
      label: "Live Chat Widget URL",
      min: 50
    }
  }
]);