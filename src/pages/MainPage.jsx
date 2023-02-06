import React from 'react';
import ProfileContainer from '@components/ProfileContainer';
import SkillCard from '@components/SkillCard';
import ProyectCardContainer from '@components/ProyectCardContainer';




// importar de forma global todos los files, para poder usarlo en cualquier seccio

const MainPage = () => {
  return (
    <>
    <ProfileContainer />
    <SkillCard />
    <ProyectCardContainer />
    
    </>
  );
};

export default MainPage;