import { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Segment } from 'semantic-ui-react';
import { buscaVideo  } from '../store/actions/busca-video';


class SearchBar extends Component {
  constructor(props) {
      super(props)
  }

  pesquisaTermo = (e) => {
      if (e.keyCode === 13) {
          const termo = e.target.value;
          this.props.buscaVideo(termo)
      }
  }

  render() {
      return (
          <div className='search-bar'>
              <Segment stacked>
                  <Input icon='search' size='large' placeholder='Search...' onKeyDown={(e) => this.pesquisaTermo(e)} />
              </Segment>
          </div>
      )
  }
}



const mapDispatchToProps = (dispatch) => {
  return {
      buscaVideo: (termo) => dispatch(buscaVideo(termo))
  }
}

export default connect( null , mapDispatchToProps)(SearchBar)