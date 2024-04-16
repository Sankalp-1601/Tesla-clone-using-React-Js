import React from 'react'
import Cars from './Cars'

function Home() {
  return (
    <div>
        <Cars bgimg="model-s.jpg" title="Model S" desc="Order Now for Touchless Delivery"/>
        <Cars bgimg="model-y.jpg" title="Model Y" desc="From $37,490*" />
        <Cars bgimg="model-3.jpg" title="Model 3" desc="Order Now for Touchless Delivery"/>
        <Cars bgimg="model-x.jpg" title="Model X" desc="Order Now for Touchless Delivery"/>
        <Cars bgimg="solar-panel.jpg" title="Solar Panel" desc="Order Now for Touchless Delivery"/>
        <Cars bgimg="solar-roof.jpg" title="Solar Roof" desc="Order Now for Touchless Delivery"/>
        <Cars bgimg="accessories.jpg" title="Accesories" />
    </div>
  )
}

export default Home