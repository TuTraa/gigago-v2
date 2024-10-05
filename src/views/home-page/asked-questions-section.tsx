import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { askedQuestionsData } from '@/data/tempData'
import Link from 'next/link'
const AskedQuestionsSection = () => {
  return (
    <div className='mt-[60px] sm:mt-[120px]'>
      <div className='max-w-[820px] w-full mx-auto px-[15px]'>
        <h2 className='text-[28px] sm:text-[34px] leading-[1.17] text-center font-semibold mb-[8px]'>
          What <span className='text-primary'>people talk </span> about us
        </h2>
        <p className='mb-[40px] text-[18px] text-center text-[rgb(64,_73,_99)]'>
          The most daring travelers have already tried Gigago.com. Will you?
        </p>
        {/* <div className='flex flex-col space-y-[24px]'></div> */}
        <Accordion
          type='single'
          collapsible
          className='w-full flex flex-col space-y-[24px]'
        >
          {askedQuestionsData.map((question, idx) => {
            return (
              <AccordionItem
                key={idx}
                value={question.title}
                className='outline outline-[2px] outline-gray-100 rounded-[16px] [&[data-state=open]]:outline [&[data-state=open]]:outline-[2px] [&[data-state=open]]:outline-primary duration-300'
              >
                <AccordionTrigger className='px-[30px] py-[24px] text-[18px] text-left font-semibold'>
                  {question.title}
                </AccordionTrigger>
                <AccordionContent className='px-[30px] pb-[30px] text-[18px] duration-300'>
                  {question.description}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
        <Link
          href='#'
          className='block w-fit mx-auto mt-[28px] text-primary text-center underline'
        >
          Show all FAQs
        </Link>
      </div>
    </div>
  )
}

export default AskedQuestionsSection
