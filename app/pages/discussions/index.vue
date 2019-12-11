<template>
  <div class="w-full max-1280 m-auto lg:p-3 pb-0">
    <PostsCat></PostsCat>
    <div class="all flex mt-2 flex-wrap">
      <div class="new-bt lg:hidden"><div class="rounded-full py-2 px-3 flex items-center justify-center font-medium m-auto text-lg">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="13" height="13" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42; margin-right: 0.75rem; margin-bottom: 0.1rem;" xml:space="preserve">
<style type="text/css">
  .st0plusbt{fill:#E6ECF0;}
</style>
<path class="st0plusbt" d="M37.1,16H26V4.9C26,2.2,23.7,0,21,0s-5,2.2-5,4.9V16H4.9C2.2,16,0,18.3,0,21s2.2,5,4.9,5H16v11.1
  c0,2.7,2.3,4.9,5,4.9s5-2.2,5-4.9V26h11.1c2.7,0,4.9-2.3,4.9-5S39.8,16,37.1,16z"/>
</svg>
        Nouvelle discussion
      </div></div>
      <div class="new w-full lg:w-2/6 lg:pr-2 hidden lg:block">
        <div class="sticky top-0">
          <div class="element text-lg font-normal px-3 py-2 pl-0 text-right">
            <div class="mb-2 menu selected rounded cursor-pointer">Dernières discussions</div>
            <div class="mb-2 menu rounded cursor-pointer">Dernières réponses</div>
            <div class="mb-2 menu rounded cursor-pointer">Suivis</div>
          </div>
          <div class="element text-lg font-medium px-3 py-2 pl-0 text-center">
            <div class="flex justify-center items-center bb rounded">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="13" height="13" viewBox="0 0 42 42" style="enable-background:new 0 0 42 42; margin-right: 0.75rem; margin-bottom: 0.1rem;" xml:space="preserve">
<style type="text/css">
  .st0plus{fill:#2D3748;}
</style>
<path class="st0plus" d="M37.1,16H26V4.9C26,2.2,23.7,0,21,0s-5,2.2-5,4.9V16H4.9C2.2,16,0,18.3,0,21s2.2,5,4.9,5H16v11.1
  c0,2.7,2.3,4.9,5,4.9s5-2.2,5-4.9V26h11.1c2.7,0,4.9-2.3,4.9-5S39.8,16,37.1,16z"/>
</svg>
              Nouvelle discussion
            </div>
            <PostsNew></PostsNew>
          </div>
        </div>
        <!-- <Foot></Foot> -->
      </div>
      <div class="left w-full lg:w-4/6">
        <div class="element text-lg font-medium px-3 text-center">
          <div class="flex justify-center items-center lg:hidden" style="margin: 0.5rem 0 0.85rem 0;">
            Dernières discussions
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="14" height="14" viewBox="0 0 292.4 292.4" style="enable-background:new 0 0 292.4 292.4; margin-left: 0.75rem;" xml:space="preserve">
<style type="text/css">
  .st0down{fill:#2D3748;}
</style>
<g>
  <path class="st0down" d="M286.9,69.4c-3.6-3.6-7.9-5.4-12.8-5.4H18.3c-5,0-9.2,1.8-12.9,5.4C1.8,73,0,77.3,0,82.2
    c0,4.9,1.8,9.2,5.4,12.8L133.3,223c3.6,3.6,7.9,5.4,12.9,5.4s9.2-1.8,12.8-5.4L286.9,95.1c3.6-3.6,5.4-7.9,5.4-12.8
    C292.4,77.3,290.5,73,286.9,69.4z"/>
</g>
</svg>
          </div>
        </div>
        <div class="posts mt-2">
          <div class="post mb-3" v-for="post in [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]">
            <div class="title text-lg italic p-3">Ceci est un test, je manque grandement d'inspiration pour mes phrases de tests, alors voilà, j'écris n'importe quoi afin que ça fasse au moins deux lignes pour tester le texte tronqué sur deux lignes, alors merci ne pas me juger. Je suis pas venu ici pour souffrir.</div>
            <div class="user flex flex-wrap items-center justify-between lg:mt-2 px-3 py-2">
              <div class="flex items-center w-full lg:w-auto justify-between"><div class="flex items-center"><div class="count flex items-center justify-center mr-2 font-medium">1</div>
              <svg style="border-radius: 100%; background: #d0dde4; display: block; width: 33px;" viewBox="-8 0 280 280" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><desc>Created with getavataaars.com</desc><defs><circle id="path-1" cx="120" cy="120" r="120"></circle><path d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z" id="path-3"></path><path d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z" id="path-5"></path></defs><g id="Avataaar" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-825.000000, -1100.000000)" id="Avataaar/Circle"><g transform="translate(825.000000, 1100.000000)"><g id="Mask"></g><g id="Avataaar" stroke-width="1" fill-rule="evenodd" mask="url(#mask-4)"><g id="Body" transform="translate(32.000000, 36.000000)"><mask id="mask-6" fill="white"><use xlink:href="#path-5"></use></mask><use fill="#D0C6AC" xlink:href="#path-5"></use><g id="Skin/👶🏽-03-Brown" mask="url(#mask-6)" fill="#FD9841"><g transform="translate(0.000000, 0.000000)" id="Color"><rect x="0" y="0" width="264" height="280"></rect></g></g><path d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z" id="Neck-Shadow" fill-opacity="0.100000001" fill="#000000" mask="url(#mask-6)"></path></g><g id="Clothing/Shirt-Crew-Neck" transform="translate(0.000000, 170.000000)"><defs><path d="M165.960472,29.2949161 C202.936473,32.3249982 232,63.2942856 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.9525631 61.591985,31.7649812 99.0454063,29.2195264 C99.0152598,29.5931145 99,29.9692272 99,30.3476251 C99,42.2107177 113.998461,51.8276544 132.5,51.8276544 C151.001539,51.8276544 166,42.2107177 166,30.3476251 C166,29.9946691 165.986723,29.6437014 165.960472,29.2949161 Z" id="react-path-31"></path></defs><mask id="react-mask-32" fill="white"><use xlink:href="#react-path-31"></use></mask><use id="Clothes" fill="#E6E6E6" fill-rule="evenodd" xlink:href="#react-path-31"></use><g id="Color/Palette/Gray-01" mask="url(#react-mask-32)" fill-rule="evenodd" fill="#3C4F5C"><rect id="🖍Color" x="0" y="0" width="264" height="110"></rect></g><g id="Shadowy" opacity="0.599999964" stroke-width="1" fill-rule="evenodd" mask="url(#react-mask-32)" fill-opacity="0.16" fill="#000000"><g transform="translate(92.000000, 4.000000)" id="Hola-👋🏼"><ellipse cx="40.5" cy="27.8476251" rx="39.6351047" ry="26.9138272"></ellipse></g></g></g><g id="Face" transform="translate(76.000000, 82.000000)" fill="#000000"><g id="Mouth/Smile" transform="translate(2.000000, 52.000000)"><defs><path d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z" id="react-path-33"></path></defs><mask id="react-mask-34" fill="white"><use xlink:href="#react-path-33"></use></mask><use id="Mouth" fill-opacity="0.699999988" fill="#000000" fill-rule="evenodd" xlink:href="#react-path-33"></use><rect id="Teeth" fill="#FFFFFF" fill-rule="evenodd" mask="url(#react-mask-34)" x="39" y="2" width="31" height="16" rx="5"></rect><g id="Tongue" stroke-width="1" fill-rule="evenodd" mask="url(#react-mask-34)" fill="#FF4F6D"><g transform="translate(38.000000, 24.000000)"><circle cx="11" cy="11" r="11"></circle><circle cx="21" cy="11" r="11"></circle></g></g></g><g id="Nose/Default" transform="translate(28.000000, 40.000000)" fill-opacity="0.16"><path d="M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8" id="Nose"></path></g><g id="Eyes/Squint-😊" transform="translate(0.000000, 8.000000)"><defs><path d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z" id="react-path-35"></path><path d="M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z" id="react-path-36"></path></defs><g id="Eye" transform="translate(16.000000, 13.000000)"><mask id="react-mask-37" fill="white"><use xlink:href="#react-path-35"></use></mask><use id="The-white-stuff" fill="#FFFFFF" xlink:href="#react-path-35"></use><circle fill-opacity="0.699999988" fill="#000000" mask="url(#react-mask-37)" cx="14" cy="10" r="6"></circle></g><g id="Eye" transform="translate(68.000000, 13.000000)"><mask id="react-mask-38" fill="white"><use xlink:href="#react-path-36"></use></mask><use id="Eyeball-Mask" fill="#FFFFFF" xlink:href="#react-path-36"></use><circle fill-opacity="0.699999988" fill="#000000" mask="url(#react-mask-38)" cx="14" cy="10" r="6"></circle></g></g><g id="Eyebrow/Natural/Default-Natural" fill-opacity="0.599999964"><path d="M26.0390934,6.21012364 C20.2775554,6.98346216 11.2929313,12.0052479 12.04426,17.8178111 C12.0689481,18.0080543 12.3567302,18.0673468 12.4809077,17.9084937 C14.9674041,14.7203351 34.1927973,10.0365481 41.1942673,11.0147151 C41.8350523,11.1044465 42.2580662,10.4430343 41.8210501,10.0302067 C38.0765663,6.49485426 31.2003792,5.51224825 26.0390934,6.21012364" id="Eyebrow" transform="translate(27.000000, 12.000000) rotate(5.000000) translate(-27.000000, -12.000000) "></path><path d="M85.0390934,6.21012364 C79.2775554,6.98346216 70.2929313,12.0052479 71.04426,17.8178111 C71.0689481,18.0080543 71.3567302,18.0673468 71.4809077,17.9084937 C73.9674041,14.7203351 93.1927973,10.0365481 100.194267,11.0147151 C100.835052,11.1044465 101.258066,10.4430343 100.82105,10.0302067 C97.0765663,6.49485426 90.2003792,5.51224825 85.0390934,6.21012364" id="Eyebrow" transform="translate(86.000000, 12.000000) scale(-1, 1) rotate(5.000000) translate(-86.000000, -12.000000) "></path></g></g><g id="Top" stroke-width="1" fill-rule="evenodd"><defs><rect id="react-path-41" x="0" y="0" width="264" height="280"></rect><path d="M133.506381,81.3351151 C137.363649,83.3307002 140,87.3574737 140,92 L140,105 C140,111.018625 135.569129,116.002364 129.791419,116.867187 C128.048193,137.114792 115.530782,154.282984 98,162.610951 L98,162.610951 L98,181 L102,181 C119.490913,181 135.525121,187.236892 148,197.608051 L148,74 C148,53.5654643 139.717268,35.0654643 126.325902,21.6740982 C112.934536,8.28273213 94.4345357,-3.55271368e-15 74,0 C33.1309285,7.10542736e-15 -7.10542736e-15,33.1309285 0,74 L0,257.716445 C13.5691766,255.775526 24,244.105888 24,230 L24,184.423101 C30.9346808,182.200199 38.3271796,181 46,181 L50,181 L50,162.610951 C38.7726252,157.277407 29.6015372,148.317951 24,137.245847 L24,75.2659587 C33.1467898,72.2910056 42.777598,68.0170651 52.3415164,62.4953343 C67.7445474,53.6023901 80.4313947,42.9409152 89.0661426,32.3970356 C90.8310687,37.5951441 93.1752556,42.8009742 96.1104311,47.8848473 C104.877881,63.0705152 117.224186,74.2337047 130,79.9170491 L130,80.1659169 C130.400422,80.233095 130.794121,80.3201038 131.18005,80.4258987 C131.954509,80.7493055 132.730185,81.0524853 133.506381,81.3351151 Z" id="react-path-42"></path></defs><mask id="react-mask-39" fill="white"><use xlink:href="#react-path-41"></use></mask><g id="Mask"></g><g id="Top/Long-Hair/Straight" mask="url(#react-mask-39)"><g transform="translate(-1.000000, 0.000000)"><g id="Hair" stroke-width="1" fill="none" fill-rule="evenodd" transform="translate(59.000000, 18.000000)"><mask id="react-mask-40" fill="white"><use xlink:href="#react-path-42"></use></mask><use id="Mask-Hair" fill="#944F23" xlink:href="#react-path-42"></use><g id="Skin/👶🏽-03-Brown" mask="url(#react-mask-40)" fill="#F59797"><g transform="translate(0.000000, 0.000000) " id="Color"><rect x="0" y="0" width="264" height="280"></rect></g></g></g><path d="M192.506381,99.3351151 C197.3745,101.107702 202.263079,102.071957 207,102.148232 L207,102.148232 L207,92 C207,71.5654643 198.717268,53.0654643 185.325902,39.6740982 C198.717268,53.0654643 207,71.5654643 207,92 L207,215.608051 C194.525121,205.236892 178.490913,199 161,199 L157,199 L157,180.610951 L157,180.610951 C174.530782,172.282984 187.048193,155.114792 188.791419,134.867187 C194.569129,134.002364 199,129.018625 199,123 L199,110 C199,105.357474 196.363649,101.3307 192.506381,99.3351151 Z M190.18005,98.4258987 C189.794121,98.3201038 189.400422,98.233095 189,98.1659169 L189,97.9170491 C189.392974,98.0918644 189.786355,98.2614951 190.18005,98.4258987 Z M83,155.245847 C88.6015372,166.317951 97.7726252,175.277407 109,180.610951 L109,199 L105,199 C97.3271796,199 89.9346808,200.200199 83,202.423101 L83,155.245847 Z" id="Shadow" fill-opacity="0.24" fill="#000000" fill-rule="evenodd"></path></g></g></g></g></g></g></g></svg>
              <span class="pseudo ml-2 font-medium">Pseudo</span><span class="hidden lg:inline">,</span></div>
              <span>&nbsp;il y a 44 minutes</span></div>
              <div class="tags text-lg lg:ml-4 mb-1 lg:mb-0 w-full lg:w-auto order-first lg:order-last text-right">
                <span class="inline-block border border-cleartext rounded px-2 bg-cleartext text-white">Actu</span>
                <span class="inline-block border border-cleartext rounded px-2 bg-cleartext text-white">Débat</span>
                <span class="inline-block border border-cleartext rounded px-2 bg-cleartext text-white">Série</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostsCat from '~/components/PostsCat.vue'
import PostsNew from '~/components/PostsNew.vue'
import Foot from '~/components/Foot.vue'

export default {
  components: {
    PostsCat,
    PostsNew,
    Foot
  },
  data: () => {
    return {
      prevScroll: 0,
      prevScrollTime: 0,
      currentScroll: -1
    }
  },
  methods: {
    onScroll () {
      let scrollTop = 0
      scrollTop = window.scrollY

      if(this.currentScroll === -1 && scrollTop - this.prevScroll > 0) {
        this.currentScroll = 1
        this.prevScrollTime = Date.now()
      }
      // else if(this.currentScroll === 1 && scrollTop - this.prevScroll < 0 && !this.$store.state.selected_post) {
      else if(this.currentScroll === 1 && scrollTop - this.prevScroll < 0) {
        this.currentScroll = -1
        this.prevScrollTime = Date.now()
        if(document.querySelector('.new-bt')) document.querySelector('.new-bt').classList.remove('down')
      }

      // if(Date.now() - this.prevScrollTime > 500 && !this.$store.state.selected_post) {
      if(Date.now() - this.prevScrollTime > 500) {
        if(this.currentScroll === 1) {
          if(document.querySelector('.new-bt') && !this.publishing) document.querySelector('.new-bt').classList.add('down')
        }
      }

      this.prevScroll = scrollTop
    }
  },
  created() {
    if(typeof window !== 'undefined') window.addEventListener('scroll', this.onScroll)
  },
  destroyed() {
    if(typeof window !== 'undefined') window.removeEventListener('scroll', this.onScroll)
  },
  // mounted () {
  //   if(typeof window !== 'undefined') this.onScroll(this)
  // }
}
</script>

<style lang="scss" scoped>
.new-bt {
  position: fixed;
  bottom: 3.6rem;
  width: 100%;
  height: 3.6rem;
  background: linear-gradient(transparent, $clearbt);
  transition: bottom 0.3s linear;

  &.down {
    bottom: -5rem;
  }

  div {
    color: $white;
    background-color: $bt;
    width: 14rem;
  }
}

.element {
  // background-color: $greywhite;
  // box-shadow: 0px 0px 5px $greywhite;
  // border-bottom: 1px solid $txt;

  .bb {
    // border-bottom: 2px solid $txt;
    padding: 0.25rem;
    background-color: $greywhite;
  }
}

.menu {
  background: #e6ecf0;
  padding: 0.25rem;
  padding-right: 0.5rem;
  color: #718096;
}
.menu.selected {
  background: #718096;
  color: #e6ecf0;
}

.posts {
  // box-shadow: 0px 0px 5px $greywhite;
  // -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  // mask-image: linear-gradient(to bottom, black 50%, transparent 100%);

  .post {
    // background-color: $greywhite;
    // border-bottom: 1px solid $grey;
    cursor: pointer;

    // box-shadow: 0px 2px 5px $greywhite;
    background-color: $clearbt;

    // @media screen and (max-width: $desktop) {
      margin-bottom: 0;
      border-bottom: 1px solid $white;
    // }

    @media screen and (min-width: $desktop) {
      &:first-child {
        border-radius: 0.25rem 0.25rem 0 0;
      }
      &:last-child {
        border-radius: 0 0 0.25rem 0.25rem;
      }
    }

    .title {
      // overflow: hidden;
      // white-space: nowrap;
      // text-overflow: ellipsis;

      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;

      padding-bottom: 0;
      color: #000;

      -webkit-line-clamp: 3;

      @media screen and (min-width: $desktop) {
        -webkit-line-clamp: 2;
      }
    }

    .tags {
      color: $txt;
    }

    .user {
      color: $cleartext;
      // background-color: $white;
    }

    .count {
      width: 33px;
      height: 33px;
      background-color: $greywhite;
      border-radius: 100%;
      color: $cleartext;
    }
  }
}
</style>
