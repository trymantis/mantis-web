import { H2 } from "../Elements/Texts"
import StepCard from "../Cards/StepCard"

const Steps = () => {
  return (
    <section className="mx-8 md:mx-7.4 mb-16 md:mb-40">
      <H2 content="Start faster, and more accurate reconciliation."/>
      <div>
        <StepCard numberContent="01" h4Content="Upload your bank statement" p2Content="Download your bank statement in PDF format for the period (date range) you want to perform reconciliation from your bank’s app. Launch the Mantis application and upload the downloaded bank statement." />
        <StepCard numberContent="02" h4Content="Upload your internal records" p2Content="Create a CSV file of your internal transaction records of which you want to reconcile with your bank statement for the period (date range) you want to perform reconciliation. Upload the CSV file on Mantis to continue." />
        <StepCard numberContent="03" h4Content="Reconcile" p2Content="Once both your bank statement and internal records are uploaded without any errors, all that is left is to hit the reconcile button and let Mantis do it’s magic." />
      </div>
    </section>
  )
}

export default Steps
