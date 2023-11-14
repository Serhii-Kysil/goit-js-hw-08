import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const playerEl = document.querySelector('#vimeo-player');
const player = new Vimeo(playerEl);

const getSavedTime = () => {
  return Number(localStorage.getItem('videoplayer-current-time')) || 0;
}; //будемо повертати час або 0, якщо ще не записано

const updateCurrentTime = throttle(time => {
  localStorage.setItem('videoplayer-current-time', time);
}, 1000);

const initialTime = getSavedTime();
player.setCurrentTime(initialTime);

player.on('timeupdate', data => {
  const currentTime = data.seconds;
  updateCurrentTime(currentTime);
});
