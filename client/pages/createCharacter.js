
import { showMainMenu } from './mainMenu.js';
import { audioManager } from '../utility/AudioManager.js';
export function showCreateCharacter() {
    document.getElementById('pageContainer').innerHTML = `
    <div class="characterInputs">
    <h1>Create Your Character</h1>
        <label for="characterName">Name:</label>
        <input type="text" id="characterName" name="characterName">

        <label for="characterClass">Class:</label>
        <select id="characterClass" name="characterClass">
            <option value="warrior">Warrior</option>
            <option value="mage">Mage</option>
            <option value="ranger">Ranger</option>
        </select>

        <label for="characterRace">Race:</label>
        <select id="characterRace" name="characterRace">
            <option value="human">Human</option>
            <option value="elf">Elf</option>
            <option value="orc">Orc</option>
        </select>
    <button id="btnContinue">Continue</button>
    <button id="btnBack">Back</button>
    </div>
    
`;
       document.getElementById('btnBack').addEventListener('click', () => {
        audioManager.playSFX();
        showMainMenu();
    });
}