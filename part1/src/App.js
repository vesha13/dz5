
import './App.css';
import { Image } from './components/moleculs/Image/Image';  
import {CardBody} from './components/moleculs/CardBody/CardBody'
import {Header} from './components/atoms/Header/Header'

function App() {
const texts = [
  {
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  }
]

const titels = [
  {
    title: "Card title"
  }
]

const headers = [
  {
    header: "Featured"
  }
]
const images = [
  {
    src: "https://camo.githubusercontent.com/e8cac53cd22e95a470844c0edda4b9b32261b0c7c01592066eb9fbeffc0d343e/68747470733a2f2f7777772e706870726f2e62652f6d656469612f3434302f646f776e6c6f61642f726561637425343034782e706e673f763d32",
    alt: 'react'
  }
]
  const links =[
    {
    name: 'Go Somewhere',
    link: 'https://getbootstrap.com/docs/4.3/components/card/'
    }
]

  return (
    <div className='card'>
    <div >
      <Image images={images}></Image>
      <CardBody texts = {texts} titels ={titels} links ={links}></CardBody>
    </div>

    <div className=' card'></div>
    <div className=' card'></div>
    <div >

      <Header headers={headers} ></Header>
      <CardBody texts = {texts} titels ={titels} links ={links}></CardBody>
    </div>
    </div>
  );
}

export default App;
