ReactionCore.registerPackage
  name: 'reaction-zopim' # usually same as meteor package
  autoEnable: false # auto-enable in dashboard
  registry: [
    # all options except route and template
    # are used to describe the
    # dashboard 'app card'.
    {
      provides: 'dashboard'
      label: 'Zopim'
      description: 'Zendesk Zopim chat for Reaction Commerce'
      icon: 'fa fa-comment' # glyphicon/fa
      cycle: '3' # Core, Stable, Testing (currently testing)
      container: 'reaction-zopim'  #group this with settings
    }
    # configures settings link for app card
    # use 'group' to link to dashboard card
    {
      route: 'zopim'
      provides: 'settings'
      container: 'reaction-zopim'
    }
  ]
