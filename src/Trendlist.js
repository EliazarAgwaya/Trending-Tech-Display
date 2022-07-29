import React,{useState, useEffect} from "react"

function TrendList () {
  const [technology, setTechnology] = useState([]);

 useEffect(() => {
  fetch ("http://localhost:8000/techology")
    .then((r) => r.json())
    .then((technology) => setTechnology(technology))
}, [])

    const techList = technology.map((item) => {
        return(
            <div key={item.id} className="trending">
             <div className="trends"> 
              <div>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
              <img src={item.image} alt="Trending Tech Display Photos"/></div>
            </div>
        )
    })
    return (
        <div className="trendlist">
         <div className="nav-container">
          <div className="nav">
           </div>
         </div>
          <h1>Trends in Technology</h1>
            {techList}
            
        </div>
    )
}
export default TrendList