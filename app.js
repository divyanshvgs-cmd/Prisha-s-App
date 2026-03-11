// Synthesis Setup
const synth = window.speechSynthesis;
let voices = [];

function populateVoiceList() {
    voices = synth.getVoices();
}

populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Speak Function
function speak(text) {
    if (synth.speaking) {
        synth.cancel(); // Stop current speech
    }

    // Create new utterance
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
}

// Nav Logic (Screen visibility toggles without animation, exactly like AI2)
const screen1 = document.getElementById('screen1');
const screen2 = document.getElementById('screen2');

document.getElementById('btn-next').addEventListener('click', () => {
    // Navigate from S1 to S2
    screen1.style.display = 'none';
    screen2.style.display = 'block';

    synth.cancel();
});

document.getElementById('btn-back').addEventListener('click', () => {
    // Navigate from S2 to S1
    screen2.style.display = 'none';
    screen1.style.display = 'block';

    synth.cancel();
});

// Button Audio Events
document.getElementById('btn-about').addEventListener('click', () => {
    speak('UN Sustainable Development Goal 14 "Life Below Water" aims to conserve and sustainably use the world’s oceans, seas, and marine resources. It focuses on reducing marine pollution, ending overfishing, addressing ocean acidification, and protecting marine ecosystems to ensure they continue to support biodiversity and human livelihoods.');
});

document.getElementById('btn-targets').addEventListener('click', () => {
    speak('Key Targets for 2030 SDG 14 aims to address critical threats through 10 targets, including:  Pollution Control: Reducing marine pollution, particularly land-based plastic and nutrient waste. Ecosystem Protection: Restoring coastal ecosystems and reducing ocean acidification. Sustainable Fishing & Conservation: Ending overfishing and destructive practices, while increasing protected marine areas. Economic Support: Prohibiting harmful fisheries subsidies and supporting small-scale fishers.');
});

document.getElementById('btn-causes').addEventListener('click', () => {
    speak('UN Sustainable Development Goal 14 (Life Below Water) aims to address the critical decline of marine ecosystems caused primarily by human activities. The major drivers of this deterioration include pollution, climate change, overfishing, and habitat destruction.');
});

document.getElementById('btn-help').addEventListener('click', () => {
    speak('To support UN Sustainable Development Goal 14 (Life Below Water), you can reduce marine pollution by minimizing single-use plastics and choosing sustainable, ocean-friendly products. Additionally, advocate for conservation, support organizations protecting marine ecosystems, and make informed, sustainable seafood choices to combat overfishing.');
});
