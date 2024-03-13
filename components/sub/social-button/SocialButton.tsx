// import React, { useEffect, useState } from "react";
// import "./socialButton.css";
// import { social } from "../../constants";

// const SocialButton = () => {
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, [windowWidth]);

//   const visibleSocial = social.slice(0, 3)

//   return (
//     <div className="light-button flex justify-center items-center my-5">
//       <button className="bt h-[350px]">
//         <div className="light-holder h-[350px]">
//           <div className="dot"></div>
//           <div className="light"></div>
//         </div>
//         <div className="flex 2xl:gap-20 xl:gap-20 lg:gap-20 gap-10">
//           {windowWidth > 640 ? (
//             social.map((item) => (
//               <div onClick={() => window.open(item.url, "_blank")} className="z-50 button-holder 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[70px] 2xl:w-[100px] xl:w-[100px] lg:w-[100px] md:w-[100px] w-[70px]" key={item.title}>
//                 {item.icon}
//                 <p className="2xl:text-base xl:text-base lg:text-base text-sm">{item.title}</p>
//               </div>
//             ))
//           ): (
//             visibleSocial.map((item) => (
//               <div onClick={() => window.open(item.url, "_blank")} className="button-holder 2xl:h-[100px] xl:h-[100px] lg:h-[100px] md:h-[100px] h-[70px] 2xl:w-[100px] xl:w-[100px] lg:w-[100px] md:w-[100px] w-[70px]" key={item.title}>
//                 {item.icon}
//                 <p className="2xl:text-base xl:text-base lg:text-base text-sm">{item.title}</p>
//               </div>
//             ))
//           )
//         }
//         </div>
//       </button>
//     </div>
//   );
// };

// export default SocialButton;


