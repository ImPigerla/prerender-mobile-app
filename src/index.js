import Vue from 'vue'
import router from 'src/router'

// 样式
import './style/app.scss'

import App from 'src/views/app'

const isProduct = process.env.NODE_ENV === 'production'

Vue.config.productionTip = false
Vue.config.devtools = !isProduct

new Vue({
    el: '#app',
    router,
    render: h => h(App),
    mounted () {
        // You'll need this for renderAfterDocumentEvent.
        document.dispatchEvent(new Event('render-event'))
    }
})
