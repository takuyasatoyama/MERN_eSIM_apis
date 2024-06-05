
import Main from "../layouts/Main";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import SimItem from "../components/SimItem";

export default () => {

const simArr = [
    {
        title:"UNITED ARAB EMIRATES",
        orderID:"AR-1959812",
        date:"2024-03-05",
        icon:"vector.png"
    },
    {
        title:"ASIA +",
        orderID:"AR-996989",
        date:"2023-07-09",
        icon:"world.png"
    }
]
    return (
        <>
            {simArr.map(item=><SimItem {...item} />)}
            <h3 className="text-center mb-3 mt-10">
                Would you like to buy a new eSIM?
            </h3>
            <Button size='lg' className='border-white w-full' style={{backgroundColor:"#00274C"}}>TOP UP +</Button>
        </>
    )
}