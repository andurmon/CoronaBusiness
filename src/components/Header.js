import React, {useState} from 'react'
import {Nav} from 'react-bootstrap'

function Header(){
  
  const [count, setCount] = useState(1997);
  
  return(
    <div>
      <Nav activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}>
        <Nav.Item>
          <Nav.Link href="/inicio">Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/TyC" eventKey="link-1">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="wpbusiness" eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="quienessomos"> Disabled</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Header