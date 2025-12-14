import {Routes , Route} from 'react-router-dom'
import PainelPrincipal from './routers/PainelPrincipal'
import PainelTransacao from './routers/PainelTransacao'

function App() {
  return (
    <Routes>
        <Route path='/' element={<PainelPrincipal/>}>
            
        </Route>
        <Route path='/addtransacao' element={<PainelTransacao/>}/>
    </Routes>   
  )
}

export default App
