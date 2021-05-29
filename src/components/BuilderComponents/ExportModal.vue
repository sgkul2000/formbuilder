<template>
  <div id="exportModalMain">
    <b-modal v-model="show" hide-footer title="How would you like to export?">
            <div class="d-flex align-items-center justify-content-around">
                <b-button variant="primary" v-b-tooltip.hover :title="ctcTooltip" @click="copyToClipboard()">
                    Copy to clipboard
                </b-button>
                <b-button variant="primary" v-b-tooltip.hover title="Download file" @click="downloadJSONFile">
                    Download JSON file
                </b-button>
                <a ref="downloadAnchorElem" href="" style="display:none;"></a>
            </div>
        </b-modal>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ctcTooltip: 'Copy to clipboard'
    }
  },
  props: ['form'],
  computed: {
    show: {
      get () {
        return this.$store.state.exportModal
      },
      set (newValue) {
        return this.$store.commit('toggleExportModal', newValue)
      }
    }
  },
  methods: {
    copyToClipboard () {
      navigator.clipboard.writeText(JSON.stringify(this.form)).then(() => {
        this.ctcTooltip = 'Copied!'
      }).catch((err) => {
        console.error(err)
      })
    },
    downloadJSONFile () {
      this.$refs.downloadAnchorElem.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.form)))
      this.$refs.downloadAnchorElem.setAttribute('download', 'form.json')
      this.$refs.downloadAnchorElem.click()
    }
  }
}
</script>

<style>
</style>
