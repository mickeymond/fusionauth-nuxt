<template>
  <section class="section">
    <pre>
      <code>
        {{ JSON.stringify($auth.user, null, 4) }}
      </code>
    </pre>
  </section>
</template>

<script>
export default {
  name: 'HomePage',
}
</script>
