import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

const index = () => {
  return (
    <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            setValue(newValue);
        }}
    >
        <BottomNavigationAction label="Menu" icon={<RestoreIcon />} />
    </BottomNavigation>
  )
}

export default index