<template>
  <div class="FormElementMain py-1" @click="selectElement(index)">
        <!-- header -->
        <div class="d-flex flex-row align-items-center justify-content-between">
        {{item.name}}
        <div class="d-flex flex-row align-items-center justify-content-around">
            <div @click.stop="duplicateItem" class="duplicateButton my-1 py-1 px-1 clickable text-secondary">
                D
            </div>
            <div @click.stop="deleteItem" class="closeButton my-1 py-1 px-1 clickable text-danger">
                X
            </div>
        </div>
        </div>
        <!-- input element -->
    <b-form-group
      v-if="item.type === 'input'"
      id="input-group-1"
      :label="item.properties.label"
      label-for="input-1"
      description=""
      class="py-1"
    >
      <b-form-input
        id="input-1"
        type="text"
        :placeholder="item.properties.placeholder"
        :required="item.validation.required"
      ></b-form-input>
    </b-form-group>

        <!-- password -->
    <b-form-group
      v-if="item.type === 'password'"
      id="input-group-1"
      :label="item.properties.label"
      label-for="input-1"
      description=""
      class="py-1"
    >
      <b-form-input
        id="input-1"
        type="password"
        :placeholder="item.properties.placeholder"
        :required="item.validation.required"
      ></b-form-input>
    </b-form-group>

        <!-- text area -->
        <b-form-group
            v-if="item.type === 'text-area'"
      :label="item.properties.label"
      label-for="textarea"
      description=""
      class="py-1"
    >
      <b-form-textarea
        id="textarea"
        :placeholder="item.properties.placeholder"
                :required="item.validation.required"
      ></b-form-textarea>
    </b-form-group>

        <!-- checkbox -->
        <b-form-checkbox
            v-if="item.type === 'checkbox'"
            class="py-1"
            id="checkbox-1"
            name="checkbox-1"
        >
            {{item.properties.label}}
        </b-form-checkbox>

        <!-- date picker -->
        <b-form-group
            v-if="item.type === 'date-picker'"
      :label="item.properties.label"
      label-for="date-picker"
      description=""
      class="py-1"
    >
            <b-form-datepicker
                id="date-picker"
                :readonly="item.properties.readonly"
            ></b-form-datepicker>
        </b-form-group>

        <!-- quill editor -->
        <b-form-group
            v-if="item.type === 'rich-text'"
      :label="item.properties.label"
      label-for="rich-text"
      class="py-1"
    >
            <quill-editor
            id="rich-text"
                v-if="item.type === 'rich-text'"
            />
        </b-form-group>

        <!-- File input -->
        <b-form-group
            v-if="item.type === 'file'"
            :label="item.properties.label"
            label-for="textarea"
            description=""
            class="py-1"
          >
             <b-form-file
                :placeholder="item.properties.placeholder"
                drop-placeholder="Drop file here..."
            ></b-form-file>
        </b-form-group>

        <!-- Radio -->
        <b-form-group v-if="item.type === 'radio'" :label="item.properties.label">
            <b-form-radio-group
                :options="item.options"
                name="radios-stacked"
                stacked
            ></b-form-radio-group>
        </b-form-group>
  </div>
</template>

<script>
export default {
  props: ['item', 'index', 'selectElement'],
  methods: {
    deleteItem () {
      this.$emit('delete', this.item)
    },
    duplicateItem () {
      this.$emit('duplicate', this.item)
    }
  }
}
</script>

<style>
</style>
