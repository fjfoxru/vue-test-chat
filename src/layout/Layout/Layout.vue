<template>
	<div class="page">
		<component :is="layout"/>
	</div>
</template>

<script>
import LayoutContentWithSidebar from "@/layout/Layout/layoutContent/LayoutContentWithSidebar";
import LayoutContentSingle from "@/layout/Layout/layoutContent/LayoutContentSingle";

export default {
	components: {
		LayoutContentWithSidebar,
		LayoutContentSingle,
	},
	computed: {
		layout() {
			return this.$route.meta.layout ? this.$route.meta.layout : 'LayoutContentSingle';
		}
	},
}
</script>