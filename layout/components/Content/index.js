import React from 'react'
import Link from 'next/link'

const Conent = ({ children, ...rest }) => {
  return (
    <div className=" bg-base-100 drawer drawer-mobile min-h-max ">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content lg:px-8">
        {/* <label
          htmlFor="my-drawer-2"
          className="mb-4 btn btn-primary drawer-button lg:hidden fixed top-24"
        >
          content
        </label> */}
        {children}
      </div>
      <div className="drawer-side lg:border-r min-h-screen">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className=" overflow-y-auto w-48 bg-base-100 text-base-300 text-sm">
          {rest.links &&
            rest.links.map((link) => (
              <li key={link.to} className="mb-4 pr-3">
                <Link href={link.to}>
                  <a>{link.label}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Conent
