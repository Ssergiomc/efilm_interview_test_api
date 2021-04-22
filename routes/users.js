var express = require('express');
var router = express.Router();
const CLIENT = `${process.env.CLIENT_PROTOCOL}://${process.env.CLIENT_URL}:${process.env.CLIENT_PORT}`;


var bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
router.use(express.json());
router.use(express.urlencoded({ extended: false }));

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });


/* POST new user. (Register/Registro)*/
router.post('/register', (req, res) => {
  let newUser = req.body;
  let plainPassword = newUser.password;
  let encryptedPassw = bcrypt.hashSync(plainPassword, 10);
  newUser.password = encryptedPassw;

  // console.log(`Mail usuario ${newUser.email}`);

  dbConnection = req.app.locals.db;
  dbConnection.collection('users').find({ "email": newUser.email }).toArray(function (err, datos) {
    if (err != null) {
      res.send("Ha habido un error: " + err);
    } else {
      if (datos.length > 0) {
        res.redirect(`${CLIENT}/register`);
      } else {
        dbConnection.collection('users').insertOne(newUser, function (err) {
          if (err != null) {
            console.log(err);
            res.send("Ha habido un error: " + error);
          } else {
            res.redirect(`${CLIENT}/login`);
          }

        })
      }
    }
  })

});

/* POST user registered. (Log in/Conexion)*/
router.post("/login", (req, resp) => {
  
  let email = req.body.email;
  let password = req.body.password;

  // console.log("Mail usuario " + email + " passw: " + password);

  let dbConnection = req.app.locals.db;
  dbConnection.collection("users").findOne({ email }, (error, user) => {
    if (error != null) {
      resp.json({ message: "Ha habido un error", status: false });
    } else {
      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          // console.log(user);  no pinta nada, porq?
          resp.json({ status: 0, user });
        } else {
          resp.json({ status: 1 });
        }
      } else {
        resp.json({ status: 2 });
      }
    }
  });
});

module.exports = router;
