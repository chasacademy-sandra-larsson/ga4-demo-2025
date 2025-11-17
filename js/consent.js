 // Om användaren klickar JA → aktivera Analytics
    document.getElementById("accept-cookies").addEventListener("click", () => {
      gtag('consent', 'update', {
        'analytics_storage': 'granted'
      });
      document.getElementById("cookie-banner").style.display = "none";
    });

    // Om användaren klickar NEJ
    document.getElementById("deny-cookies").addEventListener("click", () => {
      gtag('consent', 'update', {
        'analytics_storage': 'denied'
      });
      document.getElementById("cookie-banner").style.display = "none";
    });

    // Exempel-event: knapptryckning
    document.getElementById("demo-btn").addEventListener("click", () => {
      gtag('event', 'button_click', {
        value: 1
      });
      alert("Event skickat! (om användaren godkänt)");
    });