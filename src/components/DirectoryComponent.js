import React, { Component } from 'react';
import CampsiteInfo from "./CampsiteInfoComponent";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class  Directory extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedCampsite:null
        };
        
    }

    onCampsiteSelect(campsite){
        this.setState({selectedCampsite:campsite});
    }
    

    render(){
        const directory= this.props.campsites.map(campsite => {

          return (
                <div key={campsite.id} className="col-md-5 m-1">
                   <card onClick={() => this.onCampsiteSelect(campsite)}>
                       <CardImg width="100%" src={campsite.image} alt={campsite.name} />
                       <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
            
                       </CardImgOverlay>
                     </card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {directory}
                    <CampsiteInfo campsite ={this.state.selectedCampsite}/>
                </div>
                
               
                
                
            </div>

        );
    }
}

export default Directory;