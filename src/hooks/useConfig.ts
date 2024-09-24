import { useContext } from "react";
import { Config } from "../types";
import { ConfigContext } from "../context/configContext";

export const useConfig = (): Config => {
  const context = useContext(ConfigContext);
  if (!context) {
    throw new Error("useConfig must be used within a ConfigProvider");
  }
  return context;
};
