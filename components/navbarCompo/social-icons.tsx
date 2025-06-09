import Link from 'next/link'

export function SocialIcons() {
  return (
    <div className="flex gap-6">
      <span>
        <Link href="https://www.facebook.com/alignersfit/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 20 20"
            fill="none"
            className="stroke-[#565656] duration-200 hover:stroke-white">
            <path
              d="M10 17.5C14.1421 17.5 17.5 14.1421 17.5 10C17.5 5.85786 14.1421 2.5 10 2.5C5.85786 2.5 2.5 5.85786 2.5 10C2.5 14.1421 5.85786 17.5 10 17.5Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.125 6.875H11.875C11.3777 6.875 10.9008 7.07254 10.5492 7.42418C10.1975 7.77581 10 8.25272 10 8.75V17.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M7.5 11.25H12.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </span>
    
      <span>
        <Link href="https://www.instagram.com/aligners_fit/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#565656] duration-200 hover:stroke-white"
            width="23"
            height="23"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M10 13.125C11.7259 13.125 13.125 11.7259 13.125 10C13.125 8.27411 11.7259 6.875 10 6.875C8.27411 6.875 6.875 8.27411 6.875 10C6.875 11.7259 8.27411 13.125 10 13.125Z"
              strokeMiterlimit="10"
            />
            <path
              d="M13.4375 2.8125H6.5625C4.49143 2.8125 2.8125 4.49143 2.8125 6.5625V13.4375C2.8125 15.5086 4.49143 17.1875 6.5625 17.1875H13.4375C15.5086 17.1875 17.1875 15.5086 17.1875 13.4375V6.5625C17.1875 4.49143 15.5086 2.8125 13.4375 2.8125Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.0625 6.875C14.5803 6.875 15 6.45527 15 5.9375C15 5.41973 14.5803 5 14.0625 5C13.5447 5 13.125 5.41973 13.125 5.9375C13.125 6.45527 13.5447 6.875 14.0625 6.875Z"
              fill="#565656"
            />
          </svg>
        </Link>
      </span>
     
      
      
      <span>
        <Link href="https://www.linkedin.com/company/aligners-fit/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-[#565656] duration-200 hover:stroke-white"
            width="23"
            height="23"
            viewBox="0 0 20 20"
            fill="none">
            <path
              d="M16.25 3.125H3.75C3.40482 3.125 3.125 3.40482 3.125 3.75V16.25C3.125 16.5952 3.40482 16.875 3.75 16.875H16.25C16.5952 16.875 16.875 16.5952 16.875 16.25V3.75C16.875 3.40482 16.5952 3.125 16.25 3.125Z"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path d="M9.375 8.75V13.75" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.875 8.75V13.75" strokeLinecap="round" strokeLinejoin="round" />
            <path
              d="M9.375 10.9375C9.375 10.3573 9.60547 9.80094 10.0157 9.3907C10.4259 8.98047 10.9823 8.75 11.5625 8.75C12.1427 8.75 12.6991 8.98047 13.1093 9.3907C13.5195 9.80094 13.75 10.3573 13.75 10.9375V13.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.875 7.1875C7.39277 7.1875 7.8125 6.76777 7.8125 6.25C7.8125 5.73223 7.39277 5.3125 6.875 5.3125C6.35723 5.3125 5.9375 5.73223 5.9375 6.25C5.9375 6.76777 6.35723 7.1875 6.875 7.1875Z"
              fill="#565656"
            />
          </svg>
        </Link>
      </span>
    </div>
  )
}
