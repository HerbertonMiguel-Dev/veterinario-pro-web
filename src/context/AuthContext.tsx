import { createContext, ReactNode, useState } from 'react'
import { destroyCookie, setCookie } from 'nookies'
import Router from 'next/router'

import { api } from '../services/apiClient'

interface AuthContextData {
  usuario: UsuarioProps;
  estaAutenticado: boolean;
  signIn: (credenciais: SignInProps) => Promise<void>;
}

interface UsuarioProps {
  id: string;
  nome: string;
  email: string;
  endereco: string | null;
  assinaturas?: AssinaturaProps | null;
}

interface AssinaturaProps {
  id: string;
  status: string;
}

type AuthProviderProps = {
  children: ReactNode;
} 

interface SignInProps {
  email: string;
  senha: string;
}

export const AuthContext = createContext({} as AuthContextData)

export function signOut(){
  console.log("ERORR LOGOUT");
  try{
    destroyCookie(null, '@veterinario.token', { path: '/' })
    Router.push('/login');

  }catch(err){
    console.log("Error ao sair")
  }
}

export function AuthProvider({ children }: AuthProviderProps){
  const [usuario, setUsuario] = useState<UsuarioProps>()
  const estaAutenticado = !!usuario;

  async function signIn({ email, senha }: SignInProps){
    try{
      const response = await api.post("/sessao", {
        email,
        senha,
      })

      const { id, nome, token, assinaturas, endereco} = response.data;

      setCookie(undefined, '@veterinario.token', token, {
        maxAge: 60 * 60 * 24 * 30, // Expirar em 1 mês
        path: '/'
      })

      setUsuario({
        id,
        nome,
        email,
        endereco,
        assinaturas
      })

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      
      Router.push('/dashboard')


    }catch(err){
      console.log("ERRO AO ENTRAR", err)
    }
  }


  return(
    <AuthContext.Provider value={{ usuario, estaAutenticado, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}