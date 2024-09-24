import { useMemo, useState } from "react";
import { ConfigContext } from "../context/configContext";
import { Config, ConfigProviderProps } from "../types";

// Create a provider component to wrap the app
export const ConfigProvider = ({ children }: ConfigProviderProps) => {
  const [config] = useState<Config>({
    apiUrl: "https://api.example.com",
    theme: "dark",
  });

  // Memoize the config object to avoid re-creating it on every render
  const value = useMemo(() => config, [config]);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};
