
// var ProfileViewController = function(){

//   function privateFunction(){
//     $(document).on('click', '.profileForm', function() {
//       $('.profileForm').addClass('hide');
//       $(this).removeClass('hide');
//     });
//   }

//   function init() {
//     privateFunction();
//   }

//   return {
//     init: init
//   }

// }();

// ProfileViewController.init();


$("#profileUpdate").on("click", function() {
  $("#profilePetForm").hide()
  $("#profileUpdateForm").show()
})
$("#profilePostPet").on("click", function() {
  $("#profilePetForm").show()
  $("#profileUpdateForm").hide()
})
