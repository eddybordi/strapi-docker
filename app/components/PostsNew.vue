<template>
	<div class="text-base mt-4">
		<textarea class="rounded p-2 text-lg font-medium" placeholder="Ecrire ici..."></textarea>
		<input type="text" class="rounded p-2 text-lg font-medium mt-1" placeholder="Ajouter un ou plusieurs tags">
		<div class="flex items-center justify-end mt-3">
			<span class="options mr-4 cursor-pointer text-lg">Plus d'options</span>
			<a class="flex items-center border border-bt rounded py-1 px-3 bg-bt text-white text-lg" href="#"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 448 448" style="enable-background:new 0 0 448 448; width:19px; margin-right: 0.5rem;" xml:space="preserve">
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
</svg> Envoyer</a>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	textarea {
		width: 100%;
		height: 100px;
		background-color: $greywhite;
	}
	input {
		width: 100%;
		background-color: $greywhite;
	}
	.options {
		color: $cleartext;
	}
</style>