import React from 'react';
import { Box,Flex,Spacer } from "@chakra-ui/react"
import "./history-card.styles.css";


export const HistoryCard = props => (
  <Box  paddingTop="1px" marginLeft="26%">
        <Box bg='white' w='60%' p={7} color='black'
        borderRadius='10px'
        borderWidth="3px"
        shadow="lg"
        className="cardH"
        >
        <Flex>
        <Box p='4'>
        {props.history.query}
        </Box>
        <Spacer />
        <Box p='4'>
        {props.history.date}
        </Box>
      </Flex>
        </Box>
  </Box>
 
  
);