import axios, { all } from 'axios'
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap';
import Header from './Header';
import Search from './Search';
import { useNavigate } from 'react-router-dom';



export const Home = () => {
    const navigate = useNavigate()

    const [defaultData, setDefaultData] = useState([])
    const [allData, setAllData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get("https://fakestoreapi.com/products")
            setAllData(data)
            setDefaultData(data)
        }
        getData()
    }, [])

    // console.log(allData);


    return (
        <>

            <Header />
            <Search allData={allData} setAllData={setAllData} defaultData={defaultData} />
            {
                <div className='row'>
                    {allData?.map((data, i) => {
                        return (
                            <div className='col-md-3' style={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center'
                            }} key={i}>
                                <Card
                                    className="card my-2 "
                                    style={{
                                        height: '25rem',
                                        width: '18rem'
                                    }}
                                >
                                    <CardHeader>
                                        {data?.title.slice(0, 20)} {data?.title.length > 20 ? '...' : ''}
                                    </CardHeader>
                                    <CardBody >
                                        <CardTitle tag="h5">
                                            <img style={{ width: "75px", height: "75px" }} src={data?.image} alt="" />
                                        </CardTitle>
                                        <CardText className0='mt-5'>
                                            {data?.description.slice(0, 75)} {data?.description.length > 75 ? '...' : ''}
                                        </CardText>
                                        <Button onClick={() => navigate(`detail/${data?.id}`)}>
                                            View
                                        </Button>
                                    </CardBody>
                                    <CardFooter>
                                        <div>Category:  {data?.category} </div>
                                    </CardFooter>
                                </Card>
                            </div>
                        )
                    })
                    }
                </div >
            }

        </>
    )
}
