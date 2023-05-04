import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { toast } from "react-hot-toast";

export function Produtos() {

    const [produtos, setProdutos] = useState(null);
    const [filtroCategoria, setFiltroCategoria] = useState('');
    const [filtroNome, setFiltroNome] = useState('');
    const [show, setShow] = useState(false);
    const [idProduto, setIdProduto] = useState(null);

    const handleClose = () => {
        setIdProduto(null);
        setShow(false)
    };


    const handleShow = (id) => {
        setIdProduto(id);
        setShow(true)
    };

    useEffect(() => {
        initializeTable();

    }, []);

    function initializeTable() {
        axios.get("http://localhost:3001/produtos")
            .then(response => {
                console.log(response.data);
                setProdutos(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }

    function onDelete() {
        axios.delete(`http://localhost:3001/produtos/${idProduto}`)
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

    return (
        <div className="produtos container">
            <div className="d-flex justify-content-between align-items-center">
                    <h1>Produtos</h1>
                   
            </div>
            <div>
                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Digite nome "
                        value={filtroNome}
                        onChange={(event) => { setFiltroNome(event.target.value) }}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Digite categoria "
                        value={filtroCategoria}
                        onChange={(event) => { setFiltroCategoria(event.target.value) }}
                    />
                    <div class="input-group-prepend">
                        <span class="input-group-text">
                            <i class="bi bi-search"></i>
                        </span>
                    </div>
                </div>
            </div>

            {
                produtos === null ?
                    <Loader />
                    :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Preço</th>
                                <th>Descrição</th>
                                <th>Desconto</th>
                                <th >Data do Desconto</th>
                                <th>Categoria</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody> 
                            {produtos
                                .filter((produto) => produto.nome.toLowerCase().includes(filtroNome.toLowerCase()))
                                .filter((produto) => produto.categoria.toLowerCase().includes(filtroCategoria.toLowerCase()))
                                .map(produto => {
                                    return (
                                        <tr key={produto.id}>
                                            <td>{produto.nome}</td>
                                            <td>{produto.preco}</td>
                                            <td>{produto.descricao}</td>
                                            <td>{produto.desconto}</td>
                                            <td>{produto.dataDesconto}</td>
                                            <td>{produto.categoria}</td>
                                            <td className="d-flex  gap-2 justify-content-center">
                                            <Button variant="success" as={Link} to={`/produtos/editar/${produto.id}`}>
                                                <i className="bi bi-pencil-fill"></i>
                                            </Button>
                                                <Button variant="danger" onClick={() => handleShow(produto.id)}
                                                >
                                                    <i className="bi bi-trash-fill"></i>
                                                </Button>
                                             
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </Table>
            }
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmação</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem certeza que deseja excluir o produto?</Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" onClick={onDelete}>
                        Excluir
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    );
}