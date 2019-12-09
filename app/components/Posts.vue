<template>
	<div class="mt-4">
		<div class="flex items-center justify-between head" style="position: relative;">
			<div class="line"></div>
			<span class="">Derniers messages&nbsp;</span>
			<span class="">&nbsp;Masquer les messages fermés</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.head {
	.line {
		position: absolute; width: 100%; border-bottom: 1px solid $grey; height: 4px;
	}

	span {
		background-color: $bg;
		z-index: 1;
	}
}
</style>