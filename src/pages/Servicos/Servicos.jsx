import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";

export function Servicos() {
  const [servicos, setServicos] = useState(null);
  const [show, setShow] = useState(false);
  const [idServico, setIdServico] = useState(null);

  const handleClose = () => {
    setIdServico(null);
    setShow(false);
  };

  const handleShow = (id) => {
    setIdServico(id);
    setShow(true);
  };

  useEffect(() => {
    initializeTable();
  }, []);

  const initializeTable = async () => {
    try {
      const response = await axios.get("http://localhost:3001/servicos");
      setServicos(response.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/servicos/${idServico}`);
      toast.success(response.data.message, { position: "bottom-right", duration: 2000 });
      initializeTable();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message ?? "Erro ao excluir o serciço", {
        position: "bottom-right",
        duration: 2000,
      });
    }
    handleClose();
  };

  return (
    <div className="pets container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Serviços</h1>
        <Button variant="success" as={Link} to="/servicos/novo"><i className="bi bi-plus-lg me-2"></i>Serviço</Button>
      </div>
      {servicos ? (
        <Table striped bordered hover>
          <thead >
            <tr>
              <th>Nome</th>
              <th>Preço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {servicos.map(({ id, nome, preco}) => (
              <tr key={id}>
                <td>{nome}</td>
                <td>R${preco},00</td>
                <td className="d-flex gap-2">
                  <Button variant="success" as={Link} to={`/servicos/editar/${id}`}>
                  <i className="bi bi-pencil-fill"></i>
                  </Button>
                  <Button onClick={() => handleShow(id)} variant="danger">
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmação</Modal.Title>
          </Modal.Header>
                <Modal.Body>Tem certeza que deseja excluir o serviço?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={onDelete} >
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
    </div>
  );
}
