import React, { useRef } from 'react';

const CustomFormSubmission = () => {

    let name = useRef("")
    let task = useRef("")
    let email = useRef("")
  
    function handleSubmit(e) {
        e.preventDefault()

        let obj = {
            name : name.current.value,
            task: task.current.value,
            email: email.current.value
        }

        console.log(obj)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='Enter name' ref={name}/>
      <input type='text' placeholder='Enter task' ref={task}/>
      <input type='email' placeholder='Enter email' ref={email}/>
      <input type='submit'/>
    </form>
  );
};

export default CustomFormSubmission;
