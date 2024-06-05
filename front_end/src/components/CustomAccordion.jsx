
import Accordion from 'react-bootstrap/Accordion';

export default ({data}) => 

<Accordion defaultActiveKey="0">
    {
        data.map((item, index) =>
            <Accordion.Item className='mt-2' eventKey={index}>
                <Accordion.Header>{item.title}</Accordion.Header>
                <Accordion.Body>
                    {item.content}
                </Accordion.Body>
            </Accordion.Item>
        )
    }
</Accordion>