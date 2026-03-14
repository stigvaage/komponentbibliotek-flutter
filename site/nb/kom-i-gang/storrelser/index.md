# Størrelser

Størrelsessystemet gir tre moduser som styrer dimensjonene til alle komponenter gjennom et konsistent sett med tokens.

## Tre størrelsesmoduser

| Modus | Basestørrelse | Beskrivelse |
|---|---|---|
| `DsSize.sm` | 16px | Kompakt visning |
| `DsSize.md` | 18px | Standard (brukes når ingen størrelse er angitt) |
| `DsSize.lg` | 21px | Stor visning |

## DsSizeTokens

`DsSizeTokens` inneholder 31 nummererte verdier, fra `size0` til `size30`. Hver verdi beregnes med formelen:

```
verdi = base + (trinn * 4px)
```

Eksempler for `DsSize.md` (base 18px):

| Token | Verdi |
|---|---|
| `size0` | 18px |
| `size1` | 22px |
| `size2` | 26px |
| `size5` | 38px |
| `size10` | 58px |

## DsSizeScope

Bruk `DsSizeScope` for å sette størrelsen for et undertreav widgeter:

```dart
DsSizeScope(
  size: DsSize.sm,
  child: Column(
    children: [
      DsButton(
        variant: DsButtonVariant.primary,
        onPressed: () {},
        child: Text('Kompakt knapp'),
      ),
      DsTextfield(
        label: 'Kompakt felt',
      ),
    ],
  ),
)
```

## Prioritering

Når en komponent har både en lokal `size`-parameter og en `DsSizeScope`-ancestor, vinner den lokale parameteren:

```dart
DsSizeScope(
  size: DsSize.sm,
  child: DsButton(
    size: DsSize.lg, // Denne vinner over DsSizeScope
    variant: DsButtonVariant.primary,
    onPressed: () {},
    child: Text('Stor knapp'),
  ),
)
```

## Standardverdi

Hvis verken en lokal `size`-parameter eller `DsSizeScope` er angitt, brukes `DsSize.md` som standard.

## Hente størrelsestokens fra kontekst

```dart
Widget build(BuildContext context) {
  final størrelser = DsTheme.of(context).sizeTokens;

  return Padding(
    padding: EdgeInsets.all(størrelser.size2),
    child: Text('Innhold'),
  );
}
```
