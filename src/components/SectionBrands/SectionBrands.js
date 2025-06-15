import SliderBrands from "../SliderBrands/SliderBrands";

export default function Brands() {
  return (
    <div
      className="relative  pb-[60px] md:pb-[90px] lg:pb-[120px]"
      style={{
        background:
          "linear-gradient(90deg, rgba(67,87,103,1) 0%, rgba(37,51,66,1) 100%)",
      }}
    >
      <SliderBrands />
    </div>
  );
}
