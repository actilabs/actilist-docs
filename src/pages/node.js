import React, { useEffect } from 'react'
import Layout from '@theme/Layout'

const Node = () => {
  useEffect(() => {
    const getNodeMetrics = async () => {
      try {
        const res = await fetch(
          'https://lcd.secret.express/cosmos/staking/v1beta1/validators?pagination.limit=1000',
        ).then((r) => r.json())

        console.log("resource: ", res)
        const actilistNode = res.validators.find((node) =>
          node.moniker.includes('ActiList'),
        )
        console.log(actilistNode, 'actilistNode')
      } catch (error) {
        console.log(error)
      }
    }
    getNodeMetrics()
  }, [])
  return (
    <Layout>
      this is node page
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      node page
    </Layout>
  )
}

export default Node
