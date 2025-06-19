// Core content types
export interface HomeContent {
  readonly title: string;
  readonly description: string;
}

export interface ContactItem {
  readonly href: string;
  readonly icon: string;
  readonly label: string;
}

export interface Tool {
  readonly key: string;
  readonly values: readonly string[];
}

export interface Experience {
  readonly company: string;
  readonly location: string;
  readonly title: string;
  readonly period: string;
  readonly responsibilities: readonly string[];
}

export interface Project {
  readonly title: string;
  readonly image: string;
  readonly description: string;
  readonly link: string;
}

// Navigation types
export interface NavItem {
  readonly href: string;
  readonly label: string;
}

// Component prop types
export interface ContactLinkProps {
  readonly href: string;
  readonly icon: string;
  readonly label?: string;
}

// Content collection types
export type ContactContent = readonly ContactItem[];
export type ToolsContent = readonly Tool[];
export type ExperienceContent = readonly Experience[];
export type ProjectsContent = readonly Project[];

// Utility types for component states
export interface ComponentState {
  readonly isMounted: boolean;
}

// Form types (for future use)
export interface ContactFormData {
  readonly name: string;
  readonly email: string;
  readonly message: string;
}

// API response types (for future use)
export interface ApiResponse<T> {
  readonly data: T;
  readonly success: boolean;
  readonly message?: string;
}

// Error types
export interface AppError {
  readonly code: string;
  readonly message: string;
  readonly details?: unknown;
}
