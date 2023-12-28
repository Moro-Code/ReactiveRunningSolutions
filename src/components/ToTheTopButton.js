import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export const ToTheTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  // Function to detect scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    isVisible && (
      <button
        className="fixed bottom-0 right-0 z-50 text-5xl text-white bg-red-700 hover:bg-black px-4 py-2 m-4 rounded-full w-20 h-20"
        onClick={async () => {
          await router.replace("/");
        }}
      >
        <i className="icon-arrow-up" />
      </button>
    )
  );
};
