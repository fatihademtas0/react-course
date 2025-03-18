import './App.css'
import Container from './Container'
import Product from './Product'

function App() {

  return (
    <div>
			{/* <Product productName="Shoes" price={3000}/> */}
		
			<Container>

				<Product productName="Laptop" price= {999}/>

			</Container>

		</div>
  )
}

export default App
