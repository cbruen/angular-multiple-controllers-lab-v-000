function StaffController(){
  this.name = "John";
  this.email = "john@john.com";
  this.phone = "444-444-4444";

}

angular
  .module('app')
  .controller('StaffController', StaffController);
