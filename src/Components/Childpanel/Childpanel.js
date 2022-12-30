import React from 'react'

function Childpanel() {
    return (
        <div className='card-body row'>
            <div className='col-lg-12 mb-5'>
                <div>
                    <label className='required form-label'>
                        Domain
                    </label>
                    <div className='input-group'>
                        <input type="text" class="form-control ipt-domain w-[20px]" placeholder="example.com" value="" />
                        <span class="input-group-text">$6</span>
                        <button class="btn btn-primary text-btn">Create child panel</button>
                    </div>
                </div>
            </div>
            <div className='col-lg-12'>
                <div className='card mb-5 border-chil'>
                    <div className='card-body p-0'>
                        <div className='table-responsive'>
                            <table class="table align-middle table-row-bordered gy-3 gs-5">
                                <thead class="font-semibold bg-lighten">
                                    <tr >
                                        <th data-lang="Domain" className='text-start text-tb'>Domain</th>
                                        <th data-lang="Expiry"  className='text-start text-tb'>Expiry</th>
                                        <th data-lang="Auto renew"  className='text-start text-tb'>Auto renew</th>
                                        <th data-lang="Status"  className='text-start text-tb'>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Childpanel