import React from "react";
import alunos from "../../data/alunos";

export default props => {
    const alunosLis = alunos.map((aluno) => {
        return (
            <li key={aluno.id}>
                {aluno.id}) {aluno.nome} - {aluno.nota}  {/* pega as propriedades do array de alunos*/}
            </li> 
        );
    });

    return (
        <div>
            <ul style={{listStyle: 'none'}}> 
                {alunosLis}    {/* retorna na tela a const acima */}
            </ul>
        </div>
    )
}