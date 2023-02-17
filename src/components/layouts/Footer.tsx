import { MailOutlined, PhoneOutlined, PrinterOutlined } from '@ant-design/icons'
import { Col, Divider, Row } from 'antd'
import React from 'react'
import './footer.scss'

const Footer = () => {

  return (
    <footer>

      <Row className='top_footer'>
        <Col xs={24}>
          <Row className='box_contact'>
            <Col xs={{span:12, order:3}} md={{span: 8 , order:1}} className="box_1">
              <div className='footer_logo'>
                <img src='/logo-company.png' alt='logo' />
              </div>
              <div className='copany_name'>
                <span>บริษัท ทุนภัทร จำกัด (มหาชน)</span>
              </div>
              <div className='footer_text adress'>
                <span>ชั้น 9 อาคารสำนักงานเมืองไทย-ภัทร 1 252/6
                  ถนนรัชดาภิเษก แขวงห้วยขวาง กรุงเทพมหานคร 10310
                </span>
              </div>
            </Col>
            <Col xs={{span:12, order:1}} md={{span: 4 , order:2}} className="box_2">
              <div className='text_head'>เมนู</div>

              <div className='footer_text'>
                <a href='/#'>รู้จัก บลจ.ภัทร</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>เกี่ยวกับเรา</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>ติดต่อเรา</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>คำถามที่พบบ่อย</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>สมัครงาน</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>Links</a>
              </div>
            </Col>
            <Col xs={{span:12, order:2}} md={{span: 4 , order:3}} className="box_2">
              <div className='text_head'>เมนู</div>

              <div className='footer_text'>
                <a href='/#'>รู้จัก บลจ.ภัทร</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>เกี่ยวกับเรา</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>ติดต่อเรา</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>คำถามที่พบบ่อย</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>สมัครงาน</a>
              </div>
              <div className='footer_text'>
                <a href='/#'>Links</a>
              </div>
            </Col>
            <Col xs={{span:12, order:4}} md={{span: 8 , order:4}} className="box_3">
              <div className='text_head'>ติดต่อเรา</div>

              <div className='footer_text box_mb'>
                <PhoneOutlined className='icon icon_phone' height={23} /><span>(66) 2305 9800</span>
              </div>
              <div className='footer_text box_mb'>
                <PrinterOutlined className='icon' height={23} /><span>(66) 2305 9803</span>
              </div>
              <div className='footer_text box_mb'>
                <MailOutlined className='icon' height={23} /><span>customerservice@phatraasset.com</span>
              </div>

              <div>
                <Row className='contact_logo'>
                  <a href='/#'><img src='/assets/logo/facebook-logo-button@3x.png' alt='facebook' /></a>
                  <a href='/#'><img src='/assets/logo/twitter@3x.png' alt='twitter' /></a>
                  <a href='/#'><img src='/assets/logo/youtube-logotype-1@3x.png' alt='youtube' /></a>
                </Row>
              </div>
            </Col>
          </Row>
          <Divider />
          <Row className='box_licence' align={'middle'}>
            <Col xs={24} md={12}>
              <Row className='box_mb' justify={'center'} align="middle">
                <a href='/#'>แผนผังเว็บไซต์</a>
                <Divider type='vertical' />
                <a href='/#'>ข้อตกลงและเงื่อนไข</a>
                <Divider type='vertical' />
                <a href='/#'>นโยบายข้อมูลส่วนตัว</a>
              </Row>
            </Col>
            <Col xs={24} md={12}>
              <Row className='box_mb' justify={'center'} align="middle">
                <span>@2019 Phatra A© สงวนลิขสิทธิ์ 2562 บริษัทหลักทรัพย์จัดการกองทุน ภัทร จำกัดsset  All rights reserved.</span>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>

      <Row className='bottom_footer'>
        <Col xs={12} md={6}>
          <img src='/assets/logo/logo-footer-1@3x.png' alt='logo'/>
        </Col>
        <Col xs={12} md={6}>
          <img src='/assets/logo/logo-footer-2@3x.png' alt='logo'/>
        </Col>
        <Col xs={12} md={6}>
          <img src='/assets/logo/logo-footer-3@3x.png' alt='logo'/>
        </Col>
        <Col xs={12} md={6}>
          <img src='/assets/logo/logo-footer-2@3x.png' alt='logo'/>
        </Col>
      </Row>
    </footer>
  )
}

export default Footer