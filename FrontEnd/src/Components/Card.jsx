import React, { useEffect, useRef, useState } from 'react';
import { useCart, useDispatchCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart()
    let options = props.options;
    const priceRef = useRef();
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("With drink");
    const handleAddToCart = async()=>{
        await dispatch({type:"ADD",id:props.foodItem._id,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
        console.log(data);
    }
    let finalPrice = qty* parseInt(options[size])
    useEffect(() =>{
        setSize(priceRef.current.value)
    })
    return (
        <div >
            <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                <img src={props.foodItem.img} className="card-img-top" alt="..." style={{maxHeight:"160px",objectFit:"contain"}}></img>
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    {/* <p className="card-text">This is some important Text.</p> */}
                    <div className='container w-100'>
                        <select className='m-2 h-100  bg-success rounded' name="" id="" onChange={(e)=>setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                                )
                            })}
                        </select>
                        <select className='m-2 h-100  bg-success rounded' name="" id="" onChange={(e)=>setSize(e.target.value)} ref={priceRef}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data} </option>
                            })}
                        </select>
                        <div className='d-inline h-100 fs-5'>{finalPrice}/-</div>
                    </div>
                    <hr />
                <button className='btn btn-success justify-content-center ms-2' onClick={handleAddToCart}>Add to Cart</button>
                </div>
                
            </div>
        </div>
    )
}
