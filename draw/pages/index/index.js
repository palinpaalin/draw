//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    admin: []
  },

  // 跳转到新的页面 - 查看所有奖品
  jumpBtn: function(options) {
    var that = this
    console.log(this.data.userInfo.nickName)
    wx.cloud.init();
    const db = wx.cloud.database()
    db.collection('adminUserAccount').get({
      success(res) {
        // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
        
        that.setData({
          admin: res.data
        })
        console.log(that.data.userInfo.nickName)
        if (res.data[0].nickName == that.data.userInfo.nickName) {
          wx.navigateTo({
            url: '../draw/draw'
          })
        } else {
          wx.navigateTo({
            url: '../drawv2/drawv2'
          })
        }
      }
    })
  },

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
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
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
   
  },
  draw: function () {
    wx.navigateTo({
      url: '../drawv2/drawv2',
    })
  }
})
