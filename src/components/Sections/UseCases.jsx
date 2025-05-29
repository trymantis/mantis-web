import { H2 } from "../Elements/Texts"
import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons"
import UseCaseCard from "../Cards/UseCaseCard"
import arrowLeft from "../../assets/arrowLeft.png";
import { useRef, useState } from "react"
import EarlyAccessModal from "./EarlyAccessModal";

const UseCases = () => {
  const scrollContainerRef = useRef(null)
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="use-cases" className="mb-16 md:mb-40">
      <div className="mx-7.4">
        <H2 content="Built for High-Volume Businesses."/>
      </div>
      <div ref={scrollContainerRef} className="flex gap-9 overflow-auto hide-scrollbar mt-16 md:mt-40 px-7.4">
        <UseCaseCard h6Content="Fintechs & Payment Processors" p2Content="We automate settlement and fee reconciliation across gateways, billers and bank partners for instant, error-free payouts."/>
        <UseCaseCard h6Content="Asset & Wealth Managers" p2Content="We track fund inflows, redemptions, and fee calculations across custodians and portfolios to ensure precise NAV reporting."/>
        <UseCaseCard h6Content="Marketplaces & e-Commerce" p2Content="We match customer payments to vendor payouts automatically, eliminating reconciliation bottlenecks."/>
        <UseCaseCard h6Content="Insurance Carriers" p2Content="We automate premium collections and claims payouts reconciliation, providing clear audit trails and compliance."/>
        <UseCaseCard h6Content="Telecoms & Utilities" p2Content="We consolidate airtime, billing, and partner payouts into one system, so you catch revenue leaks before they happen."/>
        <UseCaseCard h6Content="Retail & FMCG Chains" p2Content="We sync POS and bank data to your ledger, catching discrepancies and speeding up store-to-head-office closes."/>
      </div>
      <div className="flex justify-center md:justify-between mt-16 md:mt-40 mx-7.4">
        <PrimaryBtn title="Get early access" onClick={() => setIsModalOpen(true)}/>
        <div className="hidden md:flex gap-4">
          <SecondaryBtn 
            icon={arrowLeft} 
            bColor="green" 
            tColor="green"
            onClick={scrollLeft}
          />
          <SecondaryBtn 
            icon={arrowLeft} 
            bColor="green" 
            tColor="green"
            onClick={scrollRight}
            className="rotate-180"
          />
        </div>
      </div>

      <EarlyAccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
      
    </section>
  )
}

export default UseCases
