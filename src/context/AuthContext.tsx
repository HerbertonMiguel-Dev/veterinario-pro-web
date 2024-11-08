import { createContext, ReactNode, useState } from 'react'

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

export function AuthProvider({ children }: AuthProviderProps){
  const [usuario, setUsuario] = useState<UsuarioProps>()
  const estaAutenticado = !!usuario;

  async function signIn({ email, senha }: SignInProps){
    console.log("VAMOS FAZER SEU LOGIN")
    
    console.log({
      email,
      senha
    })
  }


  return(
    <AuthContext.Provider value={{ usuario, estaAutenticado, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}