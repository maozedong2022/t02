<template>
    <div class="customer noHeader">
        <div>
            <div class="page-header">
                <div class="left-arrow">
                    <i @click="returnHome"></i>
                </div>
                <h1>客服</h1>
            </div>
        </div>
        <div>
            <div style="align:center;">
                 <img src="@/assets/whatsapp.c3ccf010.png" alt="" />
            </div>
            <div class="help_ke">
                <p >客服24小时</p>
                <p >为您竭诚服务</p>
                <p class="help" >如遇到问题需要需要帮助，请联系线上客服</p>
            </div>
            <ul class="connect">
                <li>
                    <div class="left">
                        <i class="contract" ></i>
                        <div>
                            <p >客服</p>
                        </div>
                    </div>
                    <div class="consult">咨询</div>
                </li>
                <li >
                    <div class="left" >
                        <i class="telegram" ></i>
                    <div >
                        <p >telegram</p>
                        <p ></p>
                    </div>
                    </div>
                    <div class="consult" >
                        咨询
                    </div>
                </li>
                <li >
                    <div class="left" >
                        <i class="whatsapp" ></i>
                        <div >
                            <p>whatsapp</p>
                            <p></p>
                        </div>
                    </div>
                    <div class="consult" >
                    咨询
                    </div>
                </li>


            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        returnHome(){
            this.$router.push('/layout/home')
        }
    },
}
</script>


<style scoped lang="less">
</style>
