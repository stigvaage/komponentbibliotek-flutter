# Skrive for alle

Tekster i brukergrensesnittet skal være forståelige for alle brukere, uavhengig av bakgrunn, utdanning eller funksjonsnivå. Denne siden gir retningslinjer for inkluderende skriving i norske digitale tjenester.

## Klarspråk

### Skriv kort og direkte
- Bruk korte setninger (maks 20–25 ord per setning).
- Start med det viktigste først — brukeren skanner, de leser sjelden alt.
- Unngå bisetninger og innskutte ledd.

**Før:** «For å kunne sende inn søknaden din, er det nødvendig at du på forhånd har fylt ut samtlige av de obligatoriske feltene som er markert i skjemaet.»

**Etter:** «Fyll ut alle obligatoriske felt før du sender inn.»

### Unngå fagspråk og forkortelser
- Skriv ut forkortelser første gang de brukes.
- Erstatt faguttrykk med dagligdagse ord der det er mulig.
- Hvis et faguttrykk er nødvendig, forklar det i en hjelpetekst.

| Unngå | Bruk i stedet |
| --- | --- |
| Autentisering | Innlogging |
| Validering | Sjekk / kontroll |
| Persistere | Lagre |
| Parameter | Innstilling / verdi |
| Appender | Legger til |

### Bruk aktive setninger
Aktive setninger er kortere og lettere å forstå.

**Passiv:** «Søknaden blir behandlet av saksbehandler.»
**Aktiv:** «En saksbehandler behandler søknaden din.»

## Inkluderende språk

### Kjønnsnøytrale formuleringer
Bruk kjønnsnøytrale ord når det er mulig:

| Unngå | Bruk i stedet |
| --- | --- |
| Brukeren ... han | Brukeren ... de |
| Formann | Leder |
| Vaktmester | Driftspersonell |

### Unngå diskriminerende språk
- Unngå metaforer som kan oppleves som ekskluderende.
- Bruk «person med nedsatt funksjonsevne» i stedet for «funksjonshemmet».
- Unngå å referere til alder, kjønn eller bakgrunn når det ikke er relevant.

## Tekster i Designsystem-komponenter

### Knapper
- Bruk handlingsord: «Send inn», «Lagre», «Neste», «Avbryt».
- Unngå generiske tekster som «OK», «Klikk her» eller «Trykk her».
- Vær spesifikk: «Slett utkast» er bedre enn «Slett».

### Etiketter (DsLabel / DsField)
- Bruk korte, beskrivende etiketter: «E-postadresse», «Fødselsdato», «Postnummer».
- Ikke inkluder instruksjoner i etiketten — bruk `description` på `DsField` for det.

### Feilmeldinger
- Identifiser feltet: «E-postadresse er påkrevd».
- Forklar feilen: «E-postadressen må inneholde @».
- Gi forslag til løsning: «Bruk formatet dd.mm.åååå».

### Hjelpetekster (description på DsField)
- Forklar hva som forventes: «Vi sender bekreftelse til denne adressen.»
- Oppgi format der det er relevant: «Skriv inn dato i formatet dd.mm.åååå».

### Varsler (DsAlert)
- Start med det viktigste: «Tjenesten er utilgjengelig» — ikke «Vi beklager å måtte informere om at ...».
- Forklar hva brukeren kan gjøre: «Prøv igjen om noen minutter.»

## Sjekkliste

- [ ] Er setningene korte og direkte?
- [ ] Har du unngått fagspråk og forkortelser?
- [ ] Er teksten forståelig for en bruker uten fagkunnskap?
- [ ] Bruker du aktive setninger?
- [ ] Er knappetekster handlingsrettede og spesifikke?
- [ ] Er feilmeldinger tydelige og løsningsorienterte?
