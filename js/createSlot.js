function createSlot(){
	var GoogleCalenderAppointments = null;
	var today = new Date();
	var lastDay = new Date(today);
	var forDays = 1;
	var signalDur = [];
	var signalBeginHour = 6 ;
	var signalEndHour = 22 ;
	var collectionSlots = new Object();

	lastDay.setDate(today.getDate() + forDays);

	var n = 0;
	for (var i = new Date(today); i < lastDay; i.setDate(i.getDate() + 1)) { 
	  collectionSlots[n]=getTimeSlotsForDay(i);
	  n++;
	}
	return collectionSlots;
}

function checkGoogleCalendarConflict(date) {
  var hasConflict = false;
  if (!GoogleCalenderAppointments) {
    //logic to get scheduled appointments
  }
  //iterate through relevant scheduled appointments
  //if argument `date` has conflict, return true
  //else, return false
  return hasConflict
}

function getTimeSlotsForDay(date) {
  var timeSlots = []
  var dayStart = new Date(date)
  var dayEnd = new Date(date)

  switch (date.getDay()) {
    case 0: //Sunday
      return timeSlots;
    case 6: //Saturday
      dayStart.setHours(10, 0, 0, 0)
      dayEnd.setHours(20, 0, 0, 0)
      break;
    default:
      dayStart.setHours( signalBeginHour, 0, 0, 0)
      dayEnd.setHours( signalEndHour, 0, 0, 0)
  }
  do {
    if (!checkGoogleCalendarConflict(dayStart)) {
      timeSlots.push(new Date(dayStart))
    }
    dayStart.setHours(dayStart.getHours(), dayStart.getMinutes() + 3 || signalDur )
  } while (dayStart < dayEnd);
  return timeSlots
}