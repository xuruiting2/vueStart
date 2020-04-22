// eslint-disable-next-line no-unused-vars
var time = function () {
  // eslint-disable-next-line no-use-before-define
  // this.doList.push({text: this.list, checked: false, date: mydate})
  var currentTime = new Date()
  // eslint-disable-next-line no-unused-vars
  var month = currentTime.getMonth()
  var current = currentTime.getTime()
  var startTime = new Date(2020, month, 1)
  var start = startTime.getTime()
  var chooseTime = Math.floor(Math.random() * (current - start + 1)) + start
  var choose = new Date(chooseTime)
  // eslint-disable-next-line no-unused-vars
  var mydate = ''
  if (currentTime.getDate() - choose.getDate() === 1) {
    mydate = '昨天'
  } else if (currentTime.getDate() - choose.getDate() < 7 && currentTime.getDate() - choose.getDate() !== 0) {
    mydate = (currentTime.getDate() - choose.getDate()) + '天前'
  } else if (currentTime.getDate() - choose.getDate() === 0) {
    mydate = choose.getHours() + ':' + choose.getMinutes()
  } else {
    mydate = choose.getFullYear() + '/' + (choose.getMonth() + 1) + '/' + choose.getDate() + '/' + choose.getHours() + ':' + choose.getMinutes()
  }
  this.doList.push({text: this.list, checked: false, date: mydate})
  this.list = ''
}
export default{
  name: 'time'
}