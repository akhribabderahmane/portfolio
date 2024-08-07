import React from 'react'
import {educationArray} from "../../constant/education"
import EducationItem from './EducationItem'
const Education = () => {
  return (
    <div className=' px-6'>
      {educationArray.map((item)=>{
        return (<EducationItem educationItem={item} key={item.id} />
        )
      })}
    </div>
  )
}

export default Education
