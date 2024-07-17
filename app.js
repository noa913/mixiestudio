document.addEventListener('DOMContentLoaded', () => {
    const signalsContainer = document.getElementById('signals');
    const startButton = document.getElementById('start-simulation');

    // Exemple de signaux
    const signals = [
        { id: 1, status: 'red' },
        { id: 2, status: 'green' },
        { id: 3, status: 'yellow' },
    ];

    // Fonction pour générer les signaux
    function renderSignals() {
        signalsContainer.innerHTML = '';
        signals.forEach(signal => {
            const signalElement = document.createElement('div');
            signalElement.className = 'signal';
            signalElement.style.backgroundColor = signal.status;
            signalsContainer.appendChild(signalElement);
        });
    }

    // Fonction pour démarrer la simulation
    function startSimulation() {
        setInterval(() => {
            signals.forEach(signal => {
                // Changer l'état des signaux aléatoirement
                signal.status = getRandomStatus();
            });
            renderSignals();
        }, 1000);
    }

    // Fonction pour obtenir un état aléatoire
    function getRandomStatus() {
        const statuses = ['red', 'green', 'yellow'];
        return statuses[Math.floor(Math.random() * statuses.length)];
    }

    startButton.addEventListener('click', startSimulation);
    renderSignals();
});
