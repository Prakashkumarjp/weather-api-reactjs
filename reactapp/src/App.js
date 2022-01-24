import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/Card';
import CardOne from './components/CardOne';
import Counter from './components/Counter';
import Heading from './components/Heading';

/*function Entries(Ent) {
    return (
        <card
         imgsrc = { Ent.imgsrc }
        name = { Ent.name }
        mailid = { Ent.mailid }
        course = { Ent.course }
        year = { Ent.year }
        />
    );
}*/

function App() {
    return (
        ReactDOM.render(
        <div>
        <Heading></Heading>
        <div className="TotalCard">
                    <Card name='Prakashkumar' mailid='prakashkumar05583@gmail.com' >
        </Card>
            <Counter></Counter>
        <CardOne name='Prakashkumar' mailid='prakashkumar05583@gmail.com'></CardOne>

            </div>
            </div>, document.getElementById('root'),
        )
    )
}
export default App;


