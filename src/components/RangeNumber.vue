<template>
    <span>
            <InputNumber v-model="n1"/>
             &nbsp;-&nbsp;
            <InputNumber v-model="n2"/>
    </span>
</template>

<script>
    export default {
        name: "RangeNumber",
        data() {
            return {
                n1: null,
                n2: null,
            };
        },
    };
</script>

<style lang="scss" scoped>

</style>
