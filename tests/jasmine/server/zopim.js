
describe('Meteor Zopim methods', function() {
   
    it('Zopim initial status is disabled', function() {
      var zopim = Meteor.Zopim.isEnabled();
      expect(zopim).toBe(false);
    });
    it('Zopim has no chatwidget initially', function() {
      var zopim = Meteor.Zopim.accountOptions(); 
      expect(zopim).toEqual("hi");
    });

});