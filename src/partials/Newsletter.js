import React from 'react';

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div style={{ background: '#202020'}} className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="rgb(210,210,255)" offset="0%" />
                    <stop stopColor="rgb(250,190,255)" offset="44.317%" />
                    <stop stopColor="rgb(120,10,255)" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="rgb(250,190,255)">
                    {/* <ellipse fillOpacity=".19" cx="155" cy="45.576" rx="3" ry="2.576" /> */}
                    <ellipse fillOpacity=".05" cx="110" cy="39.402" rx="34" ry="33.364" />
                    <ellipse fillOpacity=".08" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="15" ry="14.788" />
                    <ellipse fillOpacity=".42" cx="92" cy="111.303" rx="3" ry="2.788" />
                    <ellipse fillOpacity=".03" cx="42" cy="96.811" rx="40" ry="39.947" />
                    <ellipse fillOpacity=".2" cx="68" cy="165.072" rx="14" ry="13.947" />
                    {/* <ellipse fillOpacity=".27" cx="45" cy="45.576" rx="4" ry="3.841" /> */}
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Subscribe News</h3>
                <p className="text-gray-300 text-lg mb-6">
                Get the latest news to your inbox 
                </p>
                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                    <a className="btn text-white bg-purple-600 hover:bg-purple-700 shadow" href="#0">Subscribe</a>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  {/* <p className="text-sm text-gray-400 mt-3">7 days free trial. No credit card required.</p> */}
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
