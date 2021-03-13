import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import profileImg from './images/cv-photo.jpg'


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={profileImg}
                alt="cvPhoto"
                style={{height: '200px', borderRadius:'100px'}}
                 />
            </div>

            <h2 style={{textAlign:'center'}}>Anil Lama</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>Energetic Student of Business information technology specialized in 
                software engineering at Haaga-Helia University of Applied Sciences. I am 
                a fast learner with a broad range of interests in various technologies and 
                business analytics.
          </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Rasinkatu 15, 01360 Vantaa</p>
            <h5>Phone</h5>
            <p>+358440780088</p>
            <h5>Email</h5>
            <p>anil.lama@haaga-helia.fi</p>
            
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


               <Education
                 startYear={2019}
                 
                 schoolName="Haaga-Helia University of Applied Sciences"
                 schoolDescription="Studying Business Information technology since 2019
                 and have chosen software engineering module as 
                 professional study path for my degree. "
                  />
                
                

            <Education
              startYear={2009}
              endYear={2014}
              schoolName="Laurea University of Applied Sciences"
              schoolDescription="Completed bachelor’s degree in Business 
              Management majoring marketing and entrepreneurship."
               />
               <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Projects</h2>

            <Experience
              
              jobName="Fitness Trainer web app"
              jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
              />

              <Experience
               
                jobName="Car web Shop"
                jobDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={75}
                />
                <Skills
                  skill="Java"
                  progress={50}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={75}
                      />
                       <Skills
                      skill="MySQL"
                      progress={75}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
