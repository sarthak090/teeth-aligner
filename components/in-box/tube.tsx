import SplineTube from "@/components/homepage-06/3d/SplineTube";

export default function Tube() {
  return (
    <div className="box-card grid grid-cols-1 bg-orange-gradient gap-8 rounded-xl text-white  min-h-[500px]  p-4 relative  ">
      <div className=" ">
        <h2 className="text-4xl font-semibold mb-1">Aligner Cleaning foam</h2>

         
        <div className="leading-8">
          <p>
            Keep your aligners fresh, clean, and crystal-clear with AlignersFit™
            Teeth Aligner Foam Cleaner — your daily companion for a healthier,
            more hygienic smile. Specially formulated for invisible aligners,
            retainers, and other dental appliances, this foaming cleanser
            removes plaque, odor, and stains without the harshness of
            traditional cleaners.
          </p>
          
        </div>
      </div>
      <div className="h-full absolute top-20 right-0 w-full">
        <SplineTube />
      </div>
    </div>
  );
}
