'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from 'src/app/images/img1.jpg';
import img2 from 'src/app/images/img2.jpg';
import img3 from 'src/app/images/img3.jpg';
import img4 from 'src/app/images/img4.jpg';
import img5 from 'src/app/images/img5.jpg';
import img6 from 'src/app/images/img6.jpg';
import img7 from 'src/app/images/img7.jpg';
import img8 from 'src/app/images/img8.jpg';
import img9 from 'src/app/images/img9.jpg';
import img10 from 'src/app/images/img10.jpg';
import img11 from 'src/app/images/img11.jpg'
import img12 from 'src/app/images/img12.jpg'
import img13 from 'src/app/images/img13.jpg'

const hotels = [
  { id: 1, image: img1, alt: 'Image 1', name: 'Hotel A', description: 'Description A' },
  { id: 2, image: img2, alt: 'Image 2', name: 'Hotel B', description: 'Description B' },
  { id: 3, image: img3, alt: 'Image 3', name: 'Hotel C', description: 'Description C' },
  { id: 4, image: img4, alt: 'Image 4', name: 'Hotel D', description: 'Description D' },
  { id: 5, image: img5, alt: 'Image 5', name: 'Hotel E', description: 'Description E' },
  { id: 6, image: img6, alt: 'Image 6', name: 'Hotel F', description: 'Description F' },
  { id: 7, image: img7, alt: 'Image 7', name: 'Hotel G', description: 'Description G' },
  { id: 8, image: img8, alt: 'Image 8', name: 'Hotel H', description: 'Description H' },
  { id: 9, image: img9, alt: 'Image 9', name: 'Hotel I', description: 'Description I' },
  { id: 10, image: img10, alt: 'Image 10', name: 'Hotel J', description: 'Description J' },
  { id: 11, image: img11, alt: 'Image 11', name: 'Hotel K', description: 'Description K' },
  { id: 12, image: img12, alt: 'Image 12', name: 'Hotel L', description: 'Description L' },
  { id: 13, image: img13, alt: 'Image 13', name: 'Hotel M', description: 'Description M' },
];

const Hotels = () => {

  let ref = useRef(null);
  const { push } = useRouter()

  let { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  let y = useTransform(scrollYProgress, [0, 1], ['0%', '55%']);
  let opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

  const scaleVariants = {
    hover: { scale: 1.09, boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)' },
    initial: { scale: 1, boxShadow: 'none' },
  };

  const handleClick = (item: any) => {
    push(`/hotel/${item.id}`)
  }

  return (
    <div className="border border-solid border-pink-500 overflow-auto">
      <motion.div style={{ y, opacity }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 m-3 p-3">
        {hotels.map((item) => (
          <motion.div
            key={item.id}
            className="text-black flex flex-col justify-between p-5 m-5 border border-solid border-pink-500 bg-slate-100"
            variants={scaleVariants}
            whileHover="hover"
            initial="initial"
          >
            <div>
              <Image src={item.image} alt={item.alt} className="object-cover w-full h-52 mb-4" />
              <div className="text-lg text-black font-medium flex align-middle items-center justify-evenly border border-solid border-pink-500 bg-inherit rounded">
                <h3 className="m-1 p-1">{item.name}</h3>
                <p className="m-1 p-1">{item.description}</p>
              </div>
              <button onClick={() => handleClick(item)} className="my-3 p-2.5 bg-transparent hover:bg-[#D03F71] text-[#317C63] font-semibold hover:text-white border border-[#317C63] hover:border-transparent rounded">
                BookIT
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Hotels;
