import axios from 'axios'

export default {
	upload: function(formData) {
		return axios.post(`${process.env.VUE_APP_API_URL}/file/upload`, formData, {
			headers: {
				'Content-Type': 'multipart/form-data'
			}
		})
	}
}
