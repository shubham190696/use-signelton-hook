import ComponentB from "./components/compoenntB";
import ComponentA from "./components/componentA";
import { ConfigProvider } from "./components/contextProvider";

function App() {
  return (
    <>
      <ConfigProvider>
        <ComponentA />
      </ConfigProvider>
      <ComponentB /> // Hide this component to see the ComponentA output
    </>
  );
}

export default App;
