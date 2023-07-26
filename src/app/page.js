import { Header, Sidebar, TopHeader } from '@/components/component'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <div><Header /></div>
      <div className='flex'>
        <div><Sidebar/></div>
        <div className='w-full h-screen bg-neutral-100 border'>
            <div><TopHeader/></div>
        </div>
      </div>
    </div>
  )
}
