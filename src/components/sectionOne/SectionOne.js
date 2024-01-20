import React from 'react';
import './sectionOne.css';
import HomePics from '../../assets/HomePics.png';

const section1 = () => {
  return (
    <div className='sectionOne_container'>
          <div className='sectionOne_containerOne'>
          <div className='sectionOne_containerOne_Pics'>
            <img src={HomePics} alt='home pics' width='100%'/>
            </div>

            </div>

            <div className='sectionOne_containerTwo'>
              <div className="containerTwo_content">
              <h2 className='aboutMe_text'>ABOUT ME</h2>
              <div className="sectionOne_containerTwo_Text">
              MY  NAME IS Tolu I CAN HDHVDWGDCHVDVDYDB 
              <br /> DCVyduGUuvHJ jCVHVd HHdjhbjhDYiyDDJVHd 
              <br />
               bhbvzs gsgLYeyteejbdbd can yiu pleASE GH GELLPN 
               <br />MNDGGG GGGughv hhdhdhdbbbdhghgYUddyuD 
               <br />
                  BCBCXGVSGGHHJDBDV  
              </div>
              <button className='sectionTwo_btn'>Lets Chat</button>
              </div>
            </div>     

    </div>
  )
}

export default section1