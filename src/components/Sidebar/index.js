import { TbLayoutDashboard } from 'react-icons/tb';
import { BiUserCheck, BiLayer } from 'react-icons/bi';
import {
  AiOutlineProject,
  AiOutlineMail,
  AiOutlineShoppingCart,
  AiOutlineFileText,
  AiOutlineCodeSandbox,
} from 'react-icons/ai';
import { BsChatDots, BsCalendar2Day, BsPen } from 'react-icons/bs';
import { HiOutlineMenuAlt1, HiOutlineWifi } from 'react-icons/hi';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';
import { TbFileInvoice } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import * as sidebarActions from '../../state/sidebar/sidebarActions';

import { useState } from 'react';
const cls = (...classes) => classes.filter(Boolean).join(' ');
const Index = () => {
  const dispatch = useDispatch();

  const [showDashboard, setShowDashboard] = useState(true);
  const [hideSidebar, setHideSidebar] = useState(false);
  dispatch(sidebarActions.offSidebar(hideSidebar));

  return (
    <div
      className={cls(
        'overflow-auto scrollbar-hide bg-[#010422] flex flex-col px-4 py-7 h-screen w-[43%] md:w-[13%] lg:w-[13%] xl:w-[13%] fixed',
        hideSidebar === true
          ? ' -translate-x-[75%] transform transition duration-700 ease-in-out'
          : 'translate-x-0 transform transition duration-700 ease-in-out'
      )}
    >
      <div className="flex justify-between">
        <div className="text-gray-400">Mohd Ziya</div>
        <div className="text-gray-400 pt-2 cursor-pointer">
          <HiOutlineMenuAlt1 onClick={() => setHideSidebar(!hideSidebar)} />
        </div>
      </div>
      <div className="font-bold text-xs flex flex-row pt-10 text-gray-600">
        MENU
      </div>
      <div className=" text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className=" ">
            <TbLayoutDashboard />
          </div>
          <div className="pl-1 -mt-[2px] ">Dashboards</div>
        </div>
        <div className="">
          <IoIosArrowUp
            className="hover:cursor-pointer"
            onClick={() => setShowDashboard(!showDashboard)}
          />
        </div>
      </div>
      <div
        className={cls(
          '',
          showDashboard === false
            ? ' overflow-hidden h-0 '
            : 'translate-y-2 transform transition duration-700 ease-in-out h-full'
        )}
      >
        <div className="cursor-pointer text-gray-500 hover:text-white flex justify-between pt-3">
          <div className="flex flex-row">
            <div className="text-[#010422] ">
              <TbLayoutDashboard />
            </div>
            <div className="pl-1 -mt-[2px] ">Ecommerce</div>
          </div>
          <div className="text-[#010422]">
            <IoIosArrowDown />
          </div>
        </div>
        <div className="cursor-pointer text-gray-500 hover:text-white flex justify-between pt-3">
          <div className="flex flex-row">
            <div className="text-[#010422] ">
              <TbLayoutDashboard />
            </div>
            <div className="pl-1 -mt-[2px] ">Sass</div>
          </div>
          <div className="text-[#010422]">
            <IoIosArrowUp />
          </div>
        </div>
        <div className="cursor-pointer text-gray-500 hover:text-white flex justify-between pt-3">
          <div className="flex flex-row">
            <div className="text-[#010422] ">
              <TbLayoutDashboard />
            </div>
            <div className="pl-1 -mt-[2px] ">Crypto</div>
          </div>
          <div className="text-[#010422]">
            <IoIosArrowUp />
          </div>
        </div>
      </div>
      <div className="font-bold text-xs flex flex-row pt-10 text-gray-600">
        APPLICATIONS
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <BsCalendar2Day />
          </div>
          <div className="pl-1 -mt-[2px] ">Calendar</div>
        </div>
        <div className=""></div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <BsChatDots />
          </div>
          <div className="pl-1 -mt-[2px] ">Chat</div>
        </div>
        <div className=""></div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <AiOutlineFileText />
          </div>
          <div className="pl-1 -mt-[2px] ">File Manager</div>
        </div>
        <div className=""></div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <AiOutlineShoppingCart />
          </div>
          <div className="pl-1 -mt-[2px] ">Ecommerce</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <AiOutlineMail />
          </div>
          <div className="pl-1 -mt-[2px] ">Email</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <TbFileInvoice />
          </div>
          <div className="pl-1 -mt-[2px] ">Invoices</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <AiOutlineProject />
          </div>
          <div className="pl-1 -mt-[2px] ">Projects</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <HiOutlineWifi />
          </div>
          <div className="pl-1 -mt-[2px] ">Contacts</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="cursor-pointer hover:text-white font-bold text-xs flex flex-row pt-10 text-gray-600">
        LAYOUTS
      </div>
      <div className="cursor-pointer hover:text-white font-bold text-xs flex flex-row pt-10 text-gray-600">
        PAGES
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <BiUserCheck />
          </div>
          <div className="pl-1 -mt-[2px] ">Authentication</div>
        </div>
        <div className=""></div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <AiOutlineCodeSandbox />
          </div>
          <div className="pl-1 -mt-[2px] ">Utility</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="cursor-pointer hover:text-white font-bold text-xs flex flex-row pt-10 text-gray-600">
        COMPONENTS
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <BiLayer />
          </div>
          <div className="pl-1 -mt-[2px] ">UI Elements</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
      <div className="text-gray-500 hover:text-white cursor-pointer text-sm flex justify-between pt-5 ">
        <div className="flex flex-row">
          <div className="">
            <BsPen />
          </div>
          <div className="pl-1 -mt-[2px] ">Forms</div>
        </div>
        <div className="">
          <IoIosArrowDown className="hover:cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Index;
