<template>
  <section>

  </section>
</template>

<script>
  export default {
    name: "login",
    layout: 'guest',
    mounted() {
      setTimeout(() => {
        if (!this.$auth.loggedIn && !this.$auth.busy) {
          console.log(this.$auth);
          this.$auth.loginWith('fusionauth');
        }
      }, 1000)
    }
  }
</script>

<style scoped>

</style>
