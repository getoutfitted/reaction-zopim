describe("Zopim", function() {
  beforeEach(function(done) {
    Router.go('/');
    Tracker.afterFlush(done);
  });

   beforeEach(waitForRouter);

  fit('should behave...', function() {
    var currentRoute = Router.current().route.getName();
    expect(currentRoute).toEqual("index");
    $('.header-tag').trigger('click')
    // $('.header-tag')[0].click();
    waitForElement($('.product-primary-images'), function() {
      currentRoute = Router.current().route.getName();
      expect(currentRoute).toEqual("product/tag");  
    });    
  });
});