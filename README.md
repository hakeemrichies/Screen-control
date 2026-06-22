# Screen Control

Cross-platform mobile application for ScreenConnect remote access and support.

## Features

- 📱 iOS and Android support
- 🔗 ScreenConnect API integration
- 👁️ Remote screen viewing
- 🎮 Remote control capabilities
- 💬 Session management
- 🔐 Secure authentication

## Project Structure

```
screen-control/
├── react-native/          # React Native implementation
│   ├── src/
│   ├── ios/
│   ├── android/
│   └── package.json
├── flutter/               # Flutter implementation
│   ├── lib/
│   ├── ios/
│   ├── android/
│   └── pubspec.yaml
├── docs/                  # Documentation
└── README.md
```

## Quick Start

### React Native Setup
```bash
cd react-native
npm install
npx react-native run-android
npx react-native run-ios
```

### Flutter Setup
```bash
cd flutter
flutter pub get
flutter run
```

## Prerequisites

- ScreenConnect API credentials
- Node.js v18+ (React Native)
- Flutter SDK v3.0+ (Flutter)
- Xcode 14+ (iOS)
- Android Studio (Android)

## API Documentation

See `docs/SCREENCONNECT_API.md` for ScreenConnect API integration details.

## License

MIT