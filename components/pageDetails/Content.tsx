
import { FC } from 'react'  
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  termsData: string;
  heading?: boolean
  headingContent?:string;
}
const Content: FC<PropsTypes> = ({ termsData, heading = false,headingContent }) => {
 
  return (
    <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {/* {!heading ? (
          <RevealWrapper>
            <h2 className="mb-5 text-xl sm:text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              The contents of a Terms and Conditions (T&C) agreement can differ based on the specific service or product
              provided. However, for a subscription-based design agency, you'll typically find the following key
              elements:
            </h2>
          </RevealWrapper>
        ) : (
          <RevealWrapper>
            {headingContent?.length  &&            <h2 className="mb-5 text-[25px] md:mb-10 md:text-4xl md:leading-[1.5] "dangerouslySetInnerHTML={{__html:headingContent}}  />
          }
             
           
          </RevealWrapper>
        )} */}

        <div className="blog-details-body">
          <div dangerouslySetInnerHTML={{__html:termsData}}/>
         
        </div>
      </div>
    </section>
  )
}

export default Content
