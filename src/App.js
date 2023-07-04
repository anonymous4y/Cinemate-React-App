import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { Header, Footer, Card } from './components'


function App() {
  return (
    <div className="App">
      <Header />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
