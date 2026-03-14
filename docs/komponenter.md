# Komponentreferanse

Fullstendig referanse for alle 40 komponenter i `komponentbibliotek_flutter`. Hver komponent er dokumentert med beskrivelse, viktige egenskaper og kodeeksempel.

> **Felles egenskaper:** Alle synlige komponenter aksepterer valgfri `DsSize? size` (arves fra `DsSizeScope` nar `null`) og `DsColor? color` (arves fra `DsColorScope` nar `null`).

---

## Kjernekomponenter

### DsButton

Knapp med tre varianter og stotte for ikon, lastetilstand og deaktivert tilstand.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `onPressed` | `VoidCallback?` | påkrevd | Handling ved trykk |
| `child` | `Widget` | påkrevd | Knappens innhold (typisk `Text`) |
| `variant` | `DsButtonVariant` | `primary` | Visuell variant: primary, secondary, tertiary |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |
| `disabled` | `bool` | `false` | Deaktiver knappen |
| `loading` | `bool` | `false` | Vis lastespinner |
| `icon` | `Widget?` | `null` | Valgfritt ikon |
| `iconPosition` | `DsIconPosition` | `left` | Ikonplassering: left, right |
| `focusNode` | `FocusNode?` | `null` | Egen fokusnode |

**Eksempel:**

```dart
DsButton(
  variant: DsButtonVariant.primary,
  onPressed: () => send(),
  icon: Icon(Icons.send),
  child: Text('Send inn'),
)
```

---

### DsTextfield

Tekstfelt for enlinjes inndata.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `controller` | `TextEditingController?` | `null` | Tekstkontroller |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `error` | `String?` | `null` | Feilmelding (aktiverer feiltilstand) |
| `disabled` | `bool` | `false` | Deaktiver feltet |
| `readOnly` | `bool` | `false` | Skrivebeskyttet |
| `prefix` | `Widget?` | `null` | Prefiks-widget |
| `suffix` | `Widget?` | `null` | Suffiks-widget |
| `onChanged` | `ValueChanged<String>?` | `null` | Kalles ved endring |
| `onSubmitted` | `ValueChanged<String>?` | `null` | Kalles ved innsending |
| `keyboardType` | `TextInputType?` | `null` | Tastaturtype |
| `obscureText` | `bool` | `false` | Skjul tekst (passord) |
| `maxLength` | `int?` | `null` | Maks antall tegn |
| `autofocus` | `bool` | `false` | Automatisk fokus |
| `focusNode` | `FocusNode?` | `null` | Egen fokusnode |

**Eksempel:**

```dart
DsTextfield(
  controller: epostController,
  keyboardType: TextInputType.emailAddress,
  onChanged: (verdi) => valider(verdi),
)
```

---

### DsTextarea

Tekstomrade for flerlinjes inndata.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `controller` | `TextEditingController?` | `null` | Tekstkontroller |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `error` | `String?` | `null` | Feilmelding |
| `disabled` | `bool` | `false` | Deaktiver feltet |
| `readOnly` | `bool` | `false` | Skrivebeskyttet |
| `maxLength` | `int?` | `null` | Maks antall tegn |
| `rows` | `int` | `3` | Antall synlige rader |
| `onChanged` | `ValueChanged<String>?` | `null` | Kalles ved endring |

**Eksempel:**

```dart
DsTextarea(
  controller: kommentarController,
  rows: 5,
  maxLength: 500,
)
```

---

### DsCheckbox

Avkrysningsboks med stotte for ubestemt tilstand.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `value` | `bool` | påkrevd | Avkrysset eller ikke |
| `onChanged` | `ValueChanged<bool>?` | påkrevd | Kalles ved endring |
| `label` | `Widget?` | `null` | Etikett ved siden av boksen |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |
| `error` | `String?` | `null` | Feilmelding |
| `indeterminate` | `bool` | `false` | Ubestemt tilstand (strek i stedet for hake) |
| `readOnly` | `bool` | `false` | Skrivebeskyttet |
| `focusNode` | `FocusNode?` | `null` | Egen fokusnode |

**Eksempel:**

```dart
DsCheckbox(
  value: godtatt,
  onChanged: (verdi) => setState(() => godtatt = verdi),
  label: Text('Jeg godtar vilkarene'),
)
```

---

### DsRadio

