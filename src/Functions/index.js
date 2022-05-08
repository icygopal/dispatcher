import moment from "moment";

export const formatDateFreeDay = (date) => {
  if (date) {
    return moment(date).format("MM/DD");
  } else {
    return "";
  }
};

export const formatToDateAndTime = (date) => {
  if (date) {
    return moment(date).format("MM/DD HH:mm");
  } else {
    return "";
  }
};

//"America/Halifax"

export const colorStatusBased = function (status) {
	let color = 'red';
	if (status === 'PENDING') {
	  color = '#ff8099';
	} else if (status === 'AVAILABLE') {
	  color = '#bed96c';
	} else if (status === 'DROPCONTAINER_DEPARTED') {
	  color = '#c791d9';
	} else {
	  color = '#A5DB03';
	}
	return color
  }


export const isAtBottom= ({ currentTarget })=> {
	return currentTarget.scrollTop + 10 >= currentTarget.scrollHeight - currentTarget.clientHeight;
  }