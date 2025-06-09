import localFont from 'next/font/local'
import { Plus_Jakarta_Sans } from 'next/font/google'

// const satoshi = localFont({
//   src: [
//     {
//       path: '../public/fonts/Satoshi-Regular.woff',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../public/fonts/Satoshi-Medium.woff',
//       weight: '500',
//       style: 'normal',
//     },
//   ],
//   variable: '--font-satoshi',
// })

const satoshi = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-satoshi',
})

export { satoshi,  }
