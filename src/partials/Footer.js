// import React from 'react';
// import { Link } from 'react-router-dom';

// function Footer() {
//   return (
//     <footer>
//       <div className="max-w-6xl mx-auto px-4 sm:px-6">

//         {/* Top area: Blocks */}
//         <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-200">

//           {/* 1st block */}
//           <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', flexDirection: 'column'}} className="sm:col-span-12 lg:col-span-3">
//             <div className="mb-2">
//               {/* Logo */}
//               {/* <Link to="/" className="inline-block" aria-label="Cruip">
//                 <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                   <defs>
//                     <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="footer-logo">
//                       <stop stopColor="#4FD1C5" offset="0%" />
//                       <stop stopColor="#81E6D9" offset="25.871%" />
//                       <stop stopColor="#338CF5" offset="100%" />
//                     </radialGradient>
//                   </defs>
//                   <rect width="32" height="32" rx="16" fill="url(#footer-logo)" fillRule="nonzero" />
//                 </svg>
//               </Link> */}
//               <img src="/logo100.png" alt="" />
//             </div>
//             <div className="text-sm text-gray-600">
//               <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Terms</Link> · <Link to="#" className="text-gray-600 hover:text-gray-900 hover:underline transition duration-150 ease-in-out">Privacy Policy</Link>
//             </div>
//           </div>

//           {/* 2nd block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-gray-800 font-medium mb-2">Products</h6>
//             <ul className="text-sm">
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">CoxinhaSwap</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Coinrank.in</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Bitgard</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Elysium Network</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">XWallet</Link>
//               </li>                            
//             </ul>
//           </div>

//           {/* 3rd block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-gray-800 font-medium mb-2">Resources</h6>
//             <ul className="text-sm">
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Events</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Blog</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Tutorials & Guides</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Support Center</Link>
//               </li>
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Partners</Link>
//               </li>
//             </ul>
//           </div>

//           {/* 4th block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
//             <h6 className="text-gray-800 font-medium mb-2">Company</h6>
//             <ul className="text-sm">
//               <li className="mb-2">
//                 <Link to="/" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Home</Link>
//               </li>
//               {/* <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">About us</Link>
//               </li> */}
//               {/* <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Company values</Link>
//               </li> */}
//               {/* <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pricing</Link>
//               </li> */}
//               <li className="mb-2">
//                 <Link to="#" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Privacy Policy</Link>
//               </li>
//             </ul>
//           </div>

//           {/* 5th block */}
//           <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
//             <h6 className="text-gray-800 font-medium mb-2">Subscribe</h6>
//             <p className="text-sm text-gray-600 mb-4">Get the latest news and articles to your inbox every month.</p>
//             <form>
//               <div className="flex flex-wrap mb-4">
//                 <div className="w-full">
//                   <label className="block text-sm sr-only" htmlFor="newsletter">Email</label>
//                   <div className="relative flex items-center max-w-xs">
//                     <input id="newsletter" type="email" className="form-input w-full text-gray-800 px-3 py-2 pr-12 text-sm" placeholder="Your email" required />
//                     <button type="submit" className="absolute inset-0 left-auto" aria-label="Subscribe">
//                       <span className="absolute inset-0 right-auto w-px -ml-px my-2 bg-gray-300" aria-hidden="true"></span>
//                       <svg className="w-3 h-3 fill-current text-blue-600 mx-3 flex-shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
//                       </svg>
//                     </button>
//                   </div>
//                   {/* Success message */}
//                   {/* <p className="mt-2 text-green-600 text-sm">Thanks for subscribing!</p> */}
//                 </div>
//               </div>
//             </form>
//           </div>          

//         </div>

//         {/* Bottom area */}
//         <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

//           {/* Social links */}
//           <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
//             <li>
//               <a href="https://twitter.com/Authentic_Labs" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter" rel="noreferrer">
//                 <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
//                 </svg>
//               </a>
//             </li>
//             <li className="ml-4">
//               <a href="https://github.com/authentic-labs" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github" rel="noreferrer">
//                 <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
//                 </svg>
//               </a>
//             </li>
//             <li className="ml-4">
//               <a href="https://instagram.com/authentic.labs" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook" rel="noreferrer">
//                 <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
//                 </svg>
//               </a>
//             </li>
//           </ul>

//           {/* Copyrights note */}
//           <div className="text-sm text-gray-600 mr-4">Made by Authentic Labs. All rights reserved.</div>

//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;






import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

      
        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social links */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li>
              <a href="https://twitter.com/Authentic_Labs" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter" rel="noreferrer">
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                </svg>
              </a>
            </li>
            <li  className="ml-4">
              <a href="https://github.com/authentic-labs" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github" rel="noreferrer">
                <svg  className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
            <li  className="ml-4">
              <a href="https://instagram.com/authentic.labs" target="_blank" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github" rel="noreferrer">
                <svg style={{ position: 'relative', left: '20%', WebkitTransform: 'translateY(20%)', msTransform: 'translateY(20%)', transform: 'translateY(20%)'}} className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                 <path  d="M12.7 10c0-1.5-1.2-2.7-2.7-2.7S7.3 8.5 7.3 10s1.2 2.7 2.7 2.7c1.5 0 2.7-1.2 2.7-2.7zm1.4 0c0 2.3-1.8 4.1-4.1 4.1S5.9 12.3 5.9 10S7.7 5.9 10 5.9s4.1 1.8 4.1 4.1zm1.1-4.3c0 .6-.4 1-1 1s-1-.4-1-1s.4-1 1-1s1 .5 1 1zM10 3.4c-1.2 0-3.7-.1-4.7.3c-.7.3-1.3.9-1.5 1.6c-.4 1-.3 3.5-.3 4.7s-.1 3.7.3 4.7c.2.7.8 1.3 1.5 1.5c1 .4 3.6.3 4.7.3s3.7.1 4.7-.3c.7-.3 1.2-.8 1.5-1.5c.4-1.1.3-3.6.3-4.7s.1-3.7-.3-4.7c-.2-.7-.8-1.3-1.5-1.5c-1-.5-3.5-.4-4.7-.4zm8 6.6v3.3c0 1.2-.4 2.4-1.3 3.4c-.9.9-2.1 1.3-3.4 1.3H6.7c-1.2 0-2.4-.4-3.4-1.3c-.8-.9-1.3-2.1-1.3-3.4V10V6.7c0-1.3.5-2.5 1.3-3.4C4.3 2.5 5.5 2 6.7 2h6.6c1.2 0 2.4.4 3.4 1.3c.8.9 1.3 2.1 1.3 3.4V10z" fill="currentColor"/>
                 </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">Made by Authentic Labs. All rights reserved.</div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;
