import { useState, useContext } from 'react';
import Head from 'next/head'
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'

import Link from 'next/link'

import { AuthContext } from '../../context/AuthContext'
import { canSSRGuest } from '../../utils/canSSRGuest'

export default function Cadastro() {
  const { signUp } = useContext(AuthContext);

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  async function processarCadasro() {
    if(nome === '' && email === '' && senha === ''){
      return;
    }

    await signUp({
      nome,
      email,
      senha
    })
  }

  return (
    <>
      <Head>
        <title>Crie sua conta no veterinárioPRO</title>
      </Head>
      <Flex background="veterinario.900" height="100vh" alignItems="center" justifyContent="center">

        <Flex width={640} direction="column" p={14} rounded={8}>
          <Center p={4}>
            <Image
              src={logoImg}
              quality={100}
              width={240}
              objectFit="fill"
              alt="Logo barberpro"
            />
          </Center>

          <Input
            background="veterinario.400"
            variant="filled"
            size="lg"
            placeholder="Nome da Clinica"
            type="text"
            mb={3}
            value={nome}
            onChange={ (e) => setNome(e.target.value) }
          />

          <Input
            background="veterinario.400"
            variant="filled"
            size="lg"
            placeholder="email@email.com"
            type="email"
            mb={3}
            value={email}
            onChange={ (e) => setEmail(e.target.value) }
          />

          <Input
            background="veterinario.400"
            variant="filled"
            size="lg"
            placeholder="********"
            type="text"
            mb={6}
            value={senha}
            onChange={ (e) => setSenha(e.target.value) }
          />

          <Button
            background="button.cta"
            mb={6}
            color="gray.900"
            size="lg"
            _hover={{ bg: "#63f88d" }}
            onClick={processarCadasro}
          >
            Cadastrar
          </Button>


          <Center mt={2}>
            <Link href="/login">
              <Text cursor="pointer">Já possui uma conta?<strong>Faça o login</strong></Text>
            </Link>
          </Center>


        </Flex>

      </Flex>
    </>
  )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
  return{
    props: {}
  }
})