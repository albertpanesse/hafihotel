<template>
	<div class="image-drop-zone-wrapper">
		<img :src="imageBlob" v-on:click="openFileBrowser($event)">
		<div class="upload-action">
			<input type="file" id="menuImageFile" v-on:change="fileImageChange($event)" />
		</div>
		<p>Click image / image placeholder to change</p>
	</div>
</template>

<script>
import placeHolder from '../assets/placeholder-image.jpg'

export default {
	name: 'image-drop-zone',
	props: [
		'image'
	],
	data: function() {
		return {
			imageBlob: placeHolder
		}
	},
	methods: {
		openFileBrowser(event) {
			event.preventDefault();

			const element = document.getElementById('menuImageFile');
			element.click();
		},
		fileImageChange(event) {
			const self = this;

			const reader = new FileReader();
			let files = event.target.files;
			reader.addEventListener('load', function(e) {
				if (e.type === 'load') {
					self.imageBlob = reader.result;
				}
			});
			reader.readAsDataURL(files[0]);

			this.$emit('change', files)
		}
	},
	watch: {
		image: function(newVal, oldVal) {
			if (newVal !== oldVal) {
				this.imageBlob = `${process.env.VUE_APP_CDN_URL}/${newVal}`
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.image-drop-zone-wrapper {
	display: block;
	width: 100%;
	text-align: center;

	img {
		width: 60%;
		height: auto;
		box-sizing: border-box;
		padding: pxToRem(15);
		border: pxToRem(1) solid color(bd-light-grey);
		border-radius: pxToRem(5);
		margin-bottom: pxToRem(15);
	}

	#menuImageFile {
		display: none;
	}

	.upload-action {
		display: flex;
		justify-content: center;
	}
}
</style>
