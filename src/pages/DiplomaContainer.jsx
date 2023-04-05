import React, { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/diplomascontainer.module.scss';
import Image from 'next/image';


import diploma1 from '@img/Diplomas/diploma-asincronismo-js-1.png';
import diploma2 from '@img/Diplomas/diploma-basico-javascript-1.png';
import diploma3 from '@img/Diplomas/diploma-css-grid-layout-1.png';
import diploma4 from '@img/Diplomas/diploma-ecmascript-6-1.png';
import diploma5 from '@img/Diplomas/diploma-ecmascript-nuevo-1.png';
import diploma6 from '@img/Diplomas/diploma-flexbox-css-grid-1.png';
import diploma7 from '@img/Diplomas/diploma-frontend-developer-1.png';
import diploma8 from '@img/Diplomas/diploma-frontend-developer-practico-1.png';
import diploma9 from '@img/Diplomas/diploma-git-github-1.png';
import diploma10 from '@img/Diplomas/diploma-html-css-1.png';
import diploma11 from '@img/Diplomas/diploma-html-practico-1.png';
import diploma12 from '@img/Diplomas/diploma-introduccion-csharp-1.png';
import diploma13 from '@img/Diplomas/diploma-javascript-practico-2021-1.png';
import diploma14 from '@img/Diplomas/diploma-mobile-first-1.png';
import diploma15 from '@img/Diplomas/diploma-nextjs-practico-1.png';
import diploma16 from '@img/Diplomas/diploma-npm-1.png';
import diploma17 from '@img/Diplomas/diploma-npm-js-1.png';
import diploma18 from '@img/Diplomas/diploma-pensamiento-logico-1.png';
import diploma19 from '@img/Diplomas/diploma-preprocesadores-1.png';
import diploma20 from '@img/Diplomas/diploma-prework-windows-1.png';
import diploma21 from '@img/Diplomas/diploma-react-practico-1.png';
import diploma22 from '@img/Diplomas/diploma-webpack-1.png';
// otras importaciones de diplomas aquí...

const diplomas = [
  { id: 1, src: diploma1, alt: 'Html' },
  { id: 2, src: diploma2, alt: 'Css' },
  { id: 3, src: diploma3, alt: 'Node' },
  { id: 4, src: diploma4, alt: 'JS' },
  { id: 5, src: diploma5, alt: 'React' },
  { id: 6, src: diploma6, alt: 'Api' },
  { id: 7, src: diploma7, alt: 'Git' },
  { id: 8, src: diploma8, alt: 'Github' },
  { id: 9, src: diploma9, alt: 'Vercel' },
  { id: 10, src: diploma10, alt: 'Nextjs' },
  { id: 11, src: diploma11, alt: 'Tailwind' },
  { id: 12, src: diploma12, alt: 'Html' },
  { id: 13, src: diploma13, alt: 'Node' },
  { id: 14, src: diploma14, alt: 'JS' },
  { id: 15, src: diploma15, alt: 'React' },
  { id: 16, src: diploma16, alt: 'Api' },
  { id: 17, src: diploma17, alt: 'Git' },
  { id: 18, src: diploma18, alt: 'Github' },
  { id: 19, src: diploma19, alt: 'Vercel' },
  { id: 20, src: diploma20, alt: 'Nextjs' },
  { id: 21, src: diploma21, alt: 'Tailwind' },
  { id: 22, src: diploma22, alt: 'Tailwind' }
  // otros objetos de diplomas aquí...
];

const DiplomaContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;
  const totalPages = Math.ceil(diplomas.length / itemsPerPage);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderDiplomas = () => {
    
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return diplomas.slice(startIndex, endIndex).map((diploma) => (
      <>
    
      <div key={diploma.id}> 
        <Image 
          src={diploma.src} 
          alt={diploma.alt} 
          className={styles.diplomaimg} 
        />
        <h6>{diploma.alt}</h6>
      </div>
      </>
    ));
  };

  const renderPagination = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }

    return (
        <div className={styles.pagination}>
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Anterior
          </button>
          {pageNumbers.map((pageNumber) => (
            <span
              key={pageNumber}
              className={currentPage === pageNumber ? styles.active : ''}
              onClick={() => handlePageClick(pageNumber)}
              role="button"
              tabIndex="0"
            >
              {pageNumber}
            </span>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Siguiente
          </button>
        </div>
      );
  };

  return (
    <>
      <Head>
        <title>Diplomas</title>
      </Head>
      {renderPagination()}
      <div className={styles.contenedordiploma}>
        {renderDiplomas()}
      </div>
      
    </>
  );
};

export default DiplomaContainer;
