import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";
import { Button, Modal, Table } from "react-bootstrap";

export function Agendamentos() {

    const [agendamentos, setAgendamentos] = useState(null);
    const [show, setShow] = useState(false);
    const [idAgendamento, setIdAgendamento] = useState(null);

    const handleClose = () => {
        setIdAgendamento(null);
        setShow(false)
    };
    const handleShow = (id) => {
        setIdAgendamento(id);
        setShow(true)
    };

    useEffect(() => {
        initializeTable();
    }, []);

    function initializeTable() {
        axios.get("http://localhost:3001/agendamentos")
            .then(response => {
                const agendamentosData = response.data.map(agendamento => {
                const { dataAgendada, petId, servicoId } = agendamento;
                return {
                    dataAgendada,
                    petId,
                    servicoId,
                };
                });
                setAgendamentos(agendamentosData);
            })
            .catch(error => {
                console.log(error);
            });
        }

    function onDelete() {
        axios.delete(`http://localhost:3001/agendamentos/${idAgendamento}`)
            .then(response => {
                toast.success(response.data.message, { position: "bottom-right", duration: 2000 });
                initializeTable();
            })
            .catch(error => {
                console.log(error);
                toast.error(error.response.data.message, { position: "bottom-right", duration: 2000 });
            });
        handleClose();
    }

    const [showModal, setShowModal] = useState(false);

    const [currentAgendamento, setCurrentAgendamento] = useState(null);
    const handleShowModal = (agendamento) => {
      setCurrentAgendamento(agendamento);
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
      setCurrentAgendamento(null);
    };

    return(
            <div className="agendamentos container">
            <div className="d-flex justify-content-between align-items-center">
            <h1>Agendamentos</h1>
            <Button variant="success" as={Link} to="/agendamentos/novo">Adicionar Agendamento</Button>
            </div>
            {agendamentos ? (
            <Table striped bordered hover>
                <thead >
                <tr>
                    <th>Data Agendada</th>
                    <th>Pet Id</th>
                    <th>Serviço Id</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {agendamentos.map(({ dataAgendada, servicoId, petId }) => (
                    <tr key={dataAgendada.id}>
                    <td>{dataAgendada.split("-").reverse().join("/")}</td>
                    <td>{petId}</td>
                    <td>{servicoId}</td>
                    <td className="d-flex gap-2">
                        <Button onClick={() => handleShow(dataAgendada.id)} variant="danger">
                        <i className="bi bi-trash-fill"></i>
                        </Button>
                        <Button variant="success" as={Link} to={`/agendamentos/editar/${dataAgendada}`}>
                        Editar
                        </Button>
                        <Button
                        onClick={() =>
                            handleShowModal({ dataAgendada, petId, servicoId })
                        }
                        variant="success"
                        >
                        <i class="bi bi-clipboard-heart"></i>
                        </Button>
                    </td>
                    <Modal show={showModal} onHide={handleCloseModal}>
                        <Modal.Header closeButton>
                        <Modal.Title>Detalhes do Agendamento</Modal.Title>
                        </Modal.Header>
                        {currentAgendamento && (
                        <Modal.Body className="Modal">
                            <div>
                            <strong>Agendamento:</strong> {currentAgendamento.dataAgendada.split("-").reverse().join("/")}
                            </div>
                            <div>
                            <strong>Pet Id:</strong> {currentAgendamento.petId} 
                            </div>
                            <div>
                            <strong>Serviço Id:</strong> {currentAgendamento.servicoId} 
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
                    <Modal.Body>Tem certeza que deseja excluir o agendamento?</Modal.Body>
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
        )
}