// backend/controllers/authController.js
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};


exports.register = async (req, res) => {
  
  try {
    console.log('REGISTER REQUEST BODY:', req.body);  // 👈 add this line
    const { name, rollno, role, password ,mobile} = req.body;

    const userExists = await User.findOne({ rollno,role });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      rollno,
      role,
      password: hashedPassword,
      mobile,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { rollno, password } = req.body;

    const user = await User.findOne({ rollno });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        rollno: user.rollno,
        role: user.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Employee Login (by Roll No)
exports.employeeLogin = async (req, res) => {
  try {
    const { rollno, password } = req.body;

    const employee = await User.findOne({ rollno, role: 'employee' });
    if (!employee) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, employee.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(employee);

    res.json({
      token,
      user: {
        id: employee._id,
        name: employee.name,
        rollno: employee.rollno,
        role: employee.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Student Login (by Roll No)
exports.studentLogin = async (req, res) => {
  try {
    const { rollno, password } = req.body;

    const student = await User.findOne({ rollno, role: 'student' });
    if (!student) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, student.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(student);

    res.json({
      token,
      user: {
        id: student._id,
        name: student.name,
        rollno: student.rollno,
        role: student.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ===========================
// Parent Login (by Roll No + Mobile)
exports.parentLogin = async (req, res) => {
  /*try {
    const { rollno, mobile } = req.body;

    const parent = await User.findOne({ rollno,mobile, role: 'parent' });
    if (!parent) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    if (parent.mobile !== mobile) {
      return res.status(400).json({ message: 'Invalid mobile number' });
    }

    const token = jwt.sign({ id: parent._id, role: parent.role }, process.env.JWT_SECRET, {
      expiresIn: '1d',//generateToken(parent);
    });
    res.json({
      token,
      user: {
        id: parent._id,
        name: parent.name,
        rollno: parent.rollno,
        role: parent.role,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }*/

    const { rollno, mobile } = req.body;

    /*
    try {
      const { name, rollno, role, password, mobile } = req.body;
      console.log('Login Request Body:', req.body);
  
      const userExists = await User.findOne({ rollno,mobile, role: 'parent'});
      if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
      }
      if (String(user.mobile) !== String(mobile)) {
        return res.status(400).json({ message: 'Invalid mobile number' });
      }
  
      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const userData = {
        name,
        rollno,
        role,
        password: hashedPassword,
      };
  
      if (role === 'parent') {
        userData.mobile = mobile;
      }
  
      const user = await User.create(userData);
      res.status(200).json({ token, user });
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }*/
    
      try {
        console.log('Login attempt:', { rollno, mobile });
    
        const user = await User.findOne({ rollno, role: 'parent' });
    
        if (!user) {
          console.log('No parent found with rollno:', rollno);
          return res.status(400).json({ message: 'Parent not found' });
        }
    
        // Ensure both mobile values are treated as strings
        if (String(user.mobile) !== String(mobile)) {
          console.log('Mobile number mismatch:', user.mobile, mobile);
          return res.status(400).json({ message: 'Invalid mobile number' });
        }
    
        const token = generateToken(user._id);
    
        res.json({
          token,
          user: {
            id: user._id,
            name: user.name,
            rollno: user.rollno,
            role: user.role,
          },
        });
      } catch (error) {
        console.error('Parent Login Error:', error);
        res.status(500).json({ message: 'Server error' });
      }  


};
