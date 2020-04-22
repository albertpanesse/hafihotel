<template>
  <div class="home-wrapper">
    <div class="table-buttons">
      <div class="btn-table" v-for="t in tables" v-bind:key="t.id">
        <button v-bind:class="{'btn': true, 'btn-success': (t.status === 'F'), 'btn-danger': (t.status === 'O')}" v-on:click="tableOnClick(t.tablenum)">{{ t.tablenum }}</button>
      </div>
    </div>
    <room-action-modal :show="modalShow" v-on:checkin="checkIn" v-on:checkout="checkOut" v-on:close="modalClosed" v-bind:table-data="tableData" />
  </div>
</template>

<script>
import { DashServices } from '@/services'
import { RoomActionModal } from '@/components'

export default {
  name: 'home',
  components: {
    RoomActionModal
  },
  data: () => {
    return {
      tables: [],
      modalShow: false,
      tableData: {}
    }
  },
  methods: {
    tableOnClick: function(tableNum) {
      DashServices.detail(tableNum)
        .then(resp => {
          if (resp.data.success === true) {
            this.modalShow = true

            this.tableData = resp.data.table
          }
        })
    },
    checkIn: function(dt) {
      DashServices.checkin(dt)
        .then(resp => {
          if (resp.data.success === true) {
            this.tables[dt.tablenum - 1] = resp.data.table
            this.modalShow = false
          }
        })
    },
    checkOut: function(dt) {
      DashServices.checkout(dt)
        .then(resp => {
          if (resp.data.success === true) {
            this.tables[dt.tablenum - 1] = resp.data.table
            this.modalShow = false
          }
        })
    },
    modalClosed: function() {
      this.modalShow = false
    }
  },
  mounted() {
    DashServices.statuses()
      .then((resp) => {
        if (resp.data.success === true) {
          this.tables = resp.data.tables
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  .table-buttons {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 10px;

    .btn-table {
      width: 10%;
      padding: 0 10px 10px 10px;
      margin-bottom: 10px;

      button {
        width: 100%;
      }
    }
  }
}
</style>
