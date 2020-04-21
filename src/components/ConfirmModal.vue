<template>
  <div :class="backStyles">
    <div :class="modalStyles">
      <header class="modal-header">
        <slot name="header">
          <h3>{{ title }}</h3>

          <button
            type="button"
            class="btn btn-light"
            @click="cancel"
          >
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          {{ message }}
        </slot>
       </section>
       <footer class="modal-footer">
          <slot name="footer">
            <button
              type="button"
              class="btn btn-outline-success"
              @click="confirm"
            >
              <i class="fa fa-check"></i> Confirm
            </button>

            <button
              type="button"
              class="btn btn-outline-secondary"
              @click="cancel"
            >
              <i class="fa fa-times"></i> Cancel
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'confirm-modal',
    props: [
      'show',
      'title',
      'message'
    ],
    data: function() {
      return {
        backStyles: 'modal-backdrop faded',
        modalStyles: 'modal faded',
      }
    },
    methods: {
      confirm: function() {
        this.$emit('confirm')
      },
      cancel: function() {
        this.$emit('cancel')
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
