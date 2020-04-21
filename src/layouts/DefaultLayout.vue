<template>
    <div class="fluid-container default-layout">
        <top-nav />
        <div class="flexgrid">
          <div class="sidebar"><sidebar /></div>
          <div class="content"><router-view /></div>
        </div>
    </div>
</template>

<script>
import { TopNav, Sidebar } from '@/components'

export default {
  name: "default-layout",
  components: {
    TopNav,
    Sidebar
  }
};
</script>

<style lang="scss" scoped>
.default-layout {
  .flexgrid {
    display: flex;
    box-sizing: border-box;
    padding: 30px 20px 0 0;

    .sidebar {
      flex: 1;
    }

    .content {
      flex: 4;
      padding: 0 30px 0 30px;
    }
  }
}
</style>
