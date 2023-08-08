import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div className="my-3">
            <div className="card" style={{backgroundColor:"#FFFFF0",border:"5px solid #2F4F4F",boxShadow:"0 0 3px 3px #333333"}}>
                <div style={{
                    "display": "flex",
                    "justifyContent": "flex-end",
                    "position": "absolute",
                    "right": "0"
                }}>
                   <span className="badge " style={{ backgroundColor: "#2F4F46",position:"absolute",marginTop:"-4px",marginRight:"-4px"}}>
                   <span className="badge-text" style={{ color:"#FFFFF0" }}>{source.name}</span>
                   </span>

                </div>
                <img className="card-img-top" src={imageUrl? imageUrl : "https://img.freepik.com/premium-vector/cute-monster-cartoon-mascot-character-vector-icon-illustration-design_648861-564.jpg"} alt="..." />
                <div className="card-body" style={{backgroundColor:"#FFFFF0"}}>
                    <h5 className="card-title" style={{fontWeight:"bold", color:"#800000"}}>{title}...</h5>
                    <p className="card-text" style={{fontWeight:"bold", color:"#333333"}} >{description}...</p>
                    <p className="card-text" ><small className="text" style={{color:"#2F4F46 !important"}}>{author ? `By ${author}` : "Author: Unknown,"} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn  btn-sm " style={{backgroundColor:"#800000",color:"white",fontWeight:"bold"}}>Read more..</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem;