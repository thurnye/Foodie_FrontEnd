import React from 'react';
interface IAppAdvert {
  src: string;
  title: string;
}

const AppAdvert: React.FC<IAppAdvert> = ({ src, title }) => {
  return (
    <>
      <div className='advert'>
        <div className='card mb-3'>
          <div className='row g-0'>
            <div className='col-12'>
              <a href='#'>
                <img
                  src={src}
                  className='img-fluid rounded-start'
                  alt={title}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AppAdvert;