Radioknapp for enkeltvalg i gruppe.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `value` | `bool` | påkrevd | Om denne radioknappen er valgt |
| `groupValue` | `bool` | påkrevd | Gruppens gjeldende verdi |
| `onChanged` | `ValueChanged<bool>?` | påkrevd | Kalles ved endring |
| `label` | `Widget?` | `null` | Etikett |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |
| `focusNode` | `FocusNode?` | `null` | Egen fokusnode |

**Eksempel:**

```dart
DsRadio(
  value: true,
  groupValue: valgtVerdi == 'alternativ1',
  onChanged: (_) => setState(() => valgtVerdi = 'alternativ1'),
  label: Text('Alternativ 1'),
)
```

---

### DsSwitch

Av/på-bryter.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `value` | `bool` | påkrevd | På eller av |
| `onChanged` | `ValueChanged<bool>?` | påkrevd | Kalles ved endring |
| `label` | `Widget?` | `null` | Etikett |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |
| `disabled` | `bool` | `false` | Deaktivert |
| `focusNode` | `FocusNode?` | `null` | Egen fokusnode |

**Eksempel:**

```dart
DsSwitch(
  value: aktiv,
  onChanged: (verdi) => setState(() => aktiv = verdi),
  label: Text('Aktiver varsler'),
)
```

---

### DsAlert

Varselboks med alvorlighetsgrader.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Varselets innhold |
| `severity` | `DsSeverity` | `info` | Alvorlighetsgrad: info, warning, success, danger |
| `title` | `Widget?` | `null` | Valgfri tittel |
| `closable` | `bool` | `false` | Vis lukkeknapp |
| `onClose` | `VoidCallback?` | `null` | Kalles ved lukking |
| `color` | `DsColor?` | `null` | Fargeskala |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsAlert(
  severity: DsSeverity.warning,
  title: Text('Advarsel'),
  closable: true,
  onClose: () => skjul(),
  child: Text('Nar du gjor denne handlingen, er det vanskeligere.'),
)
```

---

### DsCard

Kort med valgfrie underseksjoner.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Kortets innhold |
| `color` | `DsColor?` | `null` | Fargeskala |
| `elevated` | `bool` | `false` | Skygge i stedet for kantlinje |
| `onTap` | `VoidCallback?` | `null` | Gjor kortet klikkbart |
| `focusNode` | `FocusNode?` | `null` | Egen fokusnode |

**Tilhorende komponenter:** `DsCardHeader`, `DsCardBlock`, `DsCardFooter`

**Eksempel:**

```dart
DsCard(
  elevated: true,
  onTap: () => naviger(),
  child: Column(
    children: [
      DsCardHeader(child: DsHeading(text: 'Tittel', level: DsHeadingLevel.sm)),
      DsCardBlock(child: DsParagraph(text: 'Kortinnhold her.')),
      DsCardFooter(child: DsButton(onPressed: () {}, child: Text('Les mer'))),
    ],
  ),
)
```

---

### DsTag

Etikett for kategorisering.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Etikettens innhold |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsTag(
  color: DsColor.success,
  size: DsSize.sm,
  child: Text('Godkjent'),
)
```

---

### DsChip

Kompakt element for filtrering eller valg.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Chipens innhold |
| `selected` | `bool` | `false` | Valgt tilstand |
| `onSelected` | `ValueChanged<bool>?` | `null` | Kalles ved valg/avvelging |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsChip(
  selected: erValgt,
  onSelected: (valgt) => setState(() => erValgt = valgt),
  child: Text('Flutter'),
)
```

---

### DsBadge

Merke for telling eller statusindikasjon.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Merkets innhold (typisk tall) |
| `color` | `DsColor?` | `null` | Fargeskala |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `placement` | `DsBadgePlacement` | `topRight` | Plassering: topRight, topLeft, bottomRight, bottomLeft |

**Eksempel:**

```dart
DsBadge(
  color: DsColor.danger,
  child: Text('5'),
)
```

---

### DsSpinner

Lastindikator.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsSpinner(size: DsSize.md)
```

---

### DsDivider

Skillelinje.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsDivider()
```

---

### DsLink

Lenke med Designsystemet-styling.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `text` | `String` | påkrevd | Lenketeksten |
| `onTap` | `VoidCallback?` | påkrevd | Handling ved trykk |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsLink(
  text: 'Ga til designsystemet.no',
  onTap: () => apneLenke('https://designsystemet.no'),
)
```

---

## Navigasjon og layout

### DsTabs

