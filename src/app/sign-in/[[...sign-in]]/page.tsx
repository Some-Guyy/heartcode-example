"use client"

import { SignIn } from '@clerk/nextjs'
import { useTheme } from "next-themes"
import { dark, neobrutalism } from '@clerk/themes'

export default function Page() {
  const currentTheme = useTheme()

  return (
    <div className='flex flex-col justify-center h-dvh'>
      <div className='flex flex-col items-center'>
        <SignIn 
        appearance={{
          baseTheme: currentTheme.theme === "dark" ? dark : neobrutalism,
        }}
        />
      </div>
    </div>
  )
}
