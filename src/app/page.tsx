import AreaSection from '@/views/home-page/area-section'
import AskedQuestionsSection from '@/views/home-page/asked-questions-section'
import BenefitsSection from '@/views/home-page/benefits-section'
import DeviceCompatibilitySection from '@/views/home-page/device-compatibility-section'
import DownloadMethodSection from '@/views/home-page/download-method-section'
import FeedbackSection from '@/views/home-page/feedback-section'
import HeroSection from '@/views/home-page/hero-section.tsx'
import IntroduceSection from '@/views/home-page/introduce-section'
import WhyImBestSection from '@/views/home-page/why-im-best-section'

export default function Home() {
  return (
    <div className='flex w-full flex-col'>
      <HeroSection />
      <div className='mt-[60px] md:mt-[120px]'>
        <IntroduceSection />
      </div>
      <AreaSection />
      <div className='mt-[40px] md:mt-[80px] '>
        <BenefitsSection />
      </div>
      <div className='mt-[80px]'>
        <WhyImBestSection />
      </div>
      <div className='mt-[80px] sm:mt-[120px]'>
        <DeviceCompatibilitySection />
      </div>
      <div className='mt-[60px] md:mt-[120px]'>
        <FeedbackSection />
      </div>
      <div className='mt-[60px] sm:mt-[120px]'>
        <AskedQuestionsSection />
      </div>
      <div className='mt-[60px] sm:mt-[120px] mb-[56px]'>
        <DownloadMethodSection />
      </div>
    </div>
  )
}
