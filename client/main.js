import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});

Template.aFund.events({
  // 'click .modal-trigger'() {
  //   $('#fundModal').modal();

  // }
  'click .fundBtn'(e) {
    console.log(e.target.getAttribute('target'));
    var targetName = e.target.getAttribute('target');
    var targetModal = document.getElementById(targetName);
    // console.log(tng);
    $(targetModal).modal();
    $(targetModal).modal('open');

    $('select').material_select();

    //document.getElementById('paypalContent').innerHTML = '<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input type="hidden" name="cmd" value="_s-xclick"><input type="hidden" name="hosted_button_id" value="S3U8UYZGDQP94"><table><tr><td><input type="hidden" name="on0" value="Change Options">Change Options</td></tr><tr><td><select name="os0"><option value="1">1 : $1.00 USD - monthly</option><option value="5">5 : $5.00 USD - monthly</option><option value="10">10 : $10.00 USD - monthly</option><option value="25">25 : $25.00 USD - monthly</option><option value="50">50 : $50.00 USD - monthly</option><option value="75">75 : $75.00 USD - monthly</option><option value="100">100 : $100.00 USD - monthly</option><option value="150">150 : $150.00 USD - monthly</option></select> </td></tr></table><input type="hidden" name="currency_code" value="USD"><input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_subscribeCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"><img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"></form>';

    // e.target.addClass('green');
    // e.target.removeClass('blue');
    //$('#fundModal').modal();
    
  },
  'click div'(e) {
    console.log(e.target);
    console.log(e.target.value);
    console.log();
  }
});

Template.fundIt.events({
  'click div'(e) {
    console.log(e.target);
    console.log(e.target.value);
    console.log();
  }
});

Template.account.onRendered(function() {
  window.onload = function() {
    
      $('select').material_select();
    
  };
  $('select').material_select();
});

Template.signIn.events({
  'click .btn': function() {
    var username = document.getElementById('usr').value;
    var password = document.getElementById('pwd').value;

    Meteor.call('signUpOrLogin', {email: username, password: password}, function(error, result) {
      console.log(result);
      if (result) {
        Meteor.loginWithPassword(username, password);
        Materialize.toast('Login successful!', 3000);
      }
      
    });
  }
});

Template.header.events({
  'click #logout': function() {
    Meteor.logout();
  }
})