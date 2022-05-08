import React, { useEffect, useState } from "react";
import { textEditorClassname } from "../../defaultClass/classlist";

function autoFocusAndSelect(input) {
  input?.focus();
  input?.select();
}

const TextEditor = ({ row, column, onRowChange, onClose }) => {
  const [state, setState] = useState(column.key);
  useEffect(() => {
    if (column.key === "bol_bkg") {
      row.type_of_load === "IMPORT" && setState("callerbillLandingNo");
      row.type_of_load === "EXPORT" && setState("bookingNo");
      row.type_of_load === "ROAD" && setState("secondaryReferenceNo");
      row.type_of_load === "BILL_ONLY" && setState();
    }
	if(column.key==="road_container_ref"){
		row.type_of_load === "ROAD" ? setState("containerNo"):setState()
	}
  }, []);

  return (
    <>
      {state ? (
        <input
          className={textEditorClassname}
          ref={autoFocusAndSelect}
          value={row[state]}
          onChange={(event) => {
            onRowChange({ ...row, [state]: event.target.value });
          }}
          onBlur={(e) => {
            onClose(true);
          }}
        />
      ):""}
    </>
  );
};

export default TextEditor;
