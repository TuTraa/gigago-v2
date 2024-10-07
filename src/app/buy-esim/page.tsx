import Breadcrumbs from '@/components/ui/breadcrumbs'
import Link from 'next/link'
import SearchBox from '@/components/search-box'
import LocalESIMSection from '@/views/buy-esim-page/local-esim-section'
import MultiCountryESIMSection from '@/views/buy-esim-page/multi-country-esim-section'
const items = {
  Home: '/',
  'Buy eSIM': '/buy-esim',
}
const BuyEsimPage = () => {
  return (
    <div className='max-w-xl w-full mx-auto px-[15px]'>
      <div className='grid grid-cols-12'>
        <div className='col-span-12'>
          <div className='flex items-center justify-start min-h-[65px] mb-[45px]'>
            <Breadcrumbs items={items} className='' />
          </div>
        </div>
        <div className='col-span-12 pt-[40px] sm:pt-0 pb-[70px]'>
          <div className=''>
            <h1 className='text-[34px] font-semibold text-center mb-[8px]'>
              Many eSIMs in one place,{' '}
              <span className='text-primary'>find yours</span> here
            </h1>
            <p className='text-[18px] text-center mb-[40px]'>
              <Link href='#' className='text-secondary hover:text-primary'>
                Gigago eSIMs
              </Link>{' '}
              are trusted by over 1,000,000 people worldwide
            </p>
          </div>
          <div className='max-w-[490px] mx-auto'>
            <SearchBox />
          </div>
        </div>
        <div className='col-span-12'>
          <div className='max-w-[995px] w-full mx-auto'>
            <LocalESIMSection />
            <div className='mt-[70px] mb-[60px] sm:mb-[100px]'>
              <MultiCountryESIMSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BuyEsimPage
