Component({
  properties: {
    markerSrc: {
      type: String,
      value: 'https://mmbizwxaminiprogram-1258344707.cos.ap-guangzhou.myqcloud.com/xr-frame/demo/marker/osdmarker-test.jpg'
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
      console.log('OSD scene ready', this.scene);
    },

    handleAssetsLoaded({ detail }) {
      console.log('OSD assets loaded', detail);
      console.log('Loaded assets:', this.scene.assets);
      this.setData({ loaded: true });
      wx.showToast({
        title: '请用相机对准识别图片',
        icon: 'none',
        duration: 3000
      });
    },

    handleTrackerSwitch({ detail }) {
      console.log('Tracker switch:', detail);
    }
  }
});
