import { ReactNode } from "react";

export interface Config {
  apiUrl: string;
  theme: string;
}

export interface ConfigProviderProps {
  children: ReactNode;
}
