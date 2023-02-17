import { RightOutlined } from '@ant-design/icons'
import { Carousel, Col, Divider, Row } from 'antd'
import './kpp.scss'

const KPP = (props: any) => {

    const { data } = props

    const groupKpp = (arr: any, n: number) => {
        const array = arr.slice();
        const chunks = [];
        while (array.length) chunks.push(array.splice(0, n));
        return chunks;
    };

    return (
        <section>
            <div className='kpp_wrapper'>
                <Row align={'middle'} className='head_title'>
                    <div />
                    <span>KP Channel</span>
                    <span>อัปเดตทุกความรู้ด้านการเงินและการลงทุนก่อนใคร พร้อมอินเทรนด์ไปกับหลากหลายเรื่องราวไลฟ์สไตล์</span>
                </Row>
                <Row align={'middle'} className='box_chanel'>
                    <span className='active'>KKP FOCUS</span>
                    <Divider type="vertical" />
                    <span>OPTIMISE</span>
                    <Divider type="vertical" />
                    <span>KKP Advisor</span>
                    <Divider type="vertical" />
                </Row>
                <Row align={'middle'} justify="center" className='box_vdo'>
                    <Col xs={24} md={18} style={{paddingRight: '2.782vw'}}>
                        <div className='shadow_vdo'>
                            <iframe
                                className="responsive-iframe"
                                // width="720"
                                // height="415"
                                src="https://www.youtube.com/embed/1hcdQixxJdA"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    </Col>
                    <Col xs={24} md={6}>
                        <div className='detail_vdo'>
                            <div className='vdo_divider' />
                            <Row className='head'>
                                <span>KKP Focus</span>
                            </Row>
                            <Row className='detail'>
                                <span>ฝนนักสู้ พบเรื่องราวจริง เจ็บจริง ประสบความสำเร็จจริง ที่จะเป็นแรงกระตุ้นให้ SME นักสู้รุ่นต่อไป ได้ก้าวไปถึงฝัน</span>
                            </Row>
                            <div className='vdo_divider' />
                        </div>
                    </Col>
                </Row>
                <Row align={'middle'} justify="end" className='read_box'>
                    <span className='text_all'>ดูทั้งหมด</span>
                    <a
                        href={'/#'}
                        className='linkall-btn'
                    >
                        <RightOutlined className='arrow' />
                    </a>
                </Row>
                <Row className='list_kpp'>
                    <Col xs={24}>
                        <Carousel autoplay>
                            {groupKpp(data, 3).map((newdata: any, group: number) => (
                                <div key={group}>
                                    <Row style={{ width: "100%" }}>
                                        {newdata.map((item: any, index: number) => (
                                            <Col key={index} xs={8} className={`${index === 0 ? "left" : (index === 1 ? "center" : "rigth")}`}>
                                                <img src={item.img} alt="test" className='news_img' />
                                                <span>{item.text}</span>
                                            </Col>
                                        ))}
                                    </Row>
                                </div>
                            ))}
                        </Carousel>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default KPP