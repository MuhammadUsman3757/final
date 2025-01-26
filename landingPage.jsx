import React from 'react';

const LoanCategories = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-300">
      <h1 className="text-3xl font-bold text-center mb-8 ">Loan Categories</h1>
      
      {/* Wedding Loans */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">1. Wedding Loans</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Subcategories: Valima, Furniture, Valima Food, Jahez</li>
          <li>Maximum loan: PKR 5 Lakh</li>
          <li>Loan period: 3 years</li>
        </ul>
      </div>

      {/* Home Construction Loans */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">2. Home Construction Loans</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Subcategories: Structure, Finishing, Loan</li>
          <li>Maximum loan: PKR 10 Lakh</li>
          <li>Loan period: 5 years</li>
        </ul>
      </div>

      {/* Business Startup Loans */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">3. Business Startup Loans</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Subcategories: Buy Stall, Advance Rent for Shop, Shop Assets, Shop Machinery</li>
          <li>Maximum loan: PKR 10 Lakh</li>
          <li>Loan period: 5 years</li>
        </ul>
      </div>

      {/* Education Loans */}
      <div className="bg-gray-100 p-6 rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">4. Education Loans</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Subcategories: University Fees, Child Fees Loan</li>
          <li>Maximum loan: Based on requirement</li>
          <li>Loan period: 4 years</li>
        </ul>
      </div>
    </div>
  );
};

export default LoanCategories;
