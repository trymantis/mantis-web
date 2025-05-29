import { useState } from 'react';
import { PrimaryBtn } from "../Elements/Buttons"
import mantisLogo from "../../assets/mantis.svg"
import { P4 } from "../Elements/Texts"
import EarlyAccessModal from "./EarlyAccessModal";

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="bg-green z-50 h-[72px]">
      <div className="h-full mx-7.4 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <img src={mantisLogo} alt="Mantis Logo" className="h-8" />
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('how-it-works')}
              className="font-SF text-sm text-white"
            >
              <P4 content="How it works" />
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="font-SF text-sm text-white"
            >
              <P4 content="Use cases" />
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex">
          <PrimaryBtn title="Get early access" onClick={() => setIsModalOpen(true)}/>
        </div>
      </div>

      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </nav>
  )
}

export default Nav 