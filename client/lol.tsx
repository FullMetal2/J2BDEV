import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("API URL: ", import.meta.env.VITE_API_URL);
  }, []);
  return (
    <div>
      <h1>J2BDEV</h1>
    </div>
  );
}
export default App;
