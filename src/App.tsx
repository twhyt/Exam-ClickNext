import React, { useRef } from 'react';
import './App.scss';
import Header from './components/layouts/Header.';
import Container from './components/layouts/Container';
import Footer from './components/layouts/Footer';
import { Carousel } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import ContentArticleNew from './components/homepage/ArticleNew';
import KPP from './components/homepage/Kpp';
import MoackData from './MockData.json'

function App() {
  const { header, aricle, news, kpp, language} = MoackData
  const slider: any = useRef(null);

  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </head>
      <div className="App">
        <Header data={header} dataLanguage={language}/>
        <Container>
          <div className="section_banner">
            <button
              className='slide-btn prev'
              onClick={() => { slider.current && slider.current.prev() }}
            >
              <LeftOutlined className='arrow' />
            </button>
            <Carousel ref={slider} dots={false}>
              <img src='/assets/banner2.png' alt="test" className='banner_img' />
              <img src='https://wallpaperaccess.com/full/1931304.jpg' alt="test" className='banner_img' />
              <img src="https://via.placeholder.com/1600x300" alt="placeholder" className='banner_img' />
            </Carousel>
            <button
              className='slide-btn next'
              onClick={() => { slider.current && slider.current.next() }}
            >
              <RightOutlined className='arrow' />
            </button>
          </div>

          <ContentArticleNew article={aricle} news={news}/>

          <KPP data={kpp}/>

        </Container>
        <Footer />
      </div>
    </>
  );
}

export default App;
