import HomeFenex from '../../assert/fenixRh.png'

import {useNavigate } from 'react-router-dom'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import api from '../../services/api'

import { useUser } from '../../hooks/UserContext'

import Conteiner from '../../components/Container'
import Image from '../../components/Image'
import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import {
  InputLabel,
  Input,
  P,
  Button
} from './styles'

function Login () {
  const navigate  = useNavigate()

  const {putUserData, userData} = useUser()

  const schema = Yup.object().shape({
    code_register: Yup.string().required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = async clientData => { 
    try{
    const {data} = await api.post('sessions', {
        code_register: clientData.code_register,
        password: clientData.password
      })
    toast.success('seja bem-vindo')

    putUserData(data)
    console.log(userData)

    setTimeout(()=>{
      navigate('/home/holerite')
    },2000)

    }catch(err){
      toast.error('usuario ou senha incorretos', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
    }

  }

  return (
    <Conteiner>
      <Image marginTop={true} alt="log-imagem-homeFenex" src={HomeFenex} />
      <H1>Bem vindo!</H1>
      <ContainerItens>

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <InputLabel>Codigo de registro</InputLabel>
          <Input type='code_register'{...register('code_register')} placeholder="00001" />

          {errors.code_register && <P>{errors.code_register.message}</P>}

          <InputLabel>Senha</InputLabel>
          <Input type='password'{...register('password')} placeholder="" />

          {errors.password && <P>{errors.password.message}</P>}

          <Button type='submit'>Entrar</Button>
        </form>
      </ContainerItens>
    </Conteiner>
  )
}

export default Login
