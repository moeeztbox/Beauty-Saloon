import React from "react";

function Footer() {
  return (
    <footer className="bg-black/90 text-lg text-white text-center py-6">
      <p>© {new Date().getFullYear()} Beauty Salon. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
