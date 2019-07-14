Page({
  onTap:function(){
    //带返回按钮
    // wx.navigateTo({
    //   url: '../posts/posts',
    // })
    console.log('白发皇妃')

    wx.redirectTo({
      url: '../posts/posts',
    })
  }
 
})