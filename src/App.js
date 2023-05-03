import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Root } from "./pages/Root/Root";
import { Home } from "./pages/Home/Home";
import { NovoCliente } from "./pages/NovoCliente/NovoCliente";
import { Clientes } from "./pages/Clientes/Clientes";
import { EditaCliente } from "./pages/EditaCliente/EditaCliente";
import { Pets } from "./pages/Pets/Pets";
import { NovoPet } from "./pages/NovoPet/NovoPet"
import { NovoAgendamento } from "./pages/NovoAgendamento/NovoAgendamento";
import { EditarPet } from "./pages/EditarPet/EditarPet"
import { Produtos } from "./pages/Produtos/Produtos";
import { EditaProduto } from "./pages/EditaProduto/EditaProduto";
import { NovoProduto } from "./pages/NovoProduto/NovoProduto";
import { Agendamentos } from "./pages/Agendamentos/Agendamentos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="/" element={<Home />} />
          <Route path="/clientes" element={<Clientes />} />
          <Route path="/clientes/novo" element={<NovoCliente />} />
          <Route path="/clientes/editar/:id" element={<EditaCliente />} />
          <Route path="/produtos/editar/:id" element={<EditaProduto />} />
          <Route path="/pets" element={<Pets />} />
          <Route path="/pets/novo" element={<NovoPet />} />
          <Route path="/agendamentos" element={<Agendamentos />} />
          <Route path="/agendamentos/novo" element={<NovoAgendamento />} />
          <Route path="/pets/editar/:id" element={<EditarPet />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/produtos/novo" element={<NovoProduto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
