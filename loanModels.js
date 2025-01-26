// const mongoose = require("mongoose");

// const loanSchema = new mongoose.Schema({
//   userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
//   category: { type: String, required: true },
//   subCategory: { type: String, required: true },
//   amount: { type: Number, required: true },
//   loanPeriod: { type: Number, required: true },
//   guarantors: [
//     {
//       name: String,
//       email: String,
//       cnic: String,
//       location: String,
//     },
//   ],
// });

// module.exports = mongoose.model("Loan", loanSchema);

// server.js (Add this code after the previous code for user registration/login)
const loanRequestSchema = new mongoose.Schema({
  loanAmount: Number,
  loanType: String,
  duration: Number,
  reason: String,
  userId: mongoose.Schema.Types.ObjectId, // To link loan requests to users
  createdAt: { type: Date, default: Date.now },
});

const LoanRequest = mongoose.model("LoanRequest", loanRequestSchema);

// Loan Request API
app.post("/api/loan-request", async (req, res) => {
  const { loanAmount, loanType, duration, reason } = req.body;

  try {
    // Assuming user authentication is handled, use a dummy user ID for now
    const userId = "64f5cabc12345abcdef67890"; // Replace with actual user ID after login
    const loanRequest = new LoanRequest({
      loanAmount,
      loanType,
      duration,
      reason,
      userId,
    });

    await loanRequest.save();
    res.status(201).json({ message: "Loan request submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error submitting loan request", error });
  }
});
