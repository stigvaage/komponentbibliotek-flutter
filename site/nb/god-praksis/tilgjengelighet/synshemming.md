# Synshemming

Rundt 10 % av befolkningen har en form for synshemming. For å bygge tjenester som fungerer for alle, må du forstå de ulike typene og teste med relevante hjelpemidler.

## Typer synshemming

### Svaksynthet
Brukere med redusert synsskarphet trenger større tekst, høy kontrast og tydelig visuell hierarki. Designsystemets størrelser (`sm`, `md`, `lg`) og kontrastkrav dekker dette.

### Fargeblindhet
Ca. 8 % av menn og 0,5 % av kvinner har nedsatt fargesyn. Aldri bruk farge alene til å formidle informasjon.

**Eksempel — feil tilnærming:**
Felter med feil markeres kun med rød ramme.

**Eksempel — riktig tilnærming:**
Felter med feil markeres med rød ramme, feilikon og tekstmelding. `DsField` og `DsTextfield` gjør dette automatisk når du sender inn `error`-parameteren.

### Fullstendig blindhet
Brukere som er blinde bruker skjermlesere (TalkBack på Android, VoiceOver på iOS/macOS). Alle komponenter i Designsystemet bruker `Semantics`-widgeten for å gi riktig informasjon til skjermlesere.

## Testing med TalkBack (Android)

1. Åpne **Innstillinger → Tilgjengelighet → TalkBack** og aktiver.
2. Naviger gjennom appen ved å sveipe med én finger.
3. Sjekk at:
   - Alle interaktive elementer annonseres med rolle (knapp, tekstfelt, avkrysningsboks osv.).
   - Etiketter og beskrivelser leses opp.
   - Feilmeldinger annonseres når de oppstår.
   - Rekkefølgen er logisk (topp til bunn, venstre til høyre).

## Testing med VoiceOver (iOS/macOS)

### iOS
1. Åpne **Innstillinger → Tilgjengelighet → VoiceOver** og aktiver.
2. Sveip høyre for neste element, venstre for forrige.
3. Dobbelttrykk for å aktivere.

### macOS
1. Trykk **Cmd + F5** for å aktivere VoiceOver.
2. Bruk **VO + piltaster** (VO = Control + Option) for å navigere.
3. Bruk **VO + Space** for å aktivere.

### Hva du bør sjekke
- Er alle elementer tilgjengelige og annonsert med riktig rolle?
- Leses overskrifter opp med riktig nivå?
- Fungerer formularer — kan du fylle ut felt, velge alternativer og sende inn?
- Annonseres dynamiske endringer (feilmeldinger, ladetilstander)?

## Relevante Designsystem-komponenter

| Komponent | Tilgjengelighetsfunksjon |
| --- | --- |
| `DsButton` | `button`-semantikk, `enabled`-flagg, synlig fokus |
| `DsTextfield` | Kobler etikett via semantikk, annonserer feil |
| `DsAlert` | Kommuniserer alvorlighetsgrad til skjermleser |
| `DsCheckbox` | `checkbox`-semantikk med `checked`-tilstand |
| `DsRadio` | `radio`-semantikk med `selected`-tilstand |
| `DsTabs` | `tablist`/`tab`/`tabpanel`-semantikk |
| `DsSkipLink` | Hopp-til-innhold for tastaturbrukere |

## Beste praksis

- Test med skjermleser minst én gang per sprint.
- Bruk `Semantics`-widgeten for egendefinerte komponenter som ikke er dekket av biblioteket.
- Aldri bruk farge alene — kombiner alltid med tekst, ikon eller mønster.
- Sørg for at fokusrekkefølgen følger den visuelle rekkefølgen.
- Test med forstørret tekst (200 %) — innholdet skal fortsatt være lesbart og brukbart.
