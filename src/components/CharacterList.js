import React from "react";

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
                        <div className="container__card">
                            <img
                            className="card__photo"
                            src={item.image}
                            alt={"This is character:" + item.name}
                            />
                            <h2 className="card__name">{item.name}</h2>
                            <h3 className="card__house">{item.house}</h3>
                        </div>
                    </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default CharacterList;