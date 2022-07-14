import React from 'react';
import { Box,Heading,Text,Image,Stack,Avatar } from "@chakra-ui/react"
 
import "./card.styles.css";

export const Card = props => (
  
    <Box paddingTop="10px">
        <Box p={3} >
        <a href={props.scraped.link}><Box
        p={5}
        shadow="lg"
        borderWidth="3px"
        
        flex="1"
        borderRadius="md"
        width={["100%","70%"]}
        className="card"
      >
      <Stack direction='row'>
      <Box>
      {props.scraped.blogImage && <Image boxSize='200px' width={'1000px'} src={props.scraped.blogImage} alt='Blog Image' />}
      
    </Box>
      <Box paddingLeft={'50px'}>
      
        <Heading fontSize="xl" align="left">{props.scraped.title}</Heading>
        
        <Text mt={4} align="left">{props.scraped.text}</Text>
        </Box>
        </Stack>

        <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
        <Avatar
          src={props.scraped.image}
          alt={'Author'}
        />
        <Stack direction={'column'} spacing={0} fontSize={'sm'}>
          <Text fontWeight={600}>{props.scraped.author}</Text>
          <Text color={'gray.500'}>{props.scraped.dates} · {props.scraped.readTime}</Text>
        </Stack>
      </Stack>

      </Box></a>
   
      </Box>
    </Box>
);