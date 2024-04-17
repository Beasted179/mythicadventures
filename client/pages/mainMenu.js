import { debugLog } from '../utility/debug.js'; // Assuming you have a separate debugging utility
import { audioManager } from '../utility/AudioManager.js';
import { startGame } from '../phaser-game/game.js';
export function showMainMenu() {
    const app = document.getElementById('app');
  
    let animationContainer = document.getElementById('animationContainer');
    if (!animationContainer) {
      animationContainer = document.createElement('div');
      animationContainer.id = 'animationContainer';
      animationContainer.style.cssText = 'position: fixed; width: 100%; height: 100%; top: 0; left: 0; z-index: -1;';
      app.appendChild(animationContainer); // Make sure it's being appended correctly
      debugLog('showMainMenu: Animation container created.');
    }
    debugLog('showMainMenu: MAKING PAGECONTAINER');
    document.getElementById('pageContainer').innerHTML = `
      <div class="main-menu">
        <h1 class="game-title">MYTHIC ADVENTURES</h1>
        <nav>
          <button id="btnPlayGame">Play Game</button>
          <button id="btnCreateCharacter">Create Character</button>
          <button id="btnSettings">Settings</button>
        </nav>
      </div>
    `;
    debugLog('showMainMenu: Made');


    const playGameBtn = document.getElementById('btnPlayGame');
    playGameBtn.addEventListener('click', () => {
        console.log('Play Game button clicked');
        startGame();
        document.getElementById('pageContainer').style.display = 'none';
        document.getElementById('pageContainer').remove();
    });

    
    
    document.getElementById('btnCreateCharacter').addEventListener('click', () => {
        debugLog('showMainMenu: create character button clicked');
        audioManager.playSFX();
        import('./createCharacter.js')
            .then(module => {
                debugLog('showMainMenu: module loaded', module);
                module.showCreateCharacter();
            })
            .catch(error => {
                debugLog('showMainMenu: button not clicked', error);
            });
    });

    
    
    document.getElementById('btnSettings').addEventListener('click', () => {
        debugLog('showMainMenu: create character button clicked');
        audioManager.playSFX();
        import('./settings.js')
            .then(module => {
                debugLog('showMainMenu: module loaded', module);
                module.showSettings();
            })
            .catch(error => {
                debugLog('showMainMenu: button not clicked', error);
            });
    });
    debugLog('showMainMenu: Main menu HTML injected and listeners attached.');
  }
  
