import React, { useState } from "react";

const LoanCategories = () => {
  const categories = [
    {
      title: "Wedding Loans",
      subcategories: ["Valima", "Furniture", "Valima Food", "Jahez"],
      maxLoan: 500000,
      loanPeriod: 3,
    },
    {
      title: "Home Construction Loans",
      subcategories: ["Structure", "Finishing", "Loan"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      title: "Business Startup Loans",
      subcategories: ["Buy Stall", "Advance Rent for Shop", "Shop Assets", "Shop Machinery"],
      maxLoan: 1000000,
      loanPeriod: 5,
    },
    {
      title: "Education Loans",
      subcategories: ["University Fees", "Child Fees Loan"],
      maxLoan: 0, // Based on requirement
      loanPeriod: 4,
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [initialDeposit, setInitialDeposit] = useState("");
  const [loanPeriod, setLoanPeriod] = useState("");
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const handleCalculate = () => {
    const category = categories.find((cat) => cat.title === selectedCategory);
    if (!category) return;

    const maxLoan = category.maxLoan;
    const period = loanPeriod || category.loanPeriod;
    const deposit = parseFloat(initialDeposit) || 0;

    const loanAmount = maxLoan - deposit;
    const monthlyInstallment = loanAmount / (period * 12);

    setEstimatedLoan({
      loanAmount,
      monthlyInstallment,
      period,
    });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Loan Categories</h1>

      {/* Loan Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {categories.map((category, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-4">{category.title}</h2>
            <ul className="mb-4">
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex} className="text-gray-700">
                  - {subcategory}
                </li>
              ))}
            </ul>
            <p className="text-gray-600">
              <span className="font-bold">Maximum Loan:</span> {category.maxLoan ? `PKR ${category.maxLoan.toLocaleString()}` : "Based on requirement"}
            </p>
            <p className="text-gray-600">
              <span className="font-bold">Loan Period:</span> {category.loanPeriod} years
            </p>
          </div>
        ))}
      </div>

      {/* Loan Calculator */}
      <div className="border rounded-2xl shadow-md p-6 bg-white">
        <h2 className="text-2xl font-bold mb-4">Loan Calculator</h2>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Select Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full border rounded-lg p-2"
          >
            <option value="">-- Select Category --</option>
            {categories.map((category, index) => (
              <option key={index} value={category.title}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        {selectedCategory && (
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Select Subcategory</label>
            <select
              value={selectedSubcategory}
              onChange={(e) => setSelectedSubcategory(e.target.value)}
              className="w-full border rounded-lg p-2"
            >
              <option value="">-- Select Subcategory --</option>
              {categories
                .find((cat) => cat.title === selectedCategory)
                ?.subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
            </select>
          </div>
        )}

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Initial Deposit (PKR)</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
            className="w-full border rounded-lg p-2"
            placeholder="Enter initial deposit"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Loan Period (years)</label>
          <input
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
            className="w-full border rounded-lg p-2"
            placeholder="Enter loan period"
          />
        </div>

        <button
          onClick={handleCalculate}
          className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Calculate Loan
        </button>

        {estimatedLoan && (
          <div className="mt-6 p-4 border rounded-lg bg-gray-100">
            <h3 className="text-lg font-bold mb-2">Loan Breakdown</h3>
            <p>
              <span className="font-bold">Loan Amount:</span> PKR {estimatedLoan.loanAmount.toLocaleString()}
            </p>
            <p>
              <span className="font-bold">Monthly Installment:</span> PKR {estimatedLoan.monthlyInstallment.toFixed(2)}
            </p>
            <p>
              <span className="font-bold">Loan Period:</span> {estimatedLoan.period} years
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCategories;