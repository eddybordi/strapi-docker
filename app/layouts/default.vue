<template>
  <div>
    <div class="flex justify-end max-1280 m-auto pr-3 go-up-ct">
<svg class="go-up cursor-pointer" :class="{ down: !showUp }" @click="scrollTop" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 300 300" style="enable-background:new 0 0 300 300;" xml:space="preserve">
<style type="text/css">
  .st0up{fill:#3E3E56;}
  .st1up{fill:#E6ECF0;}
</style>
<g>
  <g>
    <path class="st0up" d="M150,0C67.2,0,0,67.2,0,150s67.2,150,150,150s150-67.2,150-150S232.8,0,150,0z M150,108h88.8H61.2H150z"/>
  </g>
</g>
<g>
  <g>
    <path class="st1up" d="M241.8,163.3l-53.8-53.8c-20.7-20.7-54.3-20.7-74.9,0l-53.8,53.8c-8.2,8.2-8.2,21.5,0,29.8
      c8.2,8.2,21.5,8.2,29.8,0l53.8-53.8c4.3-4.3,11.2-4.3,15.4,0l53.8,53.8c4.1,4.1,9.5,6.2,14.9,6.2c5.4,0,10.8-2.1,14.9-6.2
      C250.1,184.8,250.1,171.5,241.8,163.3z"/>
  </g>
</g>
</svg>
    </div>
    <Navigation></Navigation>
    <nuxt />
    <div class="lg:hidden" style="height: 58px;"></div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  name: 'LayoutDefault',
  components: {
    Navigation
  },
  data: () => {
    return {
      showUp: false,
      scroll: 600
    }
  },
  methods: {
    backToTop () {
      if(window.scrollY > this.scroll && !this.showUp) this.showUp = true
      if(window.scrollY <= this.scroll && this.showUp) this.showUp = false
    },
    scrollTop () {
      window.scroll({ top: 0 })
    }
  },
  created() {
    if(typeof window !== 'undefined') window.addEventListener('scroll', this.backToTop);
  },
  destroyed() {
    if(typeof window !== 'undefined') window.removeEventListener('scroll', this.backToTop);
  },
  mounted () {
    if(typeof window !== 'undefined') this.backToTop()
  }
}
</script>

<style lang="scss">
html {
/*  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;*/
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.go-up-ct {
  @media screen and (max-width: $desktop) {
    justify-content: start !important;
  }
}
.go-up {
  position: fixed;
  width: 43px;
  height: 43px;
  z-index: 9;
  transition: all 0.3s linear;

  @media screen and (max-width: $desktop) {
    top: 0.5rem;
    margin-left: 0.75rem;

    &.down {
      top: -5rem;
    }
  }

  @media screen and (min-width: $desktop) {
    // width: 53px;
    // height: 53px;
    bottom: 1rem;
    position: fixed;

    &.down {
      bottom: -5rem;
    }
  }
}
</style>
