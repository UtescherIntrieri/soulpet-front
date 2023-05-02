import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";
import conteudosHome from "./ConteudosHome.css"

export function ConteudosHome() {
        const [data, setData] = useState({});
      
        useEffect(() => {
          async function fetchData() {
            const response = await axios.get('http://localhost:3001/dashboard');
            const data =  response.data
            setData(data);
          }
      
          fetchData();
        }, []);

    return (
        <div className="card-principal">
            <div className="card-interior">
            <div className="card">
                <h4 className="titulo">Total de Clientes</h4> 
                <i class="bi bi-person-fill"></i>
                <span className="total">{data.totalClientes}</span> 
            </div>
            </div>

            <div className="card-interior">
            <div className="card">
                <h4 className="titulo">Total de pets</h4>
                <i class="bi bi-github"></i>
                 <span className="total">{data.totalPets}</span>
            </div>
            </div>

            <div className="card-interior">
            <div className="card">
                <h4 className="titulo">Total de produtos</h4>
                <i class="bi bi-box-fill"></i>
                 <span className="total">{data.totalProdutos}</span>
            </div>
            </div>

            <div className="card-interior">
            <div className="card">
                <h4 className="titulo">Total de Serviços</h4> 
                <i className="bi bi-file-text"></i>
                <span className="total">{data.totalServicos}</span> 
            </div>
            </div>

            <div className="card-interior">
            <div className="card">
               <h4 className="titulo">Total de Agendamentos</h4> 
               <i className="bi bi-journal-text"></i>
               <span className="total"> {data.totalAgendamentos}</span>
            </div>
            </div>
        </div>
    );
};
