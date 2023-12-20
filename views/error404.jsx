const React = require('react')
const Def = require('./default')

const error404 = () => {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/shibaimg.jpg" alt="Image of Shiba" height="400" width="600" />
                    <div>
                        Photo by <a href="https://unsplash.com/@minhphamdesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Minh Pham</a> on <a href="https://unsplash.com/photos/LTQMgx8tYqM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}
module.exports = error404