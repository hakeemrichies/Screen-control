# Architecture Overview

## System Design

```
┌─────────────────────────────────────────────┐
│         Mobile App (iOS/Android)            │
├───────────────��─────────────────────────────┤
│  UI Layer (React Native / Flutter)          │
│  - Session List Screen                      │
│  - Remote View Screen                       │
│  - Control Panel                            │
├─────────────────────────────────────────────┤
│  Business Logic Layer                       │
│  - Session Manager                          │
│  - Remote Control Manager                   │
│  - Stream Manager                           │
├─────────────────────────────────────────────┤
│  API Layer                                  │
│  - REST Client                              │
│  - WebSocket Client                         │
├─────────────────────────────────────────────┤
│  Storage Layer                              │
│  - Secure Storage (Credentials)             │
│  - Local Cache (Sessions)                   │
└────────────────────────────���────────────────┘
         ↓
    ScreenConnect API
```

## Component Structure

### React Native

```
src/
├── components/
│   ├── SessionList.tsx
│   ├── RemoteViewer.tsx
│   ├── ControlPanel.tsx
│   └── AuthScreen.tsx
├── services/
│   ├── screenconnect-api.ts
│   ├── session-manager.ts
│   └── remote-control.ts
├── store/
│   ├── auth.ts
│   ├── sessions.ts
│   └── remote-control.ts
├── utils/
│   ├── storage.ts
│   ├── logger.ts
│   └── constants.ts
└── App.tsx
```

### Flutter

```
lib/
├── screens/
│   ├── auth_screen.dart
│   ├── sessions_screen.dart
│   ├── remote_viewer_screen.dart
│   └── control_panel_screen.dart
├── services/
│   ├── screenconnect_service.dart
│   ├── session_manager.dart
│   └── remote_control_service.dart
├── providers/
│   ├── auth_provider.dart
│   ├── session_provider.dart
│   └── remote_control_provider.dart
├── models/
│   ├── session.dart
│   ├── user.dart
│   └── control_input.dart
└── main.dart
```