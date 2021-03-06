// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      activeIndex:0,
      jobs:[],
      // itme: {
      //   title:'DNF安徒恩武器典藏包',
      //   school:'安徒恩礼包发售，购买即送增强卷',
      //   pink:'剩余1天',
      //   time:'(11.20-11.30)',
      //   cool:'1325'
      // }
  },

  clickTab:function(e){
    var type = e.target.dataset.current;
    console.log(type);
    this.setData({
      activeIndex: type,
    })
  },
  swiperTab: function(e){
    this.setData({
      activeIndex:e.detail.current,
    })
  },
  // lower:function(){
  //   console.log('下拉刷新');
   
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a2260b6707056548f08b80e/daojucheng/abc',
      success:(res)=> {
        console.log(res);
        that.setData({
          jobs:res.data.data.activity
        });
        // console.log(that.data.jobs);
      }
    })
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