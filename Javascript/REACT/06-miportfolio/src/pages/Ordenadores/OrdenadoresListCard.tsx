import React from 'react'
import { OrdenadorCard } from './components/OrdenadorCard';

const equipos = [
    {
        nombre: "HP Victus 16",
        marca: "HP",
        descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
        caracteristicas: {
            procesador: "i7",
            ram: "16G",
            hdd: "512G"
        },
        precio: {
            real: 1399,
            dto: 0.3,
            oferta: true,
            cantidad: 10
        },
        imagenes: [],
        valoreaciones: {
            positivas: 100,
            negativas: 30
        }
    },
    {
        nombre: "MacBook Air",
        marca: "Apple",
        descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
        caracteristicas: {
            procesador: "M1",
            ram: "16G",
            hdd: "512G"
        },
        precio: {
            real: 2000,
            dto: 0.3,
            oferta: true,
            cantidad: 10
        },
        imagenes: [],
        valoreaciones: {
            positivas: 100,
            negativas: 30
        }
    },
    {
        nombre: "Asus ChromeBook",
        marca: "Asus",
        descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
        caracteristicas: {
            procesador: "i3",
            ram: "8G",
            hdd: "512G"
        },
        precio: {
            real: 1000,
            dto: 0.3,
            oferta: true,
            cantidad: 10
        },
        imagenes: [],
        valoreaciones: {
            positivas: 100,
            negativas: 30
        }
    },
    {
        nombre: "Lenovo Ideapad Garming",
        marca: "Lenovo",
        descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
        caracteristicas: {
            procesador: "i7",
            ram: "16G",
            hdd: "512G"
        },
        precio: {
            real: 1399,
            dto: 0.3,
            oferta: true,
            cantidad: 10
        },
        imagenes: [],
        valoreaciones: {
            positivas: 100,
            negativas: 30
        }
    },
    {
        nombre: "HP 11-fq",
        marca: "HP",
        descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
        caracteristicas: {
            procesador: "i7",
            ram: "16G",
            hdd: "512G"
        },
        precio: {
            real: 1399,
            dto: 0.3,
            oferta: true,
            cantidad: 10
        },
        imagenes: [],
        valoreaciones: {
            positivas: 100,
            negativas: 30
        }
    },
    {
        nombre: "Apple MacBook Pro",
        marca: "Apple",
        descripcion: "Con un procesador Intel®, el portátil Victus by HP de 16,1 satisface los requisitos de tus juegos. Con un teclado gaming todoterreno y una rápida velocidad de actualización en una pantalla de alta resolución. Un sistema de refrigeración pensado para evitar los recalentamientos. Además, mejora aún más tu experiencia de juego con OMEN Gaming Hub.",
        caracteristicas: {
            procesador: "M2",
            ram: "32G",
            hdd: "2T"
        },
        precio: {
            real: 3000,
            dto: 0.3,
            oferta: true,
            cantidad: 10
        },
        imagenes: [],
        valoreaciones: {
            positivas: 100,
            negativas: 30
        }
    }
];

const OrdenadoresListCard = () => {
  return (
    <>
        <h2>Listado de Ordenadores</h2>
        <section className='equipos'>
            {
                equipos.map( (equipo) => (
                    <OrdenadorCard />
                ))
            }
        </section>
    </>
  )
}

export default OrdenadoresListCard
