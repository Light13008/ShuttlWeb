import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto flex flex-col items-center space-y-2">
        <p>&copy; 2024 YellowShuttl. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="/contact" className="hover:text-yellow-400 transition duration-300">Contact Us</a>
          <a href="/privacy-policy" className="hover:text-yellow-400 transition duration-300">Privacy Policy</a>
          <a href="https://play.google.com/store/apps/details?id=com.yellowshuttl.student" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition duration-300">Download on Google Play</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
