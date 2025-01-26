const express = require("express");
const Loan = require("../models/loanModels");
const router = express.Router();

router.post("/apply-loan", async (req, res) => {
  const { userId, category, subCategory, amount, loanPeriod, guarantors } = req.body;
  try {
    const newLoan = new Loan({ userId, category, subCategory, amount, loanPeriod, guarantors });
    await newLoan.save();
    res.status(201).json({ message: "Loan application submitted successfully!" });
  } catch (error) {
    res.status(500).json({ error: "Error submitting loan application." });
  }
});

module.exports = router;
