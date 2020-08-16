<template>
  <section>
    <b-loading
      :is-full-page="true"
      :active="true"
      :can-cancel="false"
    />
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
      }, 2000)
    }
  }
</script>

<style scoped>

</style>
