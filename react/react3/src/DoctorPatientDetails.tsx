import { useParams } from 'react-router-dom';


const DoctorPatientDetails = () => {
  //const { doctorId, patientId } = useParams<RouteParams>();
  //since i am using Vite TypeScript+React Compiler combination i have used this way to show params
  const params=useParams();
  const { doctorId, patientId } = params as{
  doctorId?: string;
  patientId?: string;
};


  // Checking if present
  if (!doctorId || !patientId) {
    return <div>Missing route parameters</div>;
  }

  // Converting to numbers
  const doctorNum = Number(doctorId);
  const patientNum = Number(patientId);

  //if anything other than number
  if (isNaN(doctorNum) || isNaN(patientNum)) {
    return <div>Invalid doctor or patient ID</div>;
  }

  return (
    <div>
      <h2>Doctor–Patient Details</h2>
      <p>Doctor ID: {doctorNum}</p>
      <p>Patient ID: {patientNum}</p>
    </div>
  );
};

export default DoctorPatientDetails;
