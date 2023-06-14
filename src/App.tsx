import { useState } from 'react'
import Fortfolio from '@/screens/Portfolio'
import '@/components/styles/test.scss'
import '@/components/styles/plugins.scss'
import '@/components/styles/style.scss'
function App() {
  const [name, setName] = useState<string>('Truong')
  const [age, setAge] = useState<number>(0)
  const [city, setCity] = useState()
  return (
    <div>
    <Fortfolio/>
    </div>
  ) 
}

export default App
