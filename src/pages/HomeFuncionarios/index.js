import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import Home from '../Home';
import Button from '../../components/Button';
import ConteinerMenu from '../../components/ContainerMenu';
import DivPopUp from '../../components/DivPopUp';
import api from '../../services/api';
import {
  Body,
  Container,
  H1,
  H2,
  InputLabel,
  Input,
} from './styles';

function HomeFuncionarios() {
  const [tableEmployee, setTableEmployee] = useState([]); // Array de funcionários
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
    // Função para carregar os funcionários da API
    async function loadTables() {
      const { data } = await api.get('/home/funcionarios');
      setTableEmployee(data);
    }
    loadTables();
  }, []);


  const schema = Yup.object().shape({
    // Esquema de validação com Yup
    name: Yup.string().required('Campo obrigatório'), // Nome é obrigatório
    password: Yup.string().required('Campo obrigatório'), // Senha é obrigatória
    admin: Yup.boolean().default(false), // Administração é um booleano com valor padrão falso
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
    const { data } = await api.post('newUsers', {
      name: clientData.name,
      password: clientData.password,
      admin: clientData.admin,
    });
    console.log(data);
  };

  async function deleteButtonEmployee(employee) {
    // Função para deletar um pedido de cliente
    await api.delete(`/home/funcionarios/${employee}`);
  }

  return (
    <Body>
      {showPopup && (
        <DivPopUp className="popup">
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
            <InputLabel>Codigo de registro</InputLabel>
            <Input type="name" {...register('name')} placeholder="" />

            {errors.name && <p>{errors.name.message}</p>}

            <InputLabel>Senha</InputLabel>
            <Input type="password" {...register('password')} placeholder="" />

            {errors.password && <p>{errors.password.message}</p>}
            <label>
              Admin:
              <input type="checkbox" {...register('admin')} />
            </label>

            <button onClick={handleExitButtonClick}>Exit</button>
            <Button type="submit">Cadrastrar</Button>
          </form>
        </DivPopUp>
      )}

      <div>
        <Home />
        <Container>
          <H1>Funcionários</H1> {/* Título */}
          <ConteinerMenu>
            <H2>Aqui você pode adicionar e remover Funcionários</H2>
            <Button onClick={handleAddButtonClick}>+ Adicionar</Button> {/* Botão para adicionar funcionário */}
          </ConteinerMenu>

          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Cod Funcionários</th>
                <th>Ação</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapeia os funcionários para exibir na tabela */}
              {tableEmployee &&
                tableEmployee.map((employee) => (
                  <tr key={employee.id}>
                    <td>{employee.name}</td>
                    <td>{employee.code_register}</td>
                    <td>
                      <button onClick={() => deleteButtonEmployee(employee.id)}>
                        deletar
                      </button>
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

export default HomeFuncionarios;