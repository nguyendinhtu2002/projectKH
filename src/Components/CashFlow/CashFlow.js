import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { listCashFlow } from '../../redux/Actions/cashAction'
import moment from 'moment'

function CashFlow() {
    const dispatch = useDispatch()
    const getCashFlow = useSelector((state) => state.getCashFlow)
    const { cashFlow } = getCashFlow
    const format1 = "YYYY-MM-DD HH:mm:ss"
    useEffect(() => {
        dispatch(listCashFlow())
    }, [dispatch])
    return (
        <div className='card-body '>
            <div className='row'>
                <div className='col-lg-3'>
                    {cashFlow?.map((items) => <div className='flex items-center mb-2'>
                        <div className='flex-grow'>
                            <Link to="/cashflow" className='text-gray-800 text-hover-primary font-bold'>
                                <span >Add order</span>
                                - {`${items.order}`}
                            </Link>
                            <span class="text-muted block fs-8">{moment(items.createdAt).format(format1)}</span>
                        </div>
                        <div>
                            <span class="flex flex-row-reverse font-bold text-danger">-{`${items.spending.toFixed(2)}`}</span>
                            <span class="flex flex-row-reverse text-muted fs-8 font-semibold d-block">{`${items.remainingMoney.toFixed(2)}`}</span>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>
    )
}

export default CashFlow