# Skannbart innhold

Brukere leser sjelden en hel side. De skanner etter det de leter etter, og bestemmer raskt om innholdet er relevant. Godt strukturert innhold hjelper brukeren å finne det de trenger.

## Inverted pyramid — viktigst først

Start alltid med den viktigste informasjonen. Detaljer og bakgrunn kommer etter.

**Før:**
> Bakgrunnen for denne endringen er at vi har fått tilbakemeldinger fra brukere som opplever at prosessen er tidkrevende, og vi har derfor besluttet å forenkle søknadsskjemaet slik at det nå krever færre felter.

**Etter:**
> Søknadsskjemaet er forenklet med færre felter. Endringen er basert på tilbakemeldinger fra brukere.

## Overskriftshierarki

Bruk `DsHeading` med riktig nivå for å skape en klar dokumentstruktur. Overskriftsnivåer skal følge hierarkiet uten å hoppe over nivåer.

```dart
DsHeading(text: 'Søknad om tillatelse', level: DsHeadingLevel.xl)
// ...
DsHeading(text: 'Personopplysninger', level: DsHeadingLevel.lg)
// ...
DsHeading(text: 'Kontaktinformasjon', level: DsHeadingLevel.md)
```

### Regler for overskriftsnivåer
- Én `xl`-overskrift per side (sidetittel).
- `lg`-overskrifter for hovedseksjoner.
- `md`-overskrifter for underseksjoner.
- Ikke hopp over nivåer (f.eks. fra `xl` direkte til `sm`).

### Overskrifter som skannepunkter
Overskrifter er det første brukeren skanner. Gjør dem:
- **Beskrivende** — «Kontaktinformasjon» er bedre enn «Del 2».
- **Korte** — Maks 5–7 ord.
- **Unike** — Unngå identiske overskrifter på samme side.

## Lister og punkter

Bruk `DsList` for å bryte opp løpende tekst i skannbare punkter:

**Før:**
> Du trenger legitimasjon, fullmakt fra arbeidsgiver, kopi av arbeidskontrakt og dokumentasjon på utdanning.

**Etter:**
> Du trenger følgende dokumenter:
> - Legitimasjon
> - Fullmakt fra arbeidsgiver
> - Kopi av arbeidskontrakt
> - Dokumentasjon på utdanning

## Progressive disclosure

Ikke vis all informasjon på en gang. Bruk `DsDetails` for å skjule utdypende innhold som bare noen brukere trenger:

```dart
DsDetails(
  summary: 'Hva skjer etter at du har sendt inn?',
  child: DsParagraph(
    text: 'Søknaden behandles innen 10 virkedager. '
         'Du mottar svar på e-post.',
  ),
)
```

### Når bør du bruke progressive disclosure?
- Tekniske detaljer som de fleste ikke trenger.
- Utdypende forklaringer av faguttrykk.
- «Ofte stilte spørsmål»-seksjoner.

### Når bør du *ikke* bruke det?
- For kritisk informasjon som alle trenger (f.eks. pris, frist).
- For å skjule obligatoriske skjemafelt.
- For navigasjon — bruk `DsTabs` eller separate sider i stedet.

## Visuelt hierarki

Kombiner typografikomponenter for å skape tydelig visuelt hierarki:

| Komponent | Bruk |
| --- | --- |
| `DsHeading` | Seksjonsoverskrifter — skaper struktur |
| `DsParagraph` | Brødtekst — løpende forklaringer |
| `DsLabel` | Etiketter — korte beskrivende tekster |
| `DsList` | Punktlister — bryter opp tekst |
| `DsDetails` | Skjulbart innhold — progressive disclosure |
| `DsAlert` | Fremhevet informasjon — viktige meldinger |

## Sjekkliste

- [ ] Starter innholdet med det viktigste?
- [ ] Følger overskriftene et logisk hierarki?
- [ ] Er lange tekstblokker brutt opp med overskrifter, lister eller `DsDetails`?
- [ ] Kan brukeren skanne siden og forstå hovedpunktene uten å lese alt?
- [ ] Er kritisk informasjon synlig uten klikk?
