import Head from 'next/head'
import Conent from '../layout/components/Content'

const links = [
  {
    label: 'Notes',
    to: '#notes',
  },
  {
    label: 'General principle',
    to: '#general-principle',
  },
  {
    label: 'What is personal information?',
    to: '#What-is-personal-information',
  },
  {
    label: 'We use your personal',
    to: '#We-use-your-personal-information',
  },
  {
    label: 'Trusted third parties ',
    to: '#Trusted-third-parties-including',
  },
]
export default function Home() {
  return (
    <div>
      <Head>
        <title>Actilist | docs</title>
      </Head>
      <main>
        <Conent links={links}>
          <div className="  container mx-auto">
            <div className="mb-10">
              <h1 className="text-secondary dark:text-secondary-light mb-5">
                Privacy policy
              </h1>
              <p className="text-gray-dark text-sm dark:text-gray-light">
                Eland values your trust and respects your privacy. This Privacy
                Policy is designed to share with you the ways in which your
                data, as a user on eland, is collected, securely stored, and
                utilized to enhance your user experience while using Eland.
              </p>
            </div>
            <div>
              <h4 className="text-primary dark:text-primary-light mb-4">
                Notes
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                In this privacy policy, we have outlined the entire process
                through which any personal information you may share with us
                will be governed. Also, we will send you instant notifications
                in case any change is being made in the process or an update is
                called upon.
                <br />
                <br /> Moreover, you can easily visit our website and access the
                home page even if you don’t want to disclose your personal data
                via the cookies we send.
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                General principle
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                We will not sell, share, or rent your personal information to
                any 3rd party or use your mobile number for unsolicited emails
                and/or SMS.
                <br />
                <br />
                Any emails and/or SMS sent by Eland will only be in connection
                with the provision of agreed services and products and this
                Policy.
                <br />
                <br />
                Periodically, we may reveal general statistical information
                about Eland and its users, such as number of visitors, volume
                and/or value of transactions, etc., which may only be used for
                market study or trend analysis, or for regulatory requirements.
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                What is personal information?
              </h4>

              <ul className="text-gray-dark text-sm dark:text-gray-light mb-10">
                The personal information that we store and process when you use
                Eland includes:
                <li>
                  Registration and Profile Information: When you create an
                  account or profile on the Site, you voluntarily give us
                  personal information.
                </li>
                <br />
                <li>
                  Information About the Friends You Invite to Join Eland: If you
                  invite your friends to join Eland, you may give us their
                  personal information.
                </li>
                <br />
                <li>
                  Information You Post on the Site: You may provide us with
                  information regarding yourself by completing a profile.
                </li>
                <br />
                <li>
                  Mobile Information: We may collect additional information from
                  you if you access our Site through a mobile device (e.g., your
                  unique device identifier, your device's operating system, or
                  the mobile carrier for your phone)
                </li>
                <br />
                <li>
                  Geolocation: By using the site you expressly consent to our
                  use of your geolocation to respond to your requests and
                  improve your customer experience.
                </li>
                <br />
                <li>Your basic personal details.</li>
                <br />
                <li>Contact information.</li>
                <br />
                <li>Registration details.</li>
                <br />
                <li>Financial information.</li>
                <br />
                <li>Transaction details.</li>
                <br />
                <li>
                  Technical information, including information about the device
                  you use to access the app, and information from your
                  activities on the app and website.
                </li>
                <br />
                <div>
                  <h6 className=" my-5 text-primary dark:text-primary-light">
                    We use your personal information for the following purposes:
                  </h6>
                  <ul>
                    <li>
                      Verifying your identity, including during account
                      creation, usage, and payment processing.
                    </li>
                    <br />

                    <li>
                      Verifying your eligibility as a User of Eland (including,
                      but not limited to applicable “Know Your Customer”,
                      “Customer Due Diligence" and "Anti-Money Laundering and
                      Counter Financing of Terrorism" Regulations);
                    </li>
                    <br />

                    <li>
                      Processing your registration as a User, maintaining, and
                      managing your registration.
                    </li>
                    <br />

                    <li>
                      Providing you with Eland and related user services,
                      including facilitating the settlement of funds sent and
                      received, bill payments, society fee payments, rent
                      payments, property installment payments chargebacks,
                      sending notices about transactions, responding to your
                      queries, feedback, claims and disputes.
                    </li>
                    <br />

                    <li>
                      Managing risk, or assessing, detecting, investigating,
                      preventing, or remediating fraud or other potentially
                      prohibited or illegal activities and otherwise protecting
                      the integrity of our payment’s platform.
                    </li>
                    <br />

                    <li>
                      Detecting, investigating, preventing, or remediating
                      violations of our Terms & Conditions or any applicable
                      policy, industry standards, guidelines, laws of the land
                      and banking regulations and our business policies.
                    </li>
                    <br />

                    <li>
                      Making disclosures as may be required by any law or
                      regulation, authorized government official or other third
                      party, including any card association or other payment
                      network. Such disclosures may also be made pursuant to any
                      subpoena, court order or other legal process or
                      requirement applicable to Eland (including “know your
                      customer”, anti-money laundering and counter-terrorist
                      financing reporting requirements or other
                      commercialdisputes);
                    </li>
                    <br />

                    <li>
                      Making disclosures to third parties including relevant
                      regulators to prevent any harm or financial loss, to
                      report suspected illegal activity or to deal with any
                      claim or potential claim brought against Eland.
                    </li>
                    <br />
                  </ul>
                  <h6 className=" my-5 text-primary dark:text-primary-light">
                    We use your personal information for the following purposes:
                  </h6>
                  <ul>
                    <li>
                      Managing our business including to protect users, protect
                      lives, maintain the security of our products, and protect
                      our rights or property.
                    </li>
                    <br />
                    <li>
                      And We may also use your personal information in other
                      ways for which we provide specific notice at the time of
                      collection.
                    </li>
                    <br />
                  </ul>
                </div>
              </ul>

              <h4 className="text-primary dark:text-primary-light mb-4">
                WHO CAN PROCESS DATA?
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                All your personal information that you share on our website with
                consent such as your name, age, address, etc. can be processed
                by Eland as well as Banks, merchant’s other companies that might
                be associated with us or falls into our subunits by any means.
                However, all the companies authorized to process your
                information will do that in accordance with the outlined privacy
                policy.
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                Trusted third parties including:
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                Any agent, contractor, or third-party service provider that we
                work with in providing the Eland product and associated services
                to you. We work with third parties to help us with fraud
                prevention, AML checks, credit checking, bill collection, data
                entry, database management, promotions, marketing, customer
                service, technology services, products and services alerts and
                payment extension services.
                <br />
                <br />
                Entities with whom Eland maintains commercial arrangements,
                including banks, merchants, and companies associated with Eland.
                <br />
                <br />
                Banks, card associations, payment networks or acquiring
                institutions, involved in processing of payments through Eland;
                and
                <br />
                <br />
                Law enforcement agencies, insurers, government and regulatory
                authorities or any other organizations to which Eland or
                third-party service provider is under an obligation to make
                disclosure under the requirements of any applicable law,
                regulation, or commercial arrangement.
                <br />
                <br />
                Entities involved in any merger, acquisition or financing
                transaction with us, and our professional advisors.
                <br />
                <br />
                We reserve the right to communicate your personal information to
                any third party that makes a legally compliant request for its
                disclosure.
                <br />
              </p>
              <h6 className=" my-5 text-primary dark:text-primary-light">
                How do we store and protect your personal information?
              </h6>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                We will keep your personal information for as long as it is
                necessary to provide you with the Eland services or other
                purposes as set out in this Policy. In addition, we may retain
                your personal information for a longer period (including after
                you are no longer a User), ifit is necessary to comply with laws
                and regulations applicable to us.
                <br />
                <br />
                We use a variety of security measures and technologies to help
                protect your personal information from unauthorized access, use,
                disclosure, alteration, or destruction consistent with
                applicable data protection and privacy laws and regulations.
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                Third party services and sites
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                Eland app and our website may provide links to other websites
                and services (including other merchants) for your convenience
                and information. These services and websites may operate
                independently from us. Linked services and websites may have
                their own privacy policies, which we strongly suggest you review
                if you visit any linked websites. To the extent any linked
                websites you visit are not owned or controlled by us, we are not
                responsible for these websites or services content, any use of
                these services or websites by you, or the privacy practices of
                these services or websites.
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                PURPOSE OF PROCESSING
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                The purpose due to which we are likely to use or process your
                information is to fulfill your order requirements adequately.
                Additionally, we might use that information to notify you
                regarding the special deals and offers and the marketing
                information that can be of your interest.{' '}
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                DISCLOSURE OF INFORMATION
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                In case any administrator, receiver, or liquidator gets
                appointed above us or our assets. Your information might then be
                disclosed to that third-party purchaser; however, Eland ensures
                that your information would be used for similar purposes as
                mentioned in this privacy policy. We ensure that your
                information wouldn’t be disclosed to a third party for purposes
                that aren’t mentioned here. Also, your information won’t be
                shared or disclosed to any government or local authority except
                for a law or obligation.
              </p>
              <h4 className="text-primary dark:text-primary-light mb-4">
                Changes to this policy
              </h4>
              <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
                We may change, amend, or revise this Policy from time to time.
                We will notify you of any substantive or material change in this
                Policy by sending push notifications, emails, or letters, by
                phone or by publishing announcements on our website
                (https://eland.pk).
                <br />
                <br />
                To ensure that you receive our notification promptly, we suggest
                that you notify us promptly of any update to your email address.
                <br />
                <br />
                You can review this Policy on our website
                (https://eland.pk/privacy-policy).
              </p>
            </div>
          </div>
        </Conent>
      </main>
    </div>
  )
}
