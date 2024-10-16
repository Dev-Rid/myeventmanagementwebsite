import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className="bg-gray-500">
      <div>
        <h2>Thoughts & News</h2>
      </div>

      <div>
        <div>
          <div>
            <img src="" alt="" />
            <h2>Do You Like to Colour Code!?</h2>
            <p>
              Do you like things to be organized and orderly? Do you thrive 
              using post-its and to-do lists? Is colour-coding your past time of 
              choice? If so, we might have the job for you! Spark Event Management 
              (Spark) is seeking a contract event & administrative assistant to join 
              our team in Calgary, AB. We ask that the candidate be available for 30-40 
              hours per week for this position, starting immediately. The ideal 
              candidate for this position is a highly organized, detail-oriented 
              and self-motivated individual, who thrives in a dynamic and 
              entrepreneurial environment.
            </p>

            <div>
              <span>
                <Link>Read More ⇾</Link>
              </span>
              <span>
                <p>Written by Anh</p>
                <p>Jul 8, 2019</p>
              </span>
            </div>
          </div>

          <div>
            <input type="text" placeholder='Search'/>

            <div>
              <label htmlFor="options">Archive</label>
              <select id="options" name="options">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <h2>5 Benefits of Attending a Conference</h2>
          <p>
            Webinars and online training tools are replacing the 
            idea of conferences and professional development events. 
            That’s what they are saying, but we disagree! There is 
            unique power in being connected to other people who are 
            active in your line of work, through education and networking. 
            I believe that professional development is best experienced in 
            person and here's why.
          </p>

          <div>
            <span>
              <Link>Read More ⇾</Link>
            </span>
            <span>
              <p>Written by Kim</p>
              <p> Aug 10, 2018</p>
            </span>
          </div>
        </div>

        <div>
          <img src="" alt="" />
          <h2>The Earlybird Catches the Worm But...</h2>
          <p>
            "Should we extend the earlybird deadline?" 
            We get asked this all the time. And I'm sorry, but the answer is, 
            "No!" If you are finding that your marketing tactics are not drawing 
            in registrations as fast as you hoped before the earlybird deadline, 
            don't panic. We have some tried and true tactics that can get your
            registrations to that sold out scenario.
          </p>

          <div>
            <span>
              <Link>Read More ⇾</Link>
            </span>
            <span>
              <p>Written by Kim</p>
              <p> Aug 10, 2018</p>
            </span>
          </div>
        </div>


        <div>
          <img src="" alt="" />
          <h2>Green is the New Black</h2>
          <p>
            Throughout 2017, headlines about climate change agreements,
             carbon taxes, pending pipeline deals, emissions, natural disasters,
              melting ice caps and unpredictable weather patterns have dominated 
              our headlines. As meeting and event leaders, a big part of our job
              is to engage and participate in conversations about how our events
              are impacting the environment.
          </p>

          <div>
            <span>
              <Link>Read More ⇾</Link>
            </span>
            <span>
              <p>Written by Anh</p>
              <p> Apr 9, 2018</p>
            </span>
          </div>
        </div>


      <div>
        <img src="" alt="" />
          <h2>Six Spring Slaughter Survival Skills</h2>
        <p>
            If you have been living under a rock and have not seen our 
            #SparkBTS this past June, well let me fill you in. Spring is 
            by far the busiest season for us at Spark. In true form, we 
            like to affectionately call this Spring Slaughter. Spring 
            Slaughter is a marathon, not a sprint. And a part of crossing 
            the finish line, like any marathon, requires prep, pacing, and
             a few tricks of the trade…
        </p>

        <div>
          <span>
            <Link>Read More ⇾</Link>
          </span>
          <span>
            <p>Written by Kim</p>
            <p>Jun 30, 2016</p>
          </span>
        </div>
      </div>


        <div>
          <img src="" alt="" />
          <h2>Managing With a Fresh Perspective at PMINAC</h2>
          <p>
            There was no shortage of vibrancy and excitement in May at the 
            Project Management Institute Northern Alberta Chapter (PMINAC)
            Conference. With updated branding, a new spacious venue, and a
            refreshed vision for a conference experience, the Spark team
            partnered with one of our long-time clients to make months of
            creative rebranding come to life.
          </p>

          <div>
            <span>
              <Link>Read More ⇾</Link>
            </span>
            <span>
              <p>Written by Kim</p>
              <p>Jul 31, 2015</p>
            </span>
          </div>
        </div>


        <div>
          <img src="" alt="" />
          <h2>And a Spark is Lit...</h2>
          <p>
            When people ask me what I do for a living, I say I own an event management firm.
            80% of the time, it leads to discussion of weddings, confetti and the 
            latest trends in balloon animals, but I’m used to it. You see, it does
            not matter what people call me or what they imagine my job is like day 
            to day, give me 5 minutes with them and they’ll never again utter the
            words “party planner”.  I know events can include things like confetti 
            and balloon animals, but they are so much more than that…
          </p>

          <div>
            <span>
              <Link>Read More ⇾</Link>
            </span>
            <span>
              <p>Written by Anh</p>
              <p>Oct 29, 2012</p>
            </span>
          </div>
        </div>

      </div>



      <div className='flex justify-center p-20 h-54 my-10'>
        <Link className='text-3xl'>
          <FontAwesomeIcon icon={faFacebook} />
        </Link>
      </div>

      <footer className="bg-gradient-to-r from-purple-900 to-pink-900 h-96 p-10 block justify-center">
        <p className="flex justify-center font-sans text-lg">Spark Event Management, 200 - 1110 7 Street SW, Calgary, Alberta, T2R 1A2, Canadainfo@eventsbyspark.com</p>
        <div className="p-10 flex justify-center h-52 w-full ">
          {/* <span >
            <Link>
              <img src="" alt="img1" />
            </Link>
          </span>
          <span>
              <Link>
                <img src="" alt="img2" />
              </Link>
          </span>
          <span>
            <Link>
              <img src="" alt="img3" />
            </Link>
          </span>
          <span>
              <Link>
                <img src="" alt="img4" />
              </Link>
          </span> */}
        </div>
        <p className="flex justify-center align-bottom font-serif text-gray-400 font-semibold gap-2">Powered by <span className='underline'>Abiolaspace</span></p>
      </footer>


    </div>
  )
}

export default Blog
