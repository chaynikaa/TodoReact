import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
      const tasks=[{id:1,txt:'First Task'},{id:2,txt:'Second Task'},{id:3,txt:'Third Task'}];
    return (
      <div>
          <div className='input-container'>
              <input type='text'></input>
              <button> ADD </button>
          </div>

          <div className='class-list'>
              <ul>
                  {
                     tasks.map(function(tobj){
                         return(
                             <li>
                                 <h1>{tobj.txt}</h1>
                                 <button></button>
                             </li>
                         )
                     }) 
                  }

              </ul>

          </div>
      </div>
    )
  }
}
