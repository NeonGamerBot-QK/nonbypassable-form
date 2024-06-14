window.alert = function ( text ) { console.log( 'tried to alert: ' + text ); return true; };
var elem = document.documentElement;
function fs_status() {
    if (document.fullscreenElement || document.webkitFullscreenElement ||
        document.mozFullScreenElement)
            return 1;
    else
            return -1;
}
function redirectToBlocked(code) {
    if (location.protocol.includes('file')) {
        location.href = location.href.replace('index.html', 'blocked.html?b='+code)
    } else {
        location.pathname = "blocked.html?b="+code
    }
}
/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitExitFullscreen) { /* Safari */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE11 */
    document.msExitFullscreen();
  }
}
window.addEventListener('click', openFullscreen)
let isFull = false
addEventListener("fullscreenchange", (event) => {
if(!isFull) {
    isFull = true;
    // clear inputs
    Array.from(document.getElementsByTagName('input')).forEach(e => e.value = "")
    document.getElementById('content').style.display = 'block'
    document.getElementById('warning').style.display = 'none'
    let sizeOfEls = Array.from(document.documentElement.children).length
    let sizeOfEls2 = Array.from(document.body.children).length
    setInterval(() => {
        try {
            navigator.clipboard.writeText("")
        } catch(e) {}
        if((isFull && fs_status() == -1) || !document.hasFocus()) {
            // when navigating between tabs it can cause the code to be frozen and \cache its state
            // in this case just block it since u arent supposed to be moving tabs.
            redirectToBlocked(document.hasFocus() ? 1 : 3)
        }
        // check if elements are all equal to size before quiz started
        if(sizeOfEls2 != document.body.children.length || sizeOfEls != document.documentElement.children.length) {
            // something has changed in the DOM
            // not very cool fyi
             // OMG IT WORKS
            redirectToBlocked(4)
        }

    }, 200)
    window.addEventListener('keydown', (key) => {
        if(key.ctrlKey || key.altKey || key.metaKey) redirectToBlocked(0)
    })
} else {
    // alert('blok')
    redirectToBlocked(1)
}
});
// window.history.replaceState({
//     foo: 'bar'
// }, 'Nice URL Title', 'https://saahild.com');
// window.history.pushState({
//     foo: 'bar'
// }, 'Nice URL Title', 'https://saahild.com');
//  i broke it but that also works ;-;
