import React, { Fragment } from "react";
import { Card } from "react-bootstrap";

const Tweet = ({userName,datos}) => {   
    return(
        <Fragment>
                {datos.map(tweet =>
                    <Card style={{ width: '55rem', margin: 'auto',
                                   marginBottom:'15px',
                     }}
                     className="border border-dark"
                     >
                    <Card.Body>
                    <div className="header">
                      <div>
                        <img className="profile_pic" src={tweet.fotoURL = tweet.fotoURL.replace('normal','400x400')} alt="" />
                      </div>
                      <div  >
                        <h2 className="=name">{tweet.nombre}</h2>
                        <small className="fecha">{tweet.fecha = tweet.fecha.replace(/^\w+ (\w+) (\d+) ([\d:]+) \+0000 (\d+)$/,"$1 $2 $4 $3 ")}</small>
                      </div>
                    </div>
                      <Card.Text className="description">
                        {tweet.texto}
                      </Card.Text>
                      <Card.Link className="description" href={'https://twitter.com/'+ (userName = userName.replace('@', '')) +'/status/'+tweet.id}
                        target='_blank'
                      >Tweet original</Card.Link>
                    </Card.Body>
                  </Card>
                    )}
 
            
        </Fragment>
        

    );
}

// En el futuro quiero hacer que se reconozca links y crear tags <a href=> </a> por cada uno.
// Queda para hacer en algun momento
function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function(url) {
    return '<a href="' + url + '">' + url + '</a>';
  })
}

export default Tweet
