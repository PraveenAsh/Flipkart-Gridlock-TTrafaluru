var allotedSlots = [];
var slotRange = 2;
var collectionSlots = createSlot();

document.getElementById('check').addEventListener('click',function(){
slotsAllotment(slotRange);
return allotedSlots;
});

function decisionSlotIndex(){
  var etaInSec = 3360;
  	var today = new Date();
  var departureDate = new Date(today);
  var entryDate = new Date();
  entryDate.setHours(departureDate.getHours(),departureDate.getMinutes(),departureDate.getSeconds()+etaInSec);
  for (var key in collectionSlots){
    var temp = collectionSlots[key];
    for(var i = 0; i < temp.length ;i++){
      if(entryDate < temp[i]){
      //console.log("Index at : "+i+" key : "+key);
        var index = {
          "day" : key,
          "i" : i
        };
      return index;
      }
	  else{
			var index = {
				"day" : key,
				"i" : 1
			};
		return index;
		}
    }
  }
}

function slotsAllotment(diff){
  var lockSlots;
  var index = decisionSlotIndex();
  switch (diff) {
    case 1:
      lockSlots = 1;
      break;
    case 2:      
      lockSlots = 2;
      break;
    case 3:
      lockSlots = 3;
      break;
    default:
      lockSlots = 0;
  }
  if(lockSlots != 0 ){
    for(var i = index.i - lockSlots;i <= index.i + lockSlots;i++){
      var tempy = collectionSlots[index.day];
      allotedSlots.push(tempy[i]);
    }
    console.log(allotedSlots);
  }
}