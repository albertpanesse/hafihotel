<template>
	<div class="add-room-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Add Room</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group">
						<label for="name">Category</label>
						<select v-model="selectedCategory" class="form-control">
							<option v-for="item in categories" v-bind:value="item.id" v-bind:key="item.id">{{ item.name }}</option>
						</select>
					</div>
					<div class="form-group">
						<label for="name">Name</label>
						<input type="text" class="form-control" id="name" v-model="name">
					</div>
					<div class="form-group">
						<label for="dim">Dimension</label>
						<input type="text" class="form-control" id="dim" v-model="dim">
					</div>
					<div class="form-group">
						<label for="cap">Capacity</label>
						<input type="text" class="form-control" id="cap" v-model="cap">
					</div>
					<div class="form-group">
						<label for="desc">Description</label>
						<textarea class="form-control" id="desc" v-model="desc"></textarea>
					</div>
					<div class="form-group">
						<label for="image">Image</label>
						<image-drop-zone v-on:change="fileOnChange" id="image"></image-drop-zone>
					</div>					
				</form>
			</div>
			<div class="card-footer">
				<button type="button" class="btn btn-primary" v-on:click="submit">Submit</button>
			</div>
		</div>
	</div>
</template>

<script>
import { RoomCategoryServices, RoomServices, FileServices } from '@/services'
import { ImageDropZone } from '@/components'

export default {
	name: 'add-room',
	data: function() {
		return {
			selectedCategory: '',
			categories: [],
			name: '',
			dim: '',
			cap: '',
			desc: '',
			image: '',
			files: []
		}
	},
	components: {
		ImageDropZone
	},
	methods: {
		fileOnChange(files) {
			this.files = files
		},
		submit() {
			const formData = new FormData();
			this.files.forEach((file, i) => {
				formData.append(`image${i}`, file);
			})		

			FileServices.upload(formData)
				.then(resp => {
					if (resp.data.success === true) {
						const room = {
							room_category_id: this.selectedCategory,
							name: this.name,
							dim: this.dim,
							cap: this.cap,
							desc: this.desc,
							image: resp.data.data.filename
						}

						RoomServices.create(room)
							.then(resp => {
								if (resp.data.success === true) {
									this.$router.push('/room/list')
								}
							})
					}
				})
		}
	},
	mounted() {
		RoomCategoryServices.many()
			.then(resp => {
				if (resp.data.success === true) {
					this.categories = resp.data.data
				}
			})
	}
}
</script>

<style lang="scss" scoped>
</style>
