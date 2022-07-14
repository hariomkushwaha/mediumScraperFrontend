import React from 'react';

import {
    ChakraProvider,
    Box,
    theme,
  } from '@chakra-ui/react';
  import { ColorModeSwitcher } from '../../ColorModeSwitcher';
  import InputBox from "../../component/Input-box/input.component";
  import {NavBar} from '../../component/navbar/navbar-component';

const Homepage = () =>{
        return (
            <ChakraProvider theme={theme}>
              <Box>
                  
                  <NavBar>
                  <ColorModeSwitcher justifySelf="flex-end" />
                  </NavBar>
                  <InputBox/>
              </Box>
            </ChakraProvider>
    )
}


export default Homepage;