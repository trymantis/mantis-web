import { H2 } from "../Elements/Texts"
import { PrimaryBtn, SecondaryBtn } from "../Elements/Buttons"
import UseCaseCard from "../Cards/UseCaseCard"

const UseCases = () => {
  return (
    <section className="mb-16 md:mb-40">
      <div className="mx-7.4">
        <H2 content="Different industries and use cases."/>
      </div>
      <div className="flex gap-9 overflow-auto hide-scrollbar mt-16 md:mt-40 px-7.4">
        <UseCaseCard h6Content="Encrypted at rest and in-transit" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
        <UseCaseCard h6Content="Encrypted at rest and in-transit" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
        <UseCaseCard h6Content="Encrypted at rest and in-transit" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
        <UseCaseCard h6Content="Encrypted at rest and in-transit" p2Content="Your data is handled securely in compliance with NDPR and GPDR standards."/>
      </div>
      <div className="flex justify-center md:justify-between mt-16 md:mt-40 mx-7.4">
        <PrimaryBtn title="Schedule a demo" />
        <div className="hidden md:flex gap-4">
          <SecondaryBtn title="to" bColor="black" tColor="black"/>
          <SecondaryBtn title="to" bColor="black" tColor="black"/>
        </div>
      </div>
    </section>
  )
}

export default UseCases
