import './Hello.css';

export default function Hello({firstname,lastname="PS",age="99"}){
    return (<><h1>Hello World {firstname}{lastname}{age}</h1>
        </>
    );
}
