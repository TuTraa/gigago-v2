import Breadcrumbs from '@/components/ui/breadcrumbs'
import Image from 'next/image'
import RightSection from '@/views/product/right-section'
import ProductTitle from '@/views/product/product-title'
import VariantsDesktop from '@/views/product/variants-desktop'
import NumberStepper from '@/views/product/number-stepper'
import AddToCart from '@/views/product/add-to-cart'
import { ShieldCheck } from 'lucide-react'
import SimilarProductsSection from '@/views/product/similar-product-section'
import ProductOverview from '@/views/product/product-overview'
import Description from '@/views/product/description'
import AdvantagesSection from '@/views/product/advantages-section'
import FeedbackSection from '@/views/home-page/feedback-section'
import AskedQuestionsSection from '@/views/home-page/asked-questions-section'
import TutorialGetInfoSection from '@/views/product/tutorial-get-info-section'
import HowToUseSection from '@/views/product/how-to-use-section'
import BlurImage from '@/components/blur-image'
import { placeholderBlurhash } from '@/utils/placeholderBlurhash'
const items = {
  Home: '/',
  'Buy eSIM': '/buy-esim',
  'Need API to get Info :))': '',
}
const EsimPage = () => {
  return (
    <div className='grid grid-cols-12 pb-[60px] sm:pb-[120px]'>
      <div className='col-span-12 '>
        <div className='max-w-xl w-full mx-auto px-[15px]'>
          <div className='flex items-center justify-start min-h-[65px] '>
            <Breadcrumbs items={items} className='' />
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px]'>
          <div className='flex flex-col md:flex-row gap-x-[30px] gap-y-[18px] sm:gap-y-[30px]'>
            <div className='max-w-full md:max-w-[380px] w-full'>
              <div className='sticky top-[150px] overflow-hidden w-full md:w-fit rounded-[16px] bg-white shadow-md transition-all duration-200 group-hover:shadow-xl'>
                <BlurImage
                  src={'/assets/images/detail-sim.webp'}
                  alt={'Blog Post'}
                  width={510}
                  height={510}
                  className='size-full md:size-[331px] '
                  placeholder='blur'
                  blurDataURL={placeholderBlurhash}
                />
              </div>
            </div>
            <div className='flex-1 min-h-[1000px]'>
              <RightSection>
                <div className='mb-[16px] sm:mb-[24px]'>
                  <ProductTitle title='Taiwan eSIM' />
                </div>
                <div className='mb-[24px]'>
                  <Description
                    descriptions={{
                      data: '3GB – 20GB or daily 1GB-2GB',
                      validity: '5, 7, 15, 30 days',
                      coverage: 'Taiwan',
                      mobileNetworkOperator: 'CHT',
                      esimPhoneNumber: 'No',
                      delivery: 'Instant via email',
                      validityStart:
                        'After installation. It’s recommended to install eSIM 1 day before departure',
                      hotspotTethering: 'Yes',
                      topUpOption: 'Not available',
                    }}
                  />
                </div>
                <p className='text-primary text-[24px] font-bold mb-[24px]'>
                  $4.00 – $57.00 <span className='text-[12px]'>USD</span>
                </p>
                <div className='mb-[36px]'>
                  <VariantsDesktop />
                </div>
                <div className='sticky bottom-0 left-0 w-full sm:relative flex items-center bg-white gap-x-[12px] sm:gap-x-[18px] mb-[24px] py-4 md:py-0 '>
                  <NumberStepper />
                  <AddToCart className='flex-1 sm:flex-none text-[14px] sm:text-normal normal-case sm:uppercase text-nowrap' />
                </div>
                <div className='flex items-center  justify-center sm:justify-start sm:items-center flex-wrap gap-y-2 mb-[36px]'>
                  <ShieldCheck className='size-[18px] sm:size-[22px]' />
                  <p className='text-[14px] sm:text-normal text-[#0c1941] ml-[8px] sm:ml-[12px] mr-[16px] block'>
                    Secure payment guaranteed
                  </p>
                  <Image
                    src='/assets/images/payment-product.webp'
                    alt='payment product'
                    width={120}
                    height={24}
                    className=''
                  />
                </div>
                <div className=''>
                  <SimilarProductsSection
                    items={[
                      { country: 'Qatar', price: '$5' },
                      { country: 'India', price: '$14.5' },
                      { country: 'Mongolia', price: '$9.9' },
                      { country: 'Maldives', price: '$44' },
                      { country: 'Vietnam', price: '$8.9' },
                    ]}
                  />
                </div>
              </RightSection>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px] sm:mt-[60px] mb-[60px] sm:mb-[120px]'>
          <ProductOverview
            informations={{
              'Loại gói cước': 'Trả trước, Chỉ dữ liệu',
              'Thời hạn bắt đầu có hiệu lực':
                'Sau khi cài đặt. Khuyến khích cài đặt trước ngày khởi hành 1 ngày.',
              'Hiệu lực của mã QR':
                'Trong vòng 30 ngày sau khi mua. Vui lòng kích hoạt gói dữ liệu trước ngày hết hạn.',
              'Khu vực phủ sóng': 'Đài Loan',
              'Nhà cung cấp mạng': 'CHT',
              'Số điện thoại địa phương': 'Không',
              'Điểm phát sóng/Chia sẻ kết nối': 'Có',
              'Tốc độ Internet':
                'Dự kiến có tốc độ 4G/LTE/5G, Dữ liệu không giới hạn ở mức 128kbps sau khi sử dụng dữ liệu tốc độ tối đa vượt quá.',
              'Cài đặt': 'Quét mã QR hoặc nhập mã cài đặt thủ công',
              'Kích hoạt':
                'Tự động, được kích hoạt khi kết nối với mạng di động được hỗ trợ.',
              'Thanh toán': 'Thẻ tín dụng/Thẻ ghi nợ, PayPal',
              'Giao hàng':
                'Ngay lập tức, qua email, trong vòng 5 phút sau khi mua',
            }}
          />
        </div>
      </div>
      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px] mb-[70px]'>
          <AdvantagesSection />
        </div>
      </div>
      <div className='col-span-12'>
        <div className='bg-background-tutorial bg-center bg-no-repeat bg-cover mb-[60px] sm:mb-[120px]'>
          <div className='max-w-xl w-full mx-auto px-[30px] sm:px-[15px]'>
            <TutorialGetInfoSection />
          </div>
        </div>
      </div>
      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px] mb-[60px] sm:mb-[120px]'>
          <HowToUseSection />
        </div>
      </div>

      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px] mb-[60px] sm:mb-[120px]'>
          <FeedbackSection />
        </div>
      </div>
      <div className='col-span-12'>
        <div className='max-w-xl w-full mx-auto px-[15px]'>
          <AskedQuestionsSection />
        </div>
      </div>
    </div>
  )
}

export default EsimPage
