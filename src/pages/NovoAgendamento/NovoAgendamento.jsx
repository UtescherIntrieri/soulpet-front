import axios from "axios";
import { useForm } from "react-hook-form"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

export function NovoAgendamento() {

const {
    register,
    handleSubmit,
    formState: { errors },
} = useForm();
const navigate = useNavigate();

function onSubmit(data) {
    axios.post("http://localhost:3001/agendamentos", data)
    .then(response => {
        toast.success("Agendamento adicionado", { position: "bottom-right", duration: 2000 });
        navigate("/agendamentos");
    })
    .catch(error => {
        toast.error("Ops, algo deu errado", { position: "bottom-right", duration: 2000 });
        console.log(error);
    })
}
    return (
        <div className="container">
            <h1>Novo Agendamento</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <Form.Label>Data Agendada</Form.Label>
                    <Form.Control type="date" 
                    className={errors.dataAgendada && "is-invalid"} 
                    {...register("dataAgendada", { 
                        required: "A data agendada é obrigatória.",  })} />
                    {errors.dataAgendada && 
                    <Form.Text className="invalid-feedback">
                        {errors.dataAgendada.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Pet Id</Form.Label>
                    <Form.Control type="number" className={errors.petId && "is-invalid"} 
                    {...register("petId", { required: "O Id do Pet é obrigatório.",  })} />
                    {errors.petId && <Form.Text className="invalid-feedback">
                        {errors.petId.message}</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Serviço Id</Form.Label>
                    <Form.Control type="number" className={errors.servicoId && "is-invalid"} 
                    {...register("servicoId", { required: "O Id do Serviço é obrigatório.",  })} />
                    {errors.servicoId && <Form.Text className="invalid-feedback">
                        {errors.servicoId.message}</Form.Text>}
                </Form.Group>
                <Button variant="success" type="submit">
                    Cadastrar
                </Button>
            </Form>
        </div>
    )
}