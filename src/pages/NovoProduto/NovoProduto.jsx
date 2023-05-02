import axios from "axios";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';

export function NovoProduto() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    function onSubmit(data) {
        axios.post("http://localhost:3001/produtos", data)
            .then(response => {
                toast.success("Produto adicionado.", { position: "bottom-right", duration: 2000 });
                navigate("/produtos");
            })
            .catch(error => {
                toast.error("Algo deu errado.", { position: "bottom-right", duration: 2000 });
                console.log(error);
            });
    }

    return (
        <div className="container">
            <h1>Novo Produto</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>

                <Row>
                    <Col>
                        <Form.Group className="mb-3">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="text" className={errors.nome && "is-invalid"} {...register("nome", { required: "O nome é obrigatório.", maxLength: { value: 130, message: "Limite de 130 caracteres." } })} />
                            {errors.nome && <Form.Text className="invalid-feedback">{errors.nome.message}</Form.Text>}
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group>
                            <Form.Label>Preço</Form.Label>
                            <InputGroup className="mb-3">
                                <InputGroup.Text>R$</InputGroup.Text>
                                <Form.Control type="text" className={errors.preco && "is-invalid"} {...register("preco", { required: "O Preço é obrigatório.", maxLength: { value: 255, message: "Limite de 255 caracteres." } })} />
                                <InputGroup.Text>,00</InputGroup.Text>
                                {errors.preco && <Form.Text className="invalid-feedback">{errors.preco.message}</Form.Text>}
                            </InputGroup>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Descrição</Form.Label>
                            <Form.Control as="textarea" style={{ height: '120px' }} className={errors.descricao && "is-invalid"} {...register("descricao", { required: "A descrição é obrigatória.", maxLength: { value: 150, message: "Limite de 150 caracteres." } })} />
                            {errors.descricao && <Form.Text className="invalid-feedback">{errors.descricao.message}</Form.Text>}
                        </Form.Group>
                    </Col>
                    <Col xs={3}>
                        <Form.Group className="mb-3">
                            <Form.Label>Desconto</Form.Label>
                            <InputGroup className="mb-3">
                                <Form.Control type="text" className={errors.desconto && "is-invalid"} {...register("desconto", { required: "O desconto é obrigatório.", maxLength: { value: 255, message: "Limite de 255 caracteres." } })} />
                                <InputGroup.Text>%</InputGroup.Text>
                                {errors.desconto && <Form.Text className="invalid-feedback">{errors.desconto.message}</Form.Text>}
                            </InputGroup>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Validade do Desconto</Form.Label>
                            <Form.Control type="date" className={errors.dataDesconto && "is-invalid"} {...register("dataDesconto", { required: "A data é obrigatória." })} />
                            {errors.dataDesconto && <Form.Text className="invalid-feedback">{errors.dataDesconto.message}</Form.Text>}
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Check
                        className={errors.preco && "is-invalid"}
                        inline
                        label="Higiene"
                        name="group1"
                        type="radio"
                        value="Higiene"
                        id="Higiene"
                        {...register("categoria", { required: "A categoria é obrigatória." })}
                    />
                    <Form.Check
                        inline
                        label="Brinquedos"
                        name="group1"
                        type="radio"
                        value="Brinquedos"
                        id="Brinquedos"
                        {...register("categoria")}
                    />
                    <Form.Check
                        inline
                        label="Conforto"
                        name="group1"
                        type="radio"
                        value="Conforto"
                        id="Conforto"
                        {...register("categoria")}
                    />
                    {errors.categoria && <Form.Text className="invalid-feedback">{errors.categoria.message}</Form.Text>}
                </Form.Group>
                <Button variant="primary" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    );
}