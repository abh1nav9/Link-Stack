import React from 'react';
import Card from './components/Card';

const App: React.FC = () => {
    return (
        <div className="p-6">
            <Card 
                name="Portfolio"  
                link="https://abhinavgautam.vercel.app/" 
            />
            <Card 
                name="LinkedIn"
                link="https://www.linkedin.com/in/iabhinavgautam/" 
            />
            <Card 
                name="Github"
                link="https://www.github.com/abh1nav9/" 
            />
            <Card 
                name="X / Twitter"
                link="https://www.x.com/abh1av/" 
            />
            <Card 
                name="Instagram"
                link="https://www.instagram.com/abh1n_av/" 
            />
        </div>
    );
};

export default App;
