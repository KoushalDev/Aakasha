const express = require('express');
const mysql = require('mysql2');
const app = express(); 
const cors = require('cors')
const PORT = process.env.PORT | 3005;

app.use(express.json());
const corsOptions ={
  origin:'http://localhost:3005', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors());


// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Sathvik@135',
  database: 'pbooth',
  port: 3306
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});



// Retrieve all users
app.get('/users', (req, res) => {
  db.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Retrieve all user types
app.get('/usertypes', (req, res) => {
  db.query('SELECT * FROM user_type_master', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/subscription', (req, res) => {
  db.query('SELECT * FROM subscription', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});
app.get('/photoshelf', (req, res) => {
  db.query('SELECT * FROM photoshelf', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.get('/configuration', (req, res) => {
  db.query('SELECT * FROM configuration', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});


app.post('/configuration', (req, res) => {
  const {confid,pdefsubscript,cdefsubscript,pdefstorage,cdefstorage,pcosting} = req.body;
  db.query('INSERT INTO configuration (Configuration_id,P_default_subscript,C_default_subscript,P_default_storage,C_default_storage,P_Costing) VALUES (?, ?, ?, ?, ?, ?)', [confid,pdefsubscript,cdefsubscript,pdefstorage,cdefstorage,pcosting], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User type added successfully', id: result.User_Type_Id });
  });
});

app.post('/subscription', (req, res) => {
  const {subid,subdate,subduration,psid,screated,scby,smodified,smby,utypid,graceperiod,pmode,amt,status} = req.body;
  db.query('INSERT INTO subscription (Subscription_id,Subscription_Date,Subscription_Duration,PS_Id,Created,Created_by,Modified,Modified_by,User_Type_Id,Grace_period,Payment_Mode,Amount,Status) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?)', [subid,subdate,subduration,psid,screated,scby,smodified,smby,utypid,graceperiod,pmode,amt,status], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User type added successfully', id: result.User_Type_Id });
  });
});

app.post('/photoshelf', (req, res) => {
  const {psid,psname,pssize,uid,pcreated,pcby,pmodified,pmby,isdelete} = req.body;
  db.query('INSERT INTO photoshelf (PS_id,PS_Name,PS_Size,User_id,Created,Created_by,Modified,Modified_by,Is_Delete) VALUES (?, ?, ?, ?, ?,?, ?, ?, ?)', [psid,psname,pssize,uid,pcreated,pcby,pmodified,pmby,isdelete], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User type added successfully', id: result.User_Type_Id });
  });
});

//Create user types 
app.post('/usertypes', (req, res) => {
  const {Usrtypid,Usrtypnm} = req.body;
  db.query('INSERT INTO user_type_master (User_Type_Id,User_Type_Name) VALUES (?, ?)', [Usrtypid,Usrtypnm], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User type added successfully', id: result.User_Type_Id });
  });
});

// Create a new user
app.post('/users', (req, res) => {
  const { uid,fname,mname,lname,mob,uemail,ucreated,ucby,umodified,umby,ustatus,pin,pass} = req.body;
  db.query('INSERT INTO users (User_id,F_Name,M_Name,L_Name,Mobile,Email,Created,Created_by,Modified,Modified_by,Status,Pincode,Password) VALUES (?, ?, ?,?, ?,?, ?,?, ?,?, ?,?,?)', [uid,fname,mname,lname,mob,uemail,ucreated,ucby,umodified,umby,ustatus,pin,pass], (err, result) => {
    if (err) throw err;
    res.json({ message: 'User added successfully', id: result.insertId });
  });
});

//Retrieve a user by ID
app.post('/userlogin', (req, res) => {
  const { email, passcode } = req.body; 
  db.query('SELECT * FROM users WHERE email = ? AND Password = ?', [email, passcode], (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      res.status(500).json({ success: false, message: "An error occurred while processing your request." });
    } else {
      console.log("Query results:", results); 
      console.log(results.length)
      if (results.length > 0) {
        // User authentication successful
        res.status(200).json({ success: true });
      } else {
        // No user found with the provided credentials
        res.status(401).json({ success: false, message: "Invalid email or password." });
      }
    }
  });
});


//Retrieve a user by ID
app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
}); 

// Update a user
// app.put('/users/:id', (req, res) => {
//   const { id } = req.params;
//   const { name, email } = req.body;
//   db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id], (err) => {
//     if (err) throw err;
//     res.json({ message: 'User updated successfully' });
//   });
// });

// Delete a user
// app.delete('/users/:id', (req, res) => {
//   const { id } = req.params;
//   db.query('DELETE FROM users WHERE id = ?', [id], (err) => {
//     if (err) throw err;
//     res.json({ message: 'User deleted successfully' });
//   });
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

