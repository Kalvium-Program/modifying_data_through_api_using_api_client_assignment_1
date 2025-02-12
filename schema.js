const itemSchema = new mongoose.Schema({
   name: {
         type: String,
         required:[ true, 'Menu Name is required']
    },
    description: {
        type: String,
        
    },
    price : {
        type: Number,
        required:[ true, 'Price is required']
    }
});

const menuItem = mongoose.model('menuItem', itemSchema);