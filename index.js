require('dotenv').config()

const App = require('./src')
const app = App()

app.listen(process.env.PORT, 
  // eslint-disable-next-line 
    console.log(`You can find me at http://localhost:${process.env.PORT}`)
)