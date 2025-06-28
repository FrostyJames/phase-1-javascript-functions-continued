// code your solution here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}  
function wrapAdjective(flair = "*") {
  return function(adjective) {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

//console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
//console.log(mondayWork())
//console.log(wrapAdjective("||")("a hard worker")); // "You are ||a hard worker||!"
