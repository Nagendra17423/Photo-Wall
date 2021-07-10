import { Component } from "react";


class Comment extends Component{
    constructor()
    {
        super();
        this.handleForm=this.handleForm.bind(this);
    }
    handleForm(event)
    {
        event.preventDefault();
console.log(event.target.elements.comment.value);
const comment=event.target.elements.comment.value;
console.log(this.props);
// this.props.addcomment(comment,this.props.postId);
this.props.startAddingComment(comment,this.props.postId);

    }
    render()
    {
        console.log(this.props.comment);
        
        return <div>
        
        {
            this.props.comment.map((m,index)=>{
                return (
                    <p key={index}>{m}</p>
                )
            })
        }

        <form className="comment-form" onSubmit={this.handleForm} >   	
         <input type="text" placeholder="comment" name="comment"/>  
	 <input type="submit" hidden/>  
 </form>  


        </div>
    }
}
export default Comment;