import React from 'react'
import { CardInfo } from '../../UI/CardInfo'
import noCost from '../../assets/images/signo-de-dolar.png'
import findPeople from '../../assets/images/buscar.png'
import jobOffer from '../../assets/images/oferta-de-trabajo.png'

export const InfoContainer = () => {

const baseStyle = 'flex justify-evenly px-2 py-6 items-center bg-[#405e7f] rounded-2xl'

  return (
    <div className={`${baseStyle}
                    2xl:w-350`}
    >
        <CardInfo 
            title='Es totalmente gratis' 
            info='Registrate y postula tu hoja de vida totalmente gratis y encuentra gente que necesite de tu trabajo.'
            cardIcon={ noCost } 
            descIcon='Sin costos' 
        />
        <CardInfo 
            title='Encuentra contratistas' 
            info='Ademas de registrar tu hoja de vida, puedes buscar personas a quienes ofrecer un buen empleo.' 
            cardIcon={ findPeople }
            descIcon='Encontrar Contratistas'
        />
        <CardInfo 
            title='Ofertas laborales' 
            info='Encuentra buenas ofertas laborales que se ajusten a tu tiempo y requieran de tus servicios.'
            cardIcon={ jobOffer } 
            descIcon='Encontrar Ofertas Laborales'
        />
    </div>
  )
}