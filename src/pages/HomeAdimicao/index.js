import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Home from '../Home';
import Button from '../../components/Button';
import ConteinerMenu from '../../components/ContainerMenu';
import DivPopUp from '../../components/DivPopUp';
import { Container, Body, H1, H2, InputLabel, Input } from './styles';
import api from '../../services/api';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

function HomeAdimicao() {
  const [tableHolerite, setTableHolerite] = useState([]);
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar a exibição do popup

  function handleAddButtonClick() {
    // Função para lidar com o clique no botão de adicionar
    setShowPopup(true); // Exibe o popup
  }

  function handleExitButtonClick() {
    // Função para lidar com o clique no botão de sair do popup
    setShowPopup(false); // Esconde o popup
  }

  useEffect(() => {
    async function loadTables() {
      const { data } = await api.get('/home/holerite');
      setTableHolerite(data);
    }
    loadTables();
  }, []);

  const schema = Yup.object().shape({
    // Esquema de validação com Yup
    File: Yup.string().required('Campo obrigatório'), // Arquivo é obrigatório
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema), // Resolver para o React Hook Form usando o Yup
  });

  const onSubmit = async (clientData) => {
    // Função para lidar com o envio do formulário
    const { data } = await api.post(`home/holerite/06_2023`, {
      file: clientData.file,
      user_Id: "7339db10-ec7c-4082-8211-095326f93837"
    });
    console.log(data.userId);
  };

  return (
    <Body>
      {showPopup && (
        <DivPopUp className="popup">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <InputLabel>Codigo de registro</InputLabel>
            <Input type="file" {...register('file')} placeholder="" />

            {errors.file && <p>{errors.file.message}</p>}

            <input type='calendar'></input>

            <button onClick={handleExitButtonClick}>Exit</button>
            <Button type="submit">Cadrastrar</Button>
          </form>
        </DivPopUp>
      )}
      
      <div>
        <Home />
        <Container>
          <H1>Admição</H1> {/* Título */}
          <ConteinerMenu>
            <H2>Aqui você vai adicionar seus documentos</H2>
            <Button onClick={handleAddButtonClick}>+ Adicionar</Button> {/* Botão de adicionar holerite */}
          </ConteinerMenu>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Referência</th>
                <th>Cod Funcionários</th>
                <th>Nome</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeia os holerites para exibir na tabela */}
              {tableHolerite &&
                tableHolerite.map((holerite) => (
                  <tr key={holerite.id}>
                    <td>{holerite.reference}</td>
                    <td>{holerite.User.code_register}</td>
                    <td>{holerite.User.name}</td>
                    <td>
                      <Link to={holerite.url}>Visualizar</Link> {/* Link para visualizar o holerite */}
                      <button>deletar</button> {/* Botão de deletar holerite */}
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </Body>
  );
}

export default HomeAdimicao;