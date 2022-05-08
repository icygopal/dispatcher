import React from 'react'
import  { Row } from 'react-data-grid';

const CustomRow = (props) => {
  return (
	<Row {...props} extraClasses="class-with-red-background" />
  )
}

export default CustomRow


// The available props in rowRenderer are:

// key
// ref
// idx
// row
// height
// columns
// isSelected
// expandedRows
// cellMetaData
// subRowDetails