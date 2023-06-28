import React from 'react';
import cate from '../data/CateData.json';
import'../App.css';
import { useRef } from 'react';

function OneComponent(props) {

    const navData = cate.navData;
    const cateData = cate.categoryData;

    const mainRefImage=useRef(null);

    return (
        <div>
            <h2 className='alert alert-danger'>OneComponent - CateData.json 출력</h2>

            <div className='nav_container'>
                <ul className='nav_category'>
                    {
                        navData.map((nav,idx)=>
                        <li>
                            {/* <div>
                                <img alt='' src={nav.img} className='imgcategory bb'/>
                            </div>
                            <div className=''>
                                {nav.title}
                            </div> */}
                            <figure>
                                <img alt='' src={nav.img} className='imgcategory bb'
                                onClick={(e)=>{
                                    mainRefImage.current.src=e.target.src;
                                }}/>
                                <figcaption className='bb2'>
                                    <b>{nav.title}</b>
                                </figcaption>
                            </figure>
                        </li>)
                    }
                </ul>
            </div>

            <hr/>
            <div className='nav_container'>
                <ul className='nav_category'>
                    {
                        cateData.map((nav,idx)=>
                        <li>
                            <figure>
                                <img alt='' src={nav.img} className='imgcategory bb'
                                onClick={(e)=>{
                                    mainRefImage.current.src=e.target.src;
                                }}/>
                                <figcaption className=''>
                                    <b>{nav.title}</b>
                                </figcaption>
                            </figure>
                        </li>)
                    }
                </ul>
            </div>

            <div>
            <img alt='' src='/kk.gif' style={{position:'absolute', margin:'0 auto'}} ref={mainRefImage} className='pto'/>

            </div>

        </div>
    );
}

export default OneComponent;