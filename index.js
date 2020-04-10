const testVar = {}

function testFunc() {
  return "hi"
}
function superbowlWin(record) {
  let year
  record.find(obj => {
    if (obj["result"] === "W") {
      year = obj.year
    }
  })
  return year
}
