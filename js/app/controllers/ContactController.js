function ContactController(){
  this.name = "Chris";
  this.email = "fake@fake.com";
  this.phone = "555-555-5555";
  var vm = this;

  this.changeName = function() {
    vm.name = "Other";
  }

}

angular
  .module('app')
  .controller('ContactController', ContactController);
