import {Spinner} from 'reactstrap'
import './Loading.css'

function Loading () {
    return (
        
            <div className='loading'>
                <div className='spinner'>
                    <Spinner color='primary'/>
                </div>
            </div>
       
    )
}

export default Loading