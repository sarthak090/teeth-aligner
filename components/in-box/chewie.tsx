import SplineChewie from "@/components/homepage-06/3d/SplineChewie";

export default function Chewie() {
    return (
        <div className="box-card grid grid-cols-1 bg-orange-gradient gap-8 rounded-xl text-white  min-h-[500px]  p-4 relative  ">
              <div className="">
                <h2 className="text-4xl font-bold  mb-2">  Aligner Chewie
                </h2>
                <p className=''>Achieve a tighter, more comfortable fit with the AlignersFit™ Aligner Chewie — your go-to tool for getting the most out of your invisible aligners or retainers.    
                </p>
            </div>
            <div className="h-full absolute top-24 right-0 w-full">
            <SplineChewie />
           </div>
          {/* <div className="  flex flex-col justify-center  ">


          <h2 className="text-4xl font-semibold mb-1">Aligner Chewie
          </h2>
          
          <p className='italic font-semibold mb-4'>Perfect the Fit. Speed Up Your Smile.

</p>
          <div className='leading-8'>
<p>Achieve a tighter, more comfortable fit with the AlignersFit™ Aligner Chewie — your go-to tool for getting the most out of your invisible aligners or retainers. Made from premium medical-grade silicone, this soft, cylindrical chewie helps seat your aligners more snugly against your teeth, promoting faster and more precise results.

</p>
              
              <p>
                  <span className='font-semibold'>Key Features:</span>
              
              <ul>
                  <li>
                  Improves Aligner Fit: Eliminates air gaps between teeth and aligners for more effective treatment.



                  </li>
                  <li>    Medical-Grade Silicone: Safe, durable, and gentle on teeth and gums.

                  </li>
                  <li>    Reusable & Easy to Clean: Rinse with water and reuse daily — built to last through your aligner journey.

                  </li>
                  <li>   Eases Aligner Pressure: Reduces soreness and discomfort from new trays.


                  </li>
                  <li>
                  Optional Mint Scent: Available in a fresh mint flavor for a pleasant feel.


                  </li>
              </ul>



              </p>
          </div>
        </div> */}
         
      </div>
    )
}