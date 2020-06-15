import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


  
  function  RenderCampsite({campsite}){
       return (
            <div className="col-md-5 m-1" > 
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                     <CardBody>
                         <CardTitle>{campsite.name}</CardTitle>
                         <CardText>{campsite.description}</CardText>
                    </CardBody>
                 </Card>
             </div> 
             );
    }
  function  RenderComments({comments}) {
        if (comments){
            return(
               <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map(comment => (
                    <p key={comment.id}><p>{comment.text}</p> <div>{comment.date}, {comment.author}</div></p> )
                )}
                  </div>)
        }
    }
 function CampsiteInfo(props){
        if(props.campsite){
            return(
            <div className="container">
               <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.campsite.comments} />
               </div>
            </div>
            )
        }
       
           return <div/>;
        }

export default CampsiteInfo;



