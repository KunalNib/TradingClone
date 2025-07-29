import React from 'react';

function Brokerage() {
    return ( 
        <div className="container-lg border-top ">
            <h4>&nbsp;</h4>
            <div className="row mt-5">
                <div className="col-12  col-md-6">
                <h3 className='text-center extlink mb-5'>Brokerage calculator</h3>
                <ul className='text-muted'>
                    <li className='mt-2'>Call & trade and RMS auto-squareoff.Additional charges of &#x20b9;50 + GST per order.</li>
                    <li className='mt-2'>Digital contract notes will be sent via e-mail.</li>
                    <li className='mt-2'>Physical copies of contract notes,if required,shall be charged &#x20b9;20 per contract note.courier charges apply.</li>
                    <li className='mt-2'>For NRI account (non-PIS),0.5% or &#x20b9;100 per executed order for equity (whichever is lower).</li>
                    <li className='mt-2'>for NRI acoount (PIS),0.5% or &#x20b9;200 per executed order for equity (whichever is lower).</li>
                    <li className='mt-2'>If the account is in debt balance ,any order places will be charged &#x20b9;40 oer executed order instead of &#x20b9;20 per executed order</li>
                </ul>
            </div>
            <div className="col-6 mb-5">
                <h4 className='text-center extlink'>List of charges</h4>
            </div>
            </div>
        </div>
    );
}

export default Brokerage;