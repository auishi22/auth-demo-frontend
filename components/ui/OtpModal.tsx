'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Lock, Send, UserRoundCheck, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import Image from 'next/image';

// OTP Modal Component
export const OtpModal = ({ showModal, setShowModal }: { showModal: boolean; setShowModal: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeRemaining, setTimeRemaining] = useState(15);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = e.target.value;
    setOtp(newOtp);
  };

  const resendOtp = () => {
    if (timeRemaining === 0) {
      setTimeRemaining(15); // Reset the countdown when it's time to resend
    }
  };

  const startCountdown = () => {
    setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(timeRemaining - 1);
      }
    }, 1000);
  };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg- bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-6 max-w-sm w-full"
          >
            <h2 className="text-2xl font-semibold text-center mb-4">SMS Verification Code</h2>
            <p className="text-center mb-6">We’ve sent a secure 6-digit code to your mobile number</p>

            <div className="flex justify-center gap-2 mb-4">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  value={digit}
                  onChange={(e) => handleOtpChange(e, index)}
                  maxLength={1}
                  className="w-10 h-10 text-center text-xl border border-gray-300 rounded-md"
                />
              ))}
            </div>

            <p className="text-xs text-center text-muted-foreground mb-4">
              Didn’t receive the code?{' '}
              <button onClick={resendOtp} className="text-blue-600">
                Resend in {timeRemaining}s
              </button>
            </p>

            <div className="flex justify-center">
              <Button
                onClick={() => alert("OTP Verified")} // OTP Verification Logic Here
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md"
              >
                Verify & Continue
              </Button>
            </div>

            {/* Close Modal Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-500 text-xl"
            >
              &times;
            </button>
          </motion.div>
        </div>
      )}
    </>
  );
};