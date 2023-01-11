import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCashFlow } from '../../redux/Actions/cashAction'
import moment from 'moment'

function CashFlow() {
    const dispatch = useDispatch()
    const getCashFlow = useSelector((state) => state.getCashFlow)
    const { cashFlow } = getCashFlow
    const [data, setData] = useState(cashFlow)
    let test = []
    let test1 = []
    function chunkArray(myArray, chunk_size) {
        var results = [];

        while (myArray.length) {
            results.push(myArray.splice(0, chunk_size));
        }

        return results;
    }

    var result = chunkArray(cashFlow, 10)

    console.log(result[0])


    console.log(test)
    const format1 = "YYYY-MM-DD HH:mm:ss"
    useEffect(() => {
        dispatch(listCashFlow())
    }, [dispatch])
    return (
        <div className='card-body '>
            <div className='row'>
                <div className='col-lg-3'>
                    {result[0]?.map((items) => <div className='flex items-center mb-2'>
                        <span className={items.type === "Add order" ? "hidden" : "inline-block w-1 rounded-md bg-[#009ef7] flex-shrink-0 h-10"}></span>
                        <div className={items.type === "Add order" ? 'flex-grow ' : 'flex-grow mx-3'}>
                            <Link to="/cashflow" className='text-gray-800 text-hover-primary font-bold lg:text-[13px] text-[14px]'>
                                <span >{items.type} </span>
                                {items.type === "Add order" ? `- ${items.order}` : null}
                            </Link>
                            <span class="text-muted block lg:text-[11.05px] text-[12px]">{moment(items.createdAt).format(format1)}</span>
                        </div>
                        <div>
                            <span class={items.type === "Add order" ? "flex flex-row-reverse font-bold text-danger lg:text-[13px] text-[14px]" : "flex flex-row-reverse font-bold text-[#009ef7] lg:text-[13px] text-[14px]"}>
                                {
                                    items.type === "Add order" ? (`-${items.spending.toFixed(2)}`) : (`+${((items.spending) / 23000).toFixed(2)}`)
                                }
                            </span>
                            <span class="flex flex-row-reverse text-muted  font-semibold d-block lg:text-[11.05px] text-[12px]">{`${items.remainingMoney.toFixed(2)}`}</span>
                        </div>
                    </div>)}
                </div>
                <div className='col-lg-3'>
                    {result[1]?.map((items) => <div className='flex items-center mb-2'>
                        <span className={items.type === "Add order" ? "hidden" : "inline-block w-1 rounded-md bg-[#009ef7] flex-shrink-0 h-10"}></span>
                        <div className={items.type === "Add order" ? 'flex-grow ' : 'flex-grow mx-3'}>
                            <Link to="/cashflow" className='text-gray-800 text-hover-primary font-bold lg:text-[13px] text-[14px]'>
                                <span >{items.type} </span>
                                {items.type === "Add order" ? `- ${items.order}` : null}
                            </Link>
                            <span class="text-muted block lg:text-[11.05px] text-[12px]">{moment(items.createdAt).format(format1)}</span>
                        </div>
                        <div>
                            <span class={items.type === "Add order" ? "flex flex-row-reverse font-bold text-danger lg:text-[13px] text-[14px]" : "flex flex-row-reverse font-bold text-[#009ef7] lg:text-[13px] text-[14px]"}>
                                {
                                    items.type === "Add order" ? (`-${items.spending.toFixed(2)}`) : (`+${((items.spending) / 23000).toFixed(2)}`)
                                }
                            </span>
                            <span class="flex flex-row-reverse text-muted  font-semibold d-block lg:text-[11.05px] text-[12px]">{`${items.remainingMoney.toFixed(2)}`}</span>
                        </div>
                    </div>)}
                </div>
                <div className='col-lg-3'>
                    {result[2]?.map((items) => <div className='flex items-center mb-2'>
                        <span className={items.type === "Add order" ? "hidden" : "inline-block w-1 rounded-md bg-[#009ef7] flex-shrink-0 h-10"}></span>
                        <div className={items.type === "Add order" ? 'flex-grow ' : 'flex-grow mx-3'}>
                            <Link to="/cashflow" className='text-gray-800 text-hover-primary font-bold lg:text-[13px] text-[14px]'>
                                <span >{items.type} </span>
                                {items.type === "Add order" ? `- ${items.order}` : null}
                            </Link>
                            <span class="text-muted block lg:text-[11.05px] text-[12px]">{moment(items.createdAt).format(format1)}</span>
                        </div>
                        <div>
                            <span class={items.type === "Add order" ? "flex flex-row-reverse font-bold text-danger lg:text-[13px] text-[14px]" : "flex flex-row-reverse font-bold text-[#009ef7] lg:text-[13px] text-[14px]"}>
                                {
                                    items.type === "Add order" ? (`-${items.spending.toFixed(2)}`) : (`+${((items.spending) / 23000).toFixed(2)}`)
                                }
                            </span>
                            <span class="flex flex-row-reverse text-muted  font-semibold d-block lg:text-[11.05px] text-[12px]">{`${items.remainingMoney.toFixed(2)}`}</span>
                        </div>
                    </div>)}
                </div>
                <div className='col-lg-3'>
                    {result[3]?.map((items) => <div className='flex items-center mb-2'>
                        <span className={items.type === "Add order" ? "hidden" : "inline-block w-1 rounded-md bg-[#009ef7] flex-shrink-0 h-10"}></span>
                        <div className={items.type === "Add order" ? 'flex-grow ' : 'flex-grow mx-3'}>
                            <Link to="/cashflow" className='text-gray-800 text-hover-primary font-bold lg:text-[13px] text-[14px]'>
                                <span >{items.type} </span>
                                {items.type === "Add order" ? `- ${items.order}` : null}
                            </Link>
                            <span class="text-muted block lg:text-[11.05px] text-[12px]">{moment(items.createdAt).format(format1)}</span>
                        </div>
                        <div>
                            <span class={items.type === "Add order" ? "flex flex-row-reverse font-bold text-danger lg:text-[13px] text-[14px]" : "flex flex-row-reverse font-bold text-[#009ef7] lg:text-[13px] text-[14px]"}>
                                {
                                    items.type === "Add order" ? (`-${items.spending.toFixed(2)}`) : (`+${((items.spending) / 23000).toFixed(2)}`)
                                }
                            </span>
                            <span class="flex flex-row-reverse text-muted  font-semibold d-block lg:text-[11.05px] text-[12px]">{`${items.remainingMoney.toFixed(2)}`}</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default CashFlow