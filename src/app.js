//place native modules always at the top
const path = require("path")
const express = require("express")
const app = express()
const router = require("./router")

app.use(express.urlencoded({extended : false}))
app.use(express.json())


//BY DECLARING LIKE BELOW EXPRESS GETS ACCESS OF ALL FILES INSIDE PUBLIC
app.use(express.static(path.join(__dirname,"../public")))
//SETTING UP VIEW ENGINE
app.set("views",path.join(__dirname,"../views"))
app.set('view engine','hbs')

/*app.get('/',(req,res)=>{

    //root:path.join(__dirname,"../public")

    res.render("index",{
        title : "Expess Weather Finder "
    })
})
app.get('/about',(req,res)=>{
    //res.send("I am from about page")
   // res.sendFile("about.html",{
        
        //root:path.join(__dirname,"../public")
   // })
   res.render("about")
    
})*/
app.use("/",router)
app.listen(8000,()=>{
    console.log("Server is started at port 8000")
}) 