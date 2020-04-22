<template>
	<div class="edit-room-category-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Edit Room Category</h4>
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
	name: 'edit-room-category',
	data: function() {
		return {
			id: '',
			name: ''
		}
	},
	methods: {
		submit() {
			const roomCategory = {
				id: this.id,
				name: this.name
			}

			RoomCategoryServices.update(roomCategory)
				.then(resp => {
					if (resp.data.success === true) {
						this.$router.push('/room-category/list')
					}
				})
		}
	},
	mounted() {
		const id = this.$route.params.id

		RoomCategoryServices.one(id)
			.then(resp => {
				if (resp.data.success === true) {
					this.id = resp.data.data.id
					this.name = resp.data.data.name
				}
			})
	}
}
</script>

<style lang="scss" scoped>
</style>
