import express from 'express'

const PORT = process.env.PORT||8080

const app = express()
app.use(express.json())

app.get('/test', (res,req) =>{
    
})

app.listen(PORT, ()=>console.log(`Server Running on ${PORT}`))