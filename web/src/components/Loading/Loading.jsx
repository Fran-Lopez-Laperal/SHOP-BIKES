import { Spinner } from 'reactstrap'
import './Loading.css'

function Loading() {
    return (

        <div className='loading text-center'>
            <div className='spinner'>
                <Spinner color='primary' />
                <h2 className='fw-light'>Procesando pago...</h2>
            </div>
        </div>
    )
}

export default Loading