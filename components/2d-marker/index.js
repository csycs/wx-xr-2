Component({
  properties: {
    markerSrc: {
      type: String,
      value: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/2dmarker/hikari.jpg'
    },
    videoSrc: {
      type: String,
      value: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/xr-frame-team/2dmarker/hikari-v.mp4'
    },
    width: {
      type: Number,
      value: 300
    },
    height: {
      type: Number,
      value: 300
    }
  },

  data: {
    loaded: false
  },

  methods: {
    handleReady({ detail }) {
      this.scene = detail.value;
      console.log('2D Marker scene ready', this.scene);
    },

    handleAssetsLoaded({ detail }) {
      console.log('2D Marker assets loaded', detail);
      this.setData({ loaded: true });
      wx.showToast({
        title: '请用相机对准识别图片',
        icon: 'none',
        duration: 3000
      });
    },

    handleTrackerSwitch({ detail }) {
      const active = detail.value;
      const video = this.scene.assets.getAsset('video-texture', 'video-marker');
      if (active) {
        video.play();
      } else {
        video.stop();
      }
    }
  }
});
