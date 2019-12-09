<template>
	<div class="text-base mt-2">
		<ul class="post-cat flex flex-wrap">
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded py-1 px-3 bg-cleartext text-white" href="#">Dernières discussions</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Dernières réponses</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Suivis</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Actu</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Débats</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Musiques</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Ciné</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Séries</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Jeux</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Actu</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Débats</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Musiques</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Ciné</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Séries</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Jeux</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Jeux</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Actu</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Débats</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Musiques</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Ciné</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Séries</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Jeux</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Jeux</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Actu</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Débats</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Musiques</a>
		  </li>
		  <li class="mr-3">
		    <a class="inline-block border border-cleartext rounded hover:border-cleartext text-cleartext hover:bg-cleartext hover:text-white py-1 px-3" href="#">Musiques</a>
		  </li>
		</ul>
	</div>
</template>

<script>
export default {
  name: 'PostsCat',
  data: () => {
    return {
    }
  },
  methods: {
  	ellipsisReplace () {
  		const w = document.querySelector('.post-cat').offsetWidth * 2
  		console.log('w', w)
  		const elms = document.querySelectorAll('.post-cat > li')
  		let tot = 0
  		for(let elm of elms) {
  			tot += parseFloat(window.getComputedStyle(elm).width)
  			tot += parseFloat(window.getComputedStyle(elm).marginRight)
  		}
  		console.log('tot', tot)
  		// if(tot < w)  
	  }
  },
  created() {
  	if(typeof window !== 'undefined') window.addEventListener('resize', this.ellipsisReplace);
	},
	destroyed() {
	  if(typeof window !== 'undefined') window.removeEventListener('resize', this.ellipsisReplace);
	},
  mounted () {
  	if(typeof window !== 'undefined') this.ellipsisReplace()
  }
}
</script>

<style lang="scss" scoped>
ul {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	color: $white;
}
li {
	margin-bottom: 0.5rem;
	display: inline-block;
}
</style>