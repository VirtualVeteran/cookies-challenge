const express = require('express');
const app = express();
const port= 8080;

app.use(cookieSession({
    name: 'user_session',
    
    httpOnly: true,
    sameSite: 'strict',
  
  }))
  
  app.get('/login', function (req, res) {
    if (loginSuccess(req.body.username)) {
      req.session.username = req.body.username;
      
    }
    app.get('/hello', function (req, res) {
        res.send("Welcome ${username}");
    });
  
    
  })

  app.listen(8080, () => {
    console.log('Server is listening on port 8080');
});