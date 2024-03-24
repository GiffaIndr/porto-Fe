import React from 'react'
import { Image } from 'antd';
export const SecreteComp = () => {
  return (
   <>
   <div>
   <div className="min-h-screen bg-stone-900 flex justify-center items-center">
          <div className="w- p-5 bg-white rounded-sm shadow-xl hover:shadow-2xl hover:scale-105 transition-all transform duration-500">
            <Image
             width={200}
              className="object-cover rounded-t-md"
              src="./090805.jpeg"
              alt=""
            />
            <div className="mt-4">
              <h1 className="text-2xl font-bold text-gray-700">
              (◍•ᴗ•◍)
              </h1>
              <p className="text-sm mt-2 text-gray-700">Selamat Ujikom Sayang ❣</p>
              <p className="text-sm mt-2 text-gray-700"> 09-8-05</p>
           
            </div>
          </div>
        </div>
   </div>
   </>
  )
}
export default SecreteComp
