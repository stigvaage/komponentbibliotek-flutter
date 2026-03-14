# Dato og klokkeslett

Dato- og klokkeslettinndata krever tydelig formatering og validering. I norske tjenester brukes formatet **dd.mm.åååå** for dato og **tt:mm** for klokkeslett. Denne siden viser mønstre for å håndtere dette med komponentbiblioteket.

## Datofelt

Bruk `DsTextfield` med en tydelig beskrivelse av forventet format:

```dart
DsField(
  label: 'Fødselsdato',
  description: 'Skriv inn dato i formatet dd.mm.åååå',
  error: _datoFeil,
  child: DsTextfield(
    controller: _datoController,
    error: _datoFeil,
    keyboardType: TextInputType.datetime,
  ),
)
```

## Klokkeslettfelt

```dart
DsField(
  label: 'Tidspunkt',
  description: 'Skriv inn klokkeslett i formatet tt:mm',
  error: _tidFeil,
  child: DsTextfield(
    controller: _tidController,
    error: _tidFeil,
    keyboardType: TextInputType.datetime,
  ),
)
```

## Dato og klokkeslett sammen

Når du trenger både dato og klokkeslett, bruk to separate felter gruppert med `DsFieldset`:

```dart
DsFieldset(
  legend: 'Ønsket tidspunkt for møte',
  children: [
    DsField(
      label: 'Dato',
      description: 'dd.mm.åååå',
      error: _datoFeil,
      child: DsTextfield(
        controller: _datoController,
        error: _datoFeil,
        keyboardType: TextInputType.datetime,
      ),
    ),
    SizedBox(height: 16),
    DsField(
      label: 'Klokkeslett',
      description: 'tt:mm',
      error: _tidFeil,
      child: DsTextfield(
        controller: _tidController,
        error: _tidFeil,
        keyboardType: TextInputType.datetime,
      ),
    ),
  ],
)
```

## Validering av dato

Valider formatet og at datoen er gyldig:

```dart
String? validerDato(String verdi) {
  if (verdi.isEmpty) return 'Dato er påkrevd';

  final deler = verdi.split('.');
  if (deler.length != 3) return 'Bruk formatet dd.mm.åååå';

  final dag = int.tryParse(deler[0]);
  final maned = int.tryParse(deler[1]);
  final ar = int.tryParse(deler[2]);

  if (dag == null || maned == null || ar == null) {
    return 'Ugyldig dato';
  }

  try {
    final dato = DateTime(ar, maned, dag);
    if (dato.day != dag || dato.month != maned || dato.year != ar) {
      return 'Ugyldig dato';
    }
  } catch (_) {
    return 'Ugyldig dato';
  }

  return null;
}
```

## Validering av klokkeslett

```dart
String? validerKlokkeslett(String verdi) {
  if (verdi.isEmpty) return 'Klokkeslett er påkrevd';

  final deler = verdi.split(':');
  if (deler.length != 2) return 'Bruk formatet tt:mm';

  final time = int.tryParse(deler[0]);
  final minutt = int.tryParse(deler[1]);

  if (time == null || minutt == null) return 'Ugyldig klokkeslett';
  if (time < 0 || time > 23) return 'Timer må være mellom 00 og 23';
  if (minutt < 0 || minutt > 59) return 'Minutter må være mellom 00 og 59';

  return null;
}
```

## Beste praksis

- Bruk alltid `description` for å vise forventet format. Ikke stol på `placeholder` alene — den forsvinner når brukeren begynner å skrive.
- Bruk `TextInputType.datetime` for å gi riktig tastatur på mobil.
- Valider ved innsending, ikke ved hvert tastetrykk.
- Skriv feilmeldinger som hjelper brukeren å rette opp — «Bruk formatet dd.mm.åååå» er bedre enn «Ugyldig dato».
- Vurder om du trenger separate felt for dag, måned og år. For de fleste norske tjenester er ett felt med format dd.mm.åååå tilstrekkelig og mer effektivt for brukeren.
