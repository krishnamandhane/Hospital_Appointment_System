import { Route, BrowserRouter, Switch } from 'react-router-dom';

import AdminLogin from './component/Admin/AdminLogin';
import AdminMain from './component/Admin/AdminMain';
import AdminMainNew from './component/Admin/AdminMainNew';
// import AdminRegister from './component/Admin/AdminRegister';
import BookAppoint from './component/Patient/BookAppoint';
import DoctorLogin from './component/Doctor/DoctorLogin';
import DoctorMain from './component/Doctor/DoctorMain';
import DoctorRegister from './component/Admin/DoctorRegister';
import { EditApponit } from './component/Admin/EditAppoint';
import Login from './component/Patient/Login';
import Main from './component/Patient/Main';
import ReceptionistLogin from './component/Receptionist/ReceptionistLogin';
import ReceptionistMain from './component/Receptionist/ReceptionistMain';
import ReceptionistRegister from './component/Admin/ReceptionistRegister';
import Register from './component/Patient/Register';
import Slider from './component/Slider';
import ViewAppDoctor from './component/Doctor/ViewAppDoctor';
import ViewAppReception from './component/Receptionist/ViewAppReception';
import UpdatePatient from './component/Admin/UpdatePatient';
import DeletePatient from './component/Admin/DeletePatient';
import UpdateDoctor from './component/Admin/UpdateDoctor';
import DeleteDoctor from './component/Admin/DeleteDoctor';
import UpdateReceptionist from './component/Admin/UpdateReceptionist';
import DeleteReceptionist from './component/Admin/DeleteReceptionist';
import Footer from './component/Footer';
import UpdatePatientforReception from './component/Receptionist/UpdatePatientforReception';
import DeletePatientforReception from './component/Receptionist/DeletePatientforReception';
import BookAppointforReception from './component/Receptionist/BookAppointforReception';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Switch>        
          <Route exact path="/" component={Slider}/>

          <Route exact path="/appointment" component={BookAppoint}/>
          <Route exact path="/edit" component={EditApponit}/>
          <Route exact path="/ViewApp" component={ViewAppDoctor}/>
          <Route exact path="/ViewAppReception" component={ViewAppReception}/>
          <Route exact path="/main" component={Main}/>
          <Route exact path="/adminmain" component={AdminMain}/>
          <Route exact path="/adminmain1" component={AdminMainNew}/>
          <Route exact path="/doctormain" component={DoctorMain}/>
          <Route exact path="/receptionistmain" component={ReceptionistMain}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/adminlogin" component={AdminLogin}/>
          <Route exact path="/doctorlogin" component={DoctorLogin}/>
          <Route exact path="/receptionistlogin" component={ReceptionistLogin}/>
          <Route exact path="/register" component={Register}/>
          {/* <Route exact path="/adminregister" component={AdminRegister}/> */}
          <Route exact path="/doctorregister" component={DoctorRegister}/>
          <Route exact path="/receptionistregister" component={ReceptionistRegister}/>
          <Route exact path="/updatePatient" component={UpdatePatient}/>
          <Route exact path="/deletePatient" component={DeletePatient}/>

          <Route exact path="/updateDoctor" component={UpdateDoctor}/>
          <Route exact path="/deleteDoctor" component={DeleteDoctor}/>
          
          <Route exact path="/updateReceptionistr" component={UpdateReceptionist}/>
          <Route exact path="/deleteReceptionist" component={DeleteReceptionist}/>

          <Route exact path="/update" component={UpdatePatientforReception}/>
          <Route exact path="/delete" component={DeletePatientforReception}/>
          <Route exact path="/add" component={BookAppointforReception}/>
        </Switch>  

      <Footer></Footer>
      </BrowserRouter>  
    </div>
  );
}

export default App;
