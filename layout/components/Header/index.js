import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { AppContext } from '../../../pages/_app'
import { getItemFromLS, saveItemToLS } from '../../../utils'

const Header = () => {
  const { settings, setSettings } = useContext(AppContext)

  const updateTheme = (theme) => {
    setSettings({ ...settings, theme: theme })
    saveItemToLS('theme', theme)
    document.documentElement.setAttribute('data-theme', theme)
  }
  const switchTheme = () => {
    const theme = getItemFromLS('theme')
    if (theme === 'dark') {
      updateTheme('light')
    } else {
      updateTheme('dark')
    }
  }

  return (
    <div className="w-full navbar bg-base-100 shadow-md py-10">
      <div className="container mx-auto">
        <div className=" flex-1 lg:flex-0 text-2xl text-primary">
          ACTILIST<span className="text-sm text-base-300">docs</span>
        </div>
        <div className="flex-none lg:hidden  ">
          <label htmlFor="my-drawer-3" className="btn btn-circle btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-none hidden lg:block ">
          <ul className="flex items-center mx-16 gap-4 text-sm text-secondary">
            <li>
              <Link href="/">
                <a>Get started</a>
              </Link>
            </li>
            <li>
              <Link href="/node">
                <a>Node</a>
              </Link>
            </li>
            <li>
              <input
                type="checkbox"
                checked={settings.theme === 'light'}
                onChange={switchTheme}
                className="toggle toggle-secondary toggle-sm mt-1"
              />
            </li>
          </ul>
        </div>
        <div className="hidden lg:block form-control">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full pr-16 input  input-base-200 input-bordered"
            />
            <button className="absolute top-0 right-0 rounded-l-none btn btn-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-5 h-5 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
