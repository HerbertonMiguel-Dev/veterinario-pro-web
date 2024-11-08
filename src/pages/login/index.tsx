import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image';
import logoImg from '../../../public/images/logo.svg'
import { Flex, Text, Center, Input, Button } from '@chakra-ui/react'

import Link from 'next/link'

export default function Login(){
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')


  function processarLogin(){
    console.log(email);
    console.log(senha);
  }

  return(
    <>
      <Head>
        <title>veterinário - Faça login para acessar</title>
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
            onClick={processarLogin}
          >
            Acessar
          </Button>


          <Center mt={2}>
            <Link href="/cadastro">
              <Text cursor="pointer">Ainda não possui conta? <strong> Cadastre-se</strong></Text>
            </Link>
          </Center>


        </Flex>

      </Flex>
    </>
  )
}