import x from './assets/x.png';
import scroll from './assets/scroll.svg';
import { motion } from 'framer-motion';
import ScrollIntoView from 'react-scroll-into-view';

export function Intro() {
  return (
    <div className="">
      <motion.div initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }} transition={{ ease: "easeOut", duration: 2 }} className='w-full mt-40 bg-gradient-to-r from-tedRed h-12 sm:h-[132px] flex justify-center items-center overflow-visible'>
        <div className='text-customWhite font-montserrat sm:text-[80px] font-semibold uppercase'>
          Found
        </div>
        <img src={x} alt="x" className="w-1/3 overflow-visible" />
        <div className='text-customWhite font-montserrat sm:text-[80px] font-semibold uppercase'>
          missing
        </div>
      </motion.div>
      <ScrollIntoView selector='#details'>
        <button>
          <motion.img initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ ease: "easeOut", duration: 2 }} src={scroll} alt="" className='absolute bottom-0 left-1/2 -ml-10 mb-12' />
        </button>
      </ScrollIntoView>
    </div>
  );
}
