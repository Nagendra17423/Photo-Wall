import Main from "./Main";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../Redux/action';
import {withRouter} from 'react-router';

function mapStateToProps(state)
{
    return {
        post:state.post,
        comment:state.comment
    }
}


function mapDispatchToProps(dispatch)
{
return bindActionCreators(actions,dispatch);
}



const App=withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));

export default App;