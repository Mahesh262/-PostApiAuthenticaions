import { Button } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import {Card,Row,Col} from 'react-bootstrap'
import {AiFillCaretUp,AiFillCaretDown} from 'react-icons/ai'
import { useNavigate } from 'react-router'
import "./Movies.css"
const Details = () => {
   const [ movies, setMovies]= React.useState([])
    const history= useNavigate();
   useEffect(  ()=>{
      
       axios.post("https://hoblist.com/api/movieList",{ category:"movies",language:"kannada",genre:"all", sort:"voting"}).then(res=>setMovies(res.data)).catch(error=>console.log(error.message))
    },[])
     console.log(movies)
      const  logout=()=>{
        localStorage.removeItem("userdetails")
            history('/')
      }
  return (
    <>
     <Button onClick={logout}>Logout</Button>
    <select>Comapny Info
<option value ="CompanyName"> Geekysymergy Technologies PvtLtd</option>
<option value ="Sanjaanagar">Sanjayanagar, Banguluru-56</option>
<option value ="Phone">XXXXXXXXX09 </option>
<option value ="email"> XXXXXX@gmail.com</option>
      </select>
      {movies.result?.map((items,index)=>{
        return(

<Row  key={index}>
        <Col xs ={2}  style={{display:"flex",textAlign:"center",flexDirection:"column",justifyContent:'space-between'}}>
      <Col style={{ padding:"5px", display:"flex",justifyContent:"center",alignItems:"flex-end"}}> <AiFillCaretUp fontSize="40px"/> </Col> 
            <Row style={{display:"flex",justifyContent:"center"}}> {items.voting}  </Row>
          <Col style={{padding:"5px",display:"flex",justifyContent:"center",alignItems:"flex-start"}}> <AiFillCaretDown fontSize="40px"/>  </Col>
           <p>Votes</p>  
      </Col>

      <Col
       xs={3}
      style={{display:"flex"}}
      >
        <Card>
        <Card.Img variant="top"  src={items.poster}  alt ={items.title}  className="card-img" width="100%"/>
        </Card>
      </Col>
       <Col xs={3}>
          <h3> <b>{items.title} </b></h3>
           <small> genre:{items.genre} </small>
          <small> Director:{items.director} </small>
        <small> Stars:{items.stars}</small>
        <small> Mins|{items.language}|{items.releasedDate}  </small>
        <small> views:{items.pageViews} | votedby {items.totalVoted} people  </small>  
       </Col>
       <Button  variant='contained'>Watch Trailer</Button>
      </Row>

        )
      })}
      
    </>
  )
}

export default Details