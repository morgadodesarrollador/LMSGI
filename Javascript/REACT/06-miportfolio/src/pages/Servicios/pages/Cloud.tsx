import React from 'react'
// import { Table } from 'react-bootstrap/Table';
// import { Accordion } from 'react-bootstrap/Accordion';

import { Accordion, Image, Table } from 'react-bootstrap';


// import { Image, Table } from 'react-bootstrap';


const soluciones = [
  {
    name: 'Azure',
    empresa: 'Microsoft',
    nivel: 'Microsoft Azure Administrator Associate',
    logo: 'https://img2.freepng.es/20180807/efq/kisspng-logo-microsoft-azure-cloud-computing-microsoft-cor-partner-axiomtek-5b69e8495c03b5.7526773415336674013769.jpg'
  },
  {
    name: 'AWS',
    empresa: 'Amazon',
    nivel: 'AWS Certified DevOps Engineer - Professional',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png'
  },
  {
    name: 'Google Cloud',
    empresa: 'Google',
    logo:'https://e7.pngegg.com/pngimages/875/440/png-clipart-logo-google-cloud-platform-cloud-computing-font-cloud-computing-text-cloud.png',
    nive: 'Associate Cloud Engineer'
  },
  {
    name: 'OpenShift',
    empresa: 'RedHat',
    logo: 'https://e7.pngegg.com/pngimages/540/370/png-clipart-openshift-red-hat-kubernetes-docker-microsoft-azure-cloud-computing-text-trademark.png',
    nivel: 'Red Hat Certified Specialist in OpenShift Administration '
  },
  {
    name: 'OpenShift',
    empresa: 'RedHat',
    logo: 'https://e7.pngegg.com/pngimages/540/370/png-clipart-openshift-red-hat-kubernetes-docker-microsoft-azure-cloud-computing-text-trademark.png',
    nivel: 'Red Hat Certified Specialist in OpenShift Professional '
  },
]

export const CloudPage = () => {
  return (
    <>
        <h2>Soluciones de Cloud Computing</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, similique vel! Magni eveniet molestiae laborum ipsa obcaecati accusamus nostrum optio temporibus, ipsam aut maiores officiis error! Numquam veritatis voluptatem assumenda!</p>
        <Table striped bordered hover>
          <thead>
            <th>Logo</th>
            <th>Nombre</th>
            <th>Empresa</th>
            <th>Certificación</th>
          </thead>
          <tbody>
            {
              soluciones.map( (solucion) => (
                <tr>
                  <td width='10%'><Image width='80%' src={solucion.logo} /></td>
                  <td>{ solucion.name }</td>
                  <td>{ solucion.empresa }</td>
                  <td>{ solucion.nivel }</td>
                </tr>
              ))
            }
          </tbody>
        </Table>
    </>
  )
}
