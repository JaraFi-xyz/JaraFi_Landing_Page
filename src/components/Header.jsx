import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";
import Modal from "./Modal";
import toast from "react-hot-toast";
import axios from "axios";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [success, setSuccess] = useState("");
  const [existingEmails, setExistingEmails] = useState([]);
  const sheetdbapi = import.meta.env.VITE_SHEET_DB;

  // console.log(import.meta.env.VITE_SHEET_DB);

  const handleCloseModal = () => {
    window.document.body.classList.remove("overflow-hidden");

    setShowModal(false);
    setSubmitError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    const formData = new FormData(e.target);
    const name = formData.get("fullName");
    const email = formData.get("email");

    try {
      const firstResponse = await axios.post(
        "https://jarafibackend.vercel.app/waitlist/join",
        { fullname: name, email },
        { withCredentials: true }
      );

      // console.log({ firstResponse });

      if (firstResponse.status === 201) {
        const response = await fetch(
          `https://sheetdb.io/api/v1/${sheetdbapi}`,
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: [
                {
                  name: name,
                  email: email,
                },
              ],
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        handleCloseModal();
        setSuccess("You have been added to wait list successfully");
        toast.success(
          "Thanks for joining our wait list we'll keep you updated"
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(`${error.response.data.message}`);
      setSubmitError("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <header className="flex justify-between items-center p-6 bg-[#F2EDE4] w-full fixed top-0 left-0 z-50 border-b-[1px] border-[#0F0140]">
        <Link to="/">
          <img src="/JaraFi-blue.png" className="w-[88px]" alt="JaraFi Logo" />
        </Link>

        <div className="hidden md:flex">
          <button
            className="p-[10px] border border-primary rounded-[10px] bg-[#0F0140] text-[#E7E6E7] text-[16px]"
            onClick={() => setShowModal(true)}
          >
            Join Our Waitlist
          </button>
        </div>

        <button
          className="md:hidden text-[#0F0140] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RiCloseFill size={28} /> : <RiMenu2Fill size={28} />}
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full bg-[#F2EDE4] flex flex-col items-center space-y-4 p-6 shadow-lg md:hidden h-screen"
            >
              <button
                className="p-[10px] border border-primary rounded-lg bg-[#0F0140] text-[#E7E6E7] text-[16px]"
                onClick={() => setShowModal(true)}
              >
                Join Our Waitlist
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {showModal && (
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitError={submitError}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
