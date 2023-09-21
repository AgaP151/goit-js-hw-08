
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    const currentTime = "videoplayer-current-time";
    
    const updateTime = time => localStorage.setItem(currentTime, time.seconds);
    
    player.on('timeUpdate', throttle(updateTime, 1000) 
    
    ); 

    player.setCurrentTime(localStorage.getItem(currentTime));