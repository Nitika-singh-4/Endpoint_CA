const express = require('express');

const app = express()
app.use(express.json());
const port = 3000

let user = [{
    username: "nitika",
    email: "nitila262@gmail.com",
    password: "abcd",
    DateOfBrith: 17,
}]

app.post("/register", (req, res)=>{
    try{
        const {username, email, password, DateOfBrith}= req.body;
        if(!username) throw new Error("Username cannot be empty");
        if(!email) throw new Error("Email cannot be empty");
        if(password<8 && password>16) throw new Error("Password length should be greater than 8 and less than 16");
     const newUser = {username, email, password, DateOfBrith}
     user.push(newUser);
        res.status(201).json({message: "User created", user: newUser});
    } catch (error){
        res.status(500).json({error: error.message});
    }
})

app.get("/users", (req, res)=>{
    try{
    res.status(200).json({message: "Fetching users detail", user})
    } catch (error) {
        res.status(500).json({error: error.message});
    }
})

app.listen(port, ()=>{ console.log(`Server is running on http://localhost:${port}`)})
