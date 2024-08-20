const React = require('react');
const Def = require('../default');

function show(data) {
    const [rating, setRating] = React.useState(3); // Default rating set to 3

    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    );

    let averageRating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    );

    if (data.place.comments.length) {
        let sumRatings = data.place.comments.reduce((tot, c) => tot + c.stars, 0);
        let avgRating = Math.round(sumRatings / data.place.comments.length);
        averageRating = (
            <h3>
                {'⭐'.repeat(avgRating)}
            </h3>
        );
    }

    if (data.place.comments.length) {
        comments = data.place.comments.map((c, i) => (
            <div className="border col-sm-4" key={i}>
                <h2 className="rant">{c.rant ? 'Rant! 👎🏻💔' : 'Rave! 👍🏻💙'}</h2>
                <h4>{c.content}</h4>
                <h3>
                    <strong>- {c.author}</strong>
                </h3>
                <h4>Rating: {c.stars}</h4>
                <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                    <input type="submit" className="btn btn-danger" value="Delete Comment" />
                </form>
            </div>
        ));
    }

    // Use the user-provided image URL or a default one if not provided
    const imageUrl = data.place.pic || 'https://via.placeholder.com/350';

    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={imageUrl} alt={data.place.name} width={350} height={350} />
                        <h3>
                            Located in {data.place.city}, {data.place.state}
                        </h3>
                    </div>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        {averageRating}
                        <br />
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                        <br />
                        <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>{' '}
                        <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">Delete</button>
                        </form>
                    </div>
                </div>
                <hr />
                <h2>Comments</h2>
                <div className="row">
                    {comments}
                </div>
                <hr />
                <h2>Got Your Own Rant or Rave?</h2>
                <form action={`/places/${data.place.id}/comment`} method="POST">
                    <div className="row">
                        <div className="form-group col-sm-12">
                            <label htmlFor="content">Content</label>
                            <textarea id="content" name="content" className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-sm-4">
                            <label htmlFor="author">Author</label>
                            <input id="author" name="author" className="form-control" />
                        </div>
                        <div className="form-group col-sm-4">
                            <label htmlFor="stars">Star Rating</label>
                            <div className="star-rating">
                                {'⭐'.repeat(Math.round(rating))}
                            </div>
                            <input 
                                type="range" 
                                step="0.5" 
                                min="1" 
                                max="5" 
                                id="stars" 
                                name="stars" 
                                className="form-control"
                                value={rating}
                                onChange={(e) => setRating(parseFloat(e.target.value))}
                            />
                        </div>
                        <div className="col-sm-2">
                            <label className="d-block" htmlFor="rant">Unhappy with your experience? Rant?</label>
                            <input type="checkbox" id="rant" name="rant" />
                        </div>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Add Comment" />
                </form>
            </main>
        </Def>
    );
}

module.exports = show;










//V2.0 
// const React = require('react');
// const Def = require('../default');

// function show(data) {
//     let comments = (
//         <h3 className="inactive">
//             No comments yet!
//         </h3>
//     );
    
//     let rating = (
//         <h3 className="inactive">
//             Not yet rated
//         </h3>
//     );

//     if (data.place.comments.length) {
//         let sumRatings = data.place.comments.reduce((tot, c) => {
//             return tot + c.stars;
//         }, 0);
//         let averageRating = Math.round(sumRatings / data.place.comments.length);
//         let stars = '';
//         for (let i = 0; i < averageRating; i++) {
//             stars += '⭐';
//         }
//         rating = (
//             <h3>
//                 {stars}
//             </h3>
//         );
//     }

//     if (data.place.comments.length) {
//         comments = data.place.comments.map((c, i) => {
//             return (
//                 <div className="border col-sm-4" key={i}>
//                     <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😆'}</h2>
//                     <h4>{c.content}</h4>
//                     <h3>
//                         <strong>- {c.author}</strong>
//                     </h3>
//                     <h4>Rating: {c.stars}</h4>
//                     <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
//                         <input type="submit" className="btn btn-danger" value="Delete Comment" />
//                     </form>
//                 </div>
//             );
//         });
//     }

//     // Use the user-provided image URL or a default one if not provided
//     const imageUrl = data.place.pic || 'https://via.placeholder.com/350';

