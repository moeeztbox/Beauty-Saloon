import React from "react";

function Subscribe() {
  return (
    <>
      <div className="bg-gray-900 w-auto pb-8">
        <div className="flex flex-col items-center justify-center">
          <div>
            <h1 className="text-white  text-2xl">
              SUBSCRIBE & GET LATEST BEAUTY UPDATES
            </h1>
          </div>
          <div className="w-full max-w-2xl w flex flex-row">
            <input
              type="email"
              placeholder="info@aminaz.com"
              className="outline-none bg-gray-100 w-full py-3 px-6 border-r-2 border-r-red-600 rounded-bl-3xl rounded-tl-3xl "
            />
            <button className="bg-gray-100 py-3 px-6 rounded-br-3xl rounded-tr-3xl">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
    // <div className="bg-gray-900 text-gray-100 py-10 px-4 flex flex-col items-center">
    //   <h2 className="text-lg md:text-xl font-semibold tracking-wide mb-4">
    //     SUBSCRIBE & GET LATEST BEAUTY UPDATES
    //   </h2>
    //   <div className=" w-full max-w-2xl">
    //     <input
    //       type="email"
    //       placeholder="info@aminaz.com"
    //       className="w-auto py-3 px-6 bg-gray-100 text-gray-600 rounded outline-none placeholder-gray-500"
    //     />
    //     <button className="bg-gray-100 text-red-700 px-5 font-semibold">
    //       SUBSCRIBE
    //     </button>
    //   </div>
    // </div>
  );
}

export default Subscribe;
// import React from "react";

// function Subscribe() {
//   return (
//     <>
//       <section
//         className="section-padding bg"
//         id="subscribe"
//         data-stellar-background-ratio="0.5"
//         style='background-image: url("img/bg/subscribe-bg.jpg"); background-position: 50% 287.995px;'
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
//               <div className="subscribe-content text-center">
//                 <h2>SUBSCRIBE &amp; GET LATEST BEAUTY UPDATES</h2>
//                 <form action="#" method="post">
//                   <div className="input-group">
//                     <input
//                       type="email"
//                       className="form-control"
//                       placeholder="info@aminaz.com"
//                     />
//                     <span class="input-group-addon">
//                       <input
//                         type="submit"
//                         className="btn btn-default"
//                         value="subscribe"
//                       />
//                     </span>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Subscribe;
