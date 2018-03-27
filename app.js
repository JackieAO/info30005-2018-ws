const express = require('express');
const app = express();


const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('index',{title:'The Storm'});
})
app.listen(PORT, function(){
    console.log('Express listening on port '+ PORT);
});