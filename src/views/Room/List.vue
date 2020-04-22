<template>
	<div class="list-room-wrapper">
		<div class="card">
			<div class="card-header">
				<h4>Rooms</h4>
			</div>
			<div class="card-body">
				<table class="table table-striped table-sm">
					<thead>
						<tr>
							<th width="5%" scope="col">#</th>
							<th width="15%" scope="col">Image</th>
							<th width="25%" scope="col">Room Name</th>
							<th width="10%" scope="col">Dimension</th>
							<th width="10%" scope="col">Capacity</th>
							<th width="10%" scope="col">Actions</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(item, i) in rooms" :key="item.id">
							<th scope="row">{{ i + 1 }}</th>
							<td><img :src="imageFile(item.image)" /></td>
							<td>{{ item.name }}</td>
							<td>{{ item.dim }}</td>
							<td>{{ item.cap }}</td>
							<td><router-link v-bind:to="`/room/edit/${item.id}`">Edit</router-link> | <a class="del-action" v-on:click="delOnClick(item.id)">Del</a></td>
						</tr>
					</tbody>
				</table>
			</div>
			<div class="card-footer">
				<button class="btn btn-primary btn-sm" v-on:click="btnAddOnClick"><i class="fa fa-plus"></i> New Room</button>
			</div>
		</div>
		<confirm-modal
			:show="showConfirmModal"
			v-on:confirm="onConfirm"
			v-on:cancel="onCancel"
			title="Delete Confirmation"
			message="Are you sure want to delete?"
		>
		</confirm-modal>
	</div>
</template>

<script>
import { RoomServices } from '@/services'
import { ConfirmModal } from '@/components'

export default {
	name: 'list-room',
	data: function() {
		return {
			selectedId: '',
			showConfirmModal: false,
			rooms: []
		}
	},
	components: {
		ConfirmModal
	},
	methods: {
		imageFile(file) {
			return `${process.env.VUE_APP_CDN_URL}/${file}`
		},
		btnAddOnClick() {
			this.$router.push('/room/add')
		},
		delOnClick(id) {
			this.selectedId = id
			this.showConfirmModal = true
		},
		onConfirm() {
			RoomServices.delete(this.selectedId)
				.then(resp => {
					if (resp.data.success === true) {
						this.showConfirmModal = false

						this.rooms = this.rooms.filter(item => item.id !== this.selectedId)
					}
				})
		},
		onCancel() {
			this.showConfirmModal = false
		}
	},
	mounted() {
		RoomServices.many()
			.then(resp => {
				if (resp.data.success === true) {
					this.rooms = resp.data.data
				}
			})
	}
}
</script>

<style lang="scss" scoped>
table {
	tbody {
		tr {
			td {
				img {
					width: 100%;
				}
			}
		}
	}
}
</style>
