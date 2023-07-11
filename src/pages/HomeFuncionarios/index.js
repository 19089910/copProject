
import Home from '../Home';

import Button from '../../components/Button';
import ConteinerMenu from '../../components/ContainerMenu';
import {
  Container,
  Body, 
  H1, 
  H2,
  DivPopUp,
} from './styles';


import api from '../../services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


import { Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function HomeFuncionarios () {
  const [TableHolerite, setTableHolerite] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', password: '', admin: false });

  useEffect(()=>{
    async function loadTabels(){
      const {data} = await api.get('/home/holerite')
      setTableHolerite(data)
    }
    loadTabels()
  }, [])

  function handleAddButtonClick() {
    setShowPopup(true);
  }

  function handleExitButtonClick() {
    setShowPopup(false);
  }

  return (
    <Body>
      {showPopup&& (
        <DivPopUp className="popup">
          <input
            type="text"
            placeholder="Name"
            value={formValues.name}
            onChange={(e) => setFormValues({ ...formValues, name: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={formValues.password}
            onChange={(e) => setFormValues({ ...formValues, password: e.target.value })}
          />
          <label>
            Admin:
            <input
              type="checkbox"
              checked={formValues.admin}
              onChange={(e) => setFormValues({ ...formValues, admin: e.target.checked })}
            />
          </label>
          <button onClick={handleExitButtonClick}>Exit</button>
        </DivPopUp>
      )}
      
      <div>
        <Home />
        <Container>
          <H1>Funcionários</H1> {/* Título */}
          <ConteinerMenu>
            <H2>Aqui você pode adicionar e remover Funcionários</H2>
            <Button 
            onClick={() => handleAddButtonClick()}
            >+ Adicionar</Button>
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
            {
              TableHolerite && TableHolerite.map( holerite => (
              <tr key={holerite.id}>
                <td>{holerite.User.name}</td>
                <td>{holerite.User.code_register}</td>
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
      </div>
    </Body>
  )
}

export default HomeFuncionarios
