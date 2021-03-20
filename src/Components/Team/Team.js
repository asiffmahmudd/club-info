import React from 'react';
import './Team.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header/Header';


const Team = (props) => {
    let history = useHistory();
    const {strTeam, strTeamBadge, strSport, idTeam} = props.team;
    const handleCLick = () =>{
        history.push("/team/"+idTeam);
    } 
    return (
        <>
            
            <div>
                <div className="card mt-3" style={{width: "18rem"}}>
                    <div className="card-img">
                        <img className="card-img-top" src={strTeamBadge}  alt="Card image cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{strTeam}</h5>
                        <p className="card-text">Sports Type: {strSport}</p>
                        <button onClick={handleCLick} className="btn">Explore <FontAwesomeIcon icon={faArrowRight} /></button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Team;