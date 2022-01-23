import React,{useState, useEffect}  from 'react';
import './App.css';
import getWeatherData from './GetWeatherData';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Card,Button,Row,Col, Container,ImgOverlay,} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCloud} from "@fortawesome/free-solid-svg-icons";
import {ScaleLoader} from 'react-spinners';

function App() {
    
  const [weatherData, setWeatherData]=useState(null);
  const [city, setCity]=useState('chennai');
  const [loading, setLoading] = useState(false);
const getData =async ()=>{
  try{
    setLoading(true);
    const data=await getWeatherData(city)
    setWeatherData(data)
    console.log(data)
    setLoading(false);

  }catch(error){
    console.log(error.message);
    setLoading(false);
  }
}

const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
const handleChange= (e)=>{
  setCity(e.target.value);
}

const handleClick =(e)=>{
  e.preventDefault();
  getData()
}
useEffect(()=>{
  getData();
},[]); 
   return(
                <div className='Weather'>
                <div>      
                  <Container>
                    <Row>
                       <Col sm={12} md={12} className="border-0">
                         <Card className="border-0 border-rounded" style={{ width: '30rem'}}>
                         <Card.Img className='Image' variant="top" src="https://source.unsplash.com/600x600/?nature,forest"/>
                        <Card.ImgOverlay>
                          <h1 className="text-center">Weather App</h1>
                          <input type="text" id="firstNumber" className='px-4 py-2 mx-1'onChange={handleChange}  placeholder='Seach city...' /> 
                          <span><Button variant="primary" onClick={handleClick}><i className="fas fa-search"></i> Search</Button></span>
                         {loading ? (
                         <div className="loader-container">
                         <ScaleLoader
                         css={override}
                         size={200}
                         color= {"#fff"}
                         loading= {loading}
                         />
                  </div>
        ) :(
          <div>
            {weatherData !== null ? (<div>
                            <Card.Title className='text-center'>
                 </Card.Title>
                 <h1 className='text-center'>{weatherData.name}</h1>
                 <p className="Card-text lead text-center">
                     Thursday,May 14,2021</p>
                     <hr></hr>
                     <h1 className='text-center cloud'><FontAwesomeIcon icon={faCloud}></FontAwesomeIcon></h1> 
                     <h1 className='text-center'>{weatherData.name}</h1>                                   
                    <div>
                    <h1 className="text-center">
                    {Math.floor(weatherData.main.temp - 273.15)}&deg;C</h1>
                    </div>
                          </div>) : null}
          </div>
        )}
                </Card.ImgOverlay>
               </Card>
             </Col>
            </Row>
         </Container>
                
       </div>
       </div>
    )  
}

// {Math.floor(weatherData.main.temp - 273.15)}
export default App;

