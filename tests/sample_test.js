module.exports = {
  "test sample" : function (browser) {
    browser
      .url("http://cyberspaced.tayloredtechnology.net/wp-admin/")
      .waitForElementVisible('body', 1000)
      .setValue('input[id="user_login"]', 'nightwatch')
      .setValue('input[id="user_pass"]', 'nightwatch')
      .assert.containsText('input[id="user_login"]', 'nightwatch')
      .end();
  }
};
