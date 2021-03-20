import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Home.css';
import Header from '../Header/Header';

const Home = () => {

    const [teams,setTeams] = useState([]);  
    
    useEffect( () => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=4328')
        .then(response => response.json())
        .then(data => setTeams(data.teams));
    }, []);
    
    return (
        <>
            <Header isSinglePage={false}></Header>
            <section>
                <div className="container">
                    <div className="row cards-row">
                        <div className="card-deck">
                            { 
                                teams.map(team =><Team key={team.idTeam} team={team}></Team>)
                            }
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;