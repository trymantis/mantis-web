import { H3, P4 } from "../Elements/Texts"
import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons"
import { useState } from "react"
import EarlyAccessModal from "./EarlyAccessModal";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSendEmail = () => {
    const encodedSubject = encodeURIComponent("Hi I'd love to connect");
    const encodedBody = encodeURIComponent("Hi there, I am ");
    const mailtoLink = `mailto:samuel@trymantis.com?subject=${encodedSubject}&body=${encodedBody}`;

    // Open the default mail client
    window.location.href = mailtoLink;
  }

  return (
    <section className="px-7.4 py-16 md:py-7.4 bg-green">
      <div className="flex flex-col gap-9 pb-10 md:pb-16">
        <H3 content="Try Mantis" color="gwhite" align="left"/>
        <div className="flex flex-col lg:flex-row gap-3.5 lg:gap-6 items-start">
            <PrimaryBtn title="Get early access" onClick={() => setIsModalOpen(true)}/>
            <SecondaryBtn title="Connect with the team" bColor="white" tColor="gwhite" onClick={() => handleSendEmail()}/>
        </div>
      </div>
      <div className="pt-10 md:pt-16 border-t border-gwhite space-y-6 lg:space-y-12 opacity-60">
        <div className="flex gap-6">
            <P4 content="Terms of Use" color="text-grey4" weight="normal"/>
            <P4 content="Privacy Policy" color="text-grey4" weight="normal"/>
            <P4 content="Support" color="text-grey4" weight="normal"/>
        </div>
        <P4 content="© Mantis Technology Limited 2024" color="text-grey4"/>
      </div>

      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />

    </section>
  )
}

export default Footer
