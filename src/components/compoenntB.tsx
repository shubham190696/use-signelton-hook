import { useConfig } from "../hooks/useConfig";

const ComponentB = () => {
  const config = useConfig();

  return (
    <div>
      <h1>Component B</h1>
      <p>API URL: {config.apiUrl}</p>
      <p>Theme: {config.theme}</p>
    </div>
  );
};

export default ComponentB;
