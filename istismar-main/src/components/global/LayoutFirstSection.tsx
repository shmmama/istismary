import React from "react";
import Companies from "./Companies";
import Views from "./Views";
import SuggestedUsers from "./SuggestedUsers";
import Footer from "./Footer";
function LayoutFirstSection() {
  // const [Footerfixed, setFooterFixed] = useState(false);
  // const footer = useRef<HTMLInputElement>(null);
  // const handleScroll = () => {
  //   if (footer.current) {
  //     if (footer.current.getBoundingClientRect().top <= 136) {
  //       console.log("done");
  //       setFooterFixed(true)
  //     } else {
  //       setFooterFixed(false)
  //       console.log("noo");
  //     }
  //   }
  // };
  // useEffect(() => {

  //   const scrollHandler = () => {
  //     handleScroll();
  //   };

  //   window.addEventListener('scroll', scrollHandler);

  //   return () => {
  //     window.removeEventListener('scroll', scrollHandler);
  //   };
  // }, []);

  return (
    <div className="relative w-full">
      <Companies />
      <div className="mt-5">
        <Views />
      </div>

      <div className="mt-5">
        <SuggestedUsers />
      </div>

      {/* <div className={`${Footerfixed == true ? "fixed top-0 right-0" : "relative"} mt-5`} ref={footer}> */}
      <div className={`mt-5`}>
        <Footer />
      </div>
    </div>
  );
}

export default LayoutFirstSection;
