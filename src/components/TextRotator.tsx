import React from 'react'

function TextRotator() {
  return (
   
    <div
    className="py-4  rounded-md flex flex-col justify-center items-center overflow-hidden"
  >
    <div className="font-poppins text-base sm:text-3xl [text-wrap:balance] text-gray-700">
    Psikoloji Öğrencisi &
      <span
        className="inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden"
      >
        <ul
          className="block text-left font-rubik text-lg sm:text-3xl leading-tight "
        >
          <li className="text-[#2f7df4]">Grafik Tasarımcı</li>

          
          
        </ul>
      </span>
    </div>
  </div>
  )
}

export default TextRotator