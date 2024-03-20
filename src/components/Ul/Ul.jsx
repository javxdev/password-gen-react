import React from 'react'
import SettingsLi from './Li/Li'

function SettingsUl() {
  return (
    <ul className="w-full flex flex-col gap-5 md:gap-10 font-semibold">
        <SettingsLi text="Uppercase (A-Z)"/>
        <SettingsLi text="Lowercase (a-z)"/>
        <SettingsLi text="Symbol (!$#@)"/>
        <SettingsLi text="Number (0-9)"/>
    </ul>
  )
}

export default SettingsUl;