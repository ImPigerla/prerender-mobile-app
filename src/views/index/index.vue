<template>
    <section class="index-page">
        <img src="~images/image_1.gif" style="height: 1200px;" alt="bg">
        <article class="text-panel">
            <div class="text-panel-content">
                <p class="side-text">
                    hello world
                </p>
            </div>
        </article>
    </section>
</template>

<script>
    export default {
        name: 'index.vue',
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    .index-page {
        position: relative;

        .text-panel {
            position: absolute;
            left: 64px;
            top: 242px;
            right: 64px;
            border-radius: 13px; /* no */
            background: linear-gradient(to right, #fd57a6, #04d0fa);
        }

        .text-panel {
            &-content {
                margin: 3px; /* no */
                padding: 15px;
                background: white;
                border-radius: 10px; /* no */
                text-align: center;
                font-size: 18px; /* no */
                text-transform: uppercase;
            }
        }
    }
</style>
