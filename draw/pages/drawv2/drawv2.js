// pages/drawv2.js
Page({

  /**
   * Page initial data
   */
  data: {
    word1: '天',
    word2: '丑',
    word3: '兔',
    wordList1: ['天','地','玄','黄'],
    wordList2: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
    wordList3: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
    interval1: 1,
    interval2: 2,
    interval3: 3,
  },

  changeWord1: function() {
    let num = Math.floor(Math.random() * Math.floor(3))
    this.setData({
      word1: this.data.wordList1[num]
    })
  },

  changeWord2: function () {
    let num = Math.floor(Math.random() * Math.floor(11))
    this.setData({
      word2: this.data.wordList2[num]
    })
  },

  changeWord3: function () {
    let num = Math.floor(Math.random() * Math.floor(3))
    this.setData({
      word3: this.data.wordList3[num]
    })
  },

  setPrize: function() {
    clearInterval(this.data.interval1)
    clearInterval(this.data.interval2)
    clearInterval(this.data.interval3)
  },

  animateEntry: function () {
    let animationEntry = wx.createAnimation({
      delay: 0,
      duration: 3000,
      timingFunction: "ease"
    });
    animationEntry.scale(1).step()
    this.setData({
      animationEntry: animationEntry.export()
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight,
          wdith: res.windowWidth,
          borderHeight: ((res.windowHeight - 200) / 3),
          borderWidth: ((res.windowWidth - 250) / 2),
          drawHeight: (res.windowHeight - 200) / 4,
          drawWidth: (res.windowWidth - 210) / 2,
          hasDrawn: false
        })
      },
    })
    this.setData({
      interval1: setInterval(this.changeWord1, 130),
      interval2: setInterval(this.changeWord2, 120),
      interval3: setInterval(this.changeWord3, 80)
    })
    setInterval(this.setPrize, 4000)
    this.animateEntry()
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})