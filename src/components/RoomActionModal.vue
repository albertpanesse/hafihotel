<template>
  <div :class="backStyles">
    <div :class="modalStyles">
      <header class="modal-header">
        <slot name="header">
          <h3>Table Action</h3>

          <button
            type="button"
            class="btn btn-light"
            @click="close"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          <form>
            <div class="form-group row">
              <label for="tableNum" class="col-sm-4 col-form-label">Table Number</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="tableNum" :value="tableData.tablenum">
              </div>
            </div>
            <div class="form-group row">
              <label for="tableStatus" class="col-sm-4 col-form-label">Table Status</label>
              <div class="col-sm-8">
                <input type="text" readonly class="form-control-plaintext" id="tableStatus" :value="filterTableStatus">
              </div>
            </div>
            <div class="form-group row">
              <label for="customerName" class="col-sm-4 col-form-label">Customer Name</label>
              <div class="col-sm-8">
                <input v-if="tableData.status === 'F'" type="text" class="form-control" id="customerName" v-model="customerName">
                <input v-if="tableData.status === 'O'" type="text" readonly class="form-control-plaintext" id="customerName" :value="tableData.customername">
              </div>
            </div>
          </form>
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              v-if="tableData.status === 'O'"
              type="button"
              class="btn btn-outline-warning"
              @click="checkOut"
            >
              <i class="fa fa-sign-out"></i> Check Out
            </button>

            <button
              v-if="tableData.status === 'F'"
              type="button"
              class="btn btn-outline-success"
              @click="checkIn"
            >
              <i class="fa fa-sign-in"></i> Check In
            </button>

            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="close"
            >
              <i class="fa fa-times"></i> Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'room-action-modal',
    props: [
      'show',
      'tableData'
    ],
    data: function() {
      return {
        backStyles: 'modal-backdrop faded',
        modalStyles: 'modal faded',
        customerName: this.tableData.customername
      }
    },
    computed: {
      filterTableStatus: function() {
        if (this.tableData.status === 'F') {
          return 'Free'
        } else if (this.tableData.status === 'O') {
          return 'Occupied'
        } else if (this.tableData.status === 'R') {
          return 'Reserved'
        } else {
          return 'Undefined'
        }
      }
    },
    methods: {
      checkIn: function() {
        this.$emit('checkin', {
          id: this.tableData.id,
          tablenum: this.tableData.tablenum,
          customername: this.customerName
        })

        this.customerName = ''
      },
      checkOut: function() {
        this.$emit('checkout', {
          id: this.tableData.id,
          tablenum: this.tableData.tablenum
        })
      },
      close: function() {
        this.$emit('close')
      },
    },
    watch: {
      show: function(newVal, oldVal) {
        if (newVal !== oldVal) {
          if (newVal === true) {
            this.backStyles = 'modal-backdrop'
            this.modalStyles = 'modal'
          } else {
            this.backStyles = 'modal-backdrop faded'
            this.modalStyles = 'modal faded'
          }
        }
      }
    }
  };
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal {
  background: #FFFFFF;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;
  position: absolute;
  left: auto;
  top: 15%;
  border-radius: 5px;
}
.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}
.modal-body {
  box-sizing: border-box;
  padding: 20px;
  position: relative;
  text-align: left;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
}
.faded {
  display: none;
}
</style>
