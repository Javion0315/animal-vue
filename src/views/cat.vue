<template>
	<div>
		<loading :active.sync="isLoading"></loading>
		<!-- <img style="width: 100%; height: 100%" fit="contain" :src="row.album_file" v-if="key < 10" /> -->
		<div style="height: 1000px">
			<swiper ref="mySwiper" :options="swiperOptions" v-if="petsData">
				<swiper-slide v-for="(row,key) in imgNotNull" :key="key">
					<div
						:style="{'background-image': 'url(' + row.album_file + ')'}"
						class="slider"
						v-if="key < 10"
					></div>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
			<br />
			<div
				v-infinite-scroll="loadMore"
				infinite-scroll-disabled="busy"
				infinite-scroll-distance="limit"
				v-if="petsData"
			>
				<div class="container">
					<div
						class="card"
						style="width:20%; margin: 10px 25px; display: inline-block"
						v-for="(row,key) in imgNotNull"
						:key="key"
					>
						<img class="card-img-top" :src="row.album_file" alt="Card image" style="width:100%" />
						<div class="card-body">
							<h4 class="card-title">{{ row.animal_sex }}</h4>
							<p class="card-text">{{ row.animal_colour }}</p>
						</div>
					</div>
				</div>
			</div>

    <div id="myModal" class="modal" v-if="endVal != 0">
			<div class="modal-content">
				<countTo :startVal="startVal" :endVal="endVal" :duration="duration"></countTo>
			</div>
		</div>

		</div>
	</div>
</template>
<script>
import countTo from "vue-count-to";
import $ from "jquery";
export default {
	components: { countTo },
	data() {
		return {
			petsData: [],
			limit: 20,
			busy: false,
			isLoading: false,
			swiperOptions: {
				slidesPerView: 3,
				spaceBetween: 30,
				freeMode: true,
      },
      duration: 3000,
			startVal: 0,
			endVal: 0,
		};
	},
	created() {
    this.loadMore();

	},
	computed: {
		swiper() {
			return this.$refs.mySwiper.$swiper;
		},
		imgNotNull() {
			return this.petsData.filter(function (val) {
				return val.album_file != "" && val.animal_kind == "貓";
			});
    },
	},
	mounted() {
    this.swiper.slideTo(3, 1000, false);

	},
	methods: {
		loadMore() {
			this.busy = true;
			this.isLoading = true;
			const api = process.env.API_PATH;
			this.$http.get(api).then((response) => {
        this.endVal = response.data.length;
				const append = response.data.slice(
					this.petsData.length,
					this.petsData.length + this.limit
				);
				this.petsData = this.petsData.concat(append);
				this.busy = false;
        this.isLoading = false;
        window.setTimeout(function () {
          $("#myModal").fadeOut("slow");
        }, 3000);
			});
		},
	},
};
</script>
<style scoped>
.slider {
	width: 100%;
	background-repeat: no-repeat;
	height: 350px;
	background-position: center;
	background-size: contain;
}
.modal {
	display: block;
	position: fixed;
	z-index: 22222222222;
	padding-top: 100px;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	overflow: auto;
	background-color: rgb(0, 0, 0);
	background-color: rgba(0, 0, 0, 0.4);
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
