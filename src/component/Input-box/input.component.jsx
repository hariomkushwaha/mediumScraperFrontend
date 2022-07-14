import React from "react";
import axios from 'axios';
import { Input,Button,Box,Heading,Center } from "@chakra-ui/react"
import { SearchIcon } from '@chakra-ui/icons'
import { Cardlist } from "../card-list/card-list.component";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ThreeDots } from  'react-loader-spinner'


import "./input-box.styles.css";

class InputBox extends React.Component {

  state = {
    qu: '',
    scraped:[],
    isLoading:false,
    errorMessage:""
  }
  

  handleChange = event => {
    this.setState({ qu: event.target.value });
  }

  


  handleSubmit = event => {
    event.preventDefault();

     
    const data = {
      qu: this.state.qu
    };
    if(data.qu === ""){
    
    console.log(data);
    this.setState({errorMessage:"{ Empty search is not valid }"})
  }
    else{
      this.setState({errorMessage:""})
    this.setState({isLoading: true})

    axios.post(`https://apithatscrape.herokuapp.com/API/scrape`, { data })
      .then(res => {
        this.setState({isLoading: false,
          scraped:res.data})
        console.log(this.state.scraped);
      })
      .catch(() => {
        this.setState({isLoading: false,
          errorMessage:"{ Ack! We can't find the page... Plz Refresh !!! }"})
     });
    }
      
  }

  render() {
    const { scraped,isLoading,errorMessage } = this.state;

    return (
      
      <Box>
      
      <Center
      h="100px">
      <Heading>The Medium Scraper</Heading>
      </Center>
      <form onSubmit={this.handleSubmit}>
    
    <Input placeholder="search.." size="lg" 
    width="40%"
    top="20px"
    marginLeft="28%"
    name="qu"
    onChange={this.handleChange}
    />
   
    <Button colorScheme="green" size="lg" 
     top="18px"
    left="10px"
    type="submit"
    // onClick={this.handleSubmit} 
    disabled={isLoading}
    >
    <SearchIcon w={4} h={4} color="white" />
     
    </Button>
    </form>
      <div className='layout'>
      {isLoading ? <ThreeDots  marginLeft="20%" color="#000000" height={80} width={80}/> : <Cardlist  scraped={scraped}/>}
      {errorMessage && <div className="error">{errorMessage}</div>}
      </div>
    
    </Box>
    )
  }
}

export default InputBox;
