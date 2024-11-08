import React from 'react'
import PostItem from './PostItem'
import { HiOutlineXCircle } from 'react-icons/hi'

const PostModal = ({post})=> {
  return (
    <div>
        <dialog id="my_modal_3" className="modal p-0 rounded-lg">
            <form method="dialog">
              <button className='absolute right-2 top-2'>
                <HiOutlineXCircle className='text-[18px] text-black'/>
              </button>
              <PostItem post={post} showReadMore={false} showUserInfo={true}/>
            </form>        
        </dialog>
    </div>
  )
}

export default PostModal






