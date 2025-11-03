import React from 'react'
import HotBookCover from './HotBookCover'
import WelcomeAndHistory from './WelcomeAndHistory'
import TastyAndSpicy from './TastyAndSpicy'
import CookingTeam from './CookingTeam'
import GrieldMeat from './GrieldMeat'
import PotatoDumpling from './PotatoDumpling'
import CreamSoup from './CreamSoup'
import FeaturedDishes from './FeaturedDishes'
import BackPage from './BackPage'

export default function Hot() {
  return (
   <>
   <HotBookCover/>
   <WelcomeAndHistory/>
   <TastyAndSpicy/>
   <CookingTeam/>
   <GrieldMeat/>
   <PotatoDumpling/>
   <CreamSoup/>
   <FeaturedDishes/>
   <BackPage/>
   </>
  )
}
