import {post} from '../../api/index'
// const app = getApp()
const app = getApp()
const TAG_NAME="index"

Page({
  data: {
    template: '1v1',
    headerHeight: app.globalData.headerHeight,
    statusBarHeight: app.globalData.statusBarHeight,
    entryInfos: [
      { icon: '../Resources/call.png', title: '语音通话', desc: '<TRTCCaliing>', navigateTo: '../audioCall/audioCall' },
      { icon: '../Resources/doubleroom.png', title: '视频通话', desc: '<TRTCCaliing>', navigateTo: '../videoCall/videoCall' },
    ],
  },

  onLoad: function() {
    
  },
  selectTemplate: function(event) {
    console.log('index selectTemplate', event)
    this.setData({
      template: event.detail.value,
    })
  },
  handleEntry: async function(e) {
    try{
      const res=await post("/callcenter/trtc/get_agent",null);
      if(!res.status){
        wx.showToast({
          title:"当前客服忙，请稍后再试",
          icon:"none"
        });
        return;
      }
      app.globalData.agentID=res.data.employee_id;
      const url = this.data.entryInfos[e.currentTarget.id].navigateTo
      wx.navigateTo({
        url: url,
      })
    }catch(err){
      wx.showToast(
      {
        title:"发生错误，详情参考日志",
        icon:"none"
      });
      console.log(TAG_NAME,err);
    }
  },
})
