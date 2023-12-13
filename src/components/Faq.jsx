import { Disclosure, Transition } from "@headlessui/react";
import { FaqArrowIcon } from "./common/Icon";
import { faqData } from "./common/Helper";

export default function Faq() {
  return (
    <div id="faq">
      <div className="max-w-[1920px] w-full p-4 mx-auto flex flex-col gap-[70px]">
        <p className="text-[#4F3BE5] text-[40px] leading-[48px] sm:text-[60px] font-bold family sm:leading-[68px] flex justify-center">
          FAQ’s
        </p>
        <div>
          <div className="flex flex-col gap-4">
            {faqData.map((items, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <div className="mx-auto w-full max-w-[1098px] ">
                    <div className="flex flex-col gap-2">
                      <Disclosure.Button
                        className={`flex gap-5 text-left py-3 px-3 md:p-[17px_23px_17px_30px] mx-auto border-[2px]  border-[#DCDCDC] rounded-[10px] items-center w-full justify-between text-[#5E5E5E] text-[16px] sm:text-[18px] leading-[24px] sm:leading-[30px] font-montserrat font-medium ${
                          open
                            ? "bg-[#FAFAFF] duration-150"
                            : "bg-white duration-150"
                        }`}
                      >
                        <span>{items.que}</span>
                        <div
                          className={`${
                            open ? "rotate-180 transform" : " "
                          } transition-all duration-200 ease-in-out`}
                        >
                          {items.Icon}
                        </div>
                      </Disclosure.Button>
                      <Transition
                        show={open}
                        className="transition-all duration-500 overflow-hidden"
                        enterFrom="transform scale-95 opacity-0 max-h-0"
                        enterTo="transform scale-100 opacity-100 max-h-[1000px]"
                        leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
                        leaveTo="transform scale-95 opacity-0 max-h-0"
                      >
                        <Disclosure.Panel className="px-3 md:p-[23px_30px] text-[#4C4B4B] text-[16px] font-jost font-normal leading-[34px">
                          {items.ans}
                        </Disclosure.Panel>
                      </Transition>
                    </div>
                  </div>
                )}
              </Disclosure>
            ))}
            <Disclosure>
              {({ open }) => (
                <div className="mx-auto w-full max-w-[1098px] ">
                  <div className="flex flex-col gap-2">
                    <Disclosure.Button
                      className={`flex gap-5 text-[#5E5E5E] text-left py-3 px-3 md:p-[17px_23px_17px_30px] mx-auto border-[2px] border-[#DCDCDC] rounded-[10px] items-center w-full justify-between text-[16px] sm:text-[18px] leading-[24px] sm:leading-[30px] font-montserrat font-medium  ${
                        open
                          ? "bg-[#FAFAFF] duration-150"
                          : "bg-white duration-150"
                      }`}
                    >
                      <span>
                        What are the applications for the Adashe Sat/Blockchain?
                      </span>
                      <div
                        className={`${
                          open ? "rotate-180 transform" : " "
                        } transition-all duration-200 ease-in-out`}
                      >
                        <FaqArrowIcon />
                      </div>
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      className="transition-all duration-500 overflow-hidden"
                      enterFrom="transform scale-95 opacity-0 max-h-0"
                      enterTo="transform scale-100 opacity-100 max-h-[1000px]"
                      leaveFrom="transform scale-100 opacity-100 max-h-[1000px]"
                      leaveTo="transform scale-95 opacity-0 max-h-0"
                    >
                      <Disclosure.Panel className="px-3 md:p-[23px_30px] text-[#4C4B4B] text-[16px] font-jost font-normal leading-[34px]">
                        Applications for the Adashe Sat/Blockchain include:
                        <ul className="list-none">
                          <li>- Transactions</li>
                          <li>- Data Federation and virtualization</li>
                          <li>- Multisignature wallet host</li>
                          <li>- Supply Chain</li>
                          <li>
                            - Satellite and blockchain-enhanced IoT networks
                          </li>
                          <li>- Encrypted Messaging</li>
                        </ul>{" "}
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                </div>
              )}
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
}
