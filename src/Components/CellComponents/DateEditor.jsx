import React, { useEffect, useState } from "react";
import Datetime from "react-datetime";
import moment from "moment";
function autoFocusAndSelect(input) {
  input?.focus();
  input?.select();
}

const DateEditor = ({ row, column, onRowChange, onClose }) => {

  const [state, setState] = useState(null);
  const [val, setVal] = useState(new Date());
  const [id, setId] = useState(null);

  useEffect(() => {
    console.log(column);
    setId(row._id);
    if (column.key === "lfd") {
      if (row.type_of_load === "IMPORT") {
        setState("lastFreeDay");
      }
      if (row.type_of_load === "EXPORT") {
        setState("containerAvailableDay");
      }
    }
	if( column.key === "vessel"){

	}
	if( column.key === "cut"){
		if (row.type_of_load === "IMPORT") {
			setState("freeReturnDate");
		  }
		  if (row.type_of_load === "EXPORT") {
			setState("cutOff");
		  }
	}
	if(column.key ==="callerPONo"){

	}
	if(column.key ==="deliveryTimes"){

	}
  }, []);

  let inputProps = {
    id: "date",
    className: "rdg-text-editor",
  };
  return (
    <Datetime
      inputProps={inputProps}
      value={row[state]}
      onChange={(val) => {
        onRowChange({ ...row, [state]: val });
      }}
    />
  );
};

export default DateEditor;
