import React from 'react'
import BodyItem from './BodyItem'
import Mydata from './Mydata'




const Body = () => {



    return (
        <div>
            
           <div className="container" id="cont1" >
      <h1 style={{color:"black"}}>Netflix's Top 10 shows -2021</h1>
      <hr/>

  
           <div className="row "id="row" >
            {Mydata.map((element)=>{
                return <div className="col md-3" id="col" key={element.url}>
                <BodyItem title={element.title}
                    image={element.image}
                    description={element.description}
                    name={element.name}
                    url={element.url}
                    />
                    </div>
            })}
            </div>
          
            </div>

           
            

        </div>
    )
}

export default Body
