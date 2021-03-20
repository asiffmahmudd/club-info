import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './TeamDetails.css';
import maleTeam from '../../img/male.png';
import femaleTeam from '../../img/female.png';
import foundSign from '../../img/found.png';
import flag from '../../img/flag.png';
import football from '../../img/football.png';
import gender from '../../img/male-gender-sign.png';
import youtube from '../../img/YouTube.png';
import twitter from '../../img/Twitter.png';
import facebook from '../../img/Facebook.png';
import { Link } from 'react-router-dom';

const TeamDetails = () => {
    
    let { id } = useParams();
    const [team, setTeam] = useState({});
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${id}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeam(data.teams[0]));
    },[]);
    const {strTeam, strCountry, intFormedYear, strTeamBadge, strGender, strSport, idTeam, strDescriptionEN, strStadiumDescription, strFacebook, strInstagram, strTwitter} = team;
    
    let picture = maleTeam;
    let teamInfoStyle = {"background": "#1966db"};
    if(strGender == "Female"){
        picture = femaleTeam;
        teamInfoStyle = {"background": "#ec545c"};
    }

    console.log(team);
    return (
        <>
            <Header isSinglePage={true} img={strTeamBadge}></Header>
            <section className="single-team-container">
                <div className="container">
                    <div className="row team-info" style={teamInfoStyle}>
                        <div className="col-md-6 team-details" >
                            <h2>{strTeam}</h2>
                            <p><img src={foundSign} alt=""/> Founded {intFormedYear}</p>
                            <p><img src={flag} alt=""/> Country: {strCountry}</p>
                            <p><img src={football} alt=""/> Sport Type: {strSport}</p>
                            <p><img src={gender} alt=""/> Gender: {strGender}</p>
                        </div>
                        <div className="col-md-6 team-img">
                            <img src={picture} className="img-fluid" alt="team image"/>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <p className="team-desc">{strDescriptionEN}</p>
                    <p className="stadium-desc">{strStadiumDescription}</p>
                </div>

                <div className="container">
                    <div className="social text-center">
                        <a target="_blank" href={"https://"+strTwitter}><img src={twitter} alt="twitter"/></a>
                        <a target="_blank" href={"https://"+strFacebook}><img src={facebook} alt="facebook"/></a>
                        <a target="_blank" href={"https://"+strInstagram}><img src={youtube} alt="youtube"/></a>
                    </div>
                </div>
                
            </section>
        </>
    );
};

export default TeamDetails;