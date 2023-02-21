import React, { FC } from 'react'
import { IOrdenador } from '../interfaces/IOrdenadores';

interface Props {
    ordenador: IOrdenador
}

const OrdenadorCard:FC<Props> = ({ ordenador }) => {
  return (
    <div className='card'>
      { ordenador.name }
    </div>
  )
}

export default OrdenadorCard