Fanenavigasjon med tastaturstotte og roving focus.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `tabs` | `List<DsTab>` | påkrevd | Liste med faner |
| `initialIndex` | `int` | `0` | Startfane |
| `onChanged` | `ValueChanged<int>?` | `null` | Kalles ved fanebytte |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsTabs(
  tabs: [
    DsTab(label: Text('Oversikt'), child: OversiktInnhold()),
    DsTab(label: Text('Innstillinger'), child: InnstillingerInnhold()),
  ],
  onChanged: (indeks) => print('Fane $indeks valgt'),
)
```

---

### DsDialog

Dialogvindu (modal).

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `title` | `Widget?` | `null` | Dialogtittel |
| `child` | `Widget` | påkrevd | Dialoginnhold |
| `actions` | `List<Widget>` | `[]` | Handlingsknapper |
| `closable` | `bool` | `true` | Vis lukkeknapp |
| `onClose` | `VoidCallback?` | `null` | Kalles ved lukking |

**Eksempel:**

```dart
DsDialog(
  title: Text('Bekreft'),
  child: Text('Vil du fortsette?'),
  actions: [
    DsButton(
      variant: DsButtonVariant.secondary,
      onPressed: () => lukk(),
      child: Text('Avbryt'),
    ),
    DsButton(
      variant: DsButtonVariant.primary,
      onPressed: () => bekreft(),
      child: Text('Bekreft'),
    ),
  ],
)
```

---

### DsDropdown

Nedtrekksmeny.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `trigger` | `Widget` | påkrevd | Widget som åpner menyen |
| `items` | `List<DsDropdownItem>` | påkrevd | Menyelementer |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsDropdown(
  trigger: DsButton(
    variant: DsButtonVariant.secondary,
    onPressed: () {},
    child: Text('Meny'),
  ),
  items: [
    DsDropdownItem(child: Text('Rediger'), onTap: () => rediger()),
    DsDropdownItem(child: Text('Slett'), onTap: () => slett()),
  ],
)
```

---

### DsSelect

Velger med nedtrekksliste.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `label` | `String?` | `null` | Etikett |
| `items` | `List<DsSelectItem>` | påkrevd | Valgalternativer |
| `value` | `dynamic` | `null` | Gjeldende valgt verdi |
| `onChanged` | `ValueChanged?` | påkrevd | Kalles ved valg |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `error` | `String?` | `null` | Feilmelding |

**Eksempel:**

```dart
DsSelect(
  label: 'Velg fylke',
  items: [
    DsSelectItem(value: 'oslo', label: 'Oslo'),
    DsSelectItem(value: 'bergen', label: 'Vestland'),
    DsSelectItem(value: 'trondheim', label: 'Trondelag'),
  ],
  value: valgtFylke,
  onChanged: (verdi) => setState(() => valgtFylke = verdi),
)
```

---

### DsPagination

Sidenavigasjon.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `currentPage` | `int` | påkrevd | Gjeldende sidenummer |
| `totalPages` | `int` | påkrevd | Totalt antall sider |
| `onPageChanged` | `ValueChanged<int>` | påkrevd | Kalles ved sidebytte |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsPagination(
  currentPage: 3,
  totalPages: 10,
  onPageChanged: (side) => lastSide(side),
)
```

---

### DsTable

Datatabell.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `columns` | `List<DsTableColumn>` | påkrevd | Kolonnedefinisjoner |
| `rows` | `List<DsTableRow>` | påkrevd | Rader med celler |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsTable(
  columns: [
    DsTableColumn(header: Text('Navn')),
    DsTableColumn(header: Text('Status')),
  ],
  rows: [
    DsTableRow(cells: [Text('Prosjekt A'), DsTag(child: Text('Aktiv'), color: DsColor.success)]),
    DsTableRow(cells: [Text('Prosjekt B'), DsTag(child: Text('Fullfort'), color: DsColor.info)]),
  ],
)
```

---

### DsBreadcrumbs

Brodsmulessti.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `items` | `List<DsBreadcrumbItem>` | påkrevd | Stielementer |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsBreadcrumbs(
  items: [
    DsBreadcrumbItem(label: Text('Hjem'), onTap: () => gaTilHjem()),
    DsBreadcrumbItem(label: Text('Produkter'), onTap: () => gaTilProdukter()),
    DsBreadcrumbItem(label: Text('Detaljer')),
  ],
)
```

---

### DsSearch

Søkefelt.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `controller` | `TextEditingController?` | `null` | Tekstkontroller |
| `onSubmitted` | `ValueChanged<String>?` | `null` | Kalles ved innsending |
| `onChanged` | `ValueChanged<String>?` | `null` | Kalles ved endring |
| `placeholder` | `String?` | `null` | Plassholdertekst |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsSearch(
  placeholder: 'Søk...',
  onSubmitted: (sokeord) => utforSok(sokeord),
)
```

