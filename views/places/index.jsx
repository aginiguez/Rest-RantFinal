const React = require('react');
const Def = require('../default');

const index = (data) => {
    let placesFormatted = data.places.map((place, index) => {
        // Use the provided image URL from the user or a placeholder image if no URL is provided
        const imageUrl = place.pic || 'https://via.placeholder.com/350';

        return (
            <div className="col-sm-6" key={place.id}>
                <h2>
                    <a href={`/places/${place.id}`}>
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img src={imageUrl} alt={place.name} width={350} height={350} />
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        );
    });

    return (
        <Def>
            <main>
                <h1>Places to Rant or Rave About</h1>
                <div className="row">
                    {placesFormatted}
                </div>
            </main>
        </Def>
    );
};

module.exports = index;