ReactionCore.Schemas.ZopimPackageConfig = new SimpleSchema([
  ReactionCore.Schemas.PackageConfig, {
    "settings.public" : {
      type: Object,
      optional: true
    },
    "settings.public.chatWidget": {
      type: String,
      label: "Live Chat Widget URL",
      min: 50, 
      optional: true
    }
  }
]);