var ndogen = $.sammy(function() {
  var app = this;
  this.use(Sammy.Mustache);
  this.use(Sammy.JSON);

  //-----------------------------------------------------------------------------
  // Event handlers
  //-----------------------------------------------------------------------------

  
  //-----------------------------------------------------------------------------
  // Event triggers
  //-----------------------------------------------------------------------------
  

  // Root - List Projects
  //-----------------------------------------------------------------------------

  this.get('', function(ctx) {
    app.doc = new Doc(spy_fixture);
    $('#content').html(app.doc.render());
  });
});

$(function() {
  ndogen.run();
});