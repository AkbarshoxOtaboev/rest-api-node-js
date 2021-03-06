import express from 'express'
import mongoose from 'mongoose'
import router from "./router.js";
import fileUpload from 'express-fileupload'
import path from 'path'

const PORT = 5000;
const DB_URL = `mongodb+srv://user:admin@cluster0.27nzh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express();

app.use(express.json());
app.use(express.static('static' ));
app.use(express.static('client'))
app.use(fileUpload({}));
app.use('/api', router);

app.get('/', (req, res) => {
    res.sendfile(path.resolve(__dirname, 'client', 'index.html'))
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('Server started on port ' + PORT))
    } catch (e) {
        console.log(e)
    }
}

startApp();

