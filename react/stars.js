// given the following array of people famous on netflix,
// render a list of the names and titles, with the stars'
// names in a random colour

const stars = [
  { title : 'Bojack Horseman'   , star : 'Will Arnett'    }
, { title : 'Kimmy Schmidt'     , star : 'Ellie Kemper'   }
, { title : 'Master of None'    , star : 'Aziz Ansari'    }
, { title : 'House of Cards'    , star : 'Kevin Spacey'   }
, { title : 'AKA Jessica Jones' , star : 'Krysten Ritter' }
, { title : 'Narcos'            , star : 'Javier Peña'    }
]

class StarsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Netflix Stars</h1>
        <ul>
          {this.props.stars.map(show => {

            const
              r   = Math.round(Math.random() * 255)
            , g   = Math.round(Math.random() * 255)
            , b   = Math.round(Math.random() * 255)
            , rgb = `rgb(${r},${g},${b})`

            return <Star color={rgb} show={show} />
          })}
        </ul>
      </div>
    )
  }
}

class Star extends React.Component {
  render() {
    return (
      <li style={{color : this.props.color}}>
        {this.props.show.title} : {this.props.show.star}
      </li>
    )
  }
}

ReactDOM.render(
  <StarsList stars={stars}/>
, document.getElementById('root')
)

