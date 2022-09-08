import React, { useEffect, useState } from 'react'
import Stat from './Stat'
import styles from './styles.module.css'

const NodeMetrics = () => {
  const [nodeMetrics, setNodeMetrics] = useState(null)

  useEffect(() => {
    const getNodeMetrics = async () => {
      try {
        const res = await fetch(
          'https://core.spartanapi.dev/secret/chains/secret-4/validators',
        ).then((r) => r.json())

        const actilistNode = res.validators.find((node) =>
          node.moniker.includes('ActiList'),
        )
        setNodeMetrics({
          'SCRT staked': {
            value: actilistNode.current_voting_power,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                />
              </svg>
            ),
          },
          Status: {
            value: 'Active',
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                />
              </svg>
            ),
          },
          Commission: {
            value: `${actilistNode.current_commission}%`,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
          },
          Uptime: {
            value: actilistNode.uptime,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            ),
          },
          'Stake count': {
            value: actilistNode.stakes_count,
            icon: (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="inline-block w-8 h-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
            ),
          },
        })
      } catch (error) {
        console.log(error)
      }
    }
    getNodeMetrics()
  }, [])

  return (
    <div style={{ minHeight: '100vh' }}>
      {!nodeMetrics ? (
        <div
          style={{
            display: 'flex',
            gap: '16px',
            flexWrap: 'wrap',
          }} /* class={styles.loader} */
        >
          {[1, 2, 3, 4, 5].map((el) => (
            <Stat loader={<div className={styles.loader} />} />
          ))}
        </div>
      ) : (
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          {Object.keys(nodeMetrics).map((stat, i) => (
            <Stat
              key={i}
              label={stat}
              icon={nodeMetrics[stat].icon}
              value={nodeMetrics[stat].value}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default NodeMetrics
