var PostAPet = function(){
  var formValues = {};
  var $form = $('#post-pet-form'); // we cache this jquery selector, and then reference it below as a variable. this is good practice.

  function gatherFormElements() {

    var userId = $("#post-pet-btn").data("id");
    var userName = $("#post-pet-btn").data("username");

    formValues = {
      author_id: userId,
      username: userName,
      name: $form.find('#name').val().trim(),
      type: $form.find('#petType').val().trim(),
      image: $form.find('#image').val().trim(),
      dob: $form.find('#dob').val().trim(),
      favoriteFood: $form.find('#favFood').val().trim(),
      favoriteTreat: $form.find('#favTreat').val().trim(),
      details: $form.find('#details').val().trim(),
      signUpDate: moment().format()
    }

    // console.log(formValues);

    if (formValues.name === '' || formValues.type === '') {
      alert('fill out ALL required forms.');
    } else {
      passToBackend(formValues);
    }
  }

  function passToBackend(formValues) {
    $.ajax('/api/pets', {
      type: 'POST',
      data: formValues
    }).then(
      function(resp) {
        console.log('a pet was added');
        console.log(resp);
        // TODO handle this with some type of message on the client saying successfully added a pet
        // location.reload();
      }
    );
  }

  function onSubmit() {
    $(document).on('submit', '#post-pet-form', function(e) {
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

PostAPet.init();

