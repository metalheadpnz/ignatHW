import React, {useState} from 'react';
import Request from "./Request";

const Hw13 = () => {

    const [blockText, setBlockText] = useState('startVal')
    const [error, setError] = useState(false)

    return (
        <div className={'width360'}>
            <hr/>
            <span>homeworks 13</span>

            <Request setError={setError}
                     setBlockText={setBlockText}/>

            <div className={'center'}>
                <span className={error ? 'redText' : ''}>
                    {blockText}
                </span>
            </div>

        </div>
    );
};

export default Hw13;