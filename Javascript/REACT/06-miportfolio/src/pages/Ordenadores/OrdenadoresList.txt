import React from 'react'
import { defaultMethod } from 'react-router-dom/dist/dom';
import { domainToASCII } from 'url';
import OrdenadorCard from './components/OrdenadorCard'
import { IOrdenador } from './interfaces/IOrdenadores';

const fetchAllPokemon = async () => {
    try {
        // await fetch('http://91.229.245.2:3005/api/aparatos')
        // .then(response => response.json())
        // .then(data => data);
        const res = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=151"
          );
          return res;

  } catch (err) {
      console.error(err);
    }
  }

const ordenadores = [
    {
      id:1,
      name: 'Intel',
      empresa: 'Intel',
      nivel: 'Microsoft Azure Administrator Associate',
      logo: 'https://img2.freepng.es/20180807/efq/kisspng-logo-microsoft-azure-cloud-computing-microsoft-cor-partner-axiomtek-5b69e8495c03b5.7526773415336674013769.jpg'
    },
    {
      id: 2, 
      name: 'Amd',
      empresa: 'Amd',
      nivel: 'AWS Certified DevOps Engineer - Professional',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png'
    },
    {
      id: 3,
      name: 'IPad',
      empresa: 'Apple',
      logo:'https://e7.pngegg.com/pngimages/875/440/png-clipart-logo-google-cloud-platform-cloud-computing-font-cloud-computing-text-cloud.png',
      nivel: 'Associate Cloud Engineer'
    },
    {
      id: 4,
      name: 'Intel Pentium',
      empresa: 'Intel',
      logo: 'https://e7.pngegg.com/pngimages/540/370/png-clipart-openshift-red-hat-kubernetes-docker-microsoft-azure-cloud-computing-text-trademark.png',
      nivel: 'Red Hat Certified Specialist in OpenShift Administration '
    },
    {
      id: 5,
      name: 'IPad Air',
      empresa: 'Apple',
      logo: 'https://e7.pngegg.com/pngimages/540/370/png-clipart-openshift-red-hat-kubernetes-docker-microsoft-azure-cloud-computing-text-trademark.png',
      nivel: 'Red Hat Certified Specialist in OpenShift Professional '
    },
    {  
        id: 6,
        name: 'Xiaomi',
        empresa: 'Xiaomi',
        nivel: 'Microsoft Azure Administrator Associate',
        logo: 'https://img2.freepng.es/20180807/efq/kisspng-logo-microsoft-azure-cloud-computing-microsoft-cor-partner-axiomtek-5b69e8495c03b5.7526773415336674013769.jpg'
      },
  ]
const OrdenadoresList =  () => {
    const ordenatas =  fetch('http://91.229.245.2:3005/api/aparatos')
                        .then(response => response.json())
                        .then(data => console.log(data));
    const data =  fetchAllPokemon()
                    .then(data => console.log(data))
    console.log(ordenatas);
  return (
    <>
        <h2>lISTADO DE oRDENADORES</h2>
        <div className='listado'>
            {
                // ordenatas.map( (ordenador: IOrdenador) => (
                //     <OrdenadorCard key={ordenador.id}
                //         ordenador={ordenador}/>
                // ))
            }
        </div>
    </>
    
  )
}

export default OrdenadoresList