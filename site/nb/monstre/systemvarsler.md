# Systemvarsler

Systemvarsler informerer brukeren om hendelser som påvirker hele tjenesten — planlagt vedlikehold, driftsproblemer eller kritiske feil. Bruk `DsAlert` med riktig alvorlighetsgrad for å kommunisere tydelig.

## Alvorlighetsgrader

Velg riktig alvorlighetsgrad basert på situasjonen:

| Alvorlighetsgrad | Bruk | Eksempel |
| --- | --- | --- |
| `info` | Nøytral informasjon | Planlagt vedlikehold i kveld kl. 22:00 |
| `success` | Bekreftelse på vellykket operasjon | Skjemaet er sendt inn |
| `warning` | Noe krever oppmerksomhet | Tjenesten kan oppleve forsinkelser |
| `danger` | Kritisk feil | Tjenesten er utilgjengelig |

## Informasjonsvarsel

For planlagt vedlikehold eller generell informasjon:

```dart
DsAlert(
  severity: DsSeverity.info,
  title: Text('Planlagt vedlikehold'),
  child: Text(
    'Tjenesten vil være utilgjengelig lørdag 15. mars '
    'mellom kl. 22:00 og 02:00 på grunn av vedlikehold.',
  ),
)
```

## Advarsel

For situasjoner som kan påvirke brukeren, men som ikke er kritiske:

```dart
DsAlert(
  severity: DsSeverity.warning,
  title: Text('Redusert ytelse'),
  child: Text(
    'Vi opplever høy trafikk. Noen operasjoner kan ta '
    'lengre tid enn vanlig.',
  ),
)
```

## Kritisk feil

For alvorlige driftsproblemer:

```dart
DsAlert(
  severity: DsSeverity.danger,
  title: Text('Tjenesten er utilgjengelig'),
  child: Text(
    'Vi jobber med å løse problemet. Prøv igjen om noen minutter.',
  ),
)
```

## Lukkbar varsel

Varsler som brukeren kan avvise etter å ha lest dem:

```dart
DsAlert(
  severity: DsSeverity.info,
  title: Text('Ny funksjonalitet'),
  closable: true,
  onClose: () => setState(() => _visVarsel = false),
  child: Text('Du kan nå laste ned rapporten som PDF.'),
)
```

## Plassering

- **Øverst på siden** — Bruk for systemvarsler som gjelder hele tjenesten. Plasser varselet over hovedinnholdet, men under toppmeny.
- **I kontekst** — Bruk for varsler som gjelder en bestemt seksjon. Plasser varselet nær det relevante innholdet.
- **Unngå** å stable mange varsler oppå hverandre. Prioriter det viktigste varselet.

## Beste praksis

- Skriv kort og tydelig — brukeren skal raskt forstå hva som skjer og hva de eventuelt må gjøre.
- Inkluder alltid en tittel som oppsummerer varselet.
- For kritiske feil: oppgi hva brukeren kan gjøre (f.eks. «Prøv igjen om noen minutter»).
- For planlagt vedlikehold: oppgi dato, klokkeslett og forventet varighet.
- Bruk `closable: true` kun for informasjonsvarsler som brukeren trygt kan avvise.
- Ikke bruk `closable: true` for kritiske feil — brukeren bør ikke kunne skjule dem.
