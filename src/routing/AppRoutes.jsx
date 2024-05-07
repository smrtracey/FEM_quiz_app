import {Routes, Route} from 'react-router-dom';

import StartMenu from '@/pages/startMenu/StartMenu';
import Questions from '@/pages/questions/Questions';
import Results from '@/pages/results/Results';

const AppRoutes = ()=>{
    return (
        <Routes>
            <Route path = '/' element = {<StartMenu/>}/>
            <Route path = '/questions' element = {<Questions/>}/>
            <Route path = '/results' element = {<Results/>}/>
            
        </Routes>
    )
}

export default AppRoutes