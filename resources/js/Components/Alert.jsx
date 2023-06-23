import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";

const Alert = () => {
  const { flash } = usePage().props;
  const [isVisible, setIsVisible] = useState(!!flash?.success);

  useEffect(() => {
    if (flash?.success) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [flash]);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="container mx-auto">
      {flash?.success && (
        <div className="bg-white rounded-xl w-full my-3 p-3 border-solid border-2 border-green-300">
          <div className="text-green-400 text-lg">{flash.success}</div>
        </div>
      )}
    </div>
  );
};

export default Alert;
