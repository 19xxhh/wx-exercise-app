// pages/coach/coach.js

const db=wx.cloud.database({
  env:"xhh-wx-5x2mh"
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coaches:"",
    coachName:"",//教练名称
    avatar:"",//教练的头像
    details:{},//当前教练的详细信息
    counts:0,//成功预约的次数
    id:"",


  },
  yue:function(event){
    // 显示数据加载提示框
    wx.showLoading({
      title:"预约中"
    })
    // 创建循环遍历所有的教练，
    for(var i=0;i<this.data.coaches.length;i++){
      // 获取当前教练的id
      var id=event.target.dataset.id;

    }
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