import './Navigation.css'

const Navigation = ({pFn}) => {
    return (
        <div>
            <button onClick={()=>pFn(1)}>Fire</button>
            <button onClick={()=>pFn(2)}>Water</button>
            <button onClick={()=>pFn(3)}>Rock</button>
            <button onClick={()=>pFn(4)}>Electric</button>
        </div>
    );
}

export default Navigation;