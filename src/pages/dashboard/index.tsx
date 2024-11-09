import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';

export default function Dashboard(){
  return(
    <>
      <Head>
        <title>veterinário - Minha Clinica</title>
      </Head>
      <Flex>
        <Text>Bem vindo ao dashboard</Text>
      </Flex>
    </>
  )
}