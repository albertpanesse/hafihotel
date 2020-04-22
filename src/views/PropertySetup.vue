<template>
	<div class="property-setup-wrapper">
		Test
	</div>
</template>

<script>
import { RoomServices } from '@/services'

export default {
	name: 'property-setup',
	mounted() {
		RoomServices.many()
			.then((resp) => {
				if (resp.data.success === true) {
					this.rooms = resp.data.rooms
				}
			})
	}
}
</script>

<style lang="scss" scoped>
.property-setup-wrapper {
}
</style>
