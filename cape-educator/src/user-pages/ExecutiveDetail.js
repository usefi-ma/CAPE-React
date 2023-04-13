import React from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import "../assets/css/index.css";
import "../assets/css/pages/executive.css";

import UserHeader from '../layouts/user-layout/UserHeader';
import UserFooter from '../layouts/user-layout/UserFooter';

import DaveTutte from '../assets/images/executive/Dave-Tutte.jpg';
const ExecutiveDetail = () => {
    const {id}=useParams();
    const navigate=useNavigate();
  return (
    <>
        <UserHeader></UserHeader>
        <div role="presentation" className="breadcrumb">
        <h2> {id} Dave Tutte</h2>
        
        <p className='executive_title'> Halton Regional Police</p>
      </div>
    <section className="team_detail">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-md-5 gx-lg-5 team_item">
                    <div className="team_link team_item_content">
                        <img src={DaveTutte} alt="Dave Tutte" />

                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-7">
                    <div className="desc">
                        <p>
                            Staff Sergeant Dave Tutte has been with the Halton Regional Police Service for 14 years. Dave started his career working in Patrol in the City of Burlington, from there Dave was assigned to the Tactical Rescue Unit where he was a team leader and on the rappel team.
                        </p>     <p>
                            In January 2016 Dave was promoted to the rank of Sergeant and was assigned to the Regional Community Mobilization Bureau.  While in this role, Dave was responsible for the service delivery for Mental Health, as well as Diversity and Inclusion.  Dave was later seconded to the Community Safety and Well-being project.
                        </p>     <p>
                            In July 2018 Dave moved to the Training Bureau and in March 2019 was promoted to the rank of Staff Sergeant and has been fortunate to stay posted in the Training/Recruiting Bureau since. In addition to his training and recruiting duties, Dave has also been a Hostage Negotiator since 2015.
                        </p>     <p>
                            Dave has been a member of the OACP Education, Training and Professional Development committee since 2018 and currently Dave is the co-chair of the OACP Innovation and Technology sub-committee, and the vice-chair of the Incident Command sub-committee.  Dave is also a member of the C.P.K.N Innovation and Learning National Advisory committee and a member of the Program Advisory committees for Georgian and Humber College.  Dave has been the President of the Canadian Association of Police Educators since 2021.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
{/* <button onClick={()=>navigate(-1)}> Back</button> */}

        <UserFooter></UserFooter>
    </>
  )
}

export default ExecutiveDetail