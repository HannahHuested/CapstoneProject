import React, { useEffect, useState } from 'react'
import Colors from './Colors'
import ResistorBands from './ResistorBands';
import ResistorValuesGame from './ResistorValuesGame';
import { LevelsCards } from './LevelsCards';

export const Levels = () => {

  return (
    <div><h3>Levels</h3>
    <LevelsCards/>
    <ResistorValuesGame/>
    </div>
  )
}
