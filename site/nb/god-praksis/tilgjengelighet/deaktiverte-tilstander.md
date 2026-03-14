# Deaktiverte tilstander

Deaktiverte elementer (knapper, felt, lenker) er en vanlig designløsning, men de skaper ofte flere problemer enn de løser. Denne siden forklarer hvorfor, og viser bedre alternativer.

## Problemet med deaktiverte elementer

### Dårlig synlighet
Deaktiverte elementer har lav kontrast (dette er bevisst — de skal se utilgjengelige ut). Men for brukere med nedsatt syn kan de være tilnærmet usynlige, og brukeren forstår ikke at knappen eksisterer.

### Ingen forklaring
Et deaktivert element forteller brukeren *at* noe ikke kan gjøres, men ikke *hvorfor*. Brukeren blir frustrert fordi de ikke vet hva de må gjøre for å aktivere elementet.

### Skjermlesere
Mange skjermlesere hopper over deaktiverte elementer, slik at brukeren aldri oppdager at funksjonen finnes.

### Berøringsflater
På mobil har deaktiverte elementer ingen synlig respons ved berøring. Brukeren kan tro at de «bommet» og prøve gjentatte ganger.

## Bedre alternativer

### 1. Skjul elementet helt
Hvis handlingen aldri er tilgjengelig i denne konteksten, fjern elementet fra visningen. Brukeren trenger ikke vite om noe de ikke kan bruke.

### 2. Vis elementet aktivt, og valider ved klikk
La knappen være klikkbar, men vis en feilmelding hvis forutsetningene ikke er oppfylt:

```dart
DsButton(
  variant: DsButtonVariant.primary,
  onPressed: () {
    if (!_skjemaErGyldig()) {
      setState(() => _visFeilmelding = true);
      return;
    }
    _sendInn();
  },
  child: Text('Send inn'),
)
```

Denne tilnærmingen gir brukeren tydelig tilbakemelding om hva som mangler.

### 3. Bruk hjelpetekst i stedet
Forklar forutsetningene i en beskrivelse over eller ved siden av elementet:

```dart
Column(
  children: [
    DsParagraph(
      text: 'Du må fylle ut alle obligatoriske felt før du kan sende inn.',
    ),
    DsButton(
      variant: DsButtonVariant.primary,
      onPressed: _sendInn,
      child: Text('Send inn'),
    ),
  ],
)
```

## Når deaktivering kan forsvares

Det finnes noen få tilfeller der deaktivering er akseptabelt:

- **Under lasting** — Bruk `loading: true` på `DsButton` for å vise at en operasjon pågår. Knappen er da visuelt deaktivert, men har en spinner som forklarer tilstanden.
- **Rettighetsbasert** — Når brukeren mangler tilgang og det er åpenbart fra konteksten (f.eks. «Du har ikke redigeringstilgang»).

Selv i disse tilfellene bør du vurdere om det er bedre å skjule elementet helt eller gi en forklaring.

## Sjekkliste

- [ ] Er det åpenbart for brukeren *hvorfor* elementet er deaktivert?
- [ ] Kan en skjermleser-bruker oppdage elementet og forstå tilstanden?
- [ ] Har du vurdert alternativene (skjule, validere ved klikk, hjelpetekst)?
- [ ] Oppfyller den deaktiverte tilstanden kontrastkravene for tekst mot bakgrunn?
