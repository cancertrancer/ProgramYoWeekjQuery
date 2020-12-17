const addNewRow = () => {
    $('tbody').append('<tr><td id="time"><label for="startTime">Start Time:</label><input class="timepicker" id="startTime" name="startTime"><label for="endTime">End Time:</label><input class="timepicker" id="endTime" name="endTime"></td><td id="activity"><label for="activityInput">Activity:</label><input type="text" id="activityInput" name="activityInput"><input type="checkbox" id="activityCheck" name="activityCheck"></td></tr>');
    $('.timepicker').timepicker({
     timeFormat: 'h:mm p',
     interval: 15,
     defaultTime: '6:00 am',
     dynamic: false,
     dropdown: true,
     scrollbar: true
     });
 }
 

const updateActivity = () => {
    let updatedActivity = $('#activityInput').val();
    if (updatedActivity !== '') {
        $('#activityInput').replaceWith(' ' + updatedActivity);  //this one works, but stops updating if blank - blocked by a blank cell
    }
}


//$('#update').mousedown(('.note').css("backgroundColor", "yellow")); trying to highlight the note when someone goes to click this button



const addNewDay = () => {  //this is how I was doing it before cloning
    $('#container').append(
      '<div id="day"><table><colgroup span="2"><col id="timeCol"><col id="activityCol"></colgroup><thead><tr><th class="newDay" colspan="2"></th></tr></thead><tbody><tr id="cloneRow"><td id="time"><label for="startTime">Start Time:</label><input class="timepicker" id="startTime" name="startTime"><label for="endTime">End Time:</label><input class="timepicker" id="endTime" name="endTime"></td><td id="activity"><label for="activityInput">Activity:</label><input type="text" id="activityInput" name="activityInput"><input type="checkbox" id="activityCheck" name="activityCheck"></td></tr></tbody></div>'
    );
    $('.timepicker').timepicker({
        timeFormat: 'h:mm p',
        interval: 15,
        defaultTime: '6:00 am',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
    $('.newDay').text(weekDays[tomorrow]);
    tomorrow++;
}


const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getToday = () => {
    let event = new Date(Date.now());
    let today = event.getDay();
    for (i = 0; i < weekDays.length; i++) {
        if (i === today) {
            return weekDays[i];
        }
    }
}

console.log(getToday());


function getTomorrow () {
    let event = new Date(Date.now());
    let today = event.getDay();
    for (i = 0; i < weekDays.length; i++) {
        if (i === today) {
            let newIndex = i + 1;
            let tomorrow = weekDays[newIndex]
            return tomorrow;
        }
    }
}

console.log(getTomorrow());


const updateActivity = () => {
    let updatedActivity = $('#activityInput').val();
    if (updatedActivity !== '') {
        $('#activityInput').replaceWith(' ' + updatedActivity);  //this one works, but stops updating if blank - blocked by a blank cell
    }
}


$('.tableButton').click(event => {    
    const thisButtonId = event.target.id;
    const thisTableId = $('#' + thisButtonId.toString()).parents('table').attr('id'); 
    addNewRowExperiment('#' + thisTableId.toString());
});

    //if (tomorrow < 7) {  //don't need this conditional, because .text() already sets tomorrow to 0 if 7!!!
        //tomorrow++;
    //} else {
        //tomorrow = 0;
    //}                  //logic removed from the end of addNewDay
    
    //let tomorrow = today + 1 --> previous value, before using css(display: none) with first #day <div>