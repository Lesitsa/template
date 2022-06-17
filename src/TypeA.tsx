import React from 'react';
import HelperType from './HelperType';

interface TypeA{
    linkTR:HelperType;
    setLinkTR:React.Dispatch<React.SetStateAction<HelperType>>;
    // setLinkTR: (props: HelperType) => void;
}

export default TypeA