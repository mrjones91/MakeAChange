Router.route('/', function () {
  this.render('home');
});

Router.route('/SignIn', function () {
  this.render('signIn');
});

Router.route('/Funds', function () {
  this.render('funds');
});

Router.route('/Help', function () {
  this.render('help');
});

Router.route('/Account', function () {
  this.render('account');
});

//Parameterize fundID
Router.route('/fundIt/fundID', function () {
  this.render('fundIt');
});