/**
 * [PetInteraction.js is where we hold all of the interactions with the pets happen]
 */
var PetInteraction = function(){

  /**
   * [interact. when the user selects any button]
   */
  function interact() {
    $(document).on('click', '.action-button', function() {
      var petID = $(this).parents('.item').data('id'); // gather id of the pet
      var user = $('body').data('user');
      var action = $(this).attr('data-action'); // gather the action that corresponds with the table column
      console.log(petID);
      console.log(user);
      console.log(action);
      //user must be logged in to edit
      if(user === '') {
        alert('you must be logged in');
      } else {
        var data = {};
        data.user = user; // add the user to the data object
        data.action = action;
        data.time = moment().format(); // add the time selected to the column to update to the data object
        data.petID = petID; // add the id to the data object
        // console.log(data);
        updatePet(data); // pass to ajax to update
      }

    });
  }

  function updatePet(data) {
    $.ajax('/api/pets/' + data.petID, {
      type: 'PUT',
      data: data
    }).then(function() {
      // console.log('update complete');
      location.reload();
    });
  }

  /**
   * [init. list of all the functions we run when we initalize the module.]
   */
  function init() {
    interact();
  }

  return {
    init: init
  }

}();

PetInteraction.init();
