import { IArea, IBrandDevice, IQuestion } from '@/types'

export const localAreasData: IArea[] = [
  {
    title: 'Asia',
    countries: [
      { country: 'Taiwan', price: '$4' },
      { country: 'Thailand', price: '$6.9' },
      { country: 'Hong Kong', price: '$2.9' },
      { country: 'Singapore', price: '$1.5' },
      { country: 'Macao', price: '$2.9' },
      { country: 'Indonesia', price: '$2.9' },
      { country: 'Malaysia', price: '$3' },
      { country: 'Cambodia', price: '$4.5' },
      { country: 'Philippines', price: '$10.5' },
      { country: 'South Korea', price: '$7' },
      { country: 'Japan', price: '$7.5' },
      { country: 'Qatar', price: '$5' },
      { country: 'India', price: '$14.5' },
      { country: 'Mongolia', price: '$9.9' },
      { country: 'Maldives', price: '$44' },
      { country: 'Vietnam', price: '$8.9' },
    ],
  },
  {
    title: 'Europe',
    countries: [
      { country: 'Denmark', price: '$4' },
      { country: 'Sweden', price: '$6.9' },
      { country: 'Poland', price: '$2.9' },
      { country: 'Portugal', price: '$1.5' },
      { country: 'Ireland', price: '$2.9' },
      { country: 'Czech Republic', price: '$2.9' },
      { country: 'Austria', price: '$3' },
      { country: 'Belize', price: '$4.5' },
      { country: 'Botswana', price: '$10.5' },
      { country: 'Belgium', price: '$7' },
      { country: 'United Kingdom', price: '$7.5' },
      { country: 'France', price: '$5' },
      { country: 'Findland', price: '$14.5' },
      { country: 'Spain', price: '$9.9' },
      { country: 'Switzerland', price: '$44' },
    ],
  },
]

export const multiCountryAreasData: IArea[] = [
  {
    title: 'Asia',
    countries: [{ country: 'Asia', price: '$6.9' }],
  },
  {
    title: 'Europe',
    countries: [{ country: 'Europe', price: '$3' }],
  },
]

export const devicesData: IBrandDevice[] = [
  {
    brand: 'apple',
    image: '/assets/images/iphone.webp',
    descriptions: [
      'These devices are not eSIM-compatible: iPhones from mainland China, Hong Kong and Macao (except for iPhone 13 mini, iPhone 12 mini, iPhone SE 2020, and iPhone XS).',
    ],
    devices: [
      { name: 'iPhone 16, 16 Plus, 16 Pro, 16 Pro Max' },
      { name: 'iPhone 15, 15 Plus, 15 Pro, 15 Pro Max' },
      { name: 'iPhone 14, 14 Plus, Pro, 14 Pro Max' },
      { name: 'iPhone 13, 13 Mini, 13 Pro, 13 Pro Max, SE 3 (2022)' },
      { name: 'iPhone 12, 12 Mini, 12 Pro, 12 Pro Max' },
      { name: 'iPhone 11, 11 Pro, 11 Pro Max' },
      { name: 'iPhone XS, XS Max, XR' },
      { name: 'iPhone SE (2020, 2022)' },
      { name: 'iPad Pro 11-inch (1st, 2nd and 3rd generation)' },
      { name: 'iPad Pro 12.9-inch (3rd, 4th and 5th generation)' },
      { name: 'iPad (7th, 8th and 9th generation)' },
      { name: 'iPad Mini (5th and 6th generation)' },
      { name: 'Apple watch series 3, 4, 5 and 6' },
      { name: 'Apple watch SE' },
      { name: 'iPad Pro 12.9-inch (3rd, 4th and 5th generation)' },
    ],
  },
  {
    brand: 'samsung',
    image: '/assets/images/samsung.webp',
    descriptions: [
      'These devices are not compatible: Galaxy S20 FE, Galaxy S20/S21 (US versions), Galaxy Z Flip 5G (US versions), Galaxy Note 20 Ultra (Versions from the US and Hong Kong), Galaxy Fold 2 (Versions from the US and Hong Kong).',
      'Only the Samsung Galaxy S23, Samsung Galaxy S23+, Samsung Galaxy S23 Ultra, Samsung Galaxy Z Flip4, and Samsung Galaxy Z Fold 4 purchased in South Korea are eSIM compatible.',
    ],
    devices: [
      { name: 'Galaxy S23, S23+, S23 Ultra' },
      { name: 'Galaxy Note 20, 20+, 20 Ultra' },
      { name: 'Galaxy S22, S22+ 5G, S22 Ultra' },
      { name: 'Galaxy Z Fold series' },
      { name: 'Galaxy Watch' },
      { name: 'Galaxy S21, S21+ 5G, S21 Ultra' },
      { name: 'Galaxy S20, S20+, S20 Ultra' },
      { name: 'Galaxy Note 20, 20+, 20 Ultra' },
      { name: 'Galaxy Z Fold series' },
      { name: 'Galaxy Watch' },
    ],
  },
  {
    brand: 'google-pixel',
    image: '/assets/images/google-pixel.webp',
    descriptions: [
      'These devices are not eSIM compatible: Google Pixel 3 devices from Japan, Australia, and Taiwan, Google Pixel 3a from South East Asia.',
    ],
    devices: [
      { name: 'Google Pixel 7, 7 Pro' },
      { name: 'Google Pixel 3, 3a XL' },
      { name: 'Google Pixel 6, 6a, 6 Pro' },
      { name: 'Google Pixel 4, 4a, 4 XL' },
      { name: 'Google Pixel 5' },
      { name: 'Google Pixel 3, 3 XL' },
    ],
  },
  {
    brand: 'others',
    image: '/assets/images/others.webp',
    descriptions: [],
    devices: [
      { name: 'iPhone XS, XS Max, XR' },
      { name: 'iPhone 16, 15 Plus, 16 Pro' },
      { name: 'iPhone 15' },
      { name: 'iPhone 14, 14 Plus, Pro' },
      { name: 'iPhone MA (2022)' },
      { name: 'iPhone SE (3rd generation)' },
      { name: 'iPhone SE (2nd generation)' },
      { name: 'iPhone SE (1st generation)' },
      { name: 'Motorola Razr (2019), Razr 5G' },
      { name: 'Microsoft Surface Duo' },
      { name: 'Nuu Mobile X5' },
      { name: 'Honor Magic 4 Pro' },
      { name: 'Fairphone 4' },
    ],
  },
]

