// Speed Limit = 70
//5 -> 1 point
//Use Math.floor()
//12 points -> license suspended
checkSpeed(75);

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) 
  console.log('Ok');
  else {
   const points = Math.floor((speed - speedLimit) / kmPerPoint);
   if (points >= 12)
   console.log("License suspended");
   else
   console.log('Points', points);
  }

}