<template>
	<div class="page">
		<!-- Контентная часть --> 
		<section class="main-content">
		<component :is="layout">
		</component>
		</section>
		<Footer/>
	</div>
</template>

<script>
import LayoutFrontContentDefault from "@/layout/LayoutFront/layoutFrontContent/LayoutFrontContentDefault";
import LayoutFrontContentMain from "@/layout/LayoutFront/layoutFrontContent/LayoutFrontContentMain";

export default {
	components: {
		LayoutFrontContentDefault,
		LayoutFrontContentMain,
	},
	computed: {
		layout() {
			return this.$route.meta.layout ? this.$route.meta.layout : 'LayoutFrontContentDefault';
		}
	},
}
</script>