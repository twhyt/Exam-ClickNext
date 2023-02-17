import { DownOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons'
import { Col, Drawer, Dropdown, Row } from 'antd'
import { useEffect, useState } from 'react'
import './header.scss'
import type { MenuProps } from 'antd';

const Header = (props: any) => {

  const { data, dataLanguage } = props
  const [language, setLanguage] = useState('')
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let lang = localStorage.getItem('lang');
    if (lang) {
      setLanguage(lang)
    } else {
      localStorage.setItem('lang', dataLanguage[0].code);
      setLanguage(dataLanguage[0].code)
    }
  }, [dataLanguage])

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const items: MenuProps['items'] =
    dataLanguage.map((item: any, index: number) => {
      return {
        key: index,
        label: (
          <span onClick={() => setLanguage(item.code)}>
            {item.code.toUpperCase()} : {item.name}
          </span>
        ),
      }
    })

  return (
    <header>
      <Row>
        <Col xs={12}>
          <Row>
            <MenuOutlined className='menu' onClick={showDrawer} />
            <img className='main_logo' src={data.logo} alt='logo_phatra' />
          </Row>
        </Col>
        <Col xs={12}>
          <Row justify={'end'} align="middle" className='rigth_box'>
            <div className="search_bar">
              <input type="text" name="search" />
              <SearchOutlined className='search_icon' />
            </div>
            <Dropdown menu={{ items }} placement="bottomLeft">
              <span className='language-btn'>{language.toUpperCase()} <DownOutlined className='arrow_language' /></span>
            </Dropdown>
          </Row>
        </Col>
      </Row>
      <Drawer title="Menu" width={280} closable={true} onClose={onClose} open={open} placement="left">
        <h1>Wait Menu Design</h1>
      </Drawer>
    </header>
  )
}

export default Header