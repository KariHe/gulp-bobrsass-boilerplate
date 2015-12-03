describe('{{camelCase name}} page', function() {

  it('should load', function() {
    browser.get('/{{camelCase name}}');

    var page = browser.driver.findElement(by.id('page'));

    //expect(page.getText()).toMatch('If you can read this text, your stack should be alright.');
  });

});
