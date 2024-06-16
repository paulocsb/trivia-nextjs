import React from 'react'
import { cn } from '@/lib/utils'

const Header = () => {
  return (
    <div className={cn('p-4 max-w-2xl lg:text-center mx-auto')}>
      <h1 className={cn('scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl')}>
        Trivia 🧩
      </h1>
    </div>
  )
}

export default Header