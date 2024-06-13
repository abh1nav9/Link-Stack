import React from 'react';

interface CardProps {
    name: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ name, link }) => {
    return (
        <div 
            className="font-bold max-w-sm w-full rounded overflow-hidden shadow-lg p-4 cursor-pointer hover:bg-gray-100 transition duration-300 mx-auto mb-3 mt-3 font-poppins"
            style={{ backgroundColor: '#bebebe' }}
            onClick={() => window.location.href = link}
        >
            <div className="flex items-center justify-center h-full">
                <div className="text-center">
                    
                    <a 
                        href={link} 
                        className="text-black text-3xl mt-2 inline-block"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {name}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Card;
