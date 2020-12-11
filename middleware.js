const express = require (`express`)
const app = express();
const port = 5000;

app.use(login)
app.use(LoginOut)

app.get(`/Homepage`,(req,res) =>{
    console.log("Homepage");
      res.send("Main Page")
})

app.get(`/About`, (req,res) =>{
    res.send("Welcome to the world of Excellence")
})

app.get (`/Registration` , (req,res) =>{
    res.send({
        name : "Arqum",
        LastName : "Alvi",
        Course : "Blockchain Programming",
        
        
    })
})

app.get (`/Admission` , (req,res) =>{
    res.send({
      Program1 :  "Morning Program",
      Program2 : "Evening Program",
      Program3 : "PHD / M.PHILL / M.S",
})
})

app.get(`/Faculties`,(req,res) => {
    res.send({
    Faculty1 : "Faculty of Arts",
    Faculty2 : "Faculty of Sceince",
    
})
})

function login(req,res,next){
    console.log("login Successful");
    next();
}
function LoginOut(req,res,next){
    console.log("logout Successful");
    next();
}


app.listen(port, () => {
    console.log(`App Listen to port ${port}`);
})