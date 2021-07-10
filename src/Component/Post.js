import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

function Post(props) {
    console.log("single post id "+props.singlePost.id);
    return <figure className="photoFig">
    <Link to={`/single/${props.singlePost.id}`} > 
    <img className="Image"
            src={props.singlePost.link}
            alt={props.singlePost.discription} />

            </Link>
        

        <figcaption>
            <p>{props.singlePost.discription}</p>

            <div className="button-class">
                {/* <button className="button" onClick={()=>{
         props.removePost(props.singlePost)
     }}>Remove Image.</button> */}
                <button className="button" onClick={() => {
                    // props.removePost(props.index);
                    props.startRemovingPost(props.index,props.singlePost.id);
                    props.history.push("/");
                }}>Remove Image.</button>

 <Link className="button" to={`/single/${props.singlePost.id}`}>   
      <div className="comment-count">   
	 <div className="speech-bubble"> </div>  
	 {props.comment[props.singlePost.id] ? props.comment[props.singlePost.id].length : 0 }  
	 </div>  
 </Link>  

            </div>

        </figcaption>
    </figure>
}

// Post.propTypes={
//     singlePost:PropTypes.object.isRequired,
//     removePost:PropTypes.func.isRequired

// }

// function mapStateToProps(state)
// {
//     return {
//         post:state
//     }
// }

// export default connect(mapStateToProps)(Post);
export default Post;
// }
// class Post extends Component{
//     render()
//     {
// return <figure className="photoFig">
//     <img className="Image" 
//     src={this.props.singlePost.link}
//      alt={this.props.singlePost.discription} />
//      <figcaption>
//          <p>{this.props.singlePost.discription}</p>
//          <div className="button-class">
//          <button className="button">Remove Image.</button>
//          </div>

//      </figcaption>
// </figure>
//     }
// }
