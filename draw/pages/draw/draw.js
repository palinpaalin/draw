// pages/draw/draw.js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    frameClass1: 'frame z1',//默认正面在上面
    frameClass2: 'frame z2',
    unopenedPic: '/image/treasurebox.jpg',
    openedPic: '/image/coin.jpg',
    reward: '奖品',
  },

  rotateFn: function (e) {
    var that = this
    if (this.data.frameClass1 == 'frame z1' &&
      this.data.frameClass2 == 'frame z2') {
      that.setData({
        frameClass1: "frame front",
        frameClass2: "frame back",
      })
      setTimeout(function () {
        that.setData({
          frameClass1: "frame z2",
          frameClass2: "frame z1",
        })
      }, 1000);
    }
    else {
      that.setData({
        frameClass1: "frame back",
        frameClass2: "frame front",
      })
      setTimeout(function () {
        that.setData({
          frameClass1: "frame z1",
          frameClass2: "frame z2",
        })
      }, 1000);
    }
  },

  touch: function () {
    let animation1 = wx.createAnimation({
      delay: 0,
      duration: 1000,
      timingFunction: "ease"
    });
    animation1.translateY(-(this.data.bgHeight - this.data.drawHeight + 50)).step().translateY(-(this.data.bgHeight - this.data.drawHeight)).step()
    this.setData({
      animation1: animation1.export()
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          bgHeight: res.windowHeight,
          bgWidth: res.windowWidth,
          drawHeight: (res.windowHeight - 200) / 4,
          drawWidth: (res.windowWidth - 200) / 2,
          rewardHeight: (res.windowHeight - 200) / 3,
          rewardWidth: res.windowWidth / 2,
          textHeight: (res.windowHeight - 200) / 3 + 250
        })
      },
    })
    that.touch()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
})