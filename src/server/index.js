const { exec } = require('child_process');
const Koa = require('koa');
const app = new Koa();

app.use(ctx => {
  ctx.body = 'Hello Koa2';
})
app.listen('3000', () => {
  console.log('server is running at localhost: 3000');
});
// Mac is open
exec('open http://127.0.0.1:3000/');
