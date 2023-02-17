import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import { Carousel, Col, Row } from 'antd'
import React, { useState } from 'react'
import './section2.scss'

const ContentArticleNew = (props: any) => {
    const [urlBox, setUrlBox] = useState('About Us')
    const { article, news } = props

    return (
        <section className='section2'>
            <div className='section_2'>
                <button>
                    <button className='sec2_arrow'><LeftOutlined /></button>
                </button>
                <div className='box-relative'>
                    <button className={`nav_btn ${urlBox === "About Us" ? "active" : ""}`} onClick={() => setUrlBox("About Us")}>
                        <span>About Us</span>
                        <div className='line_bottom' />
                    </button>
                </div>
                <div className='box-relative'>
                    <button className={`nav_btn ${urlBox === "Awards" ? "active" : ""}`} onClick={() => setUrlBox("Awards")}>
                        <span>Awards</span>
                        <div className='line_bottom' />
                    </button>
                </div>
                <div className='box-relative'>
                    <button className={`nav_btn ${urlBox === "Our Businesses" ? "active" : ""}`} onClick={() => setUrlBox("Our Businesses")}>
                        <span>Our Businesses</span>
                        <div className='line_bottom' />
                    </button>
                </div>
                <div className='box-relative'>
                    <button className={`nav_btn ${urlBox === "New&Activities" ? "active" : ""}`} onClick={() => setUrlBox("New&Activities")}>
                        <span>New&Activities</span>
                        <div className='line_bottom' />
                    </button>
                </div>
                <div>
                    <button className='sec2_arrow'><RightOutlined /></button>
                </div>
            </div>

            <div className='section2_content'>
                <Row justify={'center'}>

                    <Col className='box_article' xs={{ span: 24, order: 1 }} lg={17}>
                        <Row className='space_r space_t'>
                            <Col className='head_name' xs={18}>
                                <span>Article</span>
                            </Col>
                            <Col xs={6} className='read_all'>
                                <Row align={'middle'} justify="end">
                                    <span className='text_all'>ดูทั้งหมด</span>
                                    <a
                                        href={'/#'}
                                        className='linkall-btn'
                                    >
                                        <RightOutlined className='arrow' />
                                    </a>
                                </Row>
                            </Col>
                        </Row>
                        <Row className='space_r'>
                            <Col xs={24} md={13}>
                                <div className="article_img">
                                    <img src={article[0].img} alt='..' />
                                </div>
                            </Col>
                            <Col xs={24} md={11}>
                                <div className="article_content">
                                    <Row className='head_content'>
                                        <span>{article[0].name}</span>
                                    </Row>
                                    <Row className='data_content'>
                                        <span>{article[0].detailcom}</span>
                                    </Row>
                                    <Row className='etc_content'>
                                        {/* vertical line */}
                                        <div />
                                        {/*  */}
                                        <span>การลงทุน</span>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='box_news' xs={{ span: 24, order: 3 }} md={{span:11, order:3}} lg={7}>
                        <Row className='space_t'>
                            <Col className='head_name' xs={12}>
                                <span>News</span>
                            </Col>
                            <Col xs={12} className='read_all'>
                                <Row align={'middle'} justify="end">
                                    <span className='text_all'>ดูทั้งหมด</span>
                                    <a
                                        href={'/#'}
                                        className='linkall-btn'
                                    >
                                        <RightOutlined className='arrow' />
                                    </a>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24}>
                                <Carousel autoplay>
                                    {news.map((item: any, index: number) =>
                                        <div key={index} className='box_data_news'>
                                            <span>{item.text}</span>
                                            <img src={item.img} alt="test" className='news_img' />
                                        </div>
                                    )}
                                </Carousel>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='box_subarticle' xs={{ span: 24, order: 2 }} lg={{ span: 17, order: 3 }}>
                        <Row className='space_r'>
                            <Col xs={12} md={12} style={{ paddingRight: '0.952vw' }}>
                                <div className="subarticle_img">
                                    <img src={article[1].img} alt='..' />
                                </div>
                                <div className="subarticle_content">
                                    <Row className='head_content'>
                                        <span>{article[1].name}</span>
                                    </Row>
                                    <Row className='etc_content'>
                                        {/* vertical line */}
                                        <div />
                                        {/*  */}
                                        <span>การลงทุน</span>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={12} md={12} style={{ paddingLeft: '0.952vw' }}>
                                <div className="subarticle_img">
                                    <img src={article[2].img} alt='..' />
                                </div>
                                <div className="subarticle_content">
                                    <Row className='head_content'>
                                        <span>{article[2].name}</span>
                                    </Row>
                                    <Row className='etc_content'>
                                        {/* vertical line */}
                                        <div />
                                        {/*  */}
                                        <span>การลงทุน</span>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={0} md={{span:2, order:4}} lg={0}/>
                    <Col className='box_settrade' xs={{ span: 24, order: 4 }} md={{span:11, order:5}} lg={{ span: 7, order: 4 }}>
                        <div className='card_set'>
                            <Row className='head_name'>
                                <span>Set Index</span>
                            </Row>
                            <Row className='set_img'>
                                <img src='/assets/images/set-index-mock.png' alt='..' />
                            </Row>
                        </div>
                    </Col>

                </Row>
            </div>
        </section>
    )
}

export default ContentArticleNew