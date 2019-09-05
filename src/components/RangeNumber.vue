<template>
    <span>
            <InputNumber
                    class="close-control"
                    v-model="n1"
                    :max="n2 === null ? Infinity : n2 - 1"
                    @on-change="handleChange"
            />
             &nbsp;-&nbsp;
            <InputNumber
                    class="close-control"
                    v-model="n2"
                    :min="n1 === null ? 0 : n1 + 1"
                    @on-change="handleChange"
            />
    </span>
</template>

<script>
    export default {
        name: "RangeNumber",
        props: {
            value: Array,

            // events
            // v-model
        },
        data() {
            return {
                n1: null,
                n2: null,
            };
        },
        methods: {
            handleChange() {
                this.$emit('input', [this.n1, this.n2]);
            },
        },
        created() {
            const unwatch = this.$watch('value', value => {
                unwatch();
                if (!value) return;
                this.n1 = value[0];
                this.n2 = value[1];
            });
        },
    };
</script>

<style lang="scss" scoped>

</style>
