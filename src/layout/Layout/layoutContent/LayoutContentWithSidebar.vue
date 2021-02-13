<template>
<div class="grid__row">
	<!-- Основная колонка -->
	<section class="grid__main-column">
		<router-view></router-view>
	</section>
	<!-- Правая колонка -->
	<aside class="grid__right-column">
		<router-view name="sidebar"></router-view>
	</aside>
</div>
</template>