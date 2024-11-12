import React, { useRef, useState } from 'react'
import { PersonStanding, Turtle, ArrowRight } from 'lucide-react'

export function ParadoxAnimation() {
  const step = useRef(0)
  const [personPositionX, setPersonPositionX] = useState('0px')
  const [tortoisePositionX, setTortoisePositionX] = useState('288px')

  const stepsData = {
    1: {
      personX: '436px',
      tortoiseX: '420px',
    },
    2: {
      personX: '564px',
      tortoiseX: '460px',
    },
    3: {
      personX: '604px',
      tortoiseX: '492px',
    }
  }

  function handleNextStep() {
    step.current++
    
    if (step.current >= 4) return

    const currentStepData = stepsData[step.current]
    setPersonPositionX(currentStepData.personX)
    setTortoisePositionX(currentStepData.tortoiseX)
  }

  return (
    <div>
      <div className='flex'>
        <div className='relative transition-all duration-1000' style={{ left: personPositionX }}>
          <PersonStanding size={160} />
          <span className='absolute -top-4 -right-4 text-xl text-orange-600'>100 m/s</span>
          <ArrowRight className='absolute top-2 right-2 text-orange-600' />
        </div>
        <div className='relative transition-all duration-1000 -z-10' style={{ left: tortoisePositionX }}>
          <Turtle size={160} color='green' />
          <span className='absolute -top-4 -right-4 text-xl text-orange-600'>10 m/s</span>
          <ArrowRight className='absolute top-2 right-2 text-orange-600' />
        </div>
      </div>

      <div className='relative h-1 w-full bg-gray-500'>
        <div className="absolute left-[78px] top-1/2 -translate-y-1/2 h-6 w-1 bg-orange-600 after:content-['0'] after:absolute after:top-[24px] -after:left-1/2 after:-translate-x-1/2 after:text-orange-600 after:font-bold" />
        <div className="absolute left-[512px] top-1/2 -translate-y-1/2 h-6 w-1 bg-orange-600 after:content-['100'] after:absolute after:top-[24px] -after:left-1/2 after:-translate-x-1/2 after:text-orange-600 after:font-bold" />
        <div className={`${step.current >= 1 ? 'block' : 'hidden'} absolute left-[640px] top-1/2 -translate-y-1/2 h-6 w-1 bg-yellow-600 after:content-['110'] after:absolute after:top-[24px] -after:left-1/2 after:-translate-x-1/2 after:text-yellow-600 after:font-bold`} />
        <div className={`${step.current >= 2 ? 'block' : 'hidden'} absolute left-[680px] top-1/2 -translate-y-1/2 h-6 w-1 bg-slate-600 after:content-['111'] after:absolute after:top-[24px] -after:left-1/2 after:-translate-x-1/2 after:text-bg-slate-600 after:font-bold`} />
        <div className={`${step.current >= 3 ? 'block' : 'hidden'} absolute left-[716px] top-1/2 -translate-y-1/2 h-6 w-1 bg-orange-600 after:content-['111.1'] after:absolute after:top-[24px] -after:left-1/2 after:-translate-x-1/2 after:text-orange-600 after:font-bold`} />
      </div>

      <button 
        className="mt-14 bg-green-600 text-white text-xl font-bold rounded-xl py-3 px-6 transition-all hover:bg-green-700 disabled:cursor-not-allowed"
        onClick={handleNextStep}
        disabled={step.current >= 3}
      >
        {step.current < 3 ? 'Next step' : 'Will Achilles never catch up with the tortoise?'}
      </button>
    </div>
  )
}