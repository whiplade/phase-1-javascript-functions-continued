//defines saturdayFun function declaration as specified

function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}


//defines mondayWork function expression as specified

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

//defines wrapAdjective function according to the specification

function wrapAdjective(adjective = "*"){
    return function (modifier = "special"){
        return `You are ${adjective}${modifier}${adjective}!`
    }
    
}
  