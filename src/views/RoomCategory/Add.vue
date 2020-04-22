<template>
	<div class="add-room-category-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Add Room Category</h4>
			</div>
			<div class="card-body">
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Category Name</label>
						<input type="text" class="form-control" id="name" v-model="name">
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
import { RoomCategoryServices } from '@/services'

export default {
	name: 'add-room-category',
	data: function() {
		return {
			name: ''
		}
	},
	methods: {
		submit() {
			const roomCategory = {
				name: this.name
			}

			RoomCategoryServices.create(roomCategory)
				.then(resp => {
					if (resp.data.success === true) {
						this.$router.push('/room-category/list')
					}
				})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>
