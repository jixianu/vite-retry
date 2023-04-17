<template>
  <div class="test">
    test-index
  </div>
  <button @click="goHome">goHome</button>
</template>

<script>
export default {
    setup() {
        console.log(11111+'index');
    },
    methods: {
        goHome() {
            this.$router.push('/home')
        },
    }
};

</script>

<style>
.test {
    color: red;
    font-size: 20px;
}
</style>
