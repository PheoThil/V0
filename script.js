
const map = L.map('map').setView([31.5, -6.0], 6);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap'
}).addTo(map);

Papa.parse("projets.csv", {
  download: true,
  header: true,
  complete: function(results) {
    results.data.forEach(projet => {
      const lat = parseFloat(projet.latitude);
      const lon = parseFloat(projet.longitude);

      if (!isNaN(lat) && !isNaN(lon)) {
        const marker = L.marker([lat, lon]).addTo(map);
        marker.bindPopup(`<strong>${projet.nom}</strong><br>
                          ${projet.region}<br>
                          ${projet.BL} / ${projet.SL}<br>
                          Montant : ${projet.montant} MDH`);
      }
    });
  }
});
