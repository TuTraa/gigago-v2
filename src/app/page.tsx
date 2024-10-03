import AreaSection from '@/views/Homepage/area-section'
import AskedQuestionsSection from '@/views/Homepage/asked-questions-section'
import BenefitsSection from '@/views/Homepage/benefits-section'
import DeviceCompatibilitySection from '@/views/Homepage/device-compatibility-section'
import FeedbackSection from '@/views/Homepage/feedback-section'
import HeroSection from '@/views/Homepage/hero-section.tsx'
import IntroduceSection from '@/views/Homepage/introduce-section'
import WhyImBestSection from '@/views/Homepage/why-im-best-section'

export default function Home() {
  return (
    <div className='min-h-[1200px] flex w-full flex-col'>
      <HeroSection />
      <IntroduceSection />
      <AreaSection />
      <BenefitsSection />
      <WhyImBestSection />
      <DeviceCompatibilitySection />
      <FeedbackSection />
      <AskedQuestionsSection />
    </div>
  )
}
