import { connect } from "react-redux";
import { Advertisement, Embed } from "semantic-ui-react";

const VideoPlayer = props => {
    return(
        <div className='video-player'> 
            {
                !props.video.id && (
                    <div>
                        <Advertisement style={{'height':'100%'}} unit= 'top banner' test='Escolha um video para reproduzir'/>
                    </div>
                )
            }
            {
                props.video.id && (
                    <div>
                        <Embed id={props.video.id} source="youtube" />
                        <p className="video-titulo">{props.video.snippet.title}</p>
                        <p className="video-descricao">{props.video.snippet.description}</p>
                    </div>
                )
            }
          
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        video: state.reproduz.video
    }
}

export default connect(mapStateToProps,null)(VideoPlayer);