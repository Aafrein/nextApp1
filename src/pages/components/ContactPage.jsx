import React from "react";

function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-400">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        We would love to hear from you! Reach out to us using the contact
        information below please:
      </p>

      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
        <ul>
          <li className="flex items-center mb-2">
            <span>123 Main Street, City, Country</span>
          </li>
          <li className="flex items-center mb-2">
            <span>+1234567890</span>
          </li>
          <li className="flex items-center">
            <span>example@example.com</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactPage;
