const React = require('react')
const Def = require('../default.jsx')

function edit_form(data) {
    return (
        <Def>
            <main>
                <h1>Edit Review</h1>
                <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
                    <div className="row">
                        <div className="col-sm-6 col-sm-4 col-lg-3">
                            <label htmlFor="name">Place Name</label>
                            <input
                                className="form-control"
                                id="name"
                                name="name"
                                defaultValue={data.place.name}
                                required />
                        </div>
                        <div className="col-sm-6 col-sm-4 col-lg-3">
                            <label htmlFor="pic">Place Picture</label>
                            <input
                                className="form-control"
                                id="pic"
                                name="pic"
                                defaultValue={data.place.pic}
                            />
                        </div>
                        <div className="col-sm-6 col-sm-4 col-lg-3">
                            <label htmlFor="city">City</label>
                            <input
                                className="form-control"
                                id="city"
                                name="city"
                                defaultValue={data.place.city}
                            />
                        </div>
                        <div className="col-sm-6 col-sm-4 col-lg-3">
                            <label htmlFor="state">State</label>
                            <input
                                className="form-control"
                                id="state"
                                name="state"
                                defaultValue={data.place.state}
                            />
                        </div>
                        <div className="col-sm-6 col-sm-4 col-lg-3">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input
                                className="form-control"
                                id="cuisines"
                                name="cuisines"
                                defaultValue={data.place.cuisines}
                                required />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="founded">Founded</label>
                            <input className="form-control"
                                id="founded"
                                name="founded"
                                defaultValue={data.place.founded}
                            />
                        </div>
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Place" />
                </form>
            </main>
        </Def >
    )
}

module.exports = edit_form
