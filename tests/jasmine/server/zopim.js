
describe('Meteor Zopim global methods', function() {
   
    it('Zopim status', function() {
      var zopim = Meteor.Zopim.isEnabled();
      expect(zopim).toBe(false);
    });
});