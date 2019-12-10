<template>
	<div>
    <div class="head"><div class="w-full max-1280 m-auto lg:p-3">
      <div class="mt-4 flex items-center justify-between">
				<img class="main-svg" src="~/assets/img/undraw_working_late_pukg.svg" alt="">
				<div class="text-4xl font-medium main-txt text-center">
					<h1>Rejoins le 1er réseau social pour ne plus t'ennuyer</h1>
					<span class="bt py-2 px-4 rounded mt-4 inline-block m-auto cursor-pointer">Je m'inscris</span>
				</div>
			</div>
    </div></div>
    <div>
<svg version="1.1" id="Calque_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   viewBox="0 0 1366 768" style="enable-background:new 0 0 1366 768; width: 100%;" xml:space="preserve">
<style type="text/css">
  .st0border{fill:#2D3748;}
</style>
<g>
  <path class="st0border" d="M1366,0c-206.4,47.2-372.4,50.2-487,44C676.8,33,653-5.9,485,9c-103.9,9.2-198.9,33.4-350,16
    C77.7,18.4,31,8,0,0C455.3,0,910.7,0,1366,0z"/>
</g>
</svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.head {
  background-color: $dark;
  z-index: 1;
}

.main-svg {
	width: 40rem;
}
.main-txt {
	color: $white;
	max-width: 30rem;

	.bt {
		background-color: $red;
	}
}
</style>