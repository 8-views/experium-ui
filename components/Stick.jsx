import React from 'react'
import Image from 'next/image'
import { experiumImageUrl } from '@/utils/common'

const Stick = () => {
  return (
 <Image
    src={ experiumImageUrl('stick.svg')}
    alt="Stick Image"
    width={209}
    height={18}
    className="mx-auto lg:mx-0"
    style={{ zIndex: 10 }}  />
  )
}

export default Stick