export const askedQuestionsData: IQuestion[] = [
  {
    title: 'Which devices are compatible with an eSIM?',
    description:
      'You can check if your smartphone works with an eSIM in our up-to-date eSIM-supported device list. Remember that, to use eSIM, your device must be carrier unlocked.',
  },
  {
    title: 'When should I buy and activate an eSIM?',
    description:
      'At your convenience, you should buy an eSIM the day before your departure date or upon arrival at your destination. To install it, your device must get connected with WiFi or a mobile data network',
  },
  {
    title: 'When will I receive my eSIM?',
    description:
      'After your successful payment, the eSIM QR code and installation guide will be delivered to your email immediately. Scan the QR code using your camera, then when you land in your destination, you can stay connected with the supported local network. If you didn’t receive your eSIM plan within 10 minutes, please check your spam folder or promotion folder first, then contact us via hello@gigago.com.',
  },
  {
    title: 'When does my Gigago data plan start?',
    description:
      'Your data plan starts when you activate your plan, not from the time you scan the received QR code and add it to your device.',
  },
  {
    title: 'How to add eSIM to my device?',
    description:
      'Once you purchase an eSIM, you will receive it immediately to your email address. You then just need to scan the QR code to activate the SIM. Note that no refunds can be made once you have purchased your eSIM. See our refund policy for more information',
  },
  {
    title: 'Can I make voice calls and send text SMS with eSIM?',
    description:
      'The eSIM is data-only and does not come with local phone number. It only allows the use of mobile data, so you cannot receive or send calls or SMS.',
  },
  {
    title: 'How quick is the Internet with Gigago eSIMs?',
    description:
      'The Gigago eSIM gives you fast speed data (4G LTE), so you can enjoy fast Internet connection in both urban and rural areas. After running out of high-speed data capacity, the speed will be throttled. The speed can be slower in some remote areas.',
  },
  {
    title: 'Do I have to switch on eSIM data roaming on my device?',
    description:
      'Yes, you need to enable Data roaming mode to access the Internet with eSIM. Rest assured that if you only enable data roaming with Gigago eSIM, you will not be charged.',
  },
  {
    title: 'Can I keep my WhatsApp number?',
    description:
      'Yes, you can keep your WhatsApp number and all your contacts and conversations. You can use it like normal during your trip.',
  },
  {
    title: 'What happens if I use up my data or my plan validity?',
    description:
      'If you use up your data or your plan has expired, you will not be able to access the Internet. If you want to continue using it, you can top up more data or buy a new package.',
  },
  {
    title: 'Can I delete and reinstall my eSIM plan?',
    description:
      'In most cases, once an eSIM plan is set up, it can’t be reinstalled or reissued. If you have trouble, please don’t remove your eSIM plan – instead, contact us via hello@gigago.com first.',
  },
  {
    title: 'What should I do if I remove or lose my eSIM QR code?',
    description:
      'If you have not installed the eSIM on your device, you can get the QR code back by contacting our 24/7 customer support team at hello@gigago.com or our online chat. We will resend the QR code.',
  },
]
