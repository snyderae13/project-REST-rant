const React = require('react')
const Default = require('../default')

function Show(data) {
  return (
    <Default>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} className="img-fluid" alt={data.place.name}></img>
            <h3 className="text-center">
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>Rating</h2>
            <p>No Rating Yet</p>
            <h2>Description</h2>
            <h3>{data.place.showEstablished()}</h3>
            <h4>Serving {data.place.cuisines}</h4>
            <span>
              <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
                Edit
              </a>

              <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
                <button type="submit" className="btn btn-danger">
                  Delete
                </button>
              </form>
            </span>
          </div>
          <div></div>
        </div>
        <div>
          <h3>Comments</h3>
          <p>No comments yet!</p>
        </div>
      </main>
    </Default>
  );
}

module.exports = Show