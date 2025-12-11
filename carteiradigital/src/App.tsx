import {Routes , Route} from 'react-router-dom'
import PainelPrincipal from './routers/painelPrincipal'

function App() {
  return (
    <Routes>
        <Route path='/' element={<PainelPrincipal/>}>
            
        </Route>
    </Routes>   
  )
}

export default App
