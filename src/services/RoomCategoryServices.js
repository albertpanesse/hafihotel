import axios from 'axios'

export default {
	many: function() {
		return axios.get(`${process.env.VUE_APP_API_URL}/room-category/many`)
	},
	one: function(id) {
		return axios.get(`${process.env.VUE_APP_API_URL}/room-category/one/${id}`)
	},
	create: function(data) {
		return axios.post(`${process.env.VUE_APP_API_URL}/room-category/create`, data)
	},
	update: function(data) {
		return axios.put(`${process.env.VUE_APP_API_URL}/room-category/update`, data)
	},
	delete: function(id) {
		return axios.delete(`${process.env.VUE_APP_API_URL}/room-category/delete`, {
			data: {
				id
			}
		})
	}
}
