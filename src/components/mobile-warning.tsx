"use client";

import { useEffect, useState } from "react";

const MobileWarning: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640); // Adjust this breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
      <div className="bg-white text-black p-6 rounded-lg max-w-sm text-center">
        <h2 className="text-xl font-bold mb-4">Mobile View Not Supported</h2>
        <p>Please use a desktop or tablet device to access this content.</p>
      </div>
    </div>
  );
};

export default MobileWarning;
