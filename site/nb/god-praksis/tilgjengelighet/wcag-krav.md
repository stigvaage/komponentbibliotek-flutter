# WCAG-krav

Alle offentlige digitale tjenester i Norge skal oppfylle [WCAG 2.1 på nivå AA](https://www.w3.org/TR/WCAG21/). Denne sjekklisten dekker de viktigste kravene med fokus på Flutter-utvikling.

## Oppfattbar

### 1.1 Tekstalternativer
- Alle bilder og ikoner som formidler informasjon har tekstalternativ via `Semantics(label: ...)`.
- Dekorative elementer er skjult fra skjermlesere med `Semantics(excludeSemantics: true)` eller `ExcludeSemantics`.

### 1.3 Tilpasbart
- Innholdet har en meningsfull rekkefølge som fungerer uavhengig av visuell presentasjon.
- Bruk `DsHeading` med riktig nivå (`DsHeadingLevel`) for å skape dokumentstruktur.
- Skjemafelt er koblet til etiketter via `DsField`, ikke bare visuelt plassert nær hverandre.

### 1.4 Skilbart
- **Kontrast (minimum):** Normal tekst har minimum 4.5:1 kontrast, stor tekst har minimum 3:1. Designsystemets farger oppfyller dette.
- **Endre tekststørrelse:** Innholdet er lesbart og funksjonelt ved 200 % forstørring.
- **Tekst i bilder:** Unngå tekst i bilder — bruk `DsHeading`, `DsParagraph` osv.

## Betjenbar

### 2.1 Tastatur
- Alle interaktive elementer kan betjenes med tastatur.
- Det finnes ingen tastaturfeller (brukeren kan alltid navigere videre med Tab).
- `DsSkipLink` er implementert for å hoppe over repetitivt innhold.

### 2.4 Navigerbar
- Sider har beskrivende titler.
- Fokusrekkefølgen er logisk og forutsigbar.
- Lenker har beskrivende tekst (unngå «klikk her» og «les mer»).
- `DsBreadcrumbs` brukes for hierarkisk navigasjon.

### 2.5 Inndatametoder
- Berøringsmål er minst 44x44 piksler. Designsystemets komponenter oppfyller dette.
- Funksjonalitet som krever komplekse gester (f.eks. sveip) har enkle alternativer.

## Forståelig

### 3.1 Lesbar
- Språk er angitt på sidenivå (Flutter: `Localizations`).
- Tekster er skrevet i klart, tydelig norsk (se [Skrive for alle](/god-praksis/innholdsarbeid/skrive-for-alle)).

### 3.2 Forutsigbar
- Navigasjon er konsistent på tvers av sider.
- Endringer i kontekst (f.eks. sidenavigasjon) skjer kun ved brukerhandling, ikke automatisk.

### 3.3 Inndatahjelp
- Skjemafelt har tydelige etiketter og beskrivelser via `DsField`.
- Feilmeldinger identifiserer feltet og beskriver feilen på norsk.
- `DsErrorSummary` gir oversikt over alle feil i et skjema.
- Forslag til riktig input gis der det er mulig (f.eks. «Bruk formatet dd.mm.åååå»).

## Robust

### 4.1 Kompatibel
- Semantikk er korrekt implementert (riktig bruk av `Semantics`-widgeten).
- Egendefinerte komponenter har riktig rolle, tilstand og navn.
- Dynamiske endringer (feilmeldinger, ladetilstander) annonseres via `SemanticsService.announce`.

## Sjekkliste for Flutter-utviklere

| Krav | Handling | Komponent |
| --- | --- | --- |
| Tekstalternativ | Bruk `Semantics(label: ...)` for ikoner | Alle |
| Overskriftsstruktur | Bruk `DsHeading` med riktig nivå | `DsHeading` |
| Skjemaetikett | Bruk `DsField` med `label` | `DsField` |
| Feilmelding | Send `error` til `DsField` og inputkomponent | `DsField`, `DsTextfield` |
| Feiloppsummering | Bruk `DsErrorSummary` for skjemaer | `DsErrorSummary` |
| Fokusindikator | Brukes automatisk av Designsystem-komponenter | Alle interaktive |
| Kontrast | Bruk farger fra `DsThemeData` | Alle |
| Berøringsmål | Minimum 44x44 px (automatisk i Designsystemet) | Alle interaktive |
| Hopp-til-innhold | Legg til `DsSkipLink` på toppen | `DsSkipLink` |
| Tastaturnavigasjon | Test Tab-navigering gjennom hele flyten | Alle interaktive |
