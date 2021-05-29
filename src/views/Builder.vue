<template>
  <div id="main">
    <div class="container-fluid">
      <div class="row d-flex align-items-center justify-content-center my-5">
        <!-- component menu -->
        <div id="ComponentContainer" class="col-3">
          <div class="container-fluid px-0">
            <draggable
              v-model="availableFormComponents"
              v-bind="availableFormComponentsOptions"
              :clone="handleClone"
                            class="row"
                            style="margin:0;"
            >
              <ComponentList
                v-for="(item, index) in availableFormComponents"
                :key="index"
                                class="col-6 my-1 px-0"
                                :item="item"
              >
              </ComponentList>
            </draggable>
          </div>
        </div>
        <!-- display -->
        <div class="col-6">
          <draggable
            v-model="form"
            v-bind="formOptions"
            style="
              border: 1px dashed rgba(30, 30, 30, 0.6);
                            border-radius: 10px;
              min-height: 200px;
                            max-width: 100%;
                            margin: 0;
                            padding: 1rem;
            "
                        @change="onChange"
                        class="row"
          >
                <FormElement
                  v-for="(item, index) in form"
                  :key="index"
                  class=" my-3 clickable"
                  :class="selectedIndex === index ? 'col-' + item.properties.width + ' selected' : 'col-' + item.properties.width"
                  style="border: 1px solid rgba(30, 30, 30, 0.2)"
                                    :item="item"
                                    :index="index"
                                    @delete="deleteElement(index)"
                                    @duplicate="duplicateElement(index)"
                                    :selectElement="selectElement"
                />
          </draggable>
        </div>
        <!-- properties -->
        <div v-if="selectedIndex > -1" id="PropertiesContainer" class="col-3 mr-2">
          <PropertiesList @deleteOption="deleteOption" @addOption="addOption" :item="form[selectedIndex]" />
        </div>
      </div>
    </div>
        <ExportModal :form="form" />
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import ComponentList from '@/components/BuilderComponents/ComponentList.vue'
import FormElement from '@/components/BuilderComponents/FormElement.vue'
import PropertiesList from '@/components/BuilderComponents/PropertiesList'
import ExportModal from '@/components/BuilderComponents/ExportModal'

export default {
  name: 'Builder',
  components: {
    draggable,
    ComponentList,
    FormElement,
    PropertiesList,
    ExportModal
  },
  data () {
    return {
      selectedIndex: -1,
      form: [],

      availableFormComponents: [
        {
          name: 'Text box',
          type: 'input',
          properties: {
            width: 12,
            label: 'label',
            placeholder: 'placeholder'
          },
          validation: {
            required: false,
            inputType: 'any',
            min: 1,
            max: 15
          }
        },
        {
          name: 'Password',
          type: 'password',
          properties: {
            width: 12,
            label: 'label',
            placeholder: 'placeholder'
          },
          validation: {
            required: false,
            inputType: 'any',
            min: 1,
            max: 15
          }
        },
        {
          name: 'Text Area',
          type: 'text-area',
          properties: {
            width: 12,
            label: 'label',
            placeholder: 'placeholder'
          },
          validation: {
            required: false,
            inputType: 'any',
            min: 1,
            max: 15
          }
        },
        {
          name: 'Checkbox',
          type: 'checkbox',
          properties: {
            width: 12,
            label: 'label',
            placeholder: 'placeholder'
          }
        },
        {
          name: 'Date Picker',
          type: 'date-picker',
          properties: {
            width: 12,
            label: 'label',
            readonly: false
          }
        },
        {
          name: 'Rich Text',
          type: 'rich-text',
          properties: {
            width: 12,
            label: 'label'
          }
        },
        {
          name: 'File',
          type: 'file',
          properties: {
            width: 12,
            label: 'label',
            plcaeholder: 'placeholder'
          }
        },
        {
          name: 'Radio',
          type: 'radio',
          options: [{
            value: 'value 1',
            text: 'text 1'
          }],
          properties: {
            width: 12,
            label: 'label'
          }
        }
      ],

      formOptions: {
        group: 'items'
      },

      availableFormComponentsOptions: {
        group: {
          name: 'items',
          pull: 'clone',
          put: false
        },
        sort: false
      }
    }
  },
  methods: {
    onChange (element) {
      if (typeof element.added !== 'undefined' && typeof element.added.newIndex !== 'undefined') {
        this.selectedIndex = element.added.newIndex
      }
    },
    handleClone (original) {
      return JSON.parse(JSON.stringify(original))
    },
    selectElement (index) {
      this.selectedIndex = index
    },
    deleteElement (index) {
      this.selectedIndex = -1
      this.form.splice(index, 1)
    },
    duplicateElement (index) {
      this.form.splice(index, 0, JSON.parse(JSON.stringify(this.form[index])))
      this.selectedIndex = index + 1
    },
    deleteOption () {
      if (this.form[this.selectedIndex].options.length < 2) {
        this.deleteElement(this.selectedIndex)
        return
      }
      this.form[this.selectedIndex].options.pop()
    },
    addOption () {
      this.form[this.selectedIndex].options.push({
        text: 'sample text',
        value: 'sample value'
      })
    }
  }
}
</script>

<style scoped>
#ComponentContainer {
    position: fixed;
    top: 0;
    left: 0;
    height: calc(100% - 100px);
    overflow-y: scroll;
    background-color: white;
    margin-top: 100px;
}

#PropertiesContainer {
    position: fixed;
    top: 0;
    right: 0;
    height: calc(100% - 100px);
    overflow-y: scroll;
    background-color: white;
    margin-top: 100px;

}
</style>

<style>
.clickable {
    cursor: pointer;
}

.selected {
    box-shadow: 0px 0px 3px  rgba(30, 50, 200, 0.8) !important;
}

</style>
