const express = require ('express')
const app = express();
const port =  5000
const cors = require ('cors')
const users = [
     {id: 1, Name: 'sabila', email: 'sabila@gmail.com'},
    {id: 2, Name: 'kabila', email: 'kabila@gmail.com'},
    {id: 3, Name: 'mabila', email: 'mabila@gmail.com'}
]

app.use(cors())
app.get('/users', (req, res)=> {
  res.send(users)
});


app.get('/', (req, res)=>{
  res.send("user management system is running")
});

app.listen (port,()=>{
  console.log(`port is listening on ${port} `)
})