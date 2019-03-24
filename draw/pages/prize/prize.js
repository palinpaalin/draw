const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    hasUserInfo:false,
    showDialog: false,
    nameList:[],
    dataList: [
      {
        prize_id: '一等奖',
        total_num: 10,
        prize_img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1554045111&di=47a6071abbdf0de03fac72c9387fe409&imgtype=jpg&er=1&src=http%3A%2F%2Fpic64.nipic.com%2Ffile%2F20150203%2F8785995_110144065000_2.jpg',
        prize_status: '未开奖',
        prize_title: '兰博基尼五元代金券',
        num_left:10,
        nameList:[{name:"1"},{name:"2"},{name:"3"}],
        onwerShip:false
      }, 
      {
        prize_id: '二等奖',
        total_num: 10,
        prize_img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        prize_status: '未开奖',
        prize_title: '二手捷达王五元代金券',
        num_left: 10,
        nameList:[],
        onwerShip:false
      },
      {
        prize_id: '三等奖',
        total_num: 10,
        prize_img: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2296517017,2943842369&fm=26&gp=0.jpg',
        prize_status: '未开奖',
        prize_title: '二手捷达王五元代金券',
        num_left: 10,
        nameList: [{name:"Anna"}, {name:"John"}],
        onwerShip: false
      }
    ],
  },
  onLoad: function () {

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
        
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var i;
    for (i = 0; i < this.data.dataList.length; i++) {
      var item;
      for (item = 0; item < this.data.dataList[i].nameList.length; item++) {
        if ("1" == this.data.dataList[i].nameList[item].name) {
          console.log(this.data.dataList[i].nameList[item].name);
          var deletedTodo = "dataList[" + i + "].onwerShip";
          this.setData({
            [deletedTodo]: true
          })
        }
      }
    }
  },
  onClickdiaView: function () {
    
    this.setData({
      showDialog: !this.data.showDialog
    });
    console.log(this.data.showDialog);
  },
  onClickButton: function (e) {
    let that = this;
    that.setData({
      showDialog: !this.data.showDialog,
      nameList: this.data.dataList[e.currentTarget.dataset.index].nameList
    });
  }
})