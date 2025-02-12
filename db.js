const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vijaykumarvk3105:vijay@cluster0.rdgr3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Database connected successfully");
}
)
.catch((err) => {
    console.log(err);
}   )

module.exports = mongoose;
