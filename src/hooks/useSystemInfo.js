import { reactive, toRefs } from 'vue'
export default function () {
  let systemInfo = reactive({})
  uni.getSystemInfo({
    success: res => {
      systemInfo = res
    },
    fail: err => {
      console.error(err)
    }
  })
  return {
    ...toRefs(systemInfo)
  }
}
