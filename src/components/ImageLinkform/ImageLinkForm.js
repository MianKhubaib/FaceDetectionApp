import React from 'react';

 

const ImageLinkForm = () =>
{
    return(
    <div>
      <p className="f3 tc">
          {'This is Magic , Upload Picture it will detect Face !!'}
      </p>
      <div className="center">
        <div className="tc shadow pa2 center">
          <input className='f4 pa2 w-20 center' type='tex'/>
          <button className='w-10 grow f4 link ph3 pv2 dib white bg-light-purple'>
              Detect
          </button>
          </div>
         </div>
      </div>

    );
}

export default ImageLinkForm;