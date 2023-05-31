import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
