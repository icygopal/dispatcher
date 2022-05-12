import React from "react";
import {
  IconFile,
  IconFire,
  IconMapMarker,
  IconSnowFlake,
  IconStatus,
  IconWarning,
  IconWeightTool,
} from "../../icons";

const loadNoCell = ({ row }) => {
  return (
    <span className="cell-content ref_number_cell">
      <span className="h-20 lh-2">{row.reference_number}</span>
      <span className="d-flex align-items h-20 mt-4">
        <span>
          <IconWarning
            className={`dispatch-icon ${row.hazmat && "text-warning-500"}`}
          />
        </span>
        <span>
          <IconMapMarker
            className={`dispatch-icon ${
              row.chassisType &&
              row.chassisType.name === "Triaxle" &&
              "text-gray-700"
            }`}
          />
        </span>
        <span>
          <IconWeightTool
            className={`dispatch-icon ${row.overWeight && "text-gray-700"}`}
          />
          '
        </span>
        <span>
          <IconFile
            className={`dispatch-icon ${row.officeNote && "text-gray-700"}`}
          />
        </span>
        <span>
          <IconSnowFlake
            className={`dispatch-icon ${row.temperature && "text-badgeblue"}`}
          />
        </span>
        <span>
          <IconFire
            className={`dispatch-icon ${row.isHot && "text-error-500"}`}
          />
        </span>
        <span>
          <IconStatus
            className={`dispatch-icon ${row.routeType && "text-gray-700"}`}
          />
        </span>
      </span>
    </span>
  );
};

export default loadNoCell;
