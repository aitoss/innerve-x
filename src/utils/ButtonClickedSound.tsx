export default function playClickSound() {
    const audio = new Audio('/buttonSound.webm');
    audio.play().catch(error => console.log('Audio play failed:', error));
};