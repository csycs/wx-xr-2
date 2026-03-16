Page({
  data: {},

  goToOSD() {
    wx.navigateTo({
      url: '/pages/osd/osd'
    });
  },

  goTo2D() {
    wx.navigateTo({
      url: '/pages/2d-marker/2d-marker'
    });
  }
});
