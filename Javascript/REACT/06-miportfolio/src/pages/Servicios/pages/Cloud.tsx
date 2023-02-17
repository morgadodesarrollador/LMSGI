import React from 'react'
import { Image, Table } from 'react-bootstrap'

const soluciones = [
  { 
    name: 'Azure',
    empresa: 'Microsoft',
    logo: 'https://img2.freepng.es/20180807/efq/kisspng-logo-microsoft-azure-cloud-computing-microsoft-cor-partner-axiomtek-5b69e8495c03b5.7526773415336674013769.jpg'
  },
  { 
    name: 'AWS',
    empresa: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png'
  },
  { 
    name: 'Google Cloud',
    empresa: 'Google'
  },
  { 
    name: 'OpenShift',
    empresa: 'RedHat'
  },
]

export const CloudPage = () => {
  return (
    <>
        <h2>Soluciones de Cloud Computing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, similique vel! Magni eveniet molestiae laborum ipsa obcaecati accusamus nostrum optio temporibus, ipsam aut maiores officiis error! Numquam veritatis voluptatem assumenda!</p>
        <Table striped>
          <thead>
            <th>Nombre</th>
            <th>Empresa</th>
          </thead>
          <tbody>
            {
              soluciones.map ( (solucion) => (
                <tr key={solucion.name}>
                    <td width={200}>
                      <Image width='50%' src={ solucion.logo } />
                    </td>
                    <td>
                      { solucion.name }
                    </td>
                    <td>
                      { solucion.empresa }
                    </td>
                </tr>
              ))}
          </tbody>
        </Table>
    </>
  )
}
