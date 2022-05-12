import { useCallback, useEffect, useRef, useState } from "react";
import DataGrid, { useRowSelection } from "react-data-grid";
import TextEditor from "./Components/CellComponents/TextEditor";
import row from "./data/row";
import {
  formatDateFreeDay,
  formatToDateAndTime,
  isAtBottom,
} from "./Functions";
import CustomRow from "./Row";
import DateEditor from "./Components/CellComponents/DateEditor";
import moment from "moment";
import AssignDriverCell from "./Components/FormatedCell/AssignDriverCell";
import loadNoCell from "./Components/FormatedCell/loadNoCell";
import axios from "axios";
import useStateWithHistory from "./CustomHooks/useStateWithHistory";
const column = [
  {
    key: "status",
    name: "Load Status",
    sortable: true,
    width: 200,
    resizable: true,
    cellClass: "cell-select-none ",
    formatter: (props) => {
      return (
        <>
          <div className="cell-content border-left">{props.row.status}</div>
        </>
      );
    },
  },
  {
    key: "driver",
    name: "Driver",
    sortable: true,
    cellClass: "cell-select-none item-d-center",
    formatter: AssignDriverCell,
  },
  {
    key: "reference_number",
    name: "Load #",
    sortable: true,
    width: 150,
    frozen: true,
    cellClass: "cell-select-none",
    formatter: loadNoCell,
  },
  {
    key: "containerNo",
    name: "Container",
    sortable: true,
    width: 150,
    editor: TextEditor,
    cellClass: "cell",
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.containerNo}</div>
        </>
      );
    },
  },
  {
    key: "secondaryReferenceNo",
    name: "Reference #",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.secondaryReferenceNo}</div>
        </>
      );
    },
  },
  {
    key: "type_of_load",
    name: "Move",
    sortable: true,
    cellClass: "cell",
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">
            {props.row.type_of_load.toLowerCase()}
          </div>
        </>
      );
    },
  },
  {
    key: "nextDriverOrderId",
    name: "Next Address",
    sortable: true,
    cellClass: "cell",
    formatter: ({ row }) => {
      return (
        <>
          <span className="cell-content">
            {row.nextDriverOrderId && row.nextDriverOrderId.type.toLowerCase()}
          </span>
          <div>
            {row.nextDriverOrderId && (
              <>
                <div className="tooltip-label position-relative">
                  <div className="text-truncate w-150">
                    {row.nextDriverOrderId.company_name}
                  </div>
                  <div
                    className="tooltip bs-tooltip-bottom bg-dark text-white w-max rounded-10 px-3  py-2 text-capitalize"
                    data-placement="bottom-center"
                  >
                    <div className="arrow"></div>
                    {row.nextDriverOrderId.company_name}
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      );
    },
  },
//   {
//     key: "vessel",
//     name: "ETA",
//     sortable: true,
//     cellClass: "cell",
//     editor: DateEditor,
//     formatter: (props) => {
//       return <>{props.row.vessel}</>;
//     },
//   },
  {
    key: "containerSize",
    name: "Size",
    sortable: true,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.containerSize ? row.containerSize.name : ""}
        </div>
      </>
    ),
  },
  {
    key: "pickupTimes",
    name: "PICKUP",
    sortable: true,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.pickupTimes &&
            row.pickupTimes
              .map((obj) => {
                return formatToDateAndTime(obj.pickupFromTime);
              })
              .join(" ")}
        </div>
      </>
    ),
  },
  {
    key: "lfd",
    name: "LFD",
    width: "auto",
    sortable: true,
    cellClass: "cell",
    editor: DateEditor,
    formatter: ({ row }) => {
      return (
        <div className="cell-content">
          {row.type_of_load === "IMPORT" && row.lastFreeDay
            ? formatDateFreeDay(row.lastFreeDay)
            : ""}
          {row.type_of_load === "EXPORT" && row.containerAvailableDay
            ? formatDateFreeDay(row.containerAvailableDay)
            : ""}
        </div>
      );
    },
  },
  {
    key: "cut",
    name: "CUT",
    sortable: true,
    cellClass: "cell",
    formatter: ({ row }) => {
      return (
        <>
          <div className="cell-content ">
            {row.type_of_load === "IMPORT" && row.freeReturnDate ? (
              <>{moment(row.freeReturnDate).format("MM/DD")}</>
            ) : (
              ""
            )}
            {row.type_of_load === "EXPORT" && row.cutOff ? (
              <>{moment(row.cutOff).format("MM/DD")}</>
            ) : (
              ""
            )}
          </div>
        </>
      );
    },
  },
  // { key: "deliveryTimes", name: "APT", sortable: true ,formatter: ({ row }) => (
  //       <>
  // 	  <div className="cell-content">
  // 		{row.consigneeInfo &&
  // 		  row.consigneeInfo.city + "," + row.consigneeInfo.state}
  // 	  </div>
  // 	</>
  //   ),},
  {
    key: "containerType",
    name: "Type",
    sortable: true,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.containerType ? row.containerType.name : ""}
        </div>
      </>
    ),
  },
  {
    key: "shipmentNo",
    name: "Shipment #",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.shipmentNo}</div>
        </>
      );
    },
  },
  {
    key: "caller",
    name: "Customer",
    sortable: true,
    cellClass: "cell",
    width: 180,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.caller && row.caller.company_name
            ? row.caller.company_name.substring(0, 15)
            : ""}
          {row.caller &&
            (row.caller.officeHoursStart || row.caller.officeHoursEnd) && (
              <small>
                <br />
                {row.caller.officeHoursStart
                  ? moment(row.caller.officeHoursStart)
                      .tz("America/Halifax")
                      .format("hh:mmA")
                  : ""}
                -
                {row.caller && info.caller.officeHoursEnd
                  ? moment(row.caller.officeHoursEnd)
                      .tz("America/Halifax")
                      .format("hh:mmA")
                  : ""}
              </small>
            )}
        </div>
      </>
    ),
  },
  {
    key: "containerOwner",
    name: "SSL",
    sortable: true,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.containerOwner ? row.containerOwner.company_name : ""}
        </div>
      </>
    ),
  },
  {
    key: "bol_bkg",
    name: "BOL/BKG",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">
            {row.type_of_load == "EXPORT" && <span>{row.bookingNo}</span>}
            {row.type_of_load === "IMPORT" && (
              <span>{row.callerbillLandingNo}</span>
            )}
            {row.type_of_load == "ROAD" && (
              <span>{infrowo.secondaryReferenceNo}</span>
            )}
          </div>
        </>
      );
    },
  },
  {
    key: "road_container_ref", // only for load type road
    name: "Ref Container #",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    editable: (row) => row.type_of_load === "ROAD",
    formatter: ({ row }) => {
      return (
        <>
          <div className="cell-content">
            {row.type_of_load === "ROAD" && row.containerNo}
          </div>
        </>
      );
    },
  },
  {
    key: "chassisNo",
    name: "Chassis",
    sortable: true,
    cellClass: "cell",
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">
            {props.row.type_of_load.toLowerCase()}
          </div>
        </>
      );
    },
  },
  {
    key: "totalWeight",
    name: "Weight",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: ({ row }) => {
      return (
        <>
          <div className="cell-content ">
            {row.totalWeight ? row.totalWeight : ""}
          </div>
        </>
      );
    },
  },
  {
    key: "consignee",
    name: "Consignee",
    sortable: true,
    width: 180,
    cellClass: "cell",
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.consignee &&
            row.consignee.map((e, i) => {
              return (
                <div key={i}>
                  {e.company_name}
                  {(e.officeHoursStart || e.officeHoursEnd) && (
                    <small>
                      <br />
                      {e.officeHoursStart
                        ? moment(e.officeHoursStart)
                            .tz("America/Halifax")
                            .format("hh:mmA")
                        : ""}
                      -
                      {e.officeHoursEnd
                        ? moment(e.officeHoursEnd)
                            .tz("America/Halifax")
                            .format("hh:mmA")
                        : ""}
                    </small>
                  )}
                </div>
              );
            })}
        </div>
      </>
    ),
  },
  {
    key: "shipper",
    name: "Port",
    sortable: true,
    width: 180,
    cellClass: "cell",
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.shipper &&
            row.shipper.map((e, i) => {
              return (
                <div key={i}>
                  {e.company_name}
                  {(e.officeHoursStart || e.officeHoursEnd) && (
                    <small>
                      <br />
                      {e.officeHoursStart
                        ? moment(e.officeHoursStart)
                            .tz("America/Halifax")
                            .format("hh:mmA")
                        : ""}
                      -
                      {e.officeHoursEnd
                        ? moment(e.officeHoursEnd)
                            .tz("America/Halifax")
                            .format("hh:mmA")
                        : ""}
                    </small>
                  )}
                </div>
              );
            })}
        </div>
      </>
    ),
  },
  {
    key: "consigneeInfo",
    name: "Location",
    sortable: true,
    cellClass: "cell",
    width: 150,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.consigneeInfo &&
            row.consigneeInfo.city + "," + row.consigneeInfo.state}
        </div>
      </>
    ),
  },
  {
    key: "emptyOrigin",
    name: "RTN",
    sortable: true,
    width: 180,
    cellClass: "cell",
    formatter: ({ row }) => (
      <>
        <div className="cell-content">
          {row.emptyOrigin ? row.emptyOrigin.company_name : ""}
        </div>
      </>
    ),
  },
  //   {
  //     key: "driverOrder",
  //     name: "Distance",
  //     sortable: true,
  //     cellClass: "cell",
  //     formatter: ({ row }) => {
  //       let startIndex =
  //         row.driverOrder &&
  //         row.driverOrder.findIndex(
  //           (status) => status.type === "PULLCONTAINER" && !status.isVoidOut
  //         );
  //       let endIndex =
  //         row.driverOrder &&
  //         row.driverOrder.findIndex(
  //           (status) => status.type === "DELIVERLOAD" && !status.isVoidOut
  //         );
  //       if (startIndex === -1) startIndex = 0;
  //       if (endIndex === -1)
  //         endIndex = row.driverOrder ? row.driverOrder.length - 1 : 0;
  //       return (
  //         <>
  //           <div className="cell-content ">
  //             {(
  //               (row.driverOrder &&
  //                 row.driverOrder
  //                   .slice(startIndex, endIndex + 1)
  //                   .sum((obj) => obj.distance)) ||
  //               0
  //             ).toFixed(2)}
  //           </div>
  //         </>
  //       );
  //     },
  //   },
  // { key: "bobTail", name: "BOBTAIL", sortable: true,cellClass:"cell", },
  {
    key: "deliveryOrderNo",
    name: "Vessel Name",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content ">{props.row.deliveryOrderNo}</div>
        </>
      );
    },
  },
  {
    key: "terminal",
    name: "Terminal",
    sortable: true,
    cellClass: "cell",
    formatter: ({ row }) => {
      return (
        <>
          <div className="cell-content ">
            {row.terminal ? row.terminal.name : ""}
          </div>
        </>
      );
    },
  },
  {
    key: "sealNo",
    name: "SEAL NO",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.sealNo}</div>
        </>
      );
    },
  },
  {
    key: "returnFromTime",
    name: "Return",
    sortable: true,
    cellClass: "cell",
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.returnFromTime}</div>
        </>
      );
    },
  },
  {
    key: "callerPONo",
    name: "PICKUP #",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.callerPONo}</div>
        </>
      );
    },
  },
  {
    key: "returnNo",
    name: "RETURN #",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">{props.row.returnNo}</div>
        </>
      );
    },
  },
  {
    key: "reset",
    name: "RESET",
    sortable: true,
    cellClass: "cell-select-none",
    formatter: ({ row }) => {
      return (
        <>
          <div className="cell-content">
            <button>Reset</button>
          </div>
        </>
      );
    },
  },
  {
    key: "status",
    name: "Change Status",
    sortable: true,
    cellClass: "cell",
    formatter: (props) => {
      return (
        <>
          <div className="cell-content">
            {props.row.type_of_load.toLowerCase()}
          </div>
        </>
      );
    },
  },
  {
    key: "lastContainerTracedDate",
    name: "Last Tracked",
    sortable: true,
    cellClass: "cell",
    formatter: ({ row }) => {
      return (
        <>
          <div className="cell-content">
            {row.lastContainerTracedDate &&
              moment(row.lastContainerTracedDate).format("MM/DD/YYYY HH:mm A")}
          </div>
        </>
      );
    },
  },
  {
    key: "genset",
    name: "Genset #",
    sortable: true,
    cellClass: "cell",
    editor: TextEditor,
    formatter: ({ row }) => (
      <>
        <div className="cell-content">{row.genset ? row.genset : ""}</div>
      </>
    ),
  },
  // { key: "assignedCSR", name: "CSR", sortable: true ,cellClass:"cell", },
  // { key: "status", name: "Graypool Container #", sortable: true,cellClass:"cell", },
  // { key: "status", name: "Graypool Chassis #", sortable: true,cellClass:"cell", },
];
function App() {
  const [rows, setRows] = useState([]);
  const [selectedRows, setSelectedRows, { history, pointer, back, forward, go }] =
  useStateWithHistory(() => new Set())
  const [columns, setColumns] = useState(column);
  const [TotalLoads, setTotalLoads] = useState(0);
  const [skip, setSkip] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isMounted = useRef();
  useEffect(() => {
	document.addEventListener('keydown',keydownHandler);
    if (isMounted.current) return;
    getLoads();
    isMounted.current = true;
	return()=>{
		document.removeEventListener('keydown',keydownHandler);
	}
  }, []);

  const keydownHandler=(event)=>{
	event.preventDefault();
    let charCode = String.fromCharCode(event.which).toLowerCase();
    if((event.ctrlKey || event.metaKey) && charCode === 'z') {
      back()
    }
  }
  useEffect(()=>{
	 console.log(rows) 
  },[rows])

  const getLoads = async () => {
    const payload = {
      limit: 50,
      skip: skip,
      assignedCSR: [],
      status: [
        "AVAILABLE",
        "PENDING",
        "DEPARTED",
        "DISPATCHED",
        "CHASSISPICK_ARRIVED",
        "CHASSISPICK_DEPARTED",
        "PULLCONTAINER_ARRIVED",
        "PULLCONTAINER_DEPARTED",
        "DELIVERLOAD_ARRIVED",
        "DELIVERLOAD_DEPARTED",
        "RETURNCONTAINER_ARRIVED",
        "RETURNCONTAINER_DEPARTED",
        "CHASSISTERMINATION_ARRIVED",
        "CHASSISTERMINATION_DEPARTED",
        "DROPCONTAINER_ARRIVED",
        "DROPCONTAINER_DEPARTED",
        "HOOKCONTAINER_ARRIVED",
        "HOOKCONTAINER_DEPARTED",
      ],
      searchTerm: "",
      sortBy: {
        createdAt: -1,
      },
    };
    const data = await axios.post(
      "https://testapidev.app.portpro.io/tms/getLoads",
      payload,
      {
        headers: {
          authorization: localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
      }
    );
    const loads = data.data.data;
    setTotalLoads(data.data.count);
    setRows([...rows, ...loads]);
  };

  function handleScroll(e) {
	  
    if (!(isLoading || !isAtBottom(e))){
		setIsLoading(true);
		const totalSkip = Math.ceil(TotalLoads / 50);
		if (skip <= totalSkip) {
		  setSkip((prevState) => prevState + 1);
		  getLoads();
		  setIsLoading(false);
		}
		console.log("DSfa")
	}

	
   
  }
//   const [selectedRows, setSelectedRows] = useState(() => new Set());

  const handlePaste = useCallback(
    (sourceColumnKey, sourceRow, targetColumnKey, targetRow) => {
      const incompatibleColumns = ["email", "zipCode", "date"];
      if (
        sourceColumnKey === "avatar" ||
        ["id", "avatar"].includes(targetColumnKey) ||
        ((incompatibleColumns.includes(targetColumnKey) ||
          incompatibleColumns.includes(sourceColumnKey)) &&
          sourceColumnKey !== targetColumnKey)
      ) {
        return targetRow;
      }

      return { ...targetRow, [targetColumnKey]: sourceRow[sourceColumnKey] };
    },
    []
  );

  const handleCopy = useCallback(({ sourceRow, sourceColumnKey }) => {
    if (window.isSecureContext) {
      navigator.clipboard.writeText(sourceRow[sourceColumnKey]);
    }
  }, []);

  const rowKeyGetter = useCallback((row) => {
    return row._id;
  });

  const handleFill = useCallback(({ columnKey, sourceRow, targetRow }) => {
    return { ...targetRow, [columnKey]: sourceRow[columnKey] };
  }, []);

  return (
    <DataGrid
      columns={columns}
      onRowsChange={setRows}
      selectedRows={selectedRows}
      onSelectedRowsChange={setSelectedRows}
      rowHeight={50}
      rows={rows}
      defaultColumnOptions={{
        sortable: true,
        resizable: true,
      }}
      headerRowHeight={30}
      components={{ rowRenderer: CustomRow }}
      onCopy={handleCopy}
      rowKeyGetter={rowKeyGetter}
      onPaste={handlePaste}
      className="fill-grid"
      onScroll={handleScroll}
    />
  );
}

export default App;
