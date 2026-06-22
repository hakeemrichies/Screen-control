// Session Types
export interface Session {
  id: string;
  name: string;
  status: 'online' | 'offline' | 'away';
  lastActivity: string;
  ipAddress: string;
  osType: 'iOS' | 'Android' | 'Windows' | 'macOS' | 'Linux';
}

export interface SessionDetails extends Session {
  userId: string;
  groupId: string;
  screenResolution: {
    width: number;
    height: number;
  };
}

// Auth Types
export interface AuthCredentials {
  username: string;
  password: string;
}

export interface AuthToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  tokenType: string;
}

// Remote Control Types
export interface ControlInput {
  type: 'touch' | 'key' | 'scroll' | 'gesture';
  x?: number;
  y?: number;
  key?: string;
  action?: 'press' | 'release' | 'move';
  timestamp: number;
}

export interface RemoteSession {
  sessionId: string;
  clientId: string;
  connected: boolean;
  startTime: number;
  lastFrameTime?: number;
}

// Stream Types
export interface StreamFrame {
  imageData: string; // base64
  timestamp: number;
  width: number;
  height: number;
}

// API Error Types
export interface APIError {
  code: string;
  message: string;
  statusCode: number;
  details?: any;
}

// Store State Types
export interface AuthState {
  isAuthenticated: boolean;
  user?: {
    id: string;
    username: string;
    email: string;
  };
  token?: AuthToken;
  error?: string;
}

export interface SessionsState {
  sessions: Session[];
  loading: boolean;
  error?: string;
  lastUpdated?: number;
}

export interface RemoteControlState {
  activeSession?: RemoteSession;
  isConnected: boolean;
  currentFrame?: StreamFrame;
  error?: string;
}
