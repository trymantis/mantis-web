import { useState } from 'react';
import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons";
import { H1, P1 } from "../Elements/Texts";
import dash from "../../assets/dash.svg";
import EarlyAccessModal from "./EarlyAccessModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-green px-6 pt-24 pb-48 md:py-32 text-center z-10 overflow-visible">
      {/* Content */}
      <div className="flex flex-col items-center gap-16 md:gap-16 w-full max-w-3xl mx-auto z-20 relative">
        <div className="flex flex-col gap-12 md:gap-12">
          <H1 />
          <P1
            content="Mantis is an AI-powered platform that unifies data from banks, ERPs, payment gateways, and POS to automate reconciliation, treasury, and full back-office finance."
            color="text-gwhite"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-7">
          <PrimaryBtn 
            title="Get early access" 
            onClick={() => setIsModalOpen(true)}
          />
        </div>
      </div>

      {/* Image spilling out of green section */}
      <div className="relative w-full max-w-6xl mx-auto -mb-64 mt-16 md:mt-32 px-4 z-30">
        <div className="relative">
          <img
            src={dash}
            alt="Mantis Dashboard"
            className="w-full h-auto rounded-md md:rounded-2xl shadow-2xl border border-bgrey/10 relative z-30"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-transparent to-black/5 pointer-events-none" />
        </div>
      </div>

      {/* Early Access Modal */}
      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
};

export default Header;