---

### DsTooltip

Verktoyshjelp som vises ved hover eller fokus.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `message` | `String` | påkrevd | Hjelpeteksten |
| `child` | `Widget` | påkrevd | Widget som utloser verktoyshjelpen |

**Eksempel:**

```dart
DsTooltip(
  message: 'Klikk for a laste ned rapporten',
  child: DsButton(
    variant: DsButtonVariant.secondary,
    onPressed: () => lastNed(),
    child: Text('Last ned'),
  ),
)
```

---

### DsPopover

Innholdsboble som vises ved interaksjon.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `trigger` | `Widget` | påkrevd | Widget som åpner popoveren |
| `child` | `Widget` | påkrevd | Popoverens innhold |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsPopover(
  trigger: DsButton(
    variant: DsButtonVariant.tertiary,
    onPressed: () {},
    child: Text('Mer info'),
  ),
  child: DsParagraph(text: 'Detaljert informasjon her.'),
)
```

---

### DsAvatar

Avatarbilde eller initialer.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Avatarinnhold (initialer eller bilde) |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsAvatar(
  size: DsSize.md,
  child: Text('ON'),
)
```

---

### DsAvatarStack

Stablet gruppe av avatarer.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `avatars` | `List<DsAvatar>` | påkrevd | Avatarene som vises |
| `maxVisible` | `int` | `3` | Maks synlige avatarer |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsAvatarStack(
  maxVisible: 4,
  avatars: [
    DsAvatar(child: Text('AB')),
    DsAvatar(child: Text('CD')),
    DsAvatar(child: Text('EF')),
    DsAvatar(child: Text('GH')),
    DsAvatar(child: Text('IJ')),
  ],
)
```

---

### DsToggleGroup

Vekslegruppe for a velge mellom alternativer.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `items` | `List<DsToggleItem>` | påkrevd | Vekslealternativer |
| `value` | `dynamic` | påkrevd | Gjeldende valgt verdi |
| `onChanged` | `ValueChanged` | påkrevd | Kalles ved endring |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsToggleGroup(
  items: [
    DsToggleItem(value: 'liste', child: Text('Liste')),
    DsToggleItem(value: 'rutenett', child: Text('Rutenett')),
    DsToggleItem(value: 'kart', child: Text('Kart')),
  ],
  value: visning,
  onChanged: (v) => setState(() => visning = v),
)
```

---

### DsSuggestion

Forslagskomponent med autofullføringsforslag.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `controller` | `TextEditingController?` | `null` | Tekstkontroller |
| `suggestions` | `List<String>` | påkrevd | Forslag |
| `onSelected` | `ValueChanged<String>?` | `null` | Kalles ved valg av forslag |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsSuggestion(
  controller: kommuneController,
  suggestions: ['Oslo', 'Bergen', 'Trondheim', 'Stavanger'],
  onSelected: (kommune) => velgKommune(kommune),
)
```

---

## Skjema og verktoy

### DsField

Skjemafelt-wrapper som gir etikett, beskrivelse og feilmelding.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `child` | `Widget` | påkrevd | Skjemafeltet (typisk `DsTextfield`) |
| `label` | `String?` | `null` | Feltetikett |
| `description` | `String?` | `null` | Hjelpetekst |
| `error` | `String?` | `null` | Feilmelding |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsField(
  label: 'E-postadresse',
  description: 'Vi sender bekreftelse til denne adressen.',
  error: epostFeil,
  child: DsTextfield(
    controller: epostController,
    error: epostFeil,
    keyboardType: TextInputType.emailAddress,
  ),
)
```

---

### DsFieldset

