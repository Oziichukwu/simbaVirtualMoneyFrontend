import { Avatar, Grid, Paper, TextField, Typography } from '@mui/material'
import React,{useState} from 'react'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import {Link as Linked} from 'react-router-dom'
import TransactionService from '../services/TransactionService'

const Signup = ({history}) => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const registerAppUser = (e)=>{

    e.preventDefault()

    const appUser = {name , email , password}

    TransactionService.registerAppUser(appUser).then((response)=>{

      console.log(response.data)
      history.push("/log-in")

    }).catch((error)=>{
      console.log(error)
    })

  }

const paperStyle = {padding:20,height:'70vh',width:280,margin:'20px auto'}
const avaterStyle = {backgroundColor:'orange'}
const buttonStyle = {margin: '5px 0'}
const buttonStyly = {margin: '20px 0'}
  return (
    <Grid>
        <Paper elevation= {10} style= {paperStyle}>
          <Grid align='center'>
              <Avatar style={avaterStyle}><LockOutlinedIcon/></Avatar>
              <h2>Sign Up</h2>
          </Grid>
          {/* <TextField label='Username' placeholder='Enter username' fullWidth required/>
          <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/> */}
          {/* <TextField id="filled-basic" label="Enter First Name" variant="filled" style = {buttonStyle} fullWidth required /> */}

          <TextField 
            id="filled-basic" 
            label="Enter Name" 
            value = {name} 
            onChange={(e)=>setName(e.target.value)} 
            variant="filled" 
            style = {buttonStyle} fullWidth required 
          />

          <TextField 
            id="filled-basic" 
            label="Enter Email"
            value = {email} 
            onChange={(e)=>setEmail(e.target.value)}  
            variant="filled" 
            type='email' 
            style = {buttonStyle} fullWidth required 
          />

          <TextField 
            id="filled-basic" 
            label="Enter Password"
            value = {password} 
            onChange={(e)=>setPassword(e.target.value)}  
            variant="filled" 
            type='password' 
            style = {buttonStyle} fullWidth required 
          />
          
           <Typography> Already a member ?
              <Linked to="/log-in" underline="hover">
                 sign in   
              </Linked>

           </Typography>

           <Button 
            variant="contained" 
            style = {buttonStyly} fullWidth required
            onClick={(e)=>registerAppUser(e)}
            > Sign Up 
          </Button>
          
        </Paper>
    </Grid>
  )
}

export default Signup