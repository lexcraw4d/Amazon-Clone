import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';
import ProductTwo from './ProductTwo';
import { db } from './firebase';
import { useState } from 'react';

function Home() {
	const [products, setProducts] = useState([]);

	const getProducts = () => {
		db.collection('products').onSnapshot((snapshot) => {
			let tempProducts = [];

			tempProducts = snapshot.docs.map((doc) => ({
                id:doc.id,
                product: doc.data(),
                }
            ));
            setProducts(tempProducts)
		})
	}
    

	getProducts();
    console.log(products)

	return (
		<div>
			<Container>
				<Banner></Banner>

				<Content>
					<Product />
					<ProductTwo />
					<Product />
				</Content>
			</Container>
		</div>
	);
}

export default Home;
const Container = styled.div`
	max-width: 1500px;
	margin: 0 auto;
`;

const Banner = styled.div`
	background-image: url('https://m.media-amazon.com/images/G/01/prime/newsletter/7.8pd._V506428698_.jpg');
	min-height: 600px;
	background-position: center top;
	background-size: 70%;
	width: 100%;
	z-index: 1;
	mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
`;

const Content = styled.div`
	padding-left: 10px;
	padding-right: 10px;
	margin-top: -350px;
	z-index: 100;
	display: flex;
`;
