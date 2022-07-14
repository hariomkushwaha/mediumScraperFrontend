import React from 'react';
import { Tag, HStack} from "@chakra-ui/react"
// import "./history-card.styles.css";


export const HistoryCard = props => (
    <HStack spacing={4}>
    <Tag size='lg' variant='solid' colorScheme='teal'>
      {props.most.text}
    </Tag>
 </HStack>
  
);