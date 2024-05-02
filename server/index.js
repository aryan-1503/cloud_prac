const express = require("express")
const cors = require("cors")


app = express()
app.use(cors())
app.get('/api',(req,res)=>{
    api = {
        name : "Aryan",
        rollno : "21BCP301",
        course : "Cloud Computing"
    }
    res.json(api)
})

app.listen(3000, (req,res) => {
    console.log("SErver running on 3000")
})