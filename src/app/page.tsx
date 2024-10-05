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
    <div className='min-h-[1200px] flex w-full flex-col'>
      <HeroSection />
      <IntroduceSection />
      <AreaSection />
      <BenefitsSection />
      <WhyImBestSection />
      <DeviceCompatibilitySection />
      <FeedbackSection />
      <AskedQuestionsSection />
      <DownloadMethodSection />
    </div>
  )
}
