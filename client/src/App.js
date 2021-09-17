import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css'
import Login from './screens/Login.jsx';
import Register from './screens/Register.jsx';
import Activate from './screens/Activate.jsx';
import Private from './screens/Private.jsx';
// import Admin from './screens/Admin.jsx';
import ForgetPassword from './screens/ForgetPassword.jsx';
import ResetPassword from './screens/ResetPassword.jsx';

import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';

import 'react-toastify/dist/ReactToastify.css';

import Home from './Pages/Home'
import Project from './Pages/Project'
import Project_co from './Pages/project_co'
import UploadMaterial from './component/Upload'
import UploadAchivements from './component/Upload_Achive'
import MaterialList from './component/FilesList'
import PracticalList from './component/PracticalList'
import Material from './Pages/Material'
import Subject from './Pages/Subject'
import Achivements from './Pages/Achivements'
import Achi_18 from './Pages/2018'
import Achi_19 from './Pages/2019'
import Achi_20 from './Pages/2020'
import Android from './Pages/Android'
import Php from './Pages/Php'
import ML from './Pages/ML'
import MERN from './Pages/MERN'
import Syllabus from './component/SyllabusList'
import Admin from './Pages/Admin';

function App(){
    return(
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact render={props => <Home {...props} />} />
            <Route path='/Projects' exact render={props => <Project {...props} />} />
            <Route path='/UploadMaterial' exact render={props => <UploadMaterial {...props} />} />
            <Route path='/login' exact render={props => <Login {...props} />} />
            <Route path='/Achivements' exact render={props => <Achivements {...props} />} />
            <Route path='/Achivements_18' exact render={props => <Achi_18 {...props} />} />
            <Route path='/Achivements_19' exact render={props => <Achi_19 {...props} />} />
            <Route path='/Achivements_20' exact render={props => <Achi_20 {...props} />} />
            <Route path='/Project_Android' exact render={props => <Android {...props} />} />
            <Route path='/Project_Php' exact render={props => <Php {...props} />} />
            <Route path='/Project_mern' exact render={props => <MERN {...props} />} />
            <Route path='/Project_ml' exact render={props => <ML {...props} />} />
            
            
            <Route path='/register' exact render={props => <Register {...props} />} />
            <Route path='/users/activate/:token' exact render={props => <Activate {...props} />} />
            <Route path='/users/password/forget' exact render={props => <ForgetPassword {...props} />} />
            <Route path='/users/password/reset/:token' exact render={props => <ResetPassword {...props} />} />
            <PrivateRoute path="/private" exact component={Material} />
            <PrivateRoute path="/private/Subject/:id" exact component={Subject} />
            <PrivateRoute path="/private/Subject/List/:id" exact component={MaterialList} />
            <PrivateRoute path="/private/Subject/Practical/:id" exact component={PracticalList} />
            <PrivateRoute path="/private/Subject/Syllabus/:id" exact component={Syllabus} />
            <AdminRoute path="/admin" exact component={Admin} />
            <Route path='/admin/ProjectCordinator' exact render={props => <Project_co {...props} />} />
            <Route path='/admin/UploadMaterial' exact render={props => <UploadMaterial {...props} />} />
            <Route path='/admin/UploadAchivements' exact render={props => <UploadAchivements {...props} />} />
          </Switch>
        </BrowserRouter>
      </> 
    );
}

export default App;