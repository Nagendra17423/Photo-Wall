import React, { Component } from 'react';
// import First from './first';
import Second from './second';
import "../Styles/styleSheet.css";
import PhotoWall from './photoWall';

import AddPhoto from './addPhoto';
import { Route } from 'react-router-dom';
import {removePost} from '../Redux/action';
import {Link} from 'react-router-dom';
import Single from './Single';



class Main extends Component {
    
    constructor()
    {
        super();
    }

    componentDidMount()
    {
        this.props.startLoadingPost();
        this.props.startLoadingComments();
    }
    //     this.state = {
    //         posts: [{
    //             id: 0,
    //             discription: "beautiful picture",
    //             link: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/03211459-0607-4d07-8a6c-9966e3820a7d-Mount-Kirkjufell-Iceland.jpg"

    //         },
    //         {
    //             id: 1,
    //             discription: "bold image",
    //             link: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/03211459-0607-4d07-8a6c-9966e3820a7d-Mount-Kirkjufell-Iceland.jpg"

    //         },
    //         {
    //             id: 2,
    //             discription: "Mind Blowing..!!...",
    //             link: "https://loveincorporated.blob.core.windows.net/contentimages/gallery/03211459-0607-4d07-8a6c-9966e3820a7d-Mount-Kirkjufell-Iceland.jpg"

    //         }
    //         ],
    //         show: 'photo'
    //     }
    //     this.removePhoto = this.removePhoto.bind(this);
    //     // this.changeLayout = this.changeLayout.bind(this);
    // }
    // removePhoto(postRemove) {
    //     // console.log(postRemove.discription);

    //     this.setState((state) => ({
    //         posts: state.posts.filter((post) => post !== postRemove)
    //     }))

    // }

    // addPhoto(newPhoto) {
    //     this.setState((state) => ({
    //         posts: state.posts.concat([newPhoto])
    //     }))
    // }

    // changeLayout()
    // {
    // this.setState((state)=>({
    //     show:'addPhoto'
    // }))
    // }

    // componentDidMount()
    // {
// this.props.dispatch(removePost(1));
// this.props.removePost(1);
// console.log(this.props.removePost);
    // }


    render() {

        console.log(this.props);

        // return  <div>
        {/* <First arr={['hello','hiii']}/>
      <First arr={['hello1','hiii1']}/> */}
        {/* <Second msg={'nagendra '}/> */ }

        //       { this.state.show === 'photo' && (
        //           <div>
        //           <Second msg={'PhotoWall'}/>
        //       <PhotoWall Posts={this.state.posts}  onRemovePost={this.removePhoto} change={this.changeLayout} /> 
        //       </div>
        //       )}
        //       {
        //           this.state.show === 'addPhoto' && (
        //             <AddPhoto  />
        //           )
        //       }



        //     </div>

        //   }

        
       

        return (
            <div>
            <h1>
            <Link to="/" >PhotoWall</Link>
            </h1>
                <Route exact={true} path="/" render={() => (
                    <div>
                        {/* <Second msg={'PhotoWall'} /> */}
                        {/* <PhotoWall Posts={this.state.posts} onRemovePost={this.removePhoto} change={this.changeLayout} /> */}
                        {/* <PhotoWall Posts={this.props.post} /> */}
                        <PhotoWall check={'ass'} {...this.props}  />
                    </div>
                )
                } />

                {/* <Route path="/addPhoto" component={AddPhoto} /> */}

                {/* <Route path="/addPhoto" render={({history})=>(
                    <AddPhoto addImage={(addedImage)=>{
                        this.addPhoto(addedImage);
                        history.push('/');
                    }} />
                        )} /> */}

                    <Route path="/addPhoto" render={(params)=>(
                        <AddPhoto {...this.props} params={params} />
                            )} />

                    {/* <Route path="/single/:id" render={(props)=>(

                            <Single {...props} {...this.props} />

                        )} /> */}

                        <Route path="/single/:id" render = {(params) => (  
	                    <Single {...this.props} {...params}/>   
                                   )}/>  


    </div>

                )

    }

}

//https://webshots.com/c/download01

                export default Main;