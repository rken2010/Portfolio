import React from 'react';
import { Text, Heading, Box, Stack, List, Icon, Image } from '@chakra-ui/react';

import { TfiBlackboard,TfiUser, TfiRulerPencil, TfiMoney, TfiTimer  } from "react-icons/tfi";

export default function Direction({empresa}) {
  return (
    <Stack as="section" direction={["column", "row"]}>
      <Box
        w="100%"
      >
        <Box
        position="absolute"
        >
          <Image 
            src='https://plus.unsplash.com/premium_photo-1676321046535-848a104819ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' 
            alt='Dan Abramov'
            boxSize="120px"
            position="relative"
            objectFit='cover'
            borderRadius='full'
               />
        </Box>
        <Box
        position="relative"
        >
        <Image 
        src='https://plus.unsplash.com/premium_photo-1676321046535-848a104819ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80' 
        alt='Dan Abramov'
        position="relative"
        objectFit='cover'
        boxSize="40vh"
        top="50"
        left="50"
        />
        </Box>
        <Box
        position="relative"
        >
        <Image 
        src='https://images.unsplash.com/photo-1595846723416-99a641e1231a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60' 
        alt='Dan Abramov'
        position="relative"
        objectFit='cover'
        boxSize="40vh"
        top="50"
        left="50"
        />
        </Box>
        <Box
        position="absolute"
        >
          <Image 
            src='https://images.unsplash.com/photo-1678875202033-544741a790f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1448&q=80' 
            alt='Dan Abramov'
            boxSize="120px"
            position="relative"
            objectFit='cover'
            borderRadius='full'
            left="100%"
            />
        </Box>


      </Box>
      <Stack
        p={["5px", "15px"]}
        spacing={5}
      >
        <Box>
        <Heading as="h2">Gestionamos tu Proyecto para que se vuelva realidad</Heading>
          <Text>
          ¿Necesitas llevar adelante un proyecto de construcción y deseas asegurarte de que todo se desarrolle de manera exitosa y eficiente? ¡Estamos aquí para ayudarte! Nuestro equipo  está listo para brindarte una dirección de obra de forma eficaz y profesional.
          </Text>
          En {empresa}, entendemos que cada proyecto de construcción es único y requiere una atención especializada. Nuestros profesionales experimentados supervisarán cada etapa de tu proyecto para garantizar su éxito. Desde el inicio hasta la finalización, estaremos contigo en cada paso del camino.
        </Box>
        <Box>
        <Text>
        Nuestro servicio de dirección de obra incluye:
        </Text>
        <Stack
          direction={["column", "row"]}
          flexWrap="wrap"
          w="60vw"
          align="center"
          
        >
          <Box 
            boxSize={["100vw", "18vw"]}
            borderRadius='md'
            align="center"
            flexDirection="column"
            p={["5px", "10px", "15px"]}
            fontSize='xs'
            m={["2px","5px","7px"]}
            boxShadow='2xl'

          >
          <Icon as={TfiBlackboard} color='green.500' boxSize={8} />
            <Text>Planificación: </Text>
            <Text>
              Trabajaremos en colaboración contigo para entender tus objetivos y requisitos específicos. Con una planificación detallada, nos aseguraremos de que tu proyecto se ajuste a tus necesidades y presupuesto.
            </Text>
          </Box>
          <Box
          boxSize={["100vw", "18vw"]}
          borderRadius='md'
          align="center"
          flexDirection="column"
          p={["5px", "10px", "15px"]}
          fontSize='xs'
          boxShadow='2xl'
          >
          <Icon as={TfiUser} color='green.500' boxSize={8}/>
          <Text> Coordinación de equipos: </Text>
          Organizaremos y coordinaremos a todos los equipos involucrados en la construcción. 
          </Box>
          <Box
          boxSize={["100vW", "18vw"]}
          borderRadius='md'
          align="center"
          
          flexDirection="column"
          p={["5px", "10px", "15px"]}
          fontSize='xs'
          boxShadow='2xl'
          >
        <Icon as={TfiRulerPencil} color='green.500' boxSize={8} />
        <Text>Control de calidad: </Text>Nos aseguraremos de que todos los materiales utilizados sean de la mejor calidad y que se sigan los mejores procedimientos de construcción.
        </Box>
        <Box
          boxSize={["100vW", "18vw"]}
          borderRadius='md'
          align="center"
          flexDirection="column"
          p={["5px", "10px", "15px"]}
          fontSize='xs'
          boxShadow='2xl'
        >
        <Icon as={TfiMoney} color='green.500' boxSize={8}/>
        <Text> Gestión de presupuesto: </Text> Mantendremos un control sobre los costos. Nuestro objetivo es maximizar el valor de tu inversión y evitar sorpresas desagradables.
        </Box>
        <Box
           boxSize={["100vW", "18vw"]}
           borderRadius='md'
           align="center"
           
           flexDirection="column"
           p={["5px", "10px", "15px"]}
           fontSize='xs'
           boxShadow='2xl'
        >
        <Icon as={TfiTimer} color='green.500' boxSize={8}/>
        <Text> Cumplimiento de plazos:</Text> Sabemos lo importante que es para ti completar tu proyecto a tiempo. Trabajaremos para asegurarnos de que se cumplan todos los plazos establecidos y que tu proyecto se entregue según lo acordado.
        </Box>
        </Stack>
        </Box>
        <Box>
        En {empresa}, nos enorgullece ofrecer un servicio de dirección de obra que se destaca por su profesionalismo, experiencia y resultados sobresalientes. Confía en nosotros para hacer realidad tus sueños de construcción.

        No pierdas más tiempo y dinero preocupándote por los detalles de tu proyecto. ¡Permítenos encargarnos de la dirección de obra y asegurarte un proceso de construcción exitoso! Contáctanos hoy mismo para obtener más información y solicitar una consulta gratuita.

        ¡Tu proyecto de construcción está en buenas manos con {empresa}!
        </Box>
      </Stack>
    </Stack>
  )
}