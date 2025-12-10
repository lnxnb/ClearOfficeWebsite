import React from "react";

const Details = () => {
  return (
    <div className="max-w-[1536px] mx-auto flex flex-col gap-8 pb-12 md:pb-18 lg:pb-24 xl:pb-32.5 px-4 xl:-mt-30">
      <div className="flex flex-col gap-2 items-center">
        <div className="flex items-center gap-3 px-4 py-2 border  border-primary rounded-[48px] w-fit">
          <div className="size-2 bg-primary rounded-full"></div>
          <h1 className="text-sm/[150%] text-primary font-satoshi">Reach us</h1>
        </div>
        <h1 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-[56px]/[130%] text-center tracking-[-2%] text-neutral-800">
          Let’s Get <span className="text-primary"> Started!</span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8  items-stretch">
        <a href="tel:5712745031" className="block ">
          <div className="bg-neutral-50 hover:border-primary transition-all duration-300 hover:bg-card-hover  border border-neutral-200 rounded-4xl p-8 flex flex-col gap-8 items-center h-full">
            <div>
              <svg
                width={56}
                height={56}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={56} height={56} rx={28} fill="#0071E3" />
                <path
                  d="M35.2003 41.3333C29.7567 41.3263 24.5381 39.1607 20.6889 35.3115C16.8396 31.4622 14.674 26.2436 14.667 20.8C14.667 19.1733 15.3132 17.6133 16.4634 16.4631C17.6136 15.3128 19.1737 14.6667 20.8003 14.6667C21.1448 14.664 21.4887 14.6953 21.827 14.76C22.1537 14.808 22.475 14.8893 22.787 15C23.006 15.0768 23.2011 15.2095 23.3531 15.3849C23.5051 15.5603 23.6087 15.7723 23.6537 16L25.4803 24C25.5296 24.2171 25.5236 24.4432 25.4631 24.6574C25.4025 24.8717 25.2893 25.0674 25.1337 25.2267C24.9603 25.4133 24.947 25.4267 23.307 26.28C24.6203 29.1611 26.9246 31.4749 29.8003 32.8C30.667 31.1467 30.6803 31.1333 30.867 30.96C31.0263 30.8044 31.2219 30.6911 31.4362 30.6306C31.6505 30.57 31.8765 30.5641 32.0937 30.6133L40.0937 32.44C40.314 32.4912 40.5177 32.5977 40.6856 32.7493C40.8536 32.9009 40.9802 33.0927 41.0537 33.3067C41.2801 33.9443 41.3929 34.6167 41.387 35.2933C41.3624 36.913 40.6981 38.4572 39.539 39.5889C38.3799 40.7205 36.8202 41.3476 35.2003 41.3333ZM20.8003 17.3333C19.882 17.3368 19.0023 17.7032 18.3529 18.3526C17.7035 19.0019 17.3372 19.8817 17.3337 20.8C17.3372 25.5374 19.2207 30.0798 22.5706 33.4297C25.9205 36.7796 30.4629 38.6631 35.2003 38.6667C36.1187 38.6631 36.9984 38.2968 37.6477 37.6474C38.2971 36.998 38.6635 36.1183 38.667 35.2V34.76L32.4803 33.3333L32.0937 34.0667C31.4937 35.2267 31.0537 36.0667 29.9337 35.6133C27.7242 34.8225 25.7186 33.5494 24.0626 31.8865C22.4067 30.2236 21.142 28.2128 20.3603 26C19.8803 24.96 20.787 24.48 21.9337 23.88L22.667 23.52L21.2403 17.3333H20.8003Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-satoshi font-bold text-[30px] md:text-[36px]/[130%] text-center tracking-[-2%] text-neutral-800">
                Call
              </h1>
              <p className="font-satoshi text-base/[150%] text-center text-neutral-600">
                Tel: (571) 274-5031
              </p>
            </div>
          </div>
        </a>
        <a href="mailto:info@clearoffice.org" className="block">
          <div className="bg-neutral-50 border border-neutral-200   hover:border-primary transition-all duration-300 hover:bg-card-hover rounded-4xl p-8 flex flex-col gap-8 items-center h-full">
            <div>
              <svg
                width={56}
                height={56}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={56} height={56} rx={28} fill="#0071E3" />
                <path
                  d="M37.3337 17.3334H18.667C17.6061 17.3334 16.5887 17.7548 15.8386 18.5049C15.0884 19.2551 14.667 20.2725 14.667 21.3334V34.6667C14.667 35.7276 15.0884 36.745 15.8386 37.4951C16.5887 38.2453 17.6061 38.6667 18.667 38.6667H37.3337C38.3945 38.6667 39.4119 38.2453 40.1621 37.4951C40.9122 36.745 41.3337 35.7276 41.3337 34.6667V21.3334C41.3337 20.2725 40.9122 19.2551 40.1621 18.5049C39.4119 17.7548 38.3945 17.3334 37.3337 17.3334ZM36.4403 20L28.0003 26.3334L19.5603 20H36.4403ZM37.3337 36H18.667C18.3134 36 17.9742 35.8596 17.7242 35.6095C17.4741 35.3595 17.3337 35.0203 17.3337 34.6667V21.6667L27.2003 29.0667C27.4311 29.2398 27.7118 29.3334 28.0003 29.3334C28.2888 29.3334 28.5695 29.2398 28.8003 29.0667L38.667 21.6667V34.6667C38.667 35.0203 38.5265 35.3595 38.2765 35.6095C38.0264 35.8596 37.6873 36 37.3337 36Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-satoshi font-bold text-[30px] md:text-[36px]/[130%] text-center tracking-[-2%] text-neutral-800">
                Email
              </h1>
              <p className="font-satoshi text-base/[150%] text-center text-neutral-600">
                info@clearoffice.org
              </p>
            </div>
          </div>
        </a>
        {/* <a className="block">
          <div className="bg-neutral-50  hover:border-primary transition-all duration-300 hover:bg-card-hover border border-neutral-200 rounded-4xl p-8 flex flex-col gap-8 items-center">
            <div>
              <svg
                width={56}
                height={56}
                viewBox="0 0 56 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width={56} height={56} rx={28} fill="#0071E3" />
                <path
                  d="M27.9997 14.6666C25.1891 14.6665 22.492 15.7756 20.4947 17.753C18.4973 19.7304 17.3611 22.4162 17.333 25.2266C17.333 32.5333 26.733 40.6666 27.133 41.0133C27.3745 41.2199 27.6819 41.3334 27.9997 41.3334C28.3175 41.3334 28.6248 41.2199 28.8663 41.0133C29.333 40.6666 38.6663 32.5333 38.6663 25.2266C38.6382 22.4162 37.502 19.7304 35.5047 17.753C33.5073 15.7756 30.8103 14.6665 27.9997 14.6666ZM27.9997 38.2C25.773 36.08 19.9997 30.2 19.9997 25.2266C19.9997 23.1049 20.8425 21.0701 22.3428 19.5698C23.8431 18.0695 25.8779 17.2266 27.9997 17.2266C30.1214 17.2266 32.1562 18.0695 33.6565 19.5698C35.1568 21.0701 35.9997 23.1049 35.9997 25.2266C35.9997 30.16 30.2263 36.08 27.9997 38.2Z"
                  fill="white"
                />
                <path
                  d="M27.9997 20C27.3868 20 26.78 20.1207 26.2138 20.3552C25.6476 20.5898 25.1332 20.9335 24.6998 21.3668C24.2665 21.8002 23.9228 22.3146 23.6882 22.8808C23.4537 23.447 23.333 24.0538 23.333 24.6667C23.333 25.2795 23.4537 25.8863 23.6882 26.4525C23.9228 27.0187 24.2665 27.5332 24.6998 27.9665C25.1332 28.3998 25.6476 28.7436 26.2138 28.9781C26.78 29.2126 27.3868 29.3333 27.9997 29.3333C29.2374 29.3333 30.4243 28.8417 31.2995 27.9665C32.1747 27.0913 32.6663 25.9043 32.6663 24.6667C32.6663 23.429 32.1747 22.242 31.2995 21.3668C30.4243 20.4917 29.2374 20 27.9997 20ZM27.9997 26.6667C27.4692 26.6667 26.9605 26.456 26.5855 26.0809C26.2104 25.7058 25.9997 25.1971 25.9997 24.6667C25.9997 24.1362 26.2104 23.6275 26.5855 23.2525C26.9605 22.8774 27.4692 22.6667 27.9997 22.6667C28.5301 22.6667 29.0388 22.8774 29.4139 23.2525C29.789 23.6275 29.9997 24.1362 29.9997 24.6667C29.9997 25.1971 29.789 25.7058 29.4139 26.0809C29.0388 26.456 28.5301 26.6667 27.9997 26.6667Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-satoshi font-bold text-[30px] md:text-[36px]/[130%] text-center tracking-[-2%] text-neutral-800">
                Address
              </h1>
              <p className="font-satoshi text-base/[150%] text-center text-neutral-600">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </a> */}
      </div>
    </div>
  );
};

export default Details;
