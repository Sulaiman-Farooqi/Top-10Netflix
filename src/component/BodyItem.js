import React from 'react'

const BodyItem = (props) => {
   

    return (
        
        <div>



            <div className="container my-20"id="cont2" >
                
                <div className="card"style={{width:"342px",height:"542px",marginTop:"150px"}}>
                    <img src={props.image} class="card-img-top" alt="..." />
                    <div className="card-body my-3" >
                        <h5 className="card-title"><strong>Title-</strong>{props.title}</h5>
                        <p className="card-text"><strong>Description-</strong>{props.description}</p>
                    <h4>{props.name}</h4>
                        <a href={props.url} class="btn btn-primary " style={{marginTop:"10px", background:"rgb(166, 206, 228)",border:"none", color:"black", fontWeight:"normal"}}>watch now</a>
                    </div>
                </div>

            </div>



        </div>
    )
}

export default BodyItem
