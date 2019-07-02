import React from 'react';


function ContactForm(){
  return (
    <div>
        <style jsx global>{`
            div {
                background-color: pink;
            }
        `}</style>
    <form> 
        <input 
        type="text"
        id='name'
        placeholder='Name'/>__
        <input 
        type="text"
        id='email'
        placeholder='Email'/>__
        <input
        id="what" 
        placeholder="What's Up"
        cols="30" rows="10"></input>__
        <button type='submit'>Hey!</button>
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
</div>
  );
}

export default ContactForm;