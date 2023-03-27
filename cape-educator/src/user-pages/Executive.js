import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import "../assest/css/index.css";
import "../assest/css/pages/executive.css";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';
import DaveTutte from '../assest/images/executive/Dave-Tutte.jpg';
const ExecutiveInitail=[{
    id:1,
    name:'Dave Tutte',
    jobTitle:'President',
    palce:'Halton Regional Police'
},
{
    id:2,
    name:'Dominique Germain',
    job:'Vice-President',
    palce:'Algonquin College'
},{
    id:3,
    name:'Melanie Marchand',
    job:'Co-Treasurer',
    palce:'Georgian College'
}
]

const Executive = () => {
    const [executive,setExecutive]=useState(ExecutiveInitail);
  return (
    <>
      <UserHeader></UserHeader>

      <div className="speaker" id="Speakers">
        <div className="container">
            <div className="row">
                {executive.map(item=>
                <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                    <div className="speaker_box">
                        <div className="speaker_header">
                            <div className="speaker_wrap_img" style={{backgroundImage: `url(${DaveTutte})`}}>
                            </div>
                        </div>
                        <h3>
                            <Link to={`/executive/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p>
                            {item.jobTitle}
                            <span className="d-block">{item.palce}</span>
                        </p>

                    </div>
                </div>
                )}
            </div>

        </div>
    </div>





      <UserFooter></UserFooter>
    </>
  )
}

export default Executive