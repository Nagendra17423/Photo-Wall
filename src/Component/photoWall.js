import React,{Component} from 'react';
import Post from './Post';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

function PhotoWall(props)
{
    console.log(props);
    return  <div>
    {/* <button className="AddPhoto" onClick={()=>{
        props.change()
    }}> + </button> */}
    {/* <button className="AddPhoto" onClick={props.change}> + </button>  */}
    {/* <a  className="AddPhoto" onClick={props.change} href="#AddPhoto">+</a>
     */}



     {/* <Post key={index} singlePost={post} removePost={props.onRemovePost} />
      */}

     <Link className="AddPhoto" to="/addPhoto">+</Link>
     
{/* <p>{props.check}</p>
<p>{props.post[0].id}</p> */}

    <div className="photoGrid">
    {props.post.sort((x,y)=>{
       return  y.id-x.id;
    }).map((post,index)=> <Post key={index} singlePost={post} {... props} index={index} />)}
</div>
</div>
}

// PhotoWall.propTypes={
//     Posts:PropTypes.array.isRequired,
//     onRemovePost:PropTypes.func.isRequired

//     }


// class PhotoWall extends Component{
//     render()
//     {

//         return <div className="photoGrid">
//             {this.props.Posts.map((post)=> <Post singlePost={post} />)}
//         </div>
//     }
// }
export default PhotoWall;