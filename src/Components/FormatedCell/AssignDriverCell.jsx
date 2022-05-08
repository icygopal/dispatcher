import React,{useState} from "react";
import { CustomIconAddUser } from "../../icons";

const AssignDriverCell = ({row}) => {
	const [isDriverAssingInProgress,setIsDriverAssingInProgress] = useState(true)
  return (
    <div className="d-flex" onClick={()=>setIsDriverAssingInProgress(!isDriverAssingInProgress)}>
     {isDriverAssingInProgress? <CustomIconAddUser />:""}
    </div>
  );
};

export default AssignDriverCell;
