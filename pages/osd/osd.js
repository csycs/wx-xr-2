Page({
  data: {
    width: 300,
    height: 300,
    renderWidth: 300,
    renderHeight: 300,
    markerSrc: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/marker/osdmarker-test.jpg'
  },

  onLoad() {
    const info = wx.getSystemInfoSync();
    const width = info.windowWidth;
    const height = info.windowHeight;
    const dpi = info.pixelRatio;
    this.setData({
      width,
      height,
      renderWidth: width * dpi,
      renderHeight: height * dpi
    });
  }
});
