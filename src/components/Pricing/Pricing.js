import React from 'react';
import { Button } from '../../globalStyles';
import { GiGoldBar } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.element';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>

            {/* TITLE */}
          <PricingHeading>Nos packs</PricingHeading>
          <PricingContainer>

              {/* 1ST CARD */}
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  
                  {/* ICON */}
                  <GiRock />
                </PricingCardIcon>

                {/* TITLE & PRICE */}
                <PricingCardPlan>Starter Pack</PricingCardPlan>
                <PricingCardCost>29.99€</PricingCardCost>
                <PricingCardLength>par mois</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>3 matières</PricingCardFeature>
                  <PricingCardFeature>20h de cours</PricingCardFeature>
                  <PricingCardFeature>Soutien personnalisé</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>S'inscrire</Button>
              </PricingCardInfo>
            </PricingCard>

            {/* 2ND CARD */}
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  
                  {/* ICON */}
                  <GiGoldBar />
                </PricingCardIcon>

                {/* TITLE & PRICE */}
                <PricingCardPlan>Gold Pack</PricingCardPlan>
                <PricingCardCost>99.99€</PricingCardCost>
                <PricingCardLength>par mois</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>5 matières</PricingCardFeature>
                  <PricingCardFeature>50h de cours</PricingCardFeature>
                  <PricingCardFeature>Aide au diplôme</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>S'inscrire</Button>
              </PricingCardInfo>
            </PricingCard>

            {/* 3RD CARD */}
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  
                  {/* ICON */}
                  <GiCutDiamond />
                </PricingCardIcon>

                {/* TITLE & PRICE */}
                <PricingCardPlan>Diamond Pack</PricingCardPlan>
                <PricingCardCost>199.99€</PricingCardCost>
                <PricingCardLength>par mois</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Matières illimités</PricingCardFeature>
                  <PricingCardFeature>Heures illimité</PricingCardFeature>
                  <PricingCardFeature>Soutien 24/7</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>S'inscrire</Button>
              </PricingCardInfo>
            </PricingCard>


          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;