import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className='bg-slate-950 py-20'>
      <div className='container text-white'>

        <div className='flex flex-col gap-3 justify-center items-center text-center'>
          <span className='bg-white/10 backdrop-blur-sm border border-white/20 w-fit rounded-2xl text-emerald-400 text-xs px-2 py-1.5'>
            Built for Startups. Built to scale.
          </span>
          <h1 className='text-2xl lg:text-4xl font-bold'>One dashboard.{" "}
            <span className='text-emerald-500'>Full Control. {" "}</span>
            Zero guesswork.
          </h1>
          <p>Your all-in-one digital business ledger - track expenses, manage orders, monitor inventory
            and analyze performance. All in one place, all in real time.
          </p>
        </div>

        <div className='flex flex-wrap gap-3 mt-6 mb-6 justify-center items-center'>
          <Button asChild className='bg-emerald-500'>
            <Link href={'/sign-up'}>
              Start free
            </Link>
          </Button>
          <Button asChild variant={'secondary'}>
            <Link href={'/#features'}>
              Explore features
            </Link>
          </Button>
        </div>
        <div className='text-xs text-muted-foreground flex flex-wrap items-center gap-3 justify-center'>
          <p>No card needed</p>
          <p>Setup under 2 minutes</p>
        </div>
        
      </div>
    </section>
  )
}

export default Hero