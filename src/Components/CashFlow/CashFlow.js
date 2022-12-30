import React from 'react'
import { Link } from 'react-router-dom'

function CashFlow() {
    return (
        <div className='card-body '>
            <div className='row'>
                <div className='col-lg-3'>
                    <div className='flex items-center mb-2'>
                        <div className='flex-grow'>
                            <Link to="/cashflow" className='text-gray-800 text-hover-primary font-bold'>
                                <span >Add order</span>
                                - 7653303
                            </Link>
                            <span class="text-muted block fs-8">2022-12-28 00:41:25</span>
                        </div>
                        <div>
                            <span class="flex flex-row-reverse font-bold text-danger">-2.66</span>
                            <span class="flex flex-row-reverse text-muted fs-8 font-semibold d-block">18.43576</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CashFlow