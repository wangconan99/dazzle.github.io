import Express from 'express';
let app = Express();
app.get('/',(req,res)=>{
  res.send(`hello world levi`);
});
app.listen(4321,()=>{
  console.log('server is running localhost:4321');
});
