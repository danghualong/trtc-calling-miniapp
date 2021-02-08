import {post} from '../../api/index'
const app = getApp()
const TAG_NAME="login"

Page({
  data: {
    userID: '',
  },

  onLoad: function() {

  },

  onShow: function() {

  },

  onBack: function() {
    wx.navigateBack({
      delta: 1,
    })
  },


  bindInputUserID(e) {
    this.setData({
      userID: e.detail.value,
    })
  },

  async login() {
    console.log("login start");
    try{
      const res=await post("/callcenter/trtc/get_agent",null);
      console.log("login ing");
      if(res.status){
        app.globalData.agentID=res.data.employee_id;
        app.globalData.userID = "13579";
        wx.redirectTo({
          // 若把入口加到腾讯视频云小程序下，则带参数进行传递
          url: `../index/index`,
        })
      }else{
        console.log("当前客服忙，请稍后再试");
      }
    }catch(err){
      console.log(TAG_NAME,err);
    }
    
    console.log("login end");
  },
})
