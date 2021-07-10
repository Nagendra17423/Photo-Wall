import { Component } from "react";
import Post from "./Post";
import Comment from "./Comment"

class Single extends Component{
    constructor()
    {
        super()
       
    }
    render()
    {
        
        const {match,post}=this.props;
        console.log(match);
        console.log(post);
        console.log("match id "+match.params.id);
        console.log(this.props.match.params.id);
        const id=Number(match.params.id);
        const show=post.find((p)=>p.id === id);
        console.log(show);
        const comment=this.props.comment[match.params.id]  || [] ;
        console.log(comment +" to show");
      const index = this.props.post.findIndex((post) => post.id === id)  
        // const selected=post.filter((a)=> {
        //     console.log(a.id+" "+ id)
        //    return  a.id === id
        // });
        // console.log(selected);
        return <div className='single-photo'>
        <Post  singlePost={show} {...this.props} index={index}  />
        <Comment startAddingComment={this.props.startAddingComment} comment={comment} postId={id} />




        </div>
    }
}
export default Single;