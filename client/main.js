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
    // e.target.addClass('green');
    // e.target.removeClass('blue');
    //$('#fundModal').modal();
    
  }
});