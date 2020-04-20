<template>
  <div id="app">
    <div class="wrap">
      <h2>收集箱</h2>
      <input type="text" class="search" v-model="list" @keyup.enter="add()">
      <h3>待办事项</h3>
      <ul class="firstlist">
        <li v-for='(item, index) in doList' :key="item" @click='dele(item, index)'>
          <input type="checkbox" v-model="item.checked">
          {{item.text}}
          <span>{{item.mydate | times}}</span>
          </li>
      </ul>
      <h3>已完成</h3>
      <ul class="secondlist">
        <li v-for='item in finList' :key="item" >
          <input type="checkbox" disabled>
          <span :class="{active:item.checked}">{{item.text}}</span>
          <span>{{item.mydate | times}}</span>
          </li>
      </ul>
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
      timeList: []
    }
  },
  methods: {
    add () {
      this.doList.push({text: this.list, checked: false, mydate: new Date()})
      this.list = ''
    },
    dele (item, index) {
      this.finList.push(item)
      this.doList.splice(index, 1)
      item.mydate = new Date()
    }
  },
  filters: {
    times: function (number) {
      return number.getFullYear() + '年' + (number.getMonth() + 1) + '月' + number.getDate() + '日' + number.getHours() + ':' + number.getMinutes() + ':' + number.getSeconds()
    }
  }
}
</script>

<style>
.wrap {
  width: 500px;
  height: 500px;
  margin: 50px 0px 0px 50px;
}
* {
  margin: 0;
  padding: 0;
}
.search {
  width: 50%;
  height: 30px;
  border-radius: 5px;
  margin: 10px 0px;
  outline: none;
  font-size: 20px;
  text-indent: 5px;
}
ul {
  list-style: none;
}
li {
  font-size: 18px;
  margin: 10px 0px;
}
.active {
  color: gray;
  text-decoration: line-through;
}
</style>
