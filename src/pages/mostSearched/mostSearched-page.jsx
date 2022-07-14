import React from "react";
import axios from 'axios';
import {NavBar} from "../../component/navbar/navbar-component";
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import { HistoryCard } from "../../component/most-search-card/mostSearcherCard.component";
import {
  ChakraProvider,
  Box,
  theme,
  HStack,Heading
} from '@chakra-ui/react';

import {WordCloud} from "../../component/wordcloud/wordcloud.component";

import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
let no =0;
class MostSearched extends React.Component {

  state = {
    most:[]
  }
  

  componentDidMount(e) {

    // e.preventDefault();

    axios.get(`https://apithatscrape.herokuapp.com/API/mostSearched`)
      .then(res => {
        this.setState({
          most:res.data})
        console.log(this.state.most);
      })
      
  }


  render() {
    const { most} = this.state;


    return (
      <>
      <ChakraProvider theme={theme}>
      
      <NavBar>
      <ColorModeSwitcher justifySelf="flex-end" />
      </NavBar>
      <center paddingTop="50px">
      <Heading as='h4' size='md'>Top 5 most searched</Heading>
         
         </center>
      <Box paddingTop="20px" marginLeft="35%">
      
      <HStack spacing={4}>
        {
            most.sort(function(a,b) {
                return a.value - b.value;
            }).reverse().slice(0,5).map(most=> (
            <HistoryCard key={ no++ } most = {most}/>))
          }
      </HStack>
      </Box>
      
      
     <Box marginTop={10}>
     <center>
     <Heading as='h4' size='md'>All searched Value</Heading>
     </center>
     </Box>
     </ChakraProvider>
      <Box  marginLeft="24%">
        <WordCloud most={most}/>
      </Box>
      
      </>
      
      
    )
  }
}

export default MostSearched;
