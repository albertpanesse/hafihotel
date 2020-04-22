import axios from 'axios'

export default {
	many: function() {
		return axios.get(`${process.env.VUE_APP_API_URL}/room/many`)
	},
	one: function(id) {
		return axios.get(`${process.env.VUE_APP_API_URL}/room/one/${id}`)
	},
	create: function(data) {
		return axios.post(`${process.env.VUE_APP_API_URL}/room/create`, data)
	},
	update: function(data) {
		return axios.put(`${process.env.VUE_APP_API_URL}/room/update`, data)
	},
	delete: function(id) {
		return axios.delete(`${process.env.VUE_APP_API_URL}/room/delete`, {
			data: {
				id
			}
		})
	}
}