Gruppering av relaterte skjemaelementer med legend.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `legend` | `String` | påkrevd | Gruppeoverskrift |
| `children` | `List<Widget>` | påkrevd | Skjemaelementer |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsFieldset(
  legend: 'Adresse',
  children: [
    DsField(label: 'Gate', child: DsTextfield(controller: gateController)),
    DsField(label: 'Postnummer', child: DsTextfield(controller: postnummerController)),
    DsField(label: 'Sted', child: DsTextfield(controller: stedController)),
  ],
)
```

---

### DsInput

Generisk inndatafelt (lavniva-komponent).

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `controller` | `TextEditingController?` | `null` | Tekstkontroller |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `error` | `String?` | `null` | Feilmelding |
| `disabled` | `bool` | `false` | Deaktivert |
| `onChanged` | `ValueChanged<String>?` | `null` | Kalles ved endring |

**Eksempel:**

```dart
DsInput(
  controller: navnController,
  onChanged: (verdi) => print(verdi),
)
```

---

### DsErrorSummary

Feilsammendrag for skjemavalidering -- viser alle feil samlet.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `errors` | `List<DsErrorEntry>` | påkrevd | Liste med feil |
| `title` | `String?` | `null` | Tittel pa feilsammendraget |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsErrorSummary(
  title: 'Rett folgene feil for a ga videre:',
  errors: [
    DsErrorEntry(field: 'Navn', message: 'Navn er påkrevd'),
    DsErrorEntry(field: 'E-post', message: 'Ugyldig e-postadresse'),
  ],
)
```

---

### DsDetails

Sammenleggbar detaljseksjon.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `summary` | `Widget` | påkrevd | Synlig sammendrag/tittel |
| `child` | `Widget` | påkrevd | Skjult innhold |
| `initiallyOpen` | `bool` | `false` | Apnet ved forste visning |

**Eksempel:**

```dart
DsDetails(
  summary: Text('Tekniske detaljer'),
  initiallyOpen: false,
  child: DsParagraph(text: 'Her er de tekniske detaljene.'),
)
```

---

### DsList

Liste med Designsystemet-styling.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `items` | `List<Widget>` | påkrevd | Listeelementer |
| `ordered` | `bool` | `false` | Nummerert liste |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsList(
  ordered: true,
  items: [
    Text('Fyll ut soknadsskjema'),
    Text('Last opp dokumentasjon'),
    Text('Send inn soknaden'),
  ],
)
```

---

### DsSkeleton

Plassholder for innhold som lastes.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `width` | `double?` | `null` | Bredde |
| `height` | `double?` | `null` | Hoyde |
| `borderRadius` | `double?` | `null` | Hjorneavrunding |

**Eksempel:**

```dart
Column(
  children: [
    DsSkeleton(width: 200, height: 24), // Overskrift
    SizedBox(height: 8),
    DsSkeleton(width: double.infinity, height: 16), // Tekstlinje
    SizedBox(height: 4),
    DsSkeleton(width: double.infinity, height: 16), // Tekstlinje
  ],
)
```

---

### DsSkipLink

Hopp-til-innhold-lenke for tastaturnavigasjon og tilgjengelighet.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `label` | `String` | påkrevd | Lenketekst |
| `targetId` | `String` | påkrevd | ID til malwidgeten |

**Eksempel:**

```dart
DsSkipLink(
  label: 'Hopp til hovedinnhold',
  targetId: 'hovedinnhold',
)
```

---

## Typografi

### DsHeading

Overskrift med 7 nivaer.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `text` | `String` | påkrevd | Overskriftsteksten |
| `level` | `DsHeadingLevel` | `md` | Niva: xxl, xl, lg, md, sm, xs, xxs |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsHeading(text: 'Velkommen til tjenesten', level: DsHeadingLevel.xl)
```

---

### DsParagraph

Brodtekst med varianter.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `text` | `String` | påkrevd | Brodteksten |
| `bodySize` | `DsBodySize` | `md` | Storrelse: xl, lg, md, sm, xs |
| `variant` | `DsBodyVariant` | `standard` | Variant: standard, short, long |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsParagraph(
  text: 'Dette er en avsnittekst med standard linjehoyde.',
  bodySize: DsBodySize.md,
  variant: DsBodyVariant.standard,
)
```

---

### DsLabel

Etikett for skjemaelementer.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `text` | `String` | påkrevd | Etiketteksten |
| `size` | `DsSize?` | `null` | Storrelsesmodus |
| `color` | `DsColor?` | `null` | Fargeskala |

**Eksempel:**

```dart
DsLabel(text: 'Fornavn')
```

---

### DsValidationMessage

Valideringsmelding for feilvisning under skjemaelementer.

**Egenskaper:**

| Egenskap | Type | Standard | Beskrivelse |
|----------|------|----------|-------------|
| `text` | `String` | påkrevd | Feilmeldingsteksten |
| `size` | `DsSize?` | `null` | Storrelsesmodus |

**Eksempel:**

```dart
DsValidationMessage(text: 'Feltet er påkrevd')
```
