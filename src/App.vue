<template>
  <div id="app">
    <div class="wrap">
      <h2>收集箱</h2>
      <input type="text" class="search" v-model="list" @keyup.enter="add">
      <h3>待办事项</h3>
      <ul class="firstlist">
        <li v-for='(item, index) in doList' :key="item" @click="message(index)">
          <input type="checkbox" v-model="item.checked" @click='dele(item, index)'>
          <span class="text">{{item.text}}</span>
          <span class="time">{{item.date}}</span>
          </li>
      </ul>
      <h3>已完成</h3>
      <ul class="secondlist">
        <li v-for='item in finList' :key="item" >
          <input type="checkbox" disabled>
          <span :class="{active:item.checked,text:true}">{{item.text}}</span>
          <span class="time">{{item.mydate | times}}</span>
          </li>
      </ul>
    </div>
    <div class="message" v-if='isShow'>
      <h3>详情</h3>
      <p>{{pasege}}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'App',
  data () {
    return {
      doList: [],
      list: '',
      checked: false,
      finList: [],
      currentTime: '',
      // mydate: '',
      timeList: [],
      pasege: '',
      isShow: false
    }
  },
  methods: {
    add () {
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
    },
    dele (item, index) {
      this.finList.push(item)
      this.doList.splice(index, 1)
      item.mydate = new Date()
    },
    message (index) {
      // eslint-disable-next-line no-unused-vars
      this.isShow = true
      this.pasege = this.doList[index].text
    }
  },
  filters: {
    times: function (number) {
      return number.getFullYear() + '/' + (number.getMonth() + 1) + '/' + number.getDate() + '/' + number.getHours() + ':' + number.getMinutes()
    }
  }
}
</script>

<style>
#app{
  display: flex;
  width: 70%;
}
.message {
  width: 49%;
  height: 500px;
  /* border:solid 1px rebeccapurple; */
  margin: 50px 0px 0px 0px;
}
.wrap {
  width: 50%;
  height: 500px;
  margin: 50px 0px 0px 50px;
  /* border: solid 1px rebeccapurple; */
}
* {
  margin: 0;
  padding: 0;
}
.search {
  width: 70%;
  height: 30px;
  border-radius: 5px;
  margin: 10px 0px;
  outline: none;
  font-size: 20px;
  text-indent: 5px;
}
ul {
  list-style: none;
  width: 70%
}
li {
  font-size: 18px;
  margin: 10px 0px;
  /* border: solid 1px saddlebrown; */
  width: 100%;
}
.active {
  color: gray;
  text-decoration: line-through;
}
.time {
  color: gray;
  font-size: 16px;
  float: right;
  /* border: solid 1px rosybrown; */
}
.text{
  display: inline-block;
  /* border: solid 1px saddlebrown; */
  width: 40%;
  text-overflow:ellipsis;
  white-space:nowrap;
  overflow:hidden;
}
p {
  margin-top: 20px;
}
</style>
