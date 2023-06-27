import { usePage } from '@inertiajs/react'
import React, { useEffect, useRef, useState } from 'react'
const Alert = () => {
  const { flash } = usePage().props;

    const [message, setMessage] = useState(null);
    const alertRef = useRef();

    useEffect(() => {
        setMessage(flash);

        const timer = setTimeout(() => {
            setMessage(null);
        }, [5000])

        if (alertRef.current) {
            alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        return () => clearTimeout(timer);
    }, [flash]);


  return (
    <div ref={alertRef} className="container mx-auto">
      {message?.success ? (
        <div className="bg-white rounded-xl w-full my-3 p-3 border-solid border-2 border-green-300">
          <div className="text-green-400 text-lg">{message.success}</div>
        </div>
      ):null}
    </div>
  );
};

export default Alert;
