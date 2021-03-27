import React from 'react'
import styled from 'styled-components'
function ProductTwo() {
    return (
        <Container>
           <Title>
           
New Apple iMac with Retina 5K Display (27-inch, 8GB RAM, 256GB SSD Storage)
           </Title>
           <Price>
                $1699
           </Price>
           <Rating>
           ⭐⭐⭐⭐⭐
           </Rating>
           <Image src='https://images-na.ssl-images-amazon.com/images/I/71KR2i6-WaL._AC_SL1500_.jpg' />
        <ActionSection>
           <AddToCartButton>
               Add to Cart
            </AddToCartButton> 
        </ActionSection>
        </Container>
    )
}

const Container = styled.div `
background-color: white;
z-index:10;
flex:1;
max-height:400px;
margin:10px;
padding:20px;
display:flex;
flex-direction:column;


`;
const Title = styled.span `

`;
const Price = styled.span `
font-weight: 500;
margin-top: 3px;

`;
const Rating = styled.div `

`;
const Image = styled.img `
    max-height: 200px;
    object-fit: contain;
`;
const AddToCartButton = styled.button `
    width: 100px;
    height: 30px;
    background-color:#f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
`;
const ActionSection= styled.div `
display:flex;
justify-content:center;
margin-top:12px;
`

export default ProductTwo
