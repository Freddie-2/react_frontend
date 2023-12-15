import axios from 'axios';


const apiUrl = 'http://54.234.174.27/vehicle/';  // Replace with your API endpoint

// Function to handle common API errors
const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
};

export const addVehicle = async (vehicleData) => {
  try {
    const response = await fetch(`http://54.234.174.27/vehicle/add/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(vehicleData),
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to add vehicle');
  }
};

{/*export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await fetch(`${apiUrl}/delete_driver/${vehicleId}/`, {
      method: 'DELETE',
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to delete vehicle');
  }
};

export const updateVehicle = async (driverId, driverData) => {
  try {
    const response = await fetch(`${apiUrl}/update_driver/${driverId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(driverData),
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to update driver');
  }
};
*/}






// VehicleService.js

{/*}
export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await fetch(`http://54.234.174.27/vehicle/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vehicle_id: vehicleId }),
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to delete vehicle');
  }
};

export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const response = await fetch(`http://54.234.174.27/vehicle/update/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vehicle_id: vehicleId, ...vehicleData }),
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to update vehicle');
  }
};
*/}



export const deleteVehicle = async (vehicleId) => {
  try {
    const response = await fetch(`http://54.234.174.27/vehicle/delete/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vehicle_id: vehicleId }),
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to delete vehicle');
  }
};

export const updateVehicle = async (vehicleId, vehicleData) => {
  try {
    const response = await fetch(`http://54.234.174.27/vehicle/update/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ vehicle_id: vehicleId, ...vehicleData }),
    });

    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to update vehicle');
  }
};








export const getVehicles = async () => {
  try {
    const response = await fetch(`http://54.234.174.27/vehicle/get_all/`);
    const data = await handleErrors(response);
    return data;
  } catch (error) {
    throw Error('Failed to fetch drivers');
  }
};







{/*import axios from 'axios';

export function getVehicles() {
  return axios.get('http://54.234.174.27/vehicle/get_all/')
    .then(response => response.data)
}

export function deleteVehicle(vehicle_id) {
  return axios.delete('http://127.0.0.1:8000/vehicles/' + vehicle_id + '/', {
   method: 'DELETE',
   headers: {
     'Accept':'application/json',
     'Content-Type':'application/json'
   }
  })
  .then(response => response.data)
}

export function addVehicle(vehicle){
  return axios.post('http://127.0.0.1:8000/vehicles/', {
    vehicle_id:null,
    vehicle_name:vehicle.vehicle_name.value,
    license_no:vehicle.license_no.value,
    model:vehicle.model.value,
    is_available:vehicle.is_available.value
  })
    .then(response=>response.data)
}

export function updateVehicle(vehid, vehicle) {
  return axios.put('http://127.0.0.1:8000/vehicles/' + vehid + '/', {
    vehicle_name:vehicle.vehicle_name.value,
    license_no:vehicle.license_no.value,
    model:vehicle.model.value,
    is_available:vehicle.is_available.value
  })
   .then(response => response.data)
}*/}