//     return (
//         <Def>
//             <main>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <img src={imageUrl} alt={data.place.name} width={350} height={350} />
//                         <h3>
//                             Located in {data.place.city}, {data.place.state}
//                         </h3>
//                     </div>
//                     <div className="col-sm-6">
//                         <h1>{data.place.name}</h1>
//                         <h2>Rating</h2>
//                         {rating}
//                         <br />
//                         <h2>Description</h2>
//                         <h3>{data.place.showEstablished()}</h3>
//                         <h4>Serving {data.place.cuisines}</h4>
//                         <br />
//                         <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
//                             Edit
//                         </a>{' '}
//                         <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
//                             <button type="submit" className="btn btn-danger">Delete</button>
//                         </form>
//                     </div>
//                 </div>
//                 <hr />
//                 <h2>Comments</h2>
//                 <div className="row">
//                     {comments}
//                 </div>
//                 <hr />
//                 <h2>Got Your Own Rant or Rave?</h2>
//                 <form action={`/places/${data.place.id}/comment`} method="POST">
//                     <div className="row">
//                         <div className="form-group col-sm-12">
//                             <label htmlFor="content">Content</label>
//                             <textarea id="content" name="content" className="form-control"></textarea>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="form-group col-sm-4">
//                             <label htmlFor="author">Author</label>
//                             <input id="author" name="author" className="form-control" />
//                         </div>
//                         <div className="form-group col-sm-4">
//                             <label htmlFor="stars">Star Rating</label>
//                             <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
//                         </div>
//                         <div className="col-sm-2">
//                             <label className="d-block" htmlFor="rant">Unhappy with your experience? Rant?</label>
//                             <input type="checkbox" id="rant" name="rant" />
//                         </div>
//                     </div>
//                     <input type="submit" className="btn btn-primary" value="Add Comment" />
//                 </form>
//             </main>
//         </Def>
//     );
// }

// module.exports = show;








// dont use. V1
// const React = require('react');
// const Def = require('../default');

// function show(data) {
//     let comments = (
//         <h3 className="inactive">
//             No comments yet!
//         </h3>
//     );
    
//     let rating = (
//         <h3 className="inactive">
//             Not yet rated
//         </h3>
//     );

//     if (data.place.comments.length) {
//         let sumRatings = data.place.comments.reduce((tot, c) => {
//             return tot + c.stars;
//         }, 0);
//         let averageRating = Math.round(sumRatings / data.place.comments.length);
//         let stars = '';
//         for (let i = 0; i < averageRating; i++) {
//             stars += '⭐';
//         }
//         rating = (
//             <h3>
//                 {stars}
//             </h3>
//         );
//     }

//     if (data.place.comments.length) {
//         comments = data.place.comments.map((c, i) => {
//             return (
//                 <div className="border col-sm-4" key={i}>
//                     <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😆'}</h2>
//                     <h4>{c.content}</h4>
//                     <h3>
//                         <strong>- {c.author}</strong>
//                     </h3>
//                     <h4>Rating: {c.stars}</h4>
//                     <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
//                         <input type="submit" className="btn btn-danger" value="Delete Comment" />
//                     </form>
//                 </div>
//             );
//         });
//     }

//     // Use the user-provided image URL or a default one if not provided
//     const imageUrl = data.place.pic || 'https://via.placeholder.com/350';

//     return (
//         <Def>
//             <main>
//                 <div className="row">
//                     <div className="col-sm-6">
//                         <img src={imageUrl} alt={data.place.name} width={350} height={350} />
//                         <h3>
//                             Located in {data.place.city}, {data.place.state}
//                         </h3>
//                     </div>
//                     <div className="col-sm-6">
//                         <h1>{data.place.name}</h1>
//                         <h2>Rating</h2>
//                         {rating}
//                         <br />
//                         <h2>Description</h2>
//                         <h3>{data.place.showEstablished()}</h3>
//                         <h4>Serving {data.place.cuisines}</h4>
//                         <br />
//                         <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
//                             Edit
//                         </a>{' '}
//                         <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
//                             <button type="submit" className="btn btn-danger">Delete</button>
//                         </form>
//                     </div>
//                 </div>
//                 <hr />
//                 <h2>Comments</h2>
//                 <div className="row">
//                     {comments}
//                 </div>
//                 <hr />
//                 <h2>Got Your Own Rant or Rave?</h2>
//                 <form action={`/places/${data.place.id}/comment`} method="POST">
//                     <div className="row">
//                         <div className="form-group col-sm-12">
//                             <label htmlFor="content">Content</label>
//                             <textarea id="content" name="content" className="form-control"></textarea>
//                         </div>
//                     </div>
//                     <div className="row">
//                         <div className="form-group col-sm-4">
//                             <label htmlFor="author">Author</label>
//                             <input id="author" name="author" className="form-control" />
//                         </div>
//                         <div className="form-group col-sm-4">
//                             <label htmlFor="stars">Star Rating</label>
//                             <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" className="form-control" />
//                         </div>
//                         <div className="col-sm-2">
//                             <label className="d-block" htmlFor="rant">Unhappy with your experience? Let's Rant?</label>
//                             <input type="checkbox" id="rant" name="rant" />
//                         </div>
//                     </div>
//                     <input type="submit" className="btn btn-primary" value="Add Comment" />
//                 </form>
//             </main>
//         </Def>
//     );
// }

// module.exports = show;

