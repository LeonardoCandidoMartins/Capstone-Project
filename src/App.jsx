import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Sobre from "./pages/sobre/Sobre.jsx";
import Configuracoes from "./pages/configuracoes/Configuracoes.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import TraumaOcular from "./pages/traumaOcular/TraumaOcular.jsx";
import OlhoVermelho from "./pages/olhoVermelho/OlhoVermelho.jsx";
import DetalheCondicao from "./pages/detalheCondicao/DetalheCondicao.jsx";
import DetalheTrauma from "./pages/detalheTrauma/DetalheTrauma.jsx";
import AuxilioTriagem from "./pages/auxilioTriagem/AuxilioTriagem.jsx";
import TratamentoOcular from "./pages/tratamentoOcular/TratamentoOcular.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="/traumaOcular" element={<TraumaOcular />} />
        <Route path="/olhoVermelho" element={<OlhoVermelho />} />
        {/* ROTA DE DETALHE COM PARAM */}
        <Route path="/condicao/:slug" element={<DetalheCondicao />} />
        {/* Trauma */}
        <Route path="/trauma" element={<TraumaOcular />} />
        <Route path="/trauma/:slug" element={<DetalheTrauma />} />

        <Route path="/auxilioTriagem" element={<AuxilioTriagem />} />
        <Route path="/tratamentoOcular" element={<TratamentoOcular />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
        
    </Router>
  );
}

export default App;
