import * as  React from 'react';
import  { getRockets } from "../requets/spaceX";

class RocketList extends React.Component {
    state = {
        rockets: [],
    };

    async componentDidMount() {
        const rockets = await getRockets();
        this.setState({ rockets });
    }

    render() {
        return (
            <div>
                { this.state.rockets.map(rocket => {
                    return <li key={rocket}>{rocket}</li>
                })}
            </div>
        )
    }
}

export default RocketList;
