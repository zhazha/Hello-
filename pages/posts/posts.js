// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "Nov 18 2019",
    title: "正是虾肥蟹胖时"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var posts_content = [{
        date: "Nov 10 2019",
        title: "正是虾肥蟹壮时",
        imgSrc: "/images/post/crab.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把“看初花的荻芦”和“到楼外楼吃蟹”并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满，壳凸红脂块块香”；在《世说新语》里，晋毕卓更是感叹“右手持酒杯，左手持蟹螯，拍浮酒船中，便足了一生矣。",
        reading: "112",
        collection: "96",
        avatar: "/images/avatar/1.png"
      },
      {
        date: "Sep 16 2019",
        title: "比利·林恩的中场战事",
        imgSrc: "/images/post/bl.png",
        content: "《比利·林恩的中场战事》根据本·芳汀同名小说改编，讲述了在伊拉克战争中的美国士兵比利·林恩与战友战胜归来并被誉为美国英雄，在一场橄榄球公开赛的中场表演过程中，揭露这群士兵在战场上真实经历的故事。",
        reading: "122",
        collection: "66",
        avatar: "/images/avatar/2.png"
      }
    ]
    this.setData({
      posts_key: posts_content
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