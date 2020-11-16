const cors = require('cors')
const express = require("express")
const app = express()

app.use(cors()) //middleware globally test enabled!stall
app.use(express.json()) //receive & [parse incoming data & add it to request]

app.get("/", (req,res)=> {
    res.send("Hello World")
})


app.get("/api/animal/:name", (req, res) => {
    if (req.params.name === "meowsalot") {
      res.json({ name: "Meowsalot", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-1.jpg", bio: "This cat is great and very vocal. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque." })
    } else if (req.params.name === "barksalot") {
      res.json({ name: "Barksalot", species: "dog", "photo": "https://learnwebcode.github.io/json-example/images/dog-1.jpg", bio: "This dog is very communicative. Deleniti, tempora quis commodi qui inventore ratione rem porro doloribus et obcaecati cumque quibusdam voluptatibus iure nisi aut minima consequuntur, officiis esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit." })
    } else if (req.params.name === "purrsloud") {
      res.json({ name: "Purrsloud", species: "cat", "photo": "https://learnwebcode.github.io/json-example/images/cat-2.jpg", bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis asperiores, sunt consectetur a amet dolorem rem animi tempore molestias nesciunt fuga, sequi alias voluptatum totam reprehenderit assumenda deleniti distinctio? Cumque. Lorem ipsum." })
    } else {
      res.json("Animal not found.")
    }
  })

  app.get("/fake-search", (req, res) => {
    console.log(req.query)
    res.json("Thank you for your request.")
  })

  app.post("/api/secret", (req, res) => {//TEST with postman app
    if (req.body.username === "johndoe" && req.body.password === "qwerty") {
      res.json("You have secret access for us to tell you that 2 + 2 is 4.")
    } else {
      res.json("That is incorrect.")
    }
  })

  //cross origin resource sharing -CORS

//app.delete()
//app.put()

//app.listen(3000)
app.listen(process.env.PORT || 3000) //for herokun flexible port