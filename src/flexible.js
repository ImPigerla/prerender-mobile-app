(function flexible (window, document) {
    let docEl = document.documentElement

    // 10 is egual with @pigerla/px2vw-loader's multiple
    // 750 is egual with @pigerla/px2vw-loader's datum
    function setRemUnit () {
        let clientWidth = docEl.clientWidth > 750 ? 750 : docEl.clientWidth,
            rem = clientWidth / 10
        docEl.style.fontSize = rem + 'px'
    }

    setRemUnit()

    // reset rem unit on page resize
    window.addEventListener('resize', setRemUnit)
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            setRemUnit()
        }
    })
}(window, document))
