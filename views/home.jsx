const React = require('react')
const Def = require('./default')

const home = () => {
    return (
        <Def>
            <main>
                <h1>Rest Rant Reviews</h1>
                <div>
                    <img src="/images/h-thai-ml-tables.jpg" alt="Image of Tables" height="400" width="600" />
                    <div>
                        Photo by <a href="https://unsplash.com/@eddie2oh?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Edward Franklin</a> on <a href="https://unsplash.com/s/photos/restaurant-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">See Reviews Now</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home