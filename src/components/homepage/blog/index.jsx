import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import { blogContent } from './hook'

const Blog = () => {

  const { blogPreContent } = blogContent()
  
  const handleGoToAnotherPage = (e) => {
    e.preventDefault() 
  }
  
  return (
    <div className="bg-gray-500">
      <div className='blogBg h-[18rem] bg-cover text-center pt-20 opacity-30'>
        <h2 className='text-8xl font-semilight text-gray-400'>Thoughts & News</h2>
      </div>

    <div className='grid grid-cols-4'>
        <div className='col-span-3'>
          {(blogPreContent.map((eachBlog) => (
            <div className='' key={eachBlog.id}>
              <div  className='flex px-20 py-16'>
                <div>
                  <img src={eachBlog.image} alt="" className='cursor-pointer h-[9rem] w-[15rem] rounded-sm my-2' />
                </div>
                <div className='w-[50%] mx-5'>
                  <h1 className='text-2xl'>{eachBlog.title}</h1>
                  <p className='py-1 font-semilight'>{eachBlog.body}</p>
                  <a href="" className='font-light' onClick={handleGoToAnotherPage} >{eachBlog.more}</a>
                  <div className='flex font-light py-3 cursor-pointer'>
                    <p className='pr-3'>{eachBlog.writer}</p> •
                    <p className='mx-2'>{eachBlog.date}</p>
                  </div>
                </div>
              </div>

            </div>

          )))}
      </div>
      <div className='col-span-1 py-16'>
          <input type="text" placeholder='Search' className='h-[3.5rem] w-[15rem] rounded-sm text-center font-xl bg-gray-300' />

          <div className='py-5 '>
            {/* <label htmlFor="options">Archive</label> */}
            <select id="options" name="options" className='h-[3rem] w-[15rem] rounded-sm text-center bg-gray-300'>
              <option value="option1">Archive</option>
              <option value="option2">Jul 8, 2019</option>
              <option value="option3">Aug 10, 2018</option>
              <option value="option4">May 1, 2018</option>
              <option value="option5">Jul 25, 2013</option>
              <option value="option6">Mar 4, 2013</option>
              <option value="option7">Apr 8, 2018</option>
              <option value="option8">Jun 30, 2016</option>
              <option value="option9">Sep 25, 2013</option>
              <option value="option10">Oct 29, 2012</option>
              <option value="option11">Jul 31, 2015</option>
              <option value="option">Jan 23, 2013</option>
            </select>
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

        </div>
        <p className="flex justify-center align-bottom font-serif text-gray-400 font-semibold gap-2">Powered by <span className='underline'>Abiolaspace</span></p>
      </footer>


    </div>
  )
}

export default Blog
