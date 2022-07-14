import React from "react";
import axios from 'axios';
import { HistoryCard } from "../../component/history-card/history-card.component";
import {NavBar} from "../../component/navbar/navbar-component";
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import {
  ChakraProvider,
  Box,
  theme,
} from '@chakra-ui/react';
let no =0;
class History extends React.Component {

  state = {
    history:[]
  }
  

  componentDidMount(e) {

    // e.preventDefault();

    axios.get(`https://apithatscrape.herokuapp.com/API/history`)
      .then(res => {
        this.setState({
          history:res.data.reverse()})
        console.log(this.state.history);
      })
      
  }

  render() {
    const { history} = this.state;

    return (
      <>
      <ChakraProvider theme={theme}>
      
      <NavBar>
      <ColorModeSwitcher justifySelf="flex-end" />
      </NavBar>
      </ChakraProvider>
      <Box>
      {
        history.map(history=> (
        <HistoryCard key={ no++ } history = {history}/>))
      }
      </Box>
      
      </>
      
      
    )
  }
}

export default History;
