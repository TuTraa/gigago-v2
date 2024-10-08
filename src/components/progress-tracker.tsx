'use client'
import Link from 'next/link'
import React from 'react'
import { FaCheck } from 'react-icons/fa6'
interface ProgressTrackerProps {
  currentStep: number
}
interface StepProps {
  stepNumber: number
  title: string
  isActive: boolean
  isCompleted: boolean
}
const Step = ({ stepNumber, title, isActive, isCompleted }: StepProps) => {
  return (
    <div className='flex items-center'>
      <div
        className={`w-[24px] h-[24px] rounded-full flex items-center justify-center ${isCompleted ? 'bg-[#6dae43] text-white' : isActive ? 'bg-black text-white' : 'bg-white border-[1px] border-gray-500 text-gray-500'}`}
      >
        {isCompleted ? <FaCheck /> : <span className=''>{stepNumber}</span>}
      </div>
      <span
        className={`ml-2  text-[14px] font-semibold ${isCompleted || isActive ? 'text-black' : 'text-gray-600'}`}
      >
        {title}
      </span>
    </div>
  )
}
const ProgressTracker = ({ currentStep }: ProgressTrackerProps) => {
  const steps = [
    {
      stepNumber: 1,
      title: 'Shopping Cart',
    },
    {
      stepNumber: 2,
      title: 'Checkout details',
    },
    {
      stepNumber: 3,
      title: 'Complete',
    },
  ]
  return (
    <div className='flex items-center justify-center'>
      {steps.map((step, idx) => (
        <React.Fragment key={idx}>
          <Step
            stepNumber={step.stepNumber}
            title={step.title}
            isActive={currentStep === step.stepNumber}
            isCompleted={currentStep > step.stepNumber}
          />
          {idx < steps.length - 1 && (
            <div className='w-[80px] h-[3px] rounded-full bg-gray-200 mx-[12px]'></div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default ProgressTracker
