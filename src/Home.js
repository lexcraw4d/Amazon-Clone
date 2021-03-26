
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import Product from './Product';

function Home() {
    return (
        <div>
        <Container>
			<Banner>
            </Banner>

			<Content>
                <Product />
                <Product />
                
            </Content>
		</Container>
        </div>
    )
}


const Container = styled.div `
    max-width: 1500px;
    margin: 0 auto;
    
`;

const Banner = styled.div `
background-image: url('https://m.media-amazon.com/images/G/01/prime/newsletter/7.8pd._V506428698_.jpg');
min-height: 600px;
background-position:center top;
background-size:70%;
width:100%;
z-index:1;
mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))
`;

const Content = styled.div `
    padding-left:10px;
    padding-right: 10px;
    margin-top: -350px;
    z-index:100;
    display:flex;
`;

export default Home