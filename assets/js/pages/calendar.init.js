document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    selectable: true,
    initialView: 'dayGridMonth',

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    locale: 'pt-br',
    select: function () {
      $('#event-modal').modal({
        show: true
      })
    },
  });
  calendar.render();

  calendar.addEvent({
    title: 'Churrasqueira',
    start: '2021-07-27 10:30',
  });
});