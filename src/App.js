import AllRoutes from "./routes/AllRoutes";
import { Header, Footer } from "./components";

function App() {
  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-900 dark:text-white">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
