//index.js
//获取应用实例
const app = getApp()

Page({
  bindPickerChange: function (e) {
    let arrData=this.data.arr;
    if(e.detail.value==0){
      // 降序
      this.setData({
        arr:arrData.sort((a,b)=>b-a)
      })
    }else{
      // 升序
      this.setData({
        arr: arrData.sort((a, b) => a - b)
      })
      
    }
    this.setData({
      index: e.detail.value,
    });
    
  },
  data: {
    index:0,
    arr: ['1','9','7','4','2'],
    selection:['DES','ASC'],
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    

  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
