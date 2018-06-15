/**
 * [UpdateUser update form, updates the fields in the database for the user that is logged in]
 */
var UpdateUser = function(){

  function updateUserName(){
    $(document).on('submit', '#updateUserNameForm', function(e) {
      e.preventDefault();
      var newName = {
        name: $('#updateUserName').val().trim()
      };

      if(newName.name === '') {
        // html element has required on it. we can never get inside this if.
        // console.log('html element has required on it.');
        // alert('you did not fill out a new user name');
      } else {
        var updateID = $('#updateNameBtn').data('id');
        $.ajax('/api/users/' + updateID, {
          type: 'PUT',
          data: newName
        }).then(function() {
          location.reload();
        });
      }
    });
  }

  function updateEmailForm() {
    $(document).on('submit', '#updateEmailForm', function(e) {
      e.preventDefault();
      var newEmail = {
        email: $('#updateUserEmail').val().trim()
      };

      if(newEmail.email === '') {
        // we'll never get here, required is on html element
      } else {
        var updateID = $('#updateEmailBtn').data('id');
        $.ajax('/api/users/' + updateID, {
          type: 'PUT',
          data: newEmail
        }).then(function() {
          location.reload();
        });
      }
    });
  }

  function updateUserDescription() {
    $(document).on('submit', '#updateUserDescription', function(e) {
      e.preventDefault();
      var newDescription = {
        about: $('#updateDescription').val().trim()
      };
      if(newDescription.about === '') {
        // we never get here
      } else {
        var updateID = $('#updateDescriptionBtn').data('id');
        $.ajax('/api/users/' + updateID, {
          type: 'PUT',
          data: newDescription
        }).then(function() {
          location.reload();
        });
      }
    });
  }

  function init() {
    updateUserName();
    updateEmailForm();
    updateUserDescription();
  }

  return {
    init: init
  }

}();

UpdateUser.init();
