# ga4-demo-2025

## Om gtag GA4 och juridik

### gtag.js och Google Analytics 4
`gtag.js` är Googles universella taggning-bibliotek som används för att implementera Google Analytics 4 (GA4). Det ger en enhetlig metod för att skicka data till Google Analytics och andra Google-produkter. GA4 är den senaste versionen av Google Analytics och använder en händelsebaserad modell där all interaktion spåras som events.

### Juridiska aspekter
Enligt GDPR och svensk dataskyddslagstiftning måste webbplatser som använder cookies och spårningsobjekt (tracking) informera användare och erhålla samtycke innan data samlas in. Detta projekt implementerar **Consent Mode v2** som är Googles lösning för hantering av användarens samtycke. 

Viktiga juridiska krav:
- **Samtycke före tracking**: Ingen data får samlas in innan användaren gett sitt samtycke
- **Tydlig information**: Användare måste informeras om vilka cookies som används och varför
- **Möjlighet att neka**: Användare måste kunna vägra cookies och tracking
- **Default-nekande**: Tracking ska vara avstängd som standard tills samtycke ges

Detta projekt sätter alla consent-parametrar till `'denied'` som standard och uppdaterar dem endast när användaren aktivt godkänner cookies via cookie-bannern.
