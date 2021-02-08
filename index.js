const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array){
  // array.find(function(object){ return object["result"] === "W" })
  let win = array.find( ({result}) => result === "W")
  return win ? win.year : undefined
//  if (win){
//    return win.year
//  }else {
//    return undefined
//   }
}
  
