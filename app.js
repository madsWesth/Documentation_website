const express = require("express")
const app = express()

//filesystem
const fs = require("fs")


//components
const header = fs.readFileSync("./public/components/header-nav.html").toString()
const footer = fs.readFileSync("./public/components/footer.html").toString()

//content
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString()

//constructed webpages
const serveFrontpage = header + frontpage + footer

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send(serveFrontpage)
})



//fallback port in none is setup as an env variable
const PORT = process.env.PORT || 9000

app.listen(PORT, (req, res) => {
    console.log("Server is running on port", PORT)
})