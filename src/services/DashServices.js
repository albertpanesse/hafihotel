import axios from 'axios'

export default {
  statuses: function() {
    return axios.get(`${process.env.VUE_APP_API_URL}/dash/statuses`)
  },
  detail: function(roomId) {
    return axios.get(`${process.env.VUE_APP_API_URL}/dash/detail/${roomId}`)
  },
  checkin: function(data) {
    return axios.post(`${process.env.VUE_APP_API_URL}/dash/checkin`, data)
  },
  checkout: function(data) {
    return axios.post(`${process.env.VUE_APP_API_URL}/dash/checkout`, data)
  }
}
