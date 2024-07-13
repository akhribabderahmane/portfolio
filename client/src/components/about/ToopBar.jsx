import React from 'react'
import {
    HiOutlineAcademicCap as EducationIcon,
    HiOutlineBookmark as AboutIcon,
    HiOutlineBriefcase as CareerIcon,
    HiOutlineDocumentText as ResumeIcon,
  } from 'react-icons/hi';
  import { setAboutElementSelected } from '../../features/generale/generaleSlice';
  import { useDispatch,useSelector } from 'react-redux';
const ToopBar = () => {
  const toolBarMenu=[
    {id:1,icon:<AboutIcon  />,title:"About me"},
    {id:2,icon:<ResumeIcon  />,title:"Resume"},
    {id:3,icon:<CareerIcon  />,title:"Career"},
    {id:4,icon:<EducationIcon  />,title:"Education"},
  ]
  return (
    <div className=' flex flex-col md:flex-row gap-[3px] rounded-t-md'>
        {toolBarMenu.map((item)=><ElementBtn title={item.title} icon={item.icon} key={item.id} id={item.id} />)}
    </div>
  )
}

export default ToopBar


const ElementBtn=({title,icon,id})=>{
    const dispatch=useDispatch();
    const aboutElementSelected=useSelector(state=>state.generale.aboutElementSelected)
    return (
    <button onClick={()=>dispatch(setAboutElementSelected(title))} className={`py-2 px-2 flex-1 w-full flex flex-row  text-xl items-center justify-center gap-2 bg-neutral-300 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-300 ${aboutElementSelected==title?" text-neutral-100 bg-neutral-500 dark:bg-neutral-500 dark:text-neutral-900":""} ${id==1?" md:rounded-tl-md":(id==4?" md:rounded-tr-md":"")}`}>
       {icon}
       <p>{title}</p>
    </button>)
}
