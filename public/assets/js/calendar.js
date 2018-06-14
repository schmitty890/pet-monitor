$(document).ready(function($) {

    // page is now ready, initialize the calendar...
    $.ajax("/api/events", {
        type: "get"
      }).then(
        function(eventData) {
            displayCalendar(eventData);
        }
      );

    function determineColor(cat) {
        switch(cat) {
            case("Social"):
                return "red";
            case("Sell"):
                return "green";
            case ("Fitness"):
                return "yellow";
            case ("Class"):
                return "orange";
            case ("Community"):
                return "purple";
            default:
                return "blue"; 
        }

    }
  
    function displayCalendar(eventData) {
        var eventList = [];
        eventData.forEach(function(event) {
            var newEvent = ({
                title: event.title,
                start: moment(event.date).format("YYYY-MM-DD hh:mm:ss"),
                end: moment(event.endDate).format("YYYY-MM-DD hh:mm:ss"),
                allDay: event.allDay,
                textColor: 'white',
                color: determineColor(event.category)
            })
            
            eventList.push(newEvent); 
        }) 

      $('#calendar').fullCalendar({
            themesystem: 'bootstrap4',
            header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listWeek'
            },
            defaultView: 'month',
            defaultDate: moment(),
            navLinks: true, // can click day/week names to navigate views
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            events: eventList,
            
        });
    }
  });