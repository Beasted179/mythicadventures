import { showMainMenu } from './mainMenu.js';
import { audioManager } from '../utility/AudioManager.js';
import { debugLog } from '../utility/debug.js';
export function showSettings() {
    document.getElementById('pageContainer').innerHTML = `
        <div class="settingsMenu">
            <h1>Settings</h1>
            <nav>
                <button id="btnToggleMusic">${audioManager.musicPlayer.paused ? 'Play Music' : 'Pause Music'}</button>
                <label for="musicVolumeSlider">Music Volume:</label>
                <input type="range" id="musicVolumeSlider" min="0" max="1" step="0.01" value="${audioManager.musicPlayer.volume}">

                <label for="sfxVolumeSlider">SFX Volume:</label>
                <input type="range" id="sfxVolumeSlider" min="0" max="1" step="0.01" value="${audioManager.sfxPlayer.volume}">

                <button id="btnBack">Back</button>
            </nav>
        </div>
    `;

    document.getElementById('btnToggleMusic').addEventListener('click', function() {
        this.textContent = audioManager.togglePlayPause();
        audioManager.playSFX(); // SFX on toggle
    });

    document.getElementById('musicVolumeSlider').addEventListener('input', function() {
        audioManager.setVolume(this.value);
    });

    document.getElementById('sfxVolumeSlider').addEventListener('input', function() {
        audioManager.setSFXVolume(this.value);
    });

    document.getElementById('btnBack').addEventListener('click', () => {
        audioManager.playSFX();
        showMainMenu(); // Assumes showMainMenu is defined elsewhere
    });
}