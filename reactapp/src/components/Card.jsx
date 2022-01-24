import React from'react';


function Card(props) {
  return (
      <div>
          <div className="card-card__box">
          <div className="cardimage">
             <img src="https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=600" alt="social" />
          </div>
              <h2 className="cardname">{props.name}</h2>
              <h1>{props.name2}</h1>
              <h3 className="mail">{props.mailid}</h3>
              <h3 className="cardpost">{props.post}</h3>
              <div className="cardicon">
              <h1 className="cardicons"><i class="fab fa-facebook"></i></h1>
              <h1 className="cardicons"><i class="fab fa-instagram"></i></h1>
              <h1 className="cardicons"><i class="fab fa-twitter"></i></h1>
              <h1 className="cardicons"><i class="fab fa-linkedin-in"></i></h1>
              </div>
              <div className="card__foot">
                  <h3>{props.projectDone} Projects | {props.experience} experience</h3>
              </div>
          </div>
      </div>
  );
}

export default Card;