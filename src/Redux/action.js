
import {database} from "../Database/config";

export function startAddingPost(post)
{
    return (dispatch)=>{
        return database.ref("post").update({[post.id]:post}).then(()=>{
            return dispatch(addPhoto(post));
        })
    }

}

	export function startLoadingPost() {  
	 return (dispatch) => {  
    	 return database.ref('post').once('value').then((snapshot) => {  
     let posts = []  
     snapshot.forEach((childSnapshot) => {  
     posts.push(childSnapshot.val())  
     })  
    	 dispatch(loadPosts(posts))  
    	 }).catch((error) => {  
    	 console.log(error)  
    	 })  
    	 }  
    	}  



        export function startLoadingComments() {  
            return (dispatch) => {  
          return database.ref('comments').once('value').then((snapshot) => {  
       let comments = {}  
      snapshot.forEach((childSnapshot) => {  
          comments[childSnapshot.key] = Object.values(childSnapshot.val())  
        })  
       dispatch(loadComments(comments))  
         })  
        }  
          }  

      export function loadComments(comments) {  
          return {  
            type: 'LOAD_COMMENTS',  
          comments  
          }  
           }  



export function loadPosts(post) {  
         return {  
           type: 'LOAD_POSTS',  
         post
            }  
       	}  
           

	export function startRemovingPost(index, id) {  
  return (dispatch) => {  
       return database.ref(`post/${id}`).remove().then(() => {  
      dispatch(removePost(index))  
          }).catch((error) => {  
      console.log(error)  
           })  
   	 }  
           	}  

               
	export function startAddingComment(comment, postId) {  
      return (dispatch) => {  
     return database.ref('comments/'+postId).push(comment).then(() => {  
     dispatch(addComment(comment, postId))  
     }).catch((error) => {  
      	 console.log(error)  
      	 })  
   	 }  
	}  
                
            
            
            
    


export function removePost(index)
{
    return {
        type:"Remove-Post",
        index:index
    }
}

export function addPhoto(post)
{
    return {
        type:'add-Photo',
        post:post
    }
}

export function addComment(comment,postId)
{
    return {
        type:'add-Comment',
        comment,
        postId
    }
}
