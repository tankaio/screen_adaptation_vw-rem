;(function () {
  window.onload = function () {
    let appEle = document.getElementById('app')
    let mainEle = appEle.children[0]
    const dpr = window.devicePixelRatio || 1
    mainEle.setAttribute('data-dpr', dpr)
    console.log('dpr:', dpr)
    console.log('mainEle:', mainEle)
  }
})()
