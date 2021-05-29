<template>
  <div class="container-fluid px-0">
        <h4>Properties</h4>
            <div class="row">
                <div v-if="(typeof item.properties.width) !== 'undefined'" class="col-12">
                    <b-form-group
                        id="input-group-1"
                        label="Width"
                        label-for="input-1"
                        description="between 1 to 12"
                        class="py-1"
                    >
                        <b-form-input
                            id="input-1"
                            type="number"
                            :max="12"
                            :min="1"
                            placeholder="width of the input"
                            required
                            v-model="item.properties.width"
                        ></b-form-input>
                    </b-form-group>
                </div>
                <div v-if="(typeof item.properties.label) !== 'undefined'" class="col-12">
                    <b-form-group
                        id="input-group-1"
                        label="Label"
                        label-for="input-1"
                        description=""
                        class="py-1"
                    >
                        <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="label for the input"
                            required
                            v-model="item.properties.label"
                        ></b-form-input>
                    </b-form-group>
                </div>
                <div v-if="(typeof item.properties.placeholder) !== 'undefined'" class="col-12">
                    <b-form-group
                        id="input-group-1"
                        label="Placeholder"
                        label-for="input-1"
                        description=""
                        class="py-1"
                    >
                        <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="placeholder for the input"
                            required
                            v-model="item.properties.placeholder"
                        ></b-form-input>
                    </b-form-group>
                </div>
                <div v-if="(typeof item.properties.readonly) !== 'undefined'" class="col-12">
                    <b-form-group
                    >
                        <b-form-checkbox
                            v-model="item.properties.readonly"
                            name="flavour-3a"
                        >
                            Readonly
                        </b-form-checkbox>
                    </b-form-group>
                </div>
            </div>
            <h4 v-if="(typeof item.validation) !== 'undefined'">Validation</h4>
            <div class="row">
                <div v-if="(typeof item.validation) !== 'undefined' && (typeof item.validation.required) !== 'undefined'" class="col-12">
                    <b-form-group
                    >
                        <b-form-checkbox
                            v-model="item.validation.required"
                            name="flavour-3a"
                        >
                            Required
                        </b-form-checkbox>
                    </b-form-group>
                </div>
                <div v-if="(typeof item.validation) !== 'undefined' && (typeof item.validation.inputType) !== 'undefined'" class="col-12">
                    <b-form-group label="Input Type">
                        <b-form-radio-group
                            :options="[
                                                    { value: 'any', text: 'Any Character'},
                                                    { value: 'onlyAlpha', text: 'Only Alphabets' },
                                                    { value: 'onlyNumber', text: 'Number' },
                                                    ]"
                            name="radios-stacked"
                            v-model="item.validation.inputType"
                            stacked
                        ></b-form-radio-group>
                    </b-form-group>
                </div>
                <div v-if="(typeof item.validation) !== 'undefined' && (typeof item.validation.min) !== 'undefined'" class="col-12">
                    <b-form-group
                        id="input-group-1"
                        label="Min"
                        label-for="input-1"
                        class="py-1"
                        description="Minimum number of characters"
                    >
                        <b-form-input
                            id="input-1"
                            type="number"
                            placeholder="Minimum number of characters"
                            required
                            v-model="item.validation.min"
                        ></b-form-input>
                    </b-form-group>
                </div>
                <div v-if="(typeof item.validation) !== 'undefined' && (typeof item.validation.max) !== 'undefined'" class="col-12">
                    <b-form-group
                        id="input-group-1"
                        label="Max"
                        label-for="input-1"
                        class="py-1"
                        description="Maximum number of characters"
                    >
                        <b-form-input
                            id="input-1"
                            type="number"
                            placeholder="Maximum number of characters"
                            required
                            v-model="item.validation.max"
                        ></b-form-input>
                    </b-form-group>
                </div>
            </div>
            <h4 v-if="item.type === 'radio'">Options</h4>
            <div v-if="item.type === 'radio'" class="row">
                <div class="col-12">
                    <b-form-group
                        id="input-group-1"
                        class="py-1"
                        v-for="(ele, index) in item.options"
                        :key="index"
                    >
                        <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Text of the option"
                            required
                            class="my-1"
                            v-model="item.options[index].text"
                        ></b-form-input>
                        <b-form-input
                            id="input-1"
                            type="text"
                            placeholder="Value of the option"
                            required
                            class="my-1"
                            v-model="item.options[index].value"
                        ></b-form-input>
                    </b-form-group>
                    <div @click="$emit('addOption')" class="btn btn-primary mx-1">
                        ADD
                    </div>
                    <div @click="$emit('deleteOption')" class="btn btn-danger mx-1">
                        DELETE
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style>

</style>
