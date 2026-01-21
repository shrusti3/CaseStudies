import { Routes, Route } from 'react-router-dom';
import DoctorPatientDetails from './DoctorPatientDetails';

function App() {
  return (
    <Routes>
      <Route
        path="/doctors/:doctorId/patients/:patientId"
        element={<DoctorPatientDetails />}
      />
    </Routes>
  );
}

export default App;
