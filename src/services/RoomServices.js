import axios from 'axios'

export default {
  getStatuses: function() {
    return axios.get(`${process.env.VUE_APP_API_URL}/room/statuses`)
  },
  getDetail: function(tableNum) {
    return axios.get(`${process.env.VUE_APP_API_URL}/room/detail/${tableNum}`)
  },
  checkIn: function(data) {
    return axios.post(`${process.env.VUE_APP_API_URL}/room/checkin`, data)
  },
  checkOut: function(data) {
    return axios.post(`${process.env.VUE_APP_API_URL}/room/checkout`, data)
  }
}
