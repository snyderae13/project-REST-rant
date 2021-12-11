const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <div>
            
                <h1>{data.place.name}</h1>
                <img src={data.place.pic} className="rounded float-left" alt={data.place.name}/>
                <h2>Rating</h2>
                <p>Not Rated</p>
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state}, and Serving {data.place.cuisines}</p>
            </div>
            <div>
                <h2>Comments</h2>
                <p>No comments yet!</p>
                <a href ={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>

                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show