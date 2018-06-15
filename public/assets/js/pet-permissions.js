var PetPermissions = function(){
  var formValues = {};
  var $form = $('#pet-permission-form');

  function gatherFormElements() {

    var userId = $("#pet-permission-btn").data("id");
    var userName = $("#pet-permission-btn").data("username");
    var action = $(this).attr('data-action');

    // console.log(userId);
    // console.log(userName);
    formValues = {
      userId: userId, // the posters user id (the one granting permission)
      userName: userName, // the posters username (the one granting permission to another user)
      petID: Number($form.find('#petID').val().trim()),
      granteeUserName: $form.find('#username').val().trim(),
      granteeSelectionNumber: Number($form.find('#associate-select').val().trim())
    }

    if(formValues.granteeSelectionNumber === 1) {
      formValues.action = 'associateSelectOne';
    } else if (formValues.granteeSelectionNumber === 2) {
      formValues.action = 'associateSelectTwo';
    } else {
      formValues.action = 'associateSelectThree';
    }

    console.log(formValues);

    // if (formValues.name === '' || formValues.type === '') {
    //   alert('fill out ALL required forms.');
    // } else {
      updatePet(formValues);
    // }
  }

  function updatePet(data) {
    $.ajax('/api/pets/' + data.petID, {
      type: 'PUT',
      data: data
    }).then(function() {
      console.log('update complete');
    });
  }

  function onSubmit() {
    $(document).on('submit', '#pet-permission-form', function(e) {
      e.preventDefault();
      gatherFormElements();
    });
  }

  function init() {
    onSubmit();
  }

  return {
    init: init
  }

}();

PetPermissions.init();

