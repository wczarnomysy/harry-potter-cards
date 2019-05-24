import React from "react";
import CharacterName from './CharacterName';

class CharacterList extends React.Component {
    render () {
        const{harryPotter, filterName} = this.props
        return (
            <div>
                <ul>
                {harryPotter
                .filter(item =>
                item.name
                .toUpperCase()
                .includes(filterName.toUpperCase())
                )
                .map((item, index) => (
                    <li key={index}>
                        <CharacterName image={item.image}
                        name={item.name} house={item.house} />
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CharacterList;