# Tydelig språk

Konsistent bruk av tegnsetting, store/små bokstaver og navnekonvensjoner gjør tjenesten mer forutsigbar og lettere å bruke. Denne siden dekker de viktigste reglene for norske digitale tjenester.

## Store og små bokstaver

### Bare stor forbokstav i starten
I norsk bruker vi bare stor forbokstav i starten av setninger, egennavn og titler. Unngå «Title Case» som er vanlig på engelsk.

| Feil | Riktig |
| --- | --- |
| Send Inn Søknaden | Send inn søknaden |
| Fødselsdato Og Personnummer | Fødselsdato og personnummer |
| Lagre Endringer | Lagre endringer |

**Unntak:** Produktnavn og egennavn: «Altinn», «ID-porten», «Designsystemet».

### Overskrifter
Overskrifter følger samme regel — bare stor forbokstav i starten:

```dart
DsHeading(text: 'Personopplysninger', level: DsHeadingLevel.lg)
// ikke: 'Personopplysninger — Dine Data'
```

### Knapper og lenker
Stor forbokstav i starten, resten med små bokstaver:

```dart
DsButton(child: Text('Send inn'))    // riktig
DsButton(child: Text('SEND INN'))    // feil
DsButton(child: Text('Send Inn'))    // feil
```

## Tegnsetting

### Punktum
- **Bruk punktum** i løpende tekst, hjelpetekster og feilmeldinger som er hele setninger.
- **Ikke bruk punktum** i overskrifter, knappetekster, etiketter eller listepunkter som ikke er hele setninger.

### Kolon
- Bruk kolon når du introduserer en liste eller en forklaring.
- Bruk kolon i etiketter som etterfølges av en verdi: «Fødselsdato: 01.01.1990».

### Utropstegn
- Unngå utropstegn. De gir inntrykk av at du roper til brukeren.
- **Unntak:** Kan brukes i suksessmeldinger der det er naturlig: «Søknaden er sendt!»

## Navnekonvensjoner

### Komponentnavn i kode
I kode bruker vi `DsXxx`-prefikset (PascalCase):

```dart
DsButton, DsTextfield, DsAlert, DsHeading
```

### Komponentnavn i dokumentasjon
I dokumentasjon og brukergrensesnitt bruker vi komponentnavnet uten prefiks når vi omtaler konseptet, og med prefiks når vi refererer til den spesifikke Flutter-klassen:

- «Bruk en knapp for å utføre handlinger.» (konsept)
- «`DsButton` har tre varianter.» (kode)

### Norsk vs. engelsk
- Brukergrensesnittet skal være på norsk (bokmål).
- Kodenavn og tekniske referanser bruker engelsk (Flutter-konvensjon).
- Etiketter, knappetekster, feilmeldinger og hjelpetekster er alltid på norsk.

## Tall og datoer

### Datoer
- Bruk formatet **dd.mm.åååå** (med punktum): 15.03.2026.
- I løpende tekst: «15. mars 2026» (med punktum etter dag).

### Klokkeslett
- Bruk formatet **tt:mm** (med kolon): 14:30.
- I løpende tekst: «kl. 14:30».

### Tall
- Bruk mellomrom som tusenskilletegn: 1 000, 10 000, 1 000 000.
- Bruk komma som desimaltegn: 3,14.
- Telefonnumre: 123 45 678.
- Organisasjonsnumre: 123 456 789.

## Sjekkliste

- [ ] Bare stor forbokstav i starten (ikke Title Case)?
- [ ] Konsistent tegnsetting (punktum i setninger, ikke i etiketter)?
- [ ] Norsk i brukergrensesnittet, engelsk i kode?
- [ ] Datoer i dd.mm.åååå-format?
- [ ] Tall med mellomrom som tusenskilletegn?
