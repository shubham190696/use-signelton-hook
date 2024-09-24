import { useConfig } from "../hooks/useConfig";

const ComponentA = () => {
  const { apiUrl, theme } = useConfig();
  return (
    <div>
      <div>API URL: {apiUrl}</div>
      <div>Theme Type: {theme}</div>
    </div>
  );
};

export default ComponentA;
