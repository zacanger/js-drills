// fill in the missing code
// the method should return a string in the format of 'Name : Title'

const foo = {
  names : {
    'Pablo Escobar'        : 'King of Cocaine'
  , 'César Gaviria'        : 'Politican'
  , 'Javier Peña'          : 'DEA Agent'
  , 'Steve Murphy'         : 'DEA Agent'
  , 'José Rodríguez Gacha' : 'El Mexicano'
  }
, getNamesAndTitles() {
    return Object.keys(this.names).map( /* code goes here */ )
  }
}

foo.getNamesAndTitles()

