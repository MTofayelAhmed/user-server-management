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
app.use(express.json())
app.get('/users', (req, res)=> {
  res.send(users)
});

app.post ('/users', (req, res)=>{


  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser)
  res.send(newUser)


console.log(req.body)
console.log("post api hitting")
})


app.get('/', (req, res)=>{
  res.send("user management system is running")
});

app.listen (port,()=>{
  console.log(`port is listening on ${port} `)
})