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
    dataList: []
  },
  onPullDownRefresh: function () {
    this.onLoad();
    wx.showNavigationBarLoading() //在标题栏中显示加载

    //模拟加载
    setTimeout(function () {
      // complete
      wx.hideNavigationBarLoading() //完成停止加载
      wx.stopPullDownRefresh() //停止下拉刷新
    }, 1500);
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
    var that = this
    wx.cloud.init();
    const db = wx.cloud.database()
    db.collection('test').get({
      success(res) {
        that.setData({
          dataList: res.data
        })
      }
    })
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