import app from './firebase.init'
import { getAuth } from 'firebase/auth'

const useAuth = () => getAuth(app)

export default useAuth