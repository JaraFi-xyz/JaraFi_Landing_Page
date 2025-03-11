import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ isOpen, onClose, onSubmit, isSubmitting, submitError }) => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isAgreed) {
      onSubmit(e);
    }
  };

  if (!isOpen && !isClosing) return null;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/30 backdrop-blur-md z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="relative w-full max-w-md bg-gradient-to-b from-[#1E1E2F] to-[#29293F] text-white rounded-2xl shadow-2xl p-6 sm:p-8 transform transition-all"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-300 hover:text-white text-3xl transition-transform transform hover:scale-110"
              aria-label="Close Modal"
            >
              &times;
            </button>

            <h2 className="text-3xl sm:text-4xl font-bold font-MerriweatherSans text-center">
              Join Our Waitlist 🚀
            </h2>

            <form
              onSubmit={handleSubmit}
              className="mt-6 space-y-4 font-montserrat"
            >
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm sm:text-base mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="John Doe"
                  className="w-full p-3 bg-[#2D2D42] border border-[#FFFFFF80] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm sm:text-base mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="yourname@gmail.com"
                  className="w-full p-3 bg-[#2D2D42] border border-[#FFFFFF80] rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:outline-none"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="terms"
                  className="w-4 h-4 text-primary focus:ring-primary rounded"
                  checked={isAgreed}
                  onChange={(e) => setIsAgreed(e.target.checked)}
                />
                <label htmlFor="terms" className="text-xs sm:text-sm">
                  By continuing, you agree to the{" "}
                  <span className="underline">Terms & Conditions</span>,{" "}
                  <span className="underline">Rewards Policy</span>, and{" "}
                  <span className="underline">Privacy Policy</span>.
                </label>
              </div>

              {submitError && (
                <p className="text-red-500 text-sm">{submitError}</p>
              )}

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F9F6F3] to-[#EDE9E6] text-primary py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting || !isAgreed}
              >
                {isSubmitting ? "Sending..." : "Send"}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
