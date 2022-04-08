import axios from 'axios';
import React, {Component} from 'react';


class Social extends Component {

    constructor(props) {
        super(props);

        this.state = {
            socialList: []
        };
    }

    componentDidMount() {
        this.weather();
        
    }

    

   

    social = () => {
        
      // axios.get('')
      // .then(res => {

        

       // this.setState({
         //   socialList: res.data
       // })
      // })
       
    }

}

export default Social;