<template>
	<div class="sidebar-wrapper">
		<ul class="nav flex-column">
			<li class="nav-item">
				<router-link to="/" class="nav-link"><i class="fa fa-desktop"></i> Dashboard</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/property-setup" class="nav-link"><i class="fa fa-building"></i> Property Setup</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/room-category/list" class="nav-link"><i class="fa fa-th-large"></i> Room Categories</router-link>
			</li>
			<li class="nav-item">
				<router-link to="/room/list" class="nav-link"><i class="fa fa-bed	"></i> Rooms</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "sidebar"
}
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
	.nav-item {
		&:hover {
			background-color: #e3efff;
		}

		.nav-link {
			text-align: left;
			color: #333333;

			&:hover {
				color: #333333;
			}
		}
	}
}
</style>
