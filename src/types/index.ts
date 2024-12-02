export interface Message {
  id: string;
  content: string;
  sender: 'user' | 'companion';
  timestamp: Date;
  mood?: Mood;
  image?: string;
  sentiment?: SentimentAnalysis;
}

export interface Mood {
  value: number;
  label: string;
  timestamp: Date;
}

export interface SentimentAnalysis {
  score: number; // -1 to 1
  magnitude: number; // 0 to +inf
  emotions: {
    joy: number;
    sadness: number;
    anger: number;
    fear: number;
    surprise: number;
  };
  topics: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link?: string;
  type: 'article' | 'exercise' | 'contact';
}

export interface EmergencyContact {
  name: string;
  number: string;
  description: string;
}

export type InteractionMode = 
  | 'conversational'
  | 'reflective'
  | 'visualization'
  | 'feedback'
  | 'crisis';

export interface SystemConfig {
  identity: {
    name: string;
    version: string;
    role: string;
    emoji: string;
  };
  introduction: string;
  capabilities: string[];
  conversationGuidelines: {
    tone: string;
    style: string;
    boundaries: string[];
  };
  safetyProtocol: {
    crisisKeywords: string[];
    crisisResponse: string;
  };
  worksheetTemplates: {
    [key: string]: {
      questions: string[];
    };
  };
  closingStatement: string;
  privacyNotice: string;
}