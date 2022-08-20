import Player from '@vimeo/player'
import throttle from 'lodash.throttle'

const iframeEl = document.querySelector('iframe')
const player = new Player(iframeEl)
const STORAGE_KEY = 'videoplayer-current-time'

player.setCurrentTime(+localStorage.getItem(STORAGE_KEY))

player.on('timeupdate', throttle(onTimeUpdate, 1000)) 

function onTimeUpdate(params) {
    localStorage.setItem(STORAGE_KEY, params.seconds)
}
