import React from "react";
import "./App.css"

import ParOuImpar from "./components/condicional/ParOuImpar";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import Aletaroio from "./components/basicos/Aleatorio";

export default _ =>
    <div className="app">
        <h1>Fundamentos React (Arrow)</h1>

        <div className="cards">
            <Card titulo ="#08 - Renderização Condicional" color="#583cae">
                <ParOuImpar numero={22}></ParOuImpar>
            </Card>

            <Card titulo ="#07 - Repetição Produtos" color="#283cae">
                <TabelaProdutos></TabelaProdutos>
            </Card>

            <Card titulo ="#06 - Repetição" color="#FF4C65">
                <ListaAlunos></ListaAlunos>
            </Card>

            <Card titulo ="#05 - Componente com Filhos" color="#00C8F8  ">
                <Familia sobrenome="Prestes">
                    <FamiliaMembro nome="Pedro"></FamiliaMembro>
                    <FamiliaMembro nome="Ana"></FamiliaMembro>
                    <FamiliaMembro nome="Gustavo"></FamiliaMembro>       
                </Familia>
            </Card>

            <Card titulo ="#04 - Desafio Aleatório" color="#080">
                <Aletaroio min={1} max={60}></Aletaroio>
            </Card>

            <Card titulo ="#03 - Fragmento" color="#E94C6F">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo ="#02 - Com Parametro" color="#E8B71A">
                <ComParametro titulo="Situação do Aluno" aluno="Pedro" nota={9.3}></ComParametro>
            </Card>
            
            <Card titulo ="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>
        </div>
        
    </div>
