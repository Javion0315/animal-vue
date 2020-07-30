<template>
	<div style="height: 1000px">
		<div style="display: flex">
			<h3 class="logoText">{{ isActive }}</h3>
			<div
				class="logo"
				:style="{'background-image': 'url(' + require('@/assets/img/catLogo.png') + ')'}"
				v-if="isActive === 'cat'"
			></div>
			<div
				class="logo"
				:style="{'background-image': 'url(' + require('@/assets/img/dogLogo.png') + ')'}"
				v-else
			></div>
			<h3 class="logoText">{{ isActive }}</h3>
		</div>
		<nav class="navbar navbar-expand-sm bg-dark navbar-dark sticky-top justify-content-center">
			<ul class="navbar-nav" :activeMenu="activeMenu">
				<li class="nav-item" style="border-right: 2px solid white">
					<router-link
						class="nav-link"
						:to="{ path: 'dog' }"
						active-class="active"
						style="color: yellow"
						@click="isActive='cat'"
					>dog</router-link>
				</li>
				<li class="nav-item">
					<router-link
						class="nav-link"
						:to="{ path: 'cat' }"
						style="color: salmon"
						@click="isActive='dog'"
					>cat</router-link>
				</li>
			</ul>
		</nav>
		<router-view />
	</div>
</template>

<script>
export default {
	data() {
		return {
			isActive: "",
		};
	},
	computed: {
		activeMenu() {
			this.isActive = this.$route.name;
		},
	},
};
</script>
<style scoped>
.logo {
	background-position: center;
	background-repeat: no-repeat;
	background-size: contain;
	height: 150px;
	width: 33.3%;
}
.logoText {
	width: 33.3%;
	font-size: 60px;
	text-align: center;
	align-self: center;
}
.navbar-nav {
	width: 100%;
	text-align: center;
	font-size: 20px;
	font-weight: bold;
}
.nav-item {
	width: 50%;
}
.modal {
	display: block; /* Hidden by default */
	position: fixed; /* Stay in place */
	z-index: 22222222222; /* Sit on top */
	padding-top: 100px; /* Location of the box */
	left: 0;
	top: 0;
	width: 100%; /* Full width */
	height: 100%; /* Full height */
	overflow: auto; /* Enable scroll if needed */
	background-color: rgb(0, 0, 0); /* Fallback color */
	background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}
.modal-content {
    margin: auto;
    padding: 20px;
    width: 300px;
    height: 300px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 90px;
    font-weight: bold;
    background-image: url('../assets/img/dogcat.jpg');
}
</style>
