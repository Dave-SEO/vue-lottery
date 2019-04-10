<template>
    <div>
        <video ref="videoPlayer" class="video-js"></video>
        <p><button @click="createError">createError</button></p>
    </div>
</template>

<script>
import '@/assets/css/video-js.css'
import videojs from 'video.js'

export default {
  name: 'VideoPlayer',
  data () {
    return {
      player: null,
      options: {
        autoplay: false,
        controls: true,
        sources: ''
      }
    }
  },
  mounted () {
    this.player = videojs(this.$refs.videoPlayer, this.options, function onPlayerReady () {
      console.log('onPlayerReady', onPlayerReady)
      this.src([
        {
          src: 'http://127.0.0.1:7002/live/movie.m3u8'
        }
      ])
      //   this.load('http://127.0.0.1:7002/live/movie.m3u8')
      //   this.play()

      //   this.on('loadstart', function (...a) {
      //     console.log('loadstart------------', arguments)
      //     console.log('loadstart------------', a)
      //   })
      //   this.on('loadedmetadata', function (...a) {
      //     console.log('loadedmetadata---视频源数据加载完成----', a)
      //   })
      //   this.on('loadeddata', function () {
      //     console.log('loadeddata---渲染播放画面----')// autoPlay必须为false
      //   })
      //   this.on('progress', function (...a) {
      //     console.log('progress-------加载过程----', a)
      //   })
      //   this.on('timeupdate', function () {
      //     const curTime = this.currentTime()
      //     console.log('timeupdate-------------', curTime)
      //   })
      //   this.off('timeupdate', function () {
      //     console.log('off----------')
      //   })
      //   let myPlayer = this
      //   let reloadOptions = {}
      //   reloadOptions.errorInterval = 1
      //   myPlayer.reloadSourceOnError(reloadOptions)
      this.reloadSourceOnError({

        // getSource allows you to reload the source object after an error
        getSource: (reload) => {
          console.log('Perform any auth renewal / asset URL regeneration here ')
          console.log('重新加载')
          /* Call reload() with a fresh source object, asynchronously if you
     * want (but the error dialog will show up while you're waiting) */
          reload({
            src: 'http://127.0.0.1:7002/live/movie.m3u8'
          })
        },

        /* Minimum amount of seconds that must pass before another reload
   * will be attempted, stops cascading errors */
        errorInterval: 1
      })
    })
    this.player.on('error', function (e) {
      var mediaError = this.error()
      console.log('off----------', mediaError.code)
    })
  },
  methods: {
    createError () {
      console.log('this.player.error', this.player.error())
      this.player.error({code: '1'})
    }
  },
  beforeDestroy () {
    if (this.player) {
      this.player.dispose()
    }
  }
}
</script>
