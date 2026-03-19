# Oppsett

## Installer pakken

Legg til biblioteket i `pubspec.yaml`:

```yaml
dependencies:
  designsystemet_flutter: ^1.0.0
```

Kjør deretter:

```bash
flutter pub get
```

## Importer biblioteket

Den enkleste måten er å importere alt samlet:

```dart
import 'package:designsystemet_flutter/designsystemet_flutter.dart';
```

## Granulære importer

For bedre tree-shaking kan du importere kun det du trenger:

```dart
// Kun tema
import 'package:designsystemet_flutter/theme.dart';

// Kun komponenter
import 'package:designsystemet_flutter/components.dart';

// Kun typografi
import 'package:designsystemet_flutter/typography.dart';
```

Dette gir mindre app-størrelse ved å ekskludere ubrukt kode.
