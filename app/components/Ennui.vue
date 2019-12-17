<template>
	<div class="lg:mt-4">
		<div class="flex relative" style="">
			<div class="emoticons-ct" :class="{ focus }">
				<client-only><button v-popover:foo class="flex items-center justify-center"><img style="width: 33px;" src="~/assets/emoticons/bored.svg">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="14" height="14" viewBox="0 0 292.4 292.4" style="enable-background:new 0 0 292.4 292.4; margin-left: 0.35rem;" xml:space="preserve">
<style type="text/css">
  .st0down2{fill:#3E3E56;}
</style>
<g>
  <path class="st0down2" d="M286.9,69.4c-3.6-3.6-7.9-5.4-12.8-5.4H18.3c-5,0-9.2,1.8-12.9,5.4C1.8,73,0,77.3,0,82.2
    c0,4.9,1.8,9.2,5.4,12.8L133.3,223c3.6,3.6,7.9,5.4,12.9,5.4s9.2-1.8,12.8-5.4L286.9,95.1c3.6-3.6,5.4-7.9,5.4-12.8
    C292.4,77.3,290.5,73,286.9,69.4z"/>
</g>
</svg>
				</button>
				<popover name="foo" class="emoticons" :width="197">
				  <img src="~/assets/emoticons/bored.svg">
				  <img src="~/assets/emoticons/happy.svg">
				  <img src="~/assets/emoticons/happy-1.svg">
				  <img src="~/assets/emoticons/happy-2.svg">
				  <img src="~/assets/emoticons/confused.svg">
				  <img src="~/assets/emoticons/sad.svg">
				  <img src="~/assets/emoticons/mad.svg">
				  <img src="~/assets/emoticons/suspicious.svg">
				  <img src="~/assets/emoticons/wink.svg">
				  <img src="~/assets/emoticons/in-love.svg">
				  <img src="~/assets/emoticons/kissing.svg">
				  <img src="~/assets/emoticons/quiet.svg">
				  <img src="~/assets/emoticons/tongue-out-1.svg">
				  <img src="~/assets/emoticons/embarrassed.svg">
				  <img src="~/assets/emoticons/confused-1.svg">
				  <img src="~/assets/emoticons/unhappy.svg">
				  <img src="~/assets/emoticons/nerd.svg">
				  <img src="~/assets/emoticons/surprised.svg">
				  <img src="~/assets/emoticons/ill.svg">
				  <img src="~/assets/emoticons/ninja.svg">
				</popover></client-only>
			</div>
			<div class="bt-ct-ct" :class="{ focus }"><div class="bt-ct flex items-center justify-center">
<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 448 448" style="enable-background:new 0 0 448 448; width:19px;" xml:space="preserve">
<style type="text/css">
	.svg-send{fill:#E6ECF0;}
</style>
<g>
	<g>
		<path class="svg-send" d="M438.7,209.5l-416-192c-6.6-3-14.5-1.2-19.1,4.5C-1,27.6-1.2,35.7,3.2,41.6L140,224L3.2,406.4
			c-4.4,5.9-4.3,14,0.4,19.6c3.1,3.9,7.7,6,12.4,6c2.3,0,4.5-0.5,6.7-1.5l416-192c5.7-2.6,9.3-8.3,9.3-14.5S444.4,212.1,438.7,209.5
			z"/>
	</g>
</g>
</svg>
			</div></div>
			<input type="text" class="status-input lg:rounded p-3 text-lg font-medium" :class="{ focus }" @focus="tFocus" @blur="tFocus" placeholder="Tu t'ennuies ? Fais-le savoir !">
		</div>
		<!-- <div class="flex items-center p-3 status-options">
			<span>Ajouter une humeur&nbsp;</span> <client-only><toggle-button :value="false" color="#37B3AC"></toggle-button></client-only>
		</div> -->
	</div>
</template>

<script>
export default {
  name: 'Ennui',
  data: () => {
    return {
    	focus: false
    }
  },
  methods: {
  	tFocus () {
  		this.focus = !this.focus
  	}
  }
}
</script>

<style lang="scss" scoped>
input {
	width: 100%;
	background-color: $greywhite;
}

.status-input {
	padding-left: 4.5rem;
	transition: padding-left 0.1s linear;
	// @media screen and (min-width: $desktop) {
	// 	border-radius: 0.25rem 0.25rem 0 0;
	// }

	@media screen and (min-width: $desktop) {
		padding-right: 3.5rem;
	}

	&.focus {
		@media screen and (max-width: $desktop) {
			padding-left: 0.75rem;
			padding-right: 3.5rem;
		}
	}
}
.status-options {
	color: $cleartext;

	@media screen and (min-width: $desktop) {
		border-radius: 0 0 0.25rem 0.25rem;
	}
}
.emoticons-ct {
	position: absolute; top: 9px; left: 12px;
	transition: left 0.1s linear;

	&.focus {
		@media screen and (max-width: $desktop) {
			left: -55px;
		}
	}
}
.emoticons {
	padding-top: 0.5rem;
	top: auto !important;
	left: auto !important;

	&:before {
		left: 11px !important;
	}

	// img:not(:last-child) {
	// 	margin-bottom: 0.5rem;
	// }
	img {
		margin-bottom: 0.3rem;
		cursor: pointer;
		width: 33px;
		display: inline-block;
	}
}
.bt-ct-ct {
	position: absolute; height: 51px; width: 0; right: 0;
	overflow: hidden;
	transition: width 0.1s linear;

	@media screen and (min-width: $desktop) {
		width: 43px;
	}

	&.focus {
		width: 43px;
	}

	.bt-ct {
		background-color: $artic; height: 51px; width: 43px;
		cursor: pointer;
	}
}
</style>