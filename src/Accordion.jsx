/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Accordian = (props, setVisible, selected) => {
 const {id,title, body} = props.val;

  
 
  
  return (
    <div className="Accordian" style={{border:"2px solid black", margin:"15px", padding:"10px" }}>
        <div 
        className="title" 
        style={{backgroundColor:"black", color:"white", cursor:"pointer"}}
        onClick={() => props.setVisible(id)}
        >{title}</div>
        {props.selected===id?<div className="body">{body}</div>:" "}
    </div>
  )
}

export default Accordian