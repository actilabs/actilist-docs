import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.css'

const FeatureList = [
  {
    title: 'ACTILIST',
    Svg: require('@site/static/img/actilist.svg').default,
    description: (
      <>
        Interactive NFT marketplace with confidential sales and customizable NFT access control.
      </>
    ),
  },
  {
    title: 'Run on Secret Network',
    Svg: require('@site/static/img/scrt.svg').default,
    description: (
      <>
        Secret Network is the state of the art blockchain for computational privacy. You get to choose what you share, with whom, and how. This protects users, and empowers developers to build a better Web3.
      </>
    ),
  },
  {
    title: 'Support Us',
    Svg: require('@site/static/img/Image=Hands In.svg').default,
    description: (
      <>
        We contribute to network's decentralization and security by running our own validator node.
        You may support ActiList project by delegating SCRT tokens to <a href="https://wallet.keplr.app/chains/secret-network" target="_blank">ActiList</a> validator node.
      </>
    ),
  },
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
