import { Header, Sidebar } from '@/components/component'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <div><Header /></div>
      <div className='flex'>
        <div><Sidebar/></div>
      </div>
    </div>
  )
}
