// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566619832614&di=19a865dac617e58cfe87e68cc173ddfc&imgtype=0&src=http%3A%2F%2Fimg1n.soufunimg.com%2Fviewimage%2Fjiancai%2Fbusiness%2Fto8to%2F201508%2F21%2F493%2Fb850f2c05c488c9d19185a1ac3b2d571%2F432x324c.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1566621113289&di=dcb1b99e17f23f216ec75740ff97e675&imgtype=0&src=http%3A%2F%2Fqcloud.dpfile.com%2Fpc%2FjUxQkJo4teORTGiC6slD9Ua4mQV90Rstb2YrvBYxsAUviun6aBVxUNd2aOIBRmiBTYGVDmosZWTLal1WbWRW3A.jpg',
      'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1448405318,22058070&fm=26&gp=0.jpg'
    ],
    indicatorDots: true,
    imgurl:[
      '/images/second2.png',
      '/images/second3.png',
    ],
    text: [
      '男士塑形训练初级课程',
      ]
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  }
})