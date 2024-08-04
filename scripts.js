document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            const ipAddress = data.ip;
            document.getElementById('ip-address').textContent = ipAddress;
            displayFunnyMessage(ipAddress);
        })
        .catch(error => {
            console.error('Erro ao obter o IP:', error);
            document.getElementById('ip-address').textContent = 'Não foi possível obter o IP';
        });
});

function displayFunnyMessage(ip) {
    const messages = [
        "Você sabia que seu IP é mais famoso que você?",
        "Seu IP está mais exposto que seus segredos!",
        "Seu IP é tão único quanto suas impressões digitais!",
        "Cuidado! Seu IP pode estar sendo observado por aliens!",
        "Seu IP é a chave para o universo... ou não."
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    document.getElementById('funny-message').textContent = messages[randomIndex];
}
