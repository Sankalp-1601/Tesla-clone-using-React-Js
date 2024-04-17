import React from 'react'

function Cars({bgimg, title, desc}) {
  return (
    <div className='carSection' style={{backgroundImage:`url("images/${bgimg}")`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
        <div className="carModel">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
        <div className='buttonGrp'>
            <button className='btn1'>Order Now</button>
            {desc && <button className='btn2'>Learn More</button>}
        </div>


    </div>
  )
}

export default Cars
