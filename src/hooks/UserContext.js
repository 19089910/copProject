import React, {createContext, useContext,useEffect,useState} from "react";
import PropTypes from "prop-types";

// Cria um novo contexto para os dados do usuário
const UserContext = createContext({})

// Componente UserProvider que irá envolver a 
// aplicação e fornecer os dados do usuário para seus componentes filhos
export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState({})

     // Função para atualizar os dados do usuário e armazená-los no localStorage
    const putUserData = async userInfo => {
        setUserData(userInfo)

         // Armazena os dados do usuário no localStorage como uma string
        await localStorage.setItem('fenixrh:userData', JSON.stringify(userInfo))
    }
// Hook useEffect para carregar os dados do usuário do localStorage quando o componente for montado
    useEffect(() => {
        const loadUserData = async () => {
            // Obtém os dados do usuário do localStorage
            const clientInfo = await localStorage.getItem('fenixrh:userData')

            if(clientInfo){
                 // Se existirem dados do usuário, faz o parse e os coloca no estado
                setUserData(JSON.parse(clientInfo))
            }
    }
        loadUserData()
    }, [])
    // Provê os dados do usuário e a função putUserData para os componentes filhos através do contexto
    return(
        <UserContext.Provider value={{ putUserData, userData }}>
            {children}
        </UserContext.Provider>
    )
}

// Hook personalizado para consumir os dados do usuário do contexto
export const useUser = () => {
    // Utiliza o hook useContext para obter o contexto UserContext
    const context = useContext(UserContext)

    // Verifica se o contexto foi encontrado, caso contrário, lança um erro
    if(!context){
        throw new Error('userUser must be used with UserCOntext')
    }
     // Retorna o contexto que contém os dados do usuário e a função putUserData
    return context
}
// Define a propriedade "children" do componente UserProvider como um nó (node) React através do prop-types
UserProvider.prototype ={
    children: PropTypes.node
}