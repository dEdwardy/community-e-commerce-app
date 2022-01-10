<template>
  <div>category</div>
</template>

<script>
export default {
  name: 'CategoryPage',
  data () {
    return {}
  },
  onLoad () {
    console.error(uni.getSystemInfoSync())
    uni.getSystemInfo({
      success (res) {
        console.error(res)
      },
      fail (err) {
        console.error(err)
      }
    })
  },
  methods: {}
}
</script>

<style></style>
