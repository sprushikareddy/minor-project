// backend/controllers/outpassController.js
/*
exports.createOutpassRequest = async (req, res) => {
    try {
      const { studentId, fromDate, toDate, reason, destination } = req.body;
  
      const newRequest = await OutpassRequest.create({
        studentId,
        fromDate,
        toDate,
        reason,
        destination,
      });
  
      res.status(201).json(newRequest);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  */

  // backend/controllers/outpassController.js

const Outpass = require('../models/OutpassRequest');
const User = require('../models/user');
const OutpassRequest = require('../models/OutpassRequest');

// ✅ Create Outpass Request
exports.createOutpassRequest = async (req, res) => {
  try {
    const { fromDate, toDate, reason, destination } = req.body;
    const studentId = req.user._id;

    const newRequest = await OutpassRequest.create({
      studentId: req.user._id,
      studentRollno: req.user.rollno,
      fromDate,
      toDate,
      reason,
      destination,
      status: 'Pending',
    });
    
    

    res.status(201).json(newRequest);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getMyOutpasses = async (req, res) => {
    
      try {
        console.log("req.user is:", req.user);

        console.log('🔍 Fetching outpasses for:', req.user.id); // ✅ Debug
    
        const studentId = req.user.id;
    
        const outpasses = await OutpassRequest.find({ studentId });
        console.log('📦 Found outpasses:', outpasses); // ✅ Debug
    
        res.status(200).json(outpasses);
      } catch (error) {
        console.error('❌ Error fetching outpasses:', error); // ✅ Debug
        res.status(500).json({ message: error.message });
      }
  };
  
  exports.filterOutpassesByDate = async (req, res) => {
    const { fromDate, toDate } = req.body;
    try {
      const records = await OutpassRequest.find({
        studentId: req.user.id,
        fromDate: { $gte: new Date(fromDate) },
        toDate: { $lte: new Date(toDate) },
      });
      res.json(records);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  

// ✅ Parent Approves Outpass
exports.parentApprove = async (req, res) => {
  try {
    const request = await OutpassRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Outpass request not found' });
    }

    request.parentApproved = true;
    request.status = 'Parent Approved';
    await request.save();

    res.json({ message: 'Parent approved successfully', request });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Warden Approves Outpass
exports.wardenApprove = async (req, res) => {
  try {
    const request = await OutpassRequest.findById(req.params.id);
    if (!request) {
      return res.status(404).json({ message: 'Outpass request not found' });
    }

    request.wardenApproved = true;
    request.status = 'Warden Approved';
    await request.save();

    res.json({ message: 'Warden approved successfully', request });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPendingForParent = async (req, res) => {
    

        try {
            const rollno = req.user.rollno;
            console.log("Parent checking outpasses for student rollno:", rollno);
        
            const student = await User.findOne({ rollno, role: 'student' });
            if (!student) {
              return res.status(404).json({ message: 'Student not found' });
            }
        
            const pendingOutpasses = await Outpass.find({
              //user: student._id,
              studentRollno: req.user.rollno,
              status: 'Pending',
            });
            
            console.log('Pending for parent:', pendingOutpasses);
            res.json(pendingOutpasses);
            //res.json(pendingOutpasses);
          } catch (error) {
            console.error('Error fetching outpasses for parent:', error);
            res.status(500).json({ message: 'Server error' });
          }
  };

  exports.approveByParent = async (req, res) => {
    try {
      const outpass = await Outpass.findById(req.params.id);
      if (!outpass) {
        return res.status(404).json({ message: 'Outpass not found' });
      }
  
      // ✅ ADD THIS LINE
      outpass.parentApproved = true;
  
      // (Optional: update status if you want)
      // outpass.status = 'Pending'; // status stays 'Pending' until warden approves
      outpass.status = "Parent Approved";
      await outpass.save();
  
      res.status(200).json({ message: 'Parent approved outpass successfully ✅' });
    } catch (error) {
      console.error('Parent approval failed:', error);
      res.status(500).json({ message: 'Parent approval failed ❌' });
    }
  };
  

  exports.getPendingForWarden  = async (req, res) => {
    

  try {
    const pending = await Outpass.find({
      parentApproved: true,
      wardenApproved: false,
      status: "Parent Approved"
    }).populate('studentId' ,'name rollno');

    res.status(200).json(pending);
  } catch (error) {
    console.error("Error fetching outpasses for warden:", error);
    res.status(500).json({ message: 'Server error' });
  }
  
  
  };
  
  exports.approveByWarden = async (req, res) => {
    try {
      const outpass = await Outpass.findById(req.params.id);
      if (!outpass) {
        return res.status(404).json({ message: 'Outpass not found' });
      }
  
      outpass.wardenApproved = true;
      outpass.status = 'Approved by Warden';
      await outpass.save();
  
      res.status(200).json({ message: 'Outpass approved by warden' });
    } catch (error) {
      console.error('Warden approval error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  