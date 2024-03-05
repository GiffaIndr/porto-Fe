import React from 'react';

export const Cv = () => {
  const handleDownload = () => {

    const pdfPath = './pdf/cv.pdf';
    
    const downloadLink = document.createElement('a');
    downloadLink.href = pdfPath;
    downloadLink.download = 'CV.pdf'; 


    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="text-[20px] text-center mt-2">
        <div onClick={handleDownload} >
          <button className='underline'>Download CV</button>
        </div>
      </div>
    </>
  );
};

export default Cv;
