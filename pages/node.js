import React, { useEffect, useState } from 'react'
import Stats from '../components/Stats'
import Content from '../layout/components/Content'

const links = [
  { label: 'Node statistics', to: '#statistics' },
  { label: 'Node informations', to: '#informations' },
]
const Node = (props) => {
  return (
    <Content links={links}>
      {props && <Stats props={props} />}
      <div>
        <h4 className="text-primary dark:text-primary-light mb-4">Notes</h4>
        <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
          In this privacy policy, we have outlined the entire process through
          which any personal information you may share with us will be governed.
          Also, we will send you instant notifications in case any change is
          being made in the process or an update is called upon.
          <br />
          <br /> Moreover, you can easily visit our website and access the home
          page even if you don’t want to disclose your personal data via the
          cookies we send.
        </p>
        <h4 className="text-primary dark:text-primary-light mb-4">
          General principle
        </h4>
        <p className="text-gray-dark text-sm dark:text-gray-light mb-10">
          We will not sell, share, or rent your personal information to any 3rd
          party or use your mobile number for unsolicited emails and/or SMS.
          <br />
          <br />
          Any emails and/or SMS sent by Eland will only be in connection with
          the provision of agreed services and products and this Policy.
          <br />
          <br />
          Periodically, we may reveal general statistical information about
          Eland and its users, such as number of visitors, volume and/or value
          of transactions, etc., which may only be used for market study or
          trend analysis, or for regulatory requirements.
        </p>
      </div>
    </Content>
  )
}

export default Node

export const getStaticProps = async () => {
  const res = await fetch(
    'https://core.spartanapi.dev/secret/chains/secret-4/validators',
  )
  const data = await res.json()

  return { props: { data } }
}
