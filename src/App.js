import { useEffect, useState } from "react";
import { Greet } from "./components";
import { AllRoutes } from "./router/AllRoutes";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2200);
  }, []);

  return (
    <div className="App">
      {isLoading && <Greet />}
      <AllRoutes />
    </div>
  );
}

export default App;
