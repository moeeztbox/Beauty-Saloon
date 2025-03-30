import React from "react";

function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto text-center">
        <p className="text-lg">
          © {new Date().getFullYear()} Beauty Salon. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
