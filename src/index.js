import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {ChakraProvider, ColorModeScript} from "@chakra-ui/react";

ReactDOM.render(
    <ChakraProvider>
        <ColorModeScript initialColorMode={"dark"}/>
            <App />
    </ChakraProvider>,
  document.getElementById('root')
);
