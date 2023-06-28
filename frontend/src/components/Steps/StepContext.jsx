import React, { createContext, useState } from 'react'
import App from './../../App'
import Stepperr from './Stepperr';

export const MultiStepContext = createContext()
const StepContext = () => {

  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState({
    RestaurantName: '',
    RestaurantLocation: [],
    OwnerName: '',
    OwnerEmail: '',
    OwnerPhone: '',
    OwnerPassword: '',
  });
  const [menuItems, setMenuItems] = useState([])
  // const [upload, setUpload] = useState(false);

  return (
    <div>
      <MultiStepContext.Provider value={{ currentStep, setStep, userData, setUserData, menuItems, setMenuItems }}>
        <Stepperr />
      </MultiStepContext.Provider>
    </div>
  )
}

export default StepContext
