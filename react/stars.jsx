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

// your code here

ReactDOM.render(
  <StarsList stars={stars}/>
, document.getElementById('root')
)

