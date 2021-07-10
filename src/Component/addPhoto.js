import React,{Component} from 'react';


class AddPhoto extends Component{
    constructor()
    {
        super()
        this.add=this.add.bind(this);
    }

    add(event)
    {
        console.log(this.props.addPhoto);
        event.preventDefault();
        const name=event.target.elements.name.value;
        const disp=event.target.elements.discription.value;
console.log(event.target.elements.name.value);
console.log(event.target.elements.discription.value);
const obj={
    id:Number(new Date()),
    discription:disp,
    link:name
};
if(name && disp)
{
    // this.props.addPhoto(obj);
    this.props.startAddingPost(obj);
    this.props.params.history.push("/");
    console.log(this.props.params);

}
// this.props.addImage(obj);
    }

    render()
    {
        return (
            <div>
                {/* <h2> PhotoWall </h2> */}
                <div className="form">
                    <form onSubmit={this.add}>
                        <input type="text" name="name" placeholder="Link" required  />
                        <input type="text" name="discription" placeholder="Discription"  required/>
                        <button >Upload</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default  AddPhoto;

//https://webshots-photos-002.nyc3.cdn.digitaloceanspaces.com/4aa99c1915731c9e1227e0d276cf19158bbadca05da5469f9f5e14be81c78176/1024x576.jpg
//https://proshots-2.s3.amazonaws.com/e662ab70ecae83cdd5ee18501f69935655c72d59ff4614d7f55acb8b9e50f7b6/1024x576.jpg
//https://proshots-2.s3.amazonaws.com/2a882afbac796c1e3a2bcad3b235022f549facbfe9bd661041d63687e82655c4/1024x576.jpg