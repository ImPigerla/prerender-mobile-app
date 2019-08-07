<template>
    <section class="index-page">
        <img src="~images/image_1.gif" style="width: 750px;" alt="test">
        <div class="banner">
            <div class="user-info">
                <p class="name">{{ userName }}</p>
            </div>
        </div>
    </section>
</template>

<script type="text/javascript">
    export default {
        name: 'index.vue',
        data () {
            return {
                userName: 'padding-left: 20px; font-size: 30px;',
            }
        }
    }
</script>

<style lang="scss">
    .index-page {
        position: relative;
        .banner {
            position: absolute;
            z-index: 1;
            height: 200px;
            top: 200px;
            left: 50%;
            transform: translate(-50%);
            white-space: nowrap;
            p {
                padding-left: 20px;
                font-size: 30px;
                color: #fff;
                &:not(:first-child) {
                    margin-top: 15px;
                }
            }
        }
    }
</style>
