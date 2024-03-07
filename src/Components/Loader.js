import React from 'react'
import LoaderCss from '../Assets/Loader.module.css';
export default function Loader() {
  return (
    <div className={LoaderCss.preloader}>
        <div className={LoaderCss.loader}></div>
    </div>
  )
}
