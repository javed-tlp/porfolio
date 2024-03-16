const express=require('express')
const app= express()
const port =3001
const cors=require('cors')
app.use(cors())
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

const mail=require('./mail')

app.post('/send', async (req,res)=>{
    const {name, email, message}=req.body
    result= {name,email,message}
    mail(name,email,message)
    res.send({message:"mail sent",result})

})


app.get("/", (req, res) => {
  res.send("connected");
});



app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})

