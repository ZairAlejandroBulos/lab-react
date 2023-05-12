import IndexRouter from "./routes/IndexRouter";
import Navigation from "./components/Header/Navigation";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navigation />
      <IndexRouter />
    </>
  );
}

export default App;