import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';

import './nav-bar.styles.css';


const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    >
    {children}
    
  </Link>
);

export const NavBar = ({children}) => (


    <>
      <Box px={4} className="navbar" >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack spacing={8} alignItems={'center'}>
            <Box>GoComet</Box>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
                <NavLink >
                <Link href='/'>Home</Link>
                </NavLink>
                <NavLink >
                <Link href='/history'>History</Link>
                </NavLink>
                <NavLink >
                <Link href='/mostSearched'>Most Searched</Link>
                </NavLink>
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
         {children}
          </Flex>
        </Flex>
      </Box>

    </>
  );
