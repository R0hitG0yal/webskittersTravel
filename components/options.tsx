import React from 'react';
interface OptionsProps {
    logo: React.ElementType;
    label: string;
    fill: string | undefined;
    handleButtonClick: () => void;
}

const Options: React.FC<OptionsProps> = ({ logo: Logo, label, fill = '', handleButtonClick }) => (
    <button
        onClick={handleButtonClick}
        className='flex items-center justify-center my-2 p-1 w-full border-2 rounded-lg'>
        <Logo style={{ color: `${fill}` }} />
        <p className='tracking-tighter text-sm ml-1'>{label}</p>
    </button>
);

export default Options;