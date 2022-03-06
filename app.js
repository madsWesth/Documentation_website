const express = require("express")
const app = express()

//filesystem
const fs = require("fs")


//components
const header = fs.readFileSync("./public/components/header-nav.html").toString()
const footer = fs.readFileSync("./public/components/footer.html").toString()

//content
const environmentPage               = fs.readFileSync("./public/pages/environments/environments.html").toString()
const frontpage                     = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString()
const javascripConceptsPage         = fs.readFileSync("./public/pages/javascript_concepts/javascript_concepts.html").toString()
const nodePage                      = fs.readFileSync("./public/pages/node/node.html").toString()
const projectPackageManagerPage     = fs.readFileSync("./public/pages/project_package_manager/project_package_manager.html").toString()
const restPage                      = fs.readFileSync("./public/pages/rest/rest.html").toString()
const ssrPage                       = fs.readFileSync("./public/pages/ssr/ssr.html").toString()
const strategiesPage                = fs.readFileSync("./public/pages/strategies/strategies.html").toString()

//constructed webpages
const constructedEnvironmentPage             = header.replace("%%TITLE_PLACEHOLDER", "Environment").replace("%%ENVIRONMENTS_ACTIVE", "active") + environmentPage + footer
const constructedFrontpage                   = header.replace("%%TITLE_PLACEHOLDER", "Home").replace("%%HOME_ACTIVE", "active") + frontpage + footer
const constructedJavascriptConceptsPage      = header.replace("%%TITLE_PLACEHOLDER", "Javascript concepts").replace("%%JS_CONCEPTS_ACTIVE", "active") + javascripConceptsPage + footer
const constructedNodePage                    = header.replace("%%TITLE_PLACEHOLDER", "Node").replace("%%NODE_ACTIVE", "active") + nodePage + footer
const constructedProjectPackageManagerPage   = header.replace("%%TITLE_PLACEHOLDER", "Project-/Package Manager").replace("%%PROJECT_ACTIVE", "active") + projectPackageManagerPage + footer
const constructedRestPage                    = header.replace("%%TITLE_PLACEHOLDER", "REST and Express").replace("%%REST_ACTIVE", "active") + restPage + footer
const constructedSsrPage                     = header.replace("%%TITLE_PLACEHOLDER", "Server Side Rendering").replace("%%SSR_ACTIVE", "active") + ssrPage + footer
const constructedStrategiesPage              = header.replace("%%TITLE_PLACEHOLDER", "Strategies and issues serving content").replace("%%STRATEGIES_ACTIVE", "active") + strategiesPage + footer

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

app.get("/Environments", (req, res) => {
    res.send(constructedEnvironmentPage)
})

app.get("/Strategies_and_issues_serving_content", (req, res) => {
    res.send(constructedStrategiesPage)
})

app.get("/SSR", (req, res) => {
    res.send(constructedSsrPage)
})



//fallback port in none is setup as an env variable
const PORT = process.env.PORT || 9000

app.listen(PORT, (req, res) => {
    console.log("Server is running on port", PORT)
})