// pages/PickBuying/confirmBuy/confirmBuy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    buying:[],
    totalPrice:0,
    preparedARR:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    let buyingData = wx.getStorageSync('cargo');
    let price = 0;
    let preArr=[];
    for (let i = 0; i < buyingData.length; i++) {
      price += buyingData[i].element.AlbumInfo.price * buyingData[i].times;
      preArr.push(buyingData[i].times)
    }
    price=Math.round(price*100)/100;
    
    this.setData({
      buying:buyingData,
      totalPrice:price,
      preparedARR:preArr
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