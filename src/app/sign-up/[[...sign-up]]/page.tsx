import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-col justify-center h-dvh'>
      <div className='flex flex-col items-center'>
        <SignUp />
      </div>
    </div>
  )
}
