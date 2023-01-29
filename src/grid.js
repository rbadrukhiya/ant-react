import { Col, Row } from "antd"

function Gridproper()
{
    return(
        <>
        <Row>
            <Col span={24} className='col'>
                hello
            </Col>

        </Row>
        <Row justify="space-between">
            <Col span={8} className='col'>hello</Col>
            <Col span={8}>hello</Col>
            <Col span={8} className='col'>hello</Col>
        </Row>
        <Row>
            <Col span={12} className='col'>hello</Col>
            <Col span={12}>hello</Col>
        </Row>
        <Row>
            <Col span={3} className='col'>hello</Col>
            <Col span={3}>hello</Col>
            <Col span={3} className='col'>hello</Col>
            <Col span={3}>hello</Col>
            <Col span={3} className='col'>hello</Col>
            <Col span={3}>hello</Col>
            <Col span={3} className='col'>hello</Col>
            <Col span={3}>hello</Col>
        </Row>
        </>
    )
}
export default Gridproper