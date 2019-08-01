// pages/posts/posts.js

var postsData = require('../../data/posts-data.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // this.data.postList = postsData.postList
    this.setData({
      posts_key: postsData.postList
    })
  },
  /**
   * 跳转详情页
   */
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log(postId)
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id=' + postId
    })
  },

  // onSwiperItemTap:function(event){
  //   var postId = event.currentTarget.dataset.postid;
  //   wx.navigateTo({
  //     url: 'posts-detail/posts-detail?id='+postId,
  //   })
  // },

  onSwiperTap: function (event) {
    //target和currentTarget
    //target指的是当前点击的组件  和    currentTarget指的是事件捕获的组件
    //target这里指的是image，而currentTarget指的是Swiper
    var postId = event.target.dataset.postid;
    wx.navigateTo({
      url: 'posts-detail/posts-detail?id=' + postId,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})