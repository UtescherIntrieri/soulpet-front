import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import {toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import background from "../../assets/1000_F_481320874_0ySypkY4mZYl4jEmCOGXMbPgVhocmw2t.jpg";
import { useEffect } from "react";

export function EditarPet() {
  const {
    register,
    handleSubmit,
    formState: { errors }, reset,
  } = useForm();
  const navigate = useNavigate();
  const { id } = useParams();

  function atualizaPet(data) {
    axios
      .put(`http://localhost:3001/pets/${id}`, data)
      .then((response) => {
        toast.success("Pet editado com sucesso.", {
          position: "bottom-right",
          duration: 2500,
        });
        navigate("/pets");
      })
      .catch((error) => {
        toast.error("Não foi possível adicionar o pet.", {
          position: "bottom-right",
          duration: 3000,
        });
        console.log(error);
      });
  }
  
  useEffect(() => {
    axios.get(`http://localhost:3001/pets/${id}`)
        .then(response => {
            const { clienteId, nome, tipo, porte, dataNasc } = response.data;
            reset({ clienteId, nome, tipo, porte, dataNasc });
        })
}, [id, reset])

  return (
    <div >
      <h3 className="m-3 p-2 ">Editar Pet</h3>
      <Container className="border box">
      <Form onSubmit={handleSubmit(atualizaPet)}>
        <Form.Group className="mb-3">
          <Form.Label>Id do Cliente</Form.Label>
          <Form.Control
            type="number"
            className={errors.clienteId && "is-invalid"}
            {...register("clienteId", {
              required: "É necessário informar o Id do tutor do Pet.",
              maxLength: {
                value: 100,
                message: "Limite de 100 caracteres.",
              },
            })}
          />
          {errors.clienteId && (
            <Form.Text className="invalid-feedback">
              {errors.clienteId.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            className={errors.nome && "is-invalid"}
            {...register("nome", {
              required: "O nome é obrigatório.",
              maxLength: { value: 130, message: "Limite de 130 caracteres." },
            })}
          />
          {errors.nome && (
            <Form.Text className="invalid-feedback">
              {errors.nome.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Tipo</Form.Label>
          <Form.Control
            type="text"
            className={errors.tipo && "is-invalid"}
            {...register("tipo", {
              required: "O tipo é obrigatório.",
              maxLength: { value: 100, message: "Limite de 100 caracteres." },
            })}
          />
          {errors.tipo && (
            <Form.Text className="invalid-feedback">
              {errors.tipo.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Porte</Form.Label>
          <Form.Control
            type="text"
            className={errors.porte && "is-invalid"}
            {...register("porte", {
              required: "O porte é obrigatório.",
              maxLength: { value: 100, message: "Limite de 100 caracteres." },
            })}
          />
          {errors.porte && (
            <Form.Text className="invalid-feedback">
              {errors.porte.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Data de Nascimento</Form.Label>
          <Form.Control
            type="date"
            className={errors.dataNasc && "is-invalid"}
            {...register("dataNasc", {
              required: "A data de nascimento é obrigatória.",
              maxLength: { value: 100, message: "Limite de 100 caracteres." },
            })}
          />
          {errors.dataNasc && (
            <Form.Text className="invalid-feedback">
              {errors.dataNasc.message}
            </Form.Text>
          )}
        </Form.Group>
        
        <Button variant="success" type="submit">
          Editar
        </Button>
      </Form>
      <img src={background} alt="SoulPet Background" className="w-20" />
      </Container>
    </div>
  );
}
