import {Routes , Route} from 'react-router-dom'
import PainelPrincipal from './routers/PainelPrincipal'

function App() {
  return (
    <Routes>
        <Route path='/' element={<PainelPrincipal/>}>
            
        </Route>
    </Routes>   
  )
}

export default App
