
describe('Meteor Zopim methods', function() {
   
    it('Zopim initial status is disabled', function() {
      var zopim = Meteor.Zopim.isEnabled();
      expect(zopim).toBe(false);
    });
    it('Zopim has no chatwidget initially', function() {
      var zopim = Meteor.Zopim.accountOptions(); 
      expect(zopim).not.toEqual(jasmine.objectContaining({
        setttings: { public: { chatWidget: ''} }
      }))
      expect(zopim).toEqual({settings: { public: { chatWidget: ''} }});
    });

});