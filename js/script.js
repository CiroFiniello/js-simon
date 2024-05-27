document.addEventListener("DOMContentLoaded", () => {
    const numeriElement = document.getElementById('numeri');
    const messaggioElement = document.getElementById('messaggio');

    // Genera 5 numeri casuali
    const numeriCasuali = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100) + 1);
    numeriElement.textContent = numeriCasuali.join(' ');

    // Timer di 30 secondi
    setTimeout(() => {
        numeriElement.textContent = '';
        const numeriInseriti = [];

        for (let i = 0; i < 5; i++) {
            const numero = prompt(`Inserisci il numero ${i + 1}:`);
            numeriInseriti.push(parseInt(numero, 10));
        }

        // Verifica i numeri inseriti
        const numeriCorretti = numeriInseriti.filter(num => numeriCasuali.includes(num));
        messaggioElement.textContent = `Hai indovinato ${numeriCorretti.length} numeri: ${numeriCorretti.join(', ')}`;

    }, 30000);
});