// pages/drawv2.js
Page({

  /**
   * Page initial data
   */
  data: {
    word1: '天',
    word2: '天',
    word3: '天',
    wordList1: ['天','地','玄','黄'],
    wordList2: ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'],
    wordList3: ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'],
    interval1: 1,
    interval2: 2,
    interval3: 3
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

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          bgHeight: res.windowHeight,
          bgWidth: res.windowWidth,
          drawHeight: (res.windowHeight - 200) / 4,
          drawWidth: (res.windowWidth - 210) / 2,
          rewardHeight: (res.windowHeight - 200) / 3,
          rewardWidth: res.windowWidth / 2,
          textHeight: (res.windowHeight - 200) / 3 + 250,
          hasDrawn: false
        })
      },
    })
    this.setData({
      interval1: setInterval(this.changeWord1, 50),
      interval2: setInterval(this.changeWord2, 75),
      interval3: setInterval(this.changeWord3, 80)
    })
    setInterval(this.setPrize, 2000)
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