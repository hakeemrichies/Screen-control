# ScreenConnect API Integration

## Overview

This document outlines the ScreenConnect API integration for the Screen Control mobile application.

## Authentication

### API Key Authentication

```http
Header: Authorization: Bearer {API_KEY}
```

### OAuth 2.0 Flow

1. Request authorization code
2. Exchange for access token
3. Refresh token for extended sessions

## Endpoints

### Sessions

#### Get All Sessions
```http
GET /api/v1/sessions
Headers:
  Authorization: Bearer {API_KEY}
```

Response:
```json
{
  "sessions": [
    {
      "id": "session-123",
      "name": "Device Name",
      "status": "online",
      "lastActivity": "2026-06-22T10:30:00Z",
      "ipAddress": "192.168.1.100"
    }
  ]
}
```

#### Get Session Details
```http
GET /api/v1/sessions/{sessionId}
```

### Remote Control

#### Start Remote Session
```http
POST /api/v1/sessions/{sessionId}/control/start
Body:
{
  "clientId": "mobile-client",
  "clientType": "iOS|Android"
}
```

#### Send Input Commands
```http
POST /api/v1/sessions/{sessionId}/control/input
Body:
{
  "type": "touch|key|scroll",
  "x": 100,
  "y": 200,
  "key": "ENTER"
}
```

#### Stop Remote Session
```http
POST /api/v1/sessions/{sessionId}/control/stop
```

## WebSocket Connection

### Screen Streaming

```javascript
const ws = new WebSocket('wss://api.screenconnect.com/stream/{sessionId}');

ws.onmessage = (event) => {
  const frame = JSON.parse(event.data);
  // Process screen frame (base64 encoded image)
  updateScreenDisplay(frame.imageData);
};
```

## Error Handling

### Common Error Codes

| Code | Message | Resolution |
|------|---------|------------|
| 401 | Unauthorized | Check API key/token |
| 403 | Forbidden | Insufficient permissions |
| 404 | Not Found | Session ID invalid |
| 429 | Rate Limited | Implement exponential backoff |
| 503 | Service Unavailable | Retry with exponential backoff |

## Security Best Practices

- Store API keys securely using platform keychains
- Use HTTPS for all API calls
- Implement certificate pinning
- Validate SSL certificates
- Rotate API keys regularly
- Implement session timeouts

## Rate Limiting

- 100 requests per minute for standard tier
- 1000 requests per minute for premium tier