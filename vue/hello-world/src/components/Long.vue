<template>
    <div>
        {{heHe}}
        <LongS haHa=123 />
    </div>

</template>

<script>
    import LongS from './LongSecond.vue'

    export default {
        name: "Long",
        props:{
            heHe: String
        },
        components: {
            LongS
        }
    }
</script>

<style scoped>

</style>