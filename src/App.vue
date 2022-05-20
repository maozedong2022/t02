<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { allChannelListAPI } from '@/api'

export default {

  async created () {
    try {
      const res = await allChannelListAPI()
      // console.log(res)
    } catch (error) {
      console.dir(error)
    }
  }
}

</script>

<style lang="less">
</style>
