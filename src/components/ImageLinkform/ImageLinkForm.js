import React from 'react';
import './ImageLinkform.css'
 

const ImageLinkForm = () =>
{
    return(
    <div>
      <p className="f3">
          {'This is Magic , Upload Picture it will detect Face !!'}
      </p>
      <div className='center'>
        <div className="center shadow-5 pa4 br3">
          <input className='f4 pa2 w-70' type='tex'/>
          <button className='w-30 grow f4 link ph3 pv2 dib bg-light-purple'>
              Detect
          </button>
          </div>
         </div>
      </div>

    );
}

export default ImageLinkForm;