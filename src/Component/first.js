import React,{Component} from 'react';

class First extends  Component{
    render()
    {
      return   <ol>
        {this.props.arr.map((m,index)=><li key={index}>{m}</li>)}
      </ol>
      
    }
    showFirst()
    {
        return "kyu cnacel ho gaya lecture";
    }
  }

  export default First;