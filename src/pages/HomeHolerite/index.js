
import Home from '../Home';
import {Table} from 'react-bootstrap';

import Button from '../../components/Button';
import ConteinerMenu from '../../components/ContainerMenu'
import { 
  Container,
  Body, 
  H1, 
  H2,
} from './styles';

import api from '../../services/api'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function HomeHolerite () {
  const [TableHolerite, setTableHolerite] = useState([]);

  useEffect(()=>{
    async function loadTabels(){
      const {data} = await api.get('/home/holerite')
      setTableHolerite(data)
    }
    loadTabels()
  }, [])

  return (
    <Body>
      <Home />
      <Container>
        <H1>Holerites</H1> {/* Título */}
        <ConteinerMenu>
          <H2>Aqui você pode adicionar e remover holerites dos funcionários</H2>
          <Button>+ Adicionar</Button>
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
          {
            TableHolerite && TableHolerite.map( holerite => (
            <tr key={holerite.id}>
              <td>{holerite.reference}</td>
              <td>{holerite.User.code_register}</td>
              <td>{holerite.User.name}</td>
              <td>
                <Link to={holerite.url}>Visualizar</Link>
                <button>deletar</button>  
              </td>
            </tr>
            ))
          }
          </tbody>
        </Table>

      </Container>
    </Body>
  )
}

export default HomeHolerite
