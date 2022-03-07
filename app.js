const express = require("express")
const app = express()

//filesystem
const fs = require("fs")


//components
const header = fs.readFileSync("./public/components/header-nav.html").toString()
const footer = fs.readFileSync("./public/components/footer.html").toString()

//content
const frontpage                     = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString()
const javascriptConceptsPage        = fs.readFileSync("./public/pages/javascript_concepts/javascript_concepts.html").toString()
const nodePage                      = fs.readFileSync("./public/pages/node/node.html").toString()
const projectPackageManagerPage     = fs.readFileSync("./public/pages/project_package_manager/project_package_manager.html").toString()
const restPage                      = fs.readFileSync("./public/pages/rest/rest.html").toString()

//constructed webpages
const constructedFrontpage                   = header.replace("%%TITLE_PLACEHOLDER", "Home").replace("%%HOME_ACTIVE", "active") + frontpage + footer
const constructedJavascriptConceptsPage      = header.replace("%%TITLE_PLACEHOLDER", "Javascript concepts").replace("%%JS_CONCEPTS_ACTIVE", "active") + javascriptConceptsPage + footer
const constructedNodePage                    = header.replace("%%TITLE_PLACEHOLDER", "Node").replace("%%NODE_ACTIVE", "active") + nodePage + footer
const constructedProjectPackageManagerPage   = header.replace("%%TITLE_PLACEHOLDER", "Project-/Package Manager").replace("%%PROJECT_ACTIVE", "active") + projectPackageManagerPage + footer
const constructedRestPage                    = header.replace("%%TITLE_PLACEHOLDER", "REST and Express").replace("%%REST_ACTIVE", "active") + restPage + footer

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.send(constructedFrontpage)
})

app.get("/node", (req, res) => {
    res.send(constructedNodePage)
})

app.get("/Javascript_Concepts", (req, res) => {
    res.send(constructedJavascriptConceptsPage)
})

app.get("/REST_API_and_Express", (req, res) => {
    res.send(constructedRestPage)
})

app.get("/Project_Package_Manager", (req, res) => {
    res.send(constructedProjectPackageManagerPage)
})


//fallback port
const PORT = process.env.PORT || 9000

app.listen(PORT, (req, res) => {
    console.log("Server is running on port", PORT)
})