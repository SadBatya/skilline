<template>
  <div class="video-top" @click="openInFullscreen">
    <client-only>
      <div class="video-top__container" ref="videoContainer">
        <video-player :options="videoOptions" ref="playerHeader" />
      </div>
    </client-only>
    <div v-if="loader" class="video-top__loader">
      <div class="video-top__loader-block">
        <svg class="circular-loader" viewBox="25 25 50 50">
          <circle class="loader-path" cx="50" cy="50" r="20" stroke-width="3" fill="none"></circle>
        </svg>
      </div>
    </div>
    <div class="video-top__frame">
      <div class="video-top__title">
        <p class="video-top__main-text">SHOWREEL</p>
        <div class="video-top__play-container">
          <div class="video-top__play">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="translate(-100.501 -152.803)">
                <path
                  d="M 101.2505950927734 175.6078186035156 L 101.2505950927734 153.9989929199219 L 123.6010208129883 164.8033599853516 L 101.2505950927734 175.6078186035156 Z"
                  stroke="none" fill="none"/>
                <path
                  d="M 102.0005950927734 155.194580078125 L 102.0005950927734 174.4122161865234 L 121.8777770996094 164.8033599853516 L 102.0005950927734 155.194580078125 M 100.5005950927734 152.8034057617188 L 124.5005950927734 164.4051818847656 L 124.5005950927734 165.2015228271484 L 100.5005950927734 176.8034057617188 L 100.5005950927734 152.8034057617188 Z"
                  stroke="none" fill="inherit"/>
              </g>
            </svg>
            <span class="video-top__play-text">Смотреть видео</span>
          </div>
        </div>
        <p class="video-top__year">2023</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoHeaderSection",
  data() {
    return {
      optionsAttr: {
        controls: true,
        autoplay: false,
        loop: true,
        muted: true,
      },
      videoOptions: {
        autoplay: false,
        controlBar:  {
          playbackRateMenuButton: false,
          volumeMenuButton: false,
          remainingTimeDisplay: false,
        },
        language: 'ru',
        defaultSrcReId: 3,
        playsinline: true,
        poster: '/videos/skillline-poster.jpg',
        source: {
          src: '/videos/skillline.webm',
          type: "video/webm",
        }
      },
      loader: false,
      timerPlay: null,
    }
  },
  computed: {
    player() {
      return this.$refs.playerHeader.player
    }
  },
  mounted() {
    this.$nextTick().then(() => {
      window.player = this.player;
      document.addEventListener('fullscreenchange', () => {
          this.loader = !!document.fullscreenElement;
          if (!this.loader && this.player) {
            this.player.pause();
          }
        })
    });
  },
  methods: {
    isPlaying() {
      const video = this.$refs.videoHeader.$el;
      return video.currentTime > 0 && !video.paused && !video.ended
        && video.readyState > video.HAVE_CURRENT_DATA;
    },
    playVideo(isVisible) {
      if (isVisible && !this.isPlaying) {
        this.$refs.videoHeader.$el.play();
        this.$refs.videoContainer.style.position = null;
        return;
      }

      this.$refs.videoContainer.style.position = 'absolute';
    },
    openInFullscreen() {
      const elem = this.player;
      if (!elem || elem.isFullscreen()) {
        return;
      }

      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.webkitEnterFullscreen) {
        /* Safari */
        elem.webkitEnterFullscreen();
      } else if (elem.msRequestFullscreen) {
        /* IE11 */
        elem.msRequestFullscreen();
      } else if (elem.mozRequestFullScreen) {
        /* Mozila */
        elem.mozRequestFullScreen();
      }
      // clearTimeout(this.timerPlay);
      // this.timerPlay = setTimeout(() => {
      //   elem.play();
      // }, 100);
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.video-top {
  width: 100%;
  position: relative;
  display: flex;
  align-items: flex-end;
  gap: rem(15);
  padding: rem(60) 0 0;
  overflow: hidden;
  cursor: pointer;

  background-color: $gray-black;

  @include mediaMax($tablet-max-width) {
    padding: rem(20) 0 0;
  }

  &__fullscreen {
    position: absolute;
    bottom: rem(20);
    right: rem(20);
    z-index: 3;
    cursor: pointer;
    opacity: 0.6;

    width: rem(50);
    height: rem(50);
    color: $light-green;

    border: rem(1) solid currentColor;
    background: transparent;

    &:hover {
      opacity: 1;
    }

    & svg {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;

      width: rem(40);
      height: rem(40);

      color: inherit;
      fill: currentColor;

      transform: translate(-50%, -50%);
    }

    &::before {
      content: '';
      position: absolute;
      top: rem(-5);
      right: rem(-5);
      left: rem(-5);
      bottom: rem(-5);

      background-color: rgb($bk-white, 0.2);
    }
  }

  &__frame {
    position: relative;
    width: 100%;
    padding: 0 rem(5);
  }

  &__title {
    display: flex;

    font-size: max(11vw, 52px);
    font-family: $fontFamily;
    margin-bottom: rem(-6);
    font-weight: $bold;
    color: $color-black;
    letter-spacing: -0.1vw;
    text-align: center;
    vertical-align: baseline;
    text-transform: uppercase;


    @include mediaMax($desktop-small-width) {
      letter-spacing: -0.2vw;
    }

    @include mediaMax($small-tablet-max-width) {
      font-size: max(10.5vw, 52px);
      letter-spacing: -0.2vw;
    }

    @include mediaMax($tablet-max-width) {
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;

      font-size: max(16vw, 52px);
      letter-spacing: 0;
    }

    @include mediaMax($mobile-max-width) {
      margin-bottom: rem(-2);
    }

    @include safarifix() {
      margin-bottom: -2.4vw !important;
      @include mediaMax($tablet-max-width) {
        margin-bottom: -26px !important;
      }
    }

    & p {
      margin: 0;
      display: inline-block;
      font: inherit;

      &.video-top__year {
        font-size: max(10.5vw, 52px);
        color: $light-green;

        @include mediaMax($small-tablet-max-width) {
          font-size: max(10.5vw, 52px);
        }

        @include mediaMax($tablet-max-width) {
          font-size: max(25vw, 52px);
        }

      }
    }
  }

  &__button-block {
    display: block;

  }

  &__play-container {
    display: inline-flex;
    width: 4.4vw;
    align-items: center;
    height: 7.15vw;
    flex-shrink: 0;
    position: relative;

    @include mediaMax($tablet-max-width) {
      width: 100%;
      height: 20px;
    }
  }

  &:hover {

    .video-top__play {
      width: 7.64vw;
      height: 7.64vw;

      @include mediaMax($tablet-max-width) {
        width: 90px;
        height: 90px;
      }

      & .video-top__play-text {
        opacity: 1;

        transition: all 0.3s 0.2s ease-out;

      }
    }

  }

}

.video-top__play {
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-flex;

  background: $color-black;
  border-radius: 50%;
  overflow: hidden;

  width: 4.4vw;
  height: 4.4vw;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  will-change: width, height;

  transition: all 0.3s ease-out;
  transform: translate(-50%, -50%);

  @include mediaMax($tablet-max-width) {
    width: 50px;
    height: 50px;
  }


  & .video-top__play-text {
    position: absolute;
    top: 3.48vw;
    left: 50%;
    max-width: 4.514vw;

    transform: translateX(-50%);

    color: $bk-white;
    font-size: 0.8333vw;
    line-height: 1.1;
    letter-spacing: 0;
    text-align: center;
    opacity: 0;

    will-change: opacity;

    text-transform: uppercase;
    transition: all 0s ease-out;

    @include mediaMax($tablet-max-width) {
      top: 40px;
      font-size: 12px;
      max-width: 65px;
    }

  }

  & svg {
    position: absolute;
    top: 1.53vw;
    left: calc(50% + 2px);

    transform: translateX(-50%);

    width: 1.38vw;
    height: 1.38vw;
    fill: $bk-white;
    stroke: $bk-white;

    @include mediaMax($tablet-max-width) {
      width: 20px;
      height: 20px;
      top: 15px;
    }
  }
}

.video-top__container {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  opacity: 1;
  z-index: -1;
  width: 100%;
  overflow: hidden;

  & video {

    //&::-webkit-media-controls {
    //  display: none!important;
    //}

    /* Mozilla proposal (dash) */
    &:full-screen {
      width:100%;
      height:100%;
    }
    /* W3C proposal (no dash) */
    &:fullscreen {
      width:100%;
      height:100%;
    }
    /* currently working vendor prefixes */
    &:-webkit-full-screen,
    &:-moz-full-screen {
      width:100%;
      height:100%;
    }

    &:-webkit-full-screen {
      &::-internal-media-controls-overflow-menu-list,
      &::-internal-media-controls-playback-speed-list,
      &::-internal-media-controls-overflow-menu-list-item,
      &::-internal-media-controls-overflow-menu-list-item,
      &::-internal-media-controls-overflow-button {
        display: none !important;;
      }

      &::-webkit-media-controls-timeline,
      &::-webkit-media-controls-current-time-display,
      &::-webkit-media-controls-time-remaining-display,
      &::-webkit-media-controls-volume-control-container {
        display: none !important;
        opacity: 0;
      }
    }

    &::-internal-media-controls-overflow-menu-list,
    &::-internal-media-controls-playback-speed-list,
    &::-internal-media-controls-overflow-menu-list-item,
    &::-internal-media-controls-overflow-menu-list-item,
    &::-internal-media-controls-overflow-button {
      display: none !important;
      opacity: 0;
    }

    &::-webkit-media-controls-timeline,
    &::-webkit-media-controls-current-time-display,
    &::-webkit-media-controls-time-remaining-display,
    &::-webkit-media-controls-volume-control-container {
      display: none !important;
      opacity: 0;
    }
  }
}

.video-top__loader {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 4;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba($color-black, 0.8);
}

.video-top__loader-block {
  width: rem(50);
  height: rem(50);

  svg {
    width: 100%;
    height: 100%;
  }
}

@keyframes animate-stroke {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    stroke: $color-white;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
    stroke: $light-green;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -124;
    stroke: $color-green;

  }
}

.loader-path {
  animation: animate-stroke 1s ease-in-out infinite;
}

</style>
