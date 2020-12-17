$(function() {
    $('.timepicker').timepicker({
    timeFormat: 'h:mm p',
    interval: 15,
    defaultTime: '6:00 am',
    dynamic: false,
    dropdown: true,
    scrollbar: true
    });
    $('#dayName').text(() => {   
      const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let event = new Date(Date.now());
      let today = event.getDay();
      for (i = 0; i < weekDays.length; i++) {
          if (i === today) {
                return weekDays[i];
          }
      }
    });
    $('#day').css('display', 'none'); 
});


const addNewRow = () => {   //to add a new row to #ogTable
    $('#ogTable tbody').append('<tr><td id="time"><label for="startTime">Start Time:</label><input class="timepicker" id="startTime" name="startTime"><label for="endTime">End Time:</label><input class="timepicker" id="endTime" name="endTime"></td><td id="activity"><label for="activityInput">Activity:</label><input type="text" id="activityInput" name="activityInput"><input type="checkbox" id="activityCheck" name="activityCheck"></td></tr>');
    $('.timepicker').timepicker({
     timeFormat: 'h:mm p',
     interval: 15,
     defaultTime: '6:00 am',
     dynamic: false,
     dropdown: true,
     scrollbar: true
     });
 }

$('#addRow').on('click', addNewRow); 


const removeLastRow = () => {    //to remove a row from #ogTable
    $('#ogTable tbody').children('tr').last().remove();
}

$('#deleteRow').on('click', removeLastRow);


const addNewRowToClones = tableId => {  
    $(tableId).children('tbody').append('<tr><td id="time"><label for="startTime">Start Time:</label><input class="timepicker" id="startTime" name="startTime"><label for="endTime">End Time:</label><input class="timepicker" id="endTime" name="endTime"></td><td id="activity"><label for="activityInput">Activity:</label><input type="text" class="activityInput" id="activityInput" name="activityInput"><input type="checkbox" id="activityCheck" name="activityCheck"></td></tr>');
    $('.timepicker').timepicker({  
    timeFormat: 'h:mm p',
    interval: 15,
    defaultTime: '6:00 am',
    dynamic: false,
    dropdown: true,
    scrollbar: true
    });
}

const removeLastRowFromClones = tableId => {
    $(tableId).children('tbody').find('tr').last().remove().end();
}

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let event = new Date(Date.now());
let today = event.getDay();
let tomorrow = today;

let nextId = 1;

const addNewDay = () => {
    $('#catpic').css('display', 'none');
    $('#day').clone()
    .css('display', '') 
    .find('.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 15,
        defaultTime: '6:00 am',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    }).end()
    .find('th').text(() => {
        if (tomorrow < 7) {
            return weekDays[tomorrow];
          } else {
            tomorrow = 0;
            return weekDays[tomorrow];
        }
    }).end()
    .find('table').attr('id', function(_, id) { return id + nextId })
    .end()
    .find('.tableButton').attr('id', function(_, id) { return id + nextId }).click(event => {
         const thisButtonId = event.target.id;
         const thisTableId = $('#' + thisButtonId.toString()).parents('table').attr('id'); //should return the value of attr('id')!
         addNewRowToClones('#' + thisTableId.toString());
    }).end()
    .find('.deleteButton').attr('id', function(_, id) { return id + nextId }).click(event => {
        const thisButtonId = event.target.id;
        const thisTableId = $('#' + thisButtonId.toString()).parents('table').attr('id'); 
        removeLastRowFromClones('#' + thisTableId.toString());
    }).end()
    .appendTo('#container');
    tomorrow++;
    nextId++;
}

$('#addDay').on('click', addNewDay);


$('#update').on('click', () => {                          //idk why the fuck this worked, but it worked!!!
    $('.activityInput').each(function(index, element) {
        let updatedActivity = $(element).val();
        if (updatedActivity !== '') {
            $(this).replaceWith(' ' + updatedActivity); 
        }
    });
});