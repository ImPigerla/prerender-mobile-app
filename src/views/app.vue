<template>
    <main id="app" class="page-main">
        <div class="main-container">
            <router-view></router-view>
        </div>
    </main>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                transition: 'slide-left',
            }
        }
    }
</script>
