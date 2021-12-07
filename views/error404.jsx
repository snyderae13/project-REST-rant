const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
                <img src="http://placekitten.com/200/300" alt="kitten picture"/>
              </div>
              <p>Oops, sorry, we can't find this page!</p>

          </main>
      </Def>
    )
  }



module.exports = error404