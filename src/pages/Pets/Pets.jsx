import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";

export function Pets() {
  const [pets, setPets] = useState(null);
  const [show, setShow] = useState(false);
  const [idPet, setIdPet] = useState(null);

  const handleClose = () => {
    setIdPet(null);
    setShow(false);
  };

  const handleShow = (id) => {
    setIdPet(id);
    setShow(true);
  };

  useEffect(() => {
    initializeTable();
  }, []);

  const initializeTable = async () => {
    try {
      const response = await axios.get("http://localhost:3001/pets");
      setPets(response.data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:3001/pets/${idPet}`);
      toast.success(response.data.message, { position: "bottom-right", duration: 2000 });
      initializeTable();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message ?? "Erro ao excluir o pet", {
        position: "bottom-right",
        duration: 2000,
      });
    }
    handleClose();
  };

    const [showModal, setShowModal] = useState(false);

  const [currentPet, setCurrentPet] = useState(null);
  const handleShowModal = (pet) => {
    setCurrentPet(pet);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentPet(null);
  };

  return (
    <div className="pets container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Pets</h1>
      </div>
      {pets ? (
        <Table striped bordered hover>
          <thead >
            <tr>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {pets.map(({ id, nome, tipo, porte, dataNasc }) => (
              <tr key={id}>
                <td>{nome}</td>
                <td className="d-flex gap-2">
                  <Button onClick={() => handleShow(id)} variant="danger">
                    <i className="bi bi-trash-fill"></i>
                  </Button>
                  <Button variant="success" as={Link} to={`/pets/editar/${id}`}>
                    Editar
                  </Button>

                  <Button
                    onClick={() =>
                      handleShowModal({ id, nome, tipo, porte, dataNasc })
                    }
                    variant="success"
                  >
                    <i class="bi bi-clipboard-heart"></i>
                  </Button>
                </td>
                <Modal show={showModal} onHide={handleCloseModal}>
                  <Modal.Header closeButton>
                    <Modal.Title>Detalhes do Pet</Modal.Title>
                  </Modal.Header>
                  {currentPet && (
                    <Modal.Body className="Modal">
                      <div>
                        <strong>Tipo:</strong> {currentPet.tipo}
                      </div>
                      <div>
                        <strong>Porte:</strong> {currentPet.porte}
                      </div>
                      <div>
                        <strong>Data de Nascimento:</strong>{" "}
                        {currentPet.dataNasc}
                      </div>
                    </Modal.Body>
                  )}
                  <Modal.Footer>
                    <Button variant="success" onClick={handleCloseModal}>
                      Fechar
                    </Button>
                  </Modal.Footer>
                </Modal>
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
                <Modal.Body>Tem certeza que deseja excluir o pet?</Modal.Body>
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
