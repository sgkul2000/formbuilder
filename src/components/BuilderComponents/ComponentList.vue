<template>
  <div class="ComponentListMain px-1">
        <b-card style="text-align:center;" class="px-0 clickable">
            {{itemName}}
        </b-card>
    </div>
</template>

<script>
export default {
  props: ['item'],
  computed: {
    itemName () {
      if (typeof this.item === 'undefined' || typeof this.item.name === 'undefined') {
        return 'Loading...'
      } else {
        return this.item.name
      }
    }
  }
}
</script>

<style scoped>
.card-body {
    padding: 1rem 0 !important;
}
</style>
