import SplineTeethRetriver from "@/components/homepage-06/3d/SplineTeethRetriver";

 


export default function Retriver() {
    return (
        <div className="box-card grid grid-cols-1 bg-orange-gradient gap-8 rounded-xl text-white  min-h-[500px]  p-4 relative  ">
            <div className="z-20">
                <h2 className="text-4xl  font-bold mb-2">  Aligner Retriever
                </h2>
                <p className=''>Take the struggle out of removing your aligners with the AlignersFit™ Aligner Retriever — a compact, hygienic tool designed to make taking out your clear aligners or retainers effortless and mess-free.
                </p>
            </div>
            <div className="h-full absolute top-32 right-0 w-full">
              <SplineTeethRetriver />
          </div>
        {/* <div className='  flex flex-col justify-center '>

          <h2 className="text-4xl font-semibold mb-1">  Aligner Retriever
          </h2>
          
          <p className='italic font-semibold mb-4'>Quick. Clean. Hassle-Free Removal.

</p>
          <div className='leading-8'>

              <p>Take the struggle out of removing your aligners with the AlignersFit™ Aligner Retriever — a compact, hygienic tool designed to make taking out your clear aligners or retainers effortless and mess-free. No more chipped nails, awkward pulling, or touching your mouth with unwashed hands.

</p>
              <p>
                  <span className='font-semibold'>Key Features:</span>
              
              <ul>
                  <li>
                  Easy Aligner Removal: Gently hooks under aligners for quick, damage-free removal — even in tight spots.

                  </li>
                  <li>   More Hygienic: Avoids direct hand-to-mouth contact for better oral health.



                  </li>
                  <li>   Durable & Safe: Made with strong, BPA-free plastic that's safe for use on all aligner brands.

                  </li>
                  <li>    Compact & Travel-Friendly: Small enough to carry in your aligner case or pocket.
                  </li>
                  <li>
                  Dual-Ended Design : Some versions include a built-in chew stick tip for dual functionality.
                  </li>
              </ul>



              </p>
          </div>
        </div> */}
          
      </div>
    )
}