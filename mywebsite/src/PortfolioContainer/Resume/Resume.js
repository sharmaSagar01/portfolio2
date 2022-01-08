import React,{useState} from 'react'

import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilities/ScrollService'
import Animations from '../../utilities/animations'

import './Resume.css'



export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    const ResumeHeading = (props) => {
        return (
          <div className="resume-heading">
            <div className="resume-main-heading">
              <div className="heading-bullet"></div>
              <span>{props.heading ? props.heading : ""}</span>
              {props.fromDate && props.toDate ? (
                <div className="heading-date">
                  {props.fromDate + "-" + props.toDate}
                </div>
              ) : (
                <div></div>
              )}
            </div>
            <div className="resume-sub-heading">
              <span>{props.subHeading ? props.subHeading : ""}</span>
            </div>
            <div className="resume-heading-description">
              <span>{props.description ? props.description : ""}</span>
              <span>{props.link ? props.link : ""}</span>
            </div>
          </div>
        );
      };
    
    const resumeBullets = [
        {label: 'Academic Qualification', logoSrc:'education.svg'},
        {label: 'Past Work Experience', logoSrc:'work-history.svg'},
        {label: 'Programming Skills', logoSrc:'programming-skills.svg'},
        {label: 'Projects', logoSrc:'projects.svg'},
        {label: 'Interests', logoSrc:'interests.svg'},
    ];

    const programmingSkillDetails =[
        {skill: 'React JS', ratingPercentage: 40},
        {skill: 'Python', ratingPercentage: 30},
        {skill: 'Django', ratingPercentage: 20},
        {skill: 'Amazon Web Services', ratingPercentage: 35},
        {skill: 'Javascript', ratingPercentage: 30},
        {skill: 'Java', ratingPercentage: 5},
        {skill: 'HTML', ratingPercentage: 70},
        {skill: 'CSS', ratingPercentage: 50}


    ];

    const projectDetails =[
        {
            title: 'Covid-19 Tracker Web App',
            duration:{fromDate :'2020' , toDate:'2021' },
            description: 'Web App which specializes in tracking the Covid-19 infections along with death and recoveries figure of the world.',
            subHeading: 'Technologies Used: React JS, Firebase, OpenStreeMap',
            link:'https://covid-19-tracker-app-30831.web.app/'

        },
        {
            title: 'Amazon Web Clone',
            duration:{fromDate :'2020' , toDate:'2021' },
            description: 'Web App which specializes in selling the items online. ',
            subHeading: 'Technologies Used: React JS, Firebase, Stripe',
            link: 'https://clone-build.web.app/'

        },
        {
            title: 'TO-DO List Web App',
            duration:{fromDate :'2020' , toDate:'2021' },
            description: 'Web App to create a to-do list.',
            subHeading: 'Technologies Used: React JS, Firebase, Uses of local memory on browser.',
            link:'https://todoapp-76e7b.web.app/'

        }
    ]

    const resumeDetails = [
        <div className='resume-screen-container' key='education'>
            <ResumeHeading
            heading={'University of Windsor,Windsor, ON, Canada'}
            subHeading={'Masters in Applied Computing'}
            fromDate ={'2022'}
            toDate ={'present'}
            
            />
            <ResumeHeading
            heading={'Mount Annapurna Campus, Nepal'}
            subHeading={'BSc in Computer Science and Information Technology'}
            fromDate ={'2014'}
            toDate ={'2018'}
            
            />
            <ResumeHeading
            heading={'Python for Everbody Specialization'}
            subHeading={
                <>
                Online course taught by Dr. Charles R.Serverance on Coursera. 
                Click <a href='https://coursera.org/share/8a3b2d67b57d9ee0b7fe05c331c6b6f3' target='_blank'>here</a> for certificate.
            
                </>
                 }
            fromDate ={'2021'}
            toDate ={'2021'}
            
            />
             
            <ResumeHeading
            heading={'AWS Cloud Technical Essentials'}
            subHeading={
                <>
                Online course taught by AWS Team on Coursera. 
                Click <a href='https://coursera.org/share/d071083c1059cc2bf542e20473dda0d1' target='_blank'>here</a> for certificate.
            
                </>
                }
            fromDate ={'2021'}
            toDate ={'2021'}
            
            />

        </div>,
        <div className='resume-screen-container' key ='work-experience'>

           <ResumeHeading
            heading={'Paymentology Pvt.Ltd (Nepal Branch:- IT Deurali Pvt.Ltd)'}
            subHeading={'Support Technician'}
            fromDate ={'2019'}
            toDate ={'2021'}
            
            />
            <div className='experience-description'>
                <span className="resume-description-text">Worked as a member of Support Team to assist with technical Porblem.</span>
            </div>
            <div className="experience-description">
                <span className='resume-description-text'>
                         -Monitoring the Production Environment
                </span>
            </div>
            
            <div className="experience-description">
                <span className='resume-description-text'>
                 -Reporting Critical Issues
                </span>
                </div>
                <div className="experience-description">
                <span className='resume-description-text'>
                 -Maintaining a good communication with clients
                </span>
                </div>
                <div className="experience-description">
                <span className='resume-description-text'>
                -Providing L1 and L2 level of support to our clients
                </span>
                </div>
                
        </div>,
        <div className="resume-screen-container programming-skills-container" key= 'programming-skills'>
                {programmingSkillDetails.map((skill, index)=>(
                    <div className='skill-parent' key={index}>
                        <div className='heading-bullet'></div>
                        <span>{skill.skill}</span>
                        <div className="skill-percentage">
                            <div style={{width: skill.ratingPercentage + '%'}} className='active-percentage-bar'>
                                    
                            </div>
                        </div>
                    </div>
                ))}
        </div>,

            <div className='resume-screen-container' key='projects'>
            {projectDetails.map((projectsDetails, index)=>(
                                        <ResumeHeading 
                                        key={index}
                                        heading={projectsDetails.title}
                                        subHeading={projectsDetails.subHeading}
                                        description={projectsDetails.description}
                                        link={
                                            <>
                                            <a href={projectsDetails.link} target='_blank'> Click this link to see the project..</a>
                                            </>
                                        }
                                            
                                        fromDate={projectsDetails.duration.fromDate}
                                        toDate={projectsDetails.duration.toDate}
                                        
                                        />
                                    ))}

            </div>,
            <div className='resume-screen-container' key='interests'>
                        <ResumeHeading
                        
                        heading = 'Watching Movie'
                        
                        />
                         <ResumeHeading
                        
                        heading = 'Playing Football'
                        
                        />
                         <ResumeHeading
                        
                        heading = 'Listening songs'
                        
                        />
                         <ResumeHeading
                        
                        heading = 'Hiking'
                        
                        />
            </div>
        
    ];

    const handleCarousal = (index)=>{
        let offsetHeight = 360;
        let newCarousalOffset ={
            style:{ transform: 'translateY('+ index * offsetHeight * -1 +'px)'},
        };
        setCarousalOffsetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () =>{
        return resumeBullets.map((bullet,index)=>(
            <div
            onClick={()=> handleCarousal(index)}
            className={index === selectedBulletIndex? 'bullet selected-bullet': 'bullet'}
            key={index}
            
            >
                <img className='bullet-logo' 
                src={require (`../../assets/Resume/${bullet.logoSrc}`)}
                alt='B'
                />
                <span className="bullet-label">{bullet.label}</span>
            </div>
        ))

    }

    const getResumeScreen =()=>{
        return(
            <div 
            style ={carousalOffsetStyle.style}
            className='resume-details-carousal'
            >
                {resumeDetails.map((ResumeDetail)=> ResumeDetail)}

            </div>
        )
    }

    
    return (
        <div className='resume-container screen-container' id={props.id || ''}>
            <div className="resume-content">
                <ScreenHeading title={'Resume'} subHeading={'My Bio Details'} />
                <div className="resume-card">
                    <div className="resume-bullets">
                        <div className="bullet-container">
                            <div className="bullet-icons"></div>
                                <div className="bullets">{getBullets()}</div>
                            
                        </div>
                        
                    </div>
                    <div className="resume-bullet-details">{getResumeScreen()}</div>
                </div>
            </div>
            
        </div>
    )
}
