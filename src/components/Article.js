import React from "react";

function Article({ title, date="January 1, 1970", preview, minutes }){
    function minutesToRead({minutes}){
        if(minutes<30){
            return(<p>☕ {minutes} min read</p>)
        }else{
            return(<p>🍱 {minutes} min read</p>)
        }
    }
    return(
        <article>
            <h3>{title}</h3>
            <small>{ date }</small>
            <p>{ preview }</p>
            {minutesToRead({minutes})}
            {/* {function minutesToRead({minutes}){
                if(minutes<30){
                    return(<p>☕ {minutes} min read</p>)
                }else{
                    return(<p>🍱 {minutes} min read</p>)
                }
            }} */}
            
        </article>
    )
}
// ☕
// 🍱
export default Article;