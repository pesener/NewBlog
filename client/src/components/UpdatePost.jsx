import React from 'react'
import { useState,useEffect } from 'react'
import ReactFileBase64 from 'react-file-base64'
import {  getPost } from '../axios'
import { updatePost } from '../actions/postActions'
import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'


const UpdatePost = ({id}) => {

const dispatch = useDispatch()
const[postData, setPostData] = useState({
    title:"",
    content:'',
    image:'', 
    createdAt:'',
    _id:""
    
})

useEffect(()=> {
  const getPo = async () => {
    const{data} = await getPost(id)
    setPostData(data)
  }
  getPo()
},[id])

const navigate = useNavigate()

  return (
    <div className='min-h-screen'>
    <div className='flex justify-center '>
        <div className="w-7/12 bg-white border border-gray-200 rounded-lg shadow-md sm:p-9   md:p-5 dark:bg-gray-700 dark:border-gray-800">
        <form onSubmit={(e) => {
            e.preventDefault()
            dispatch(updatePost(id,postData))
           navigate("/")
        }}>
        <h5 className="text-3xl mb-4 font-medium text-gray-900 dark:text-white">
          Update a post
        </h5>
        <label
    
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Title
          </label>
          <input defaultValue={postData.title} name='title' type='text'  onChange={(e) => setPostData({...postData, title: e.target.value})} 
            
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white mb-5"  placeholder="Title">
            
            
          </input>


          <label
    
            className="block mb-2 text-xl font-medium text-gray-900 dark:text-white"
          >
            Content
          </label>
          <textarea name='content' type='text' as='textarea' rows='5' onChange={(e) => setPostData({...postData, content: e.target.value})}
            value={postData.content}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm
            rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full
            p-2.5 dark:bg-gray-600 dark:border-gray-500
            dark:placeholder-gray-400 dark:text-white mb-5" required placeholder="Write your thoughts here...">
            </textarea>
            <div className='mb-4'>
            
          <ReactFileBase64  type='file'
          multiple={false}
          onDone={({base64}) =>{ setPostData({...postData, image: base64})
            } } />

            </div>
         
          
<div className='flex flex-col items-center'>
<button type='submit' className='bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-60 border border-blue-700 rounded '>
            Send
          </button>

</div>
         
        </form>
        </div>
        </div>
        </div>
  )
}

export default UpdatePost;