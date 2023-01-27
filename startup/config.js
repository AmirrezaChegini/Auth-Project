module.exports = (express,app)=>{
    app.use(express.static('assets'));
    app.use(express.urlencoded({extended: true}));
}