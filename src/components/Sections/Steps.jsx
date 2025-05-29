import { H2 } from "../Elements/Texts"
import StepCard from "../Cards/StepCard"

const Steps = () => {
  return (
    <section id="how-it-works" className="mx-8 md:mx-7.4 mb-16 md:mb-40 mt-32 md:mt-52">
      <H2 content="How it works."/>
      <div>
        <StepCard numberContent="01" h4Content="Connect Everything" p2Content="Instantly link your banks, ERPs, and payment tools to unify financial data across all your systems in one secure platform." />
        <StepCard numberContent="02" h4Content="Automate Workflows" p2Content="Use AI to clean, match, and resolve transactions—eliminating manual reconciliation and exception handling across teams and tools." />
        <StepCard numberContent="03" h4Content="Act Instantly" p2Content="Get real-time visibility into cash flow, reconciliations, and financial health—enabling faster decisions, better controls, and smarter forecasting." />
      </div>
    </section>
  )
}

export default Steps
