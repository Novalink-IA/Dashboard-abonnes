// Exemple de données fictives
const data = {
  labels: ["LinkedIn", "TikTok", "Instagram"],
  datasets: [{
    label: "Nombre d'abonnés",
    data: [500, 1000, 750], // Données fictives
    backgroundColor: ["#0077B5", "#69C9D0", "#E1306C"]
  }]
};

// Configuration du graphique
const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    }
  }
};

// Afficher le graphique
const abonnésChart = new Chart(
  document.getElementById('abonnésChart'),
  config
);
