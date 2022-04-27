import logo from './logo.svg';
import './App.css';
import BuyPage from './components/BuyPage'
import { useState } from 'react';
import { Container, Col, Row,  } from 'reactstrap'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { ToastContainer, toast } from 'react-toastify';
import Cart from './components/Cart';
import '../node_modules/react-toastify/dist/ReactToastify.css';
//import { Toast } from 'bootstrap';

function App() {

  const [Items, setItems] = useState([]);


  const addInCart = (item) => {
    const isAlreadyadded = Items.findIndex(function (array) {
      return array.id == item.id

    });


    if(isAlreadyadded !== -1)
    {
      toast("already added in cart",{type : "error"});
      return;
    }


    setItems([...Items,item]);
  }


const buyNow=()=>
{
  setItems([]);
  toast("Purchase Complete",{type:"success"});
}

const removeItem=(item)=>
{
setItems(Items.filter((val)=> val.id !== item.id));
}

  return (

<>
<Container fluid>

<ToastContainer />
<Row>
  <Col md={8} >
  <BuyPage addInCart={addInCart}  ></BuyPage>
  </Col>
  <Col md={4}>
  <Cart CartItem={Items} RemoveItem={removeItem} BuyNow={buyNow} ></Cart>
  </Col>

</Row>
</Container>


    <div className="App">
      <BuyPage addInCart="test"  ></BuyPage>
    </div>
    </>
  );
}

export default App;
