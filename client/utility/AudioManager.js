
function createAudioManager() {
    // Music setup
    const musicPlayer = document.createElement('audio');
    musicPlayer.loop = true;
    const musicSource = document.createElement('source');
    musicSource.src = './assets/audio/2019-11-30_-_No_More_Good_-_David_Fesliyan.mp3';
    musicSource.type = 'audio/mp3';
    musicPlayer.appendChild(musicSource);
    document.body.appendChild(musicPlayer);

    // SFX setup
    const sfxPlayer = document.createElement('audio');
    const sfxSource = document.createElement('source');
    sfxSource.src = './assets/audio/analog-appliance-button-15-186961.mp3';
    sfxSource.type = 'audio/mp3';
    sfxPlayer.appendChild(sfxSource);
    document.body.appendChild(sfxPlayer);

    // Functions
    function playMusic() { musicPlayer.play(); }
    function pauseMusic() { musicPlayer.pause(); }
    function togglePlayPause() {
        if (musicPlayer.paused) {
            playMusic();
            return 'Pause Music';
        } else {
            pauseMusic();
            return 'Play Music';
        }
    }
    function setVolume(volume) { musicPlayer.volume = volume; }
    function playSFX() {
        sfxPlayer.currentTime = 0;
        sfxPlayer.play();
    }
    function setSFXVolume(volume) { sfxPlayer.volume = volume; }

    return {
        togglePlayPause,
        setVolume,
        setSFXVolume,
        playSFX,
        musicPlayer,
        sfxPlayer
    };
}

const audioManager = createAudioManager();
export { audioManager };
