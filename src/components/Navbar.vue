<template>
  <b-navbar variant="dark" type="dark">
      <b-navbar-brand href="#">Mini Formbuilder</b-navbar-brand>
      <b-navbar-nav v-if="$route.name === 'Builder'" class="ml-auto">
        <b-nav-item>
          <div @click="toggleModal" class="btn btn-light">
            Export
          </div>
        </b-nav-item>
      </b-navbar-nav>
    </b-navbar>
</template>

<script>
export default {
  methods: {
    toggleModal () {
      this.$store.commit('toggleExportModal', true)
    }
  }
}
</script>

<style>

</style